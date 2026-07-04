const i18n = {
  pt: {
    privacyBadge: "100% local. Gratuito. Sem pegadinhas.",
    title: "QR Code Generator",
    subtitle: "Crie QR Codes para WhatsApp, Email, URL e Wi-Fi sem enviar seus dados para nenhum servidor.",
    typeLabel: "Tipo de QR",
    typeWhatsapp: "WhatsApp",
    typeEmail: "Email",
    typeUrl: "URL",
    typeWifi: "Wi-Fi",
    generateBtn: "Gerar QR Code",
    clearBtn: "Limpar",
    privacyHint: "Seus dados ficam no seu navegador. Nada e enviado para servidor.",
    qrPlaceholder: "Seu QR Code aparecera aqui.",
    downloadBtn: "Baixar PNG",
    copyBtn: "Copiar Conteudo",
    payloadSummary: "Conteudo gerado",
    footerText: "Open source no GitHub. Licenca MIT.",
    copied: "Conteudo copiado para a area de transferencia.",
    fields: {
      phone: "Telefone (com codigo do pais)",
      message: "Mensagem (opcional)",
      email: "Email de destino",
      subject: "Assunto (opcional)",
      body: "Corpo do email (opcional)",
      url: "URL",
      ssid: "Nome da rede (SSID)",
      security: "Seguranca",
      password: "Senha",
      hidden: "Rede oculta",
      securityWpa: "WPA/WPA2",
      securityWep: "WEP",
      securityNone: "Sem senha"
    },
    errors: {
      invalidPhone: "Informe um telefone valido no formato internacional.",
      invalidEmail: "Informe um email valido.",
      invalidUrl: "Informe uma URL valida.",
      invalidSsid: "Informe o SSID da rede Wi-Fi.",
      invalidPassword: "Informe a senha da rede para o tipo de seguranca escolhido.",
      payloadTooLong: "Conteudo muito grande para um QR legivel. Reduza os dados.",
      unknown: "Nao foi possivel gerar o QR Code."
    }
  },
  en: {
    privacyBadge: "100% local. Free. No traps.",
    title: "QR Code Generator",
    subtitle: "Create QR Codes for WhatsApp, Email, URL, and Wi-Fi without sending your data to any server.",
    typeLabel: "QR Type",
    typeWhatsapp: "WhatsApp",
    typeEmail: "Email",
    typeUrl: "URL",
    typeWifi: "Wi-Fi",
    generateBtn: "Generate QR Code",
    clearBtn: "Clear",
    privacyHint: "Your data stays in your browser. Nothing is sent to a server.",
    qrPlaceholder: "Your QR Code will show up here.",
    downloadBtn: "Download PNG",
    copyBtn: "Copy Payload",
    payloadSummary: "Generated content",
    footerText: "Open source on GitHub. MIT license.",
    copied: "Content copied to clipboard.",
    fields: {
      phone: "Phone number (with country code)",
      message: "Message (optional)",
      email: "Destination email",
      subject: "Subject (optional)",
      body: "Email body (optional)",
      url: "URL",
      ssid: "Network name (SSID)",
      security: "Security",
      password: "Password",
      hidden: "Hidden network",
      securityWpa: "WPA/WPA2",
      securityWep: "WEP",
      securityNone: "No password"
    },
    errors: {
      invalidPhone: "Enter a valid phone number in international format.",
      invalidEmail: "Enter a valid email address.",
      invalidUrl: "Enter a valid URL.",
      invalidSsid: "Enter the Wi-Fi SSID.",
      invalidPassword: "Enter the network password for the selected security type.",
      payloadTooLong: "Content is too long for a readable QR code. Reduce input size.",
      unknown: "Unable to generate the QR code."
    }
  }
};

const fieldsByType = {
  whatsapp: [
    { key: "phone", type: "text", required: true },
    { key: "message", type: "textarea", required: false }
  ],
  email: [
    { key: "email", type: "email", required: true },
    { key: "subject", type: "text", required: false },
    { key: "body", type: "textarea", required: false }
  ],
  url: [{ key: "url", type: "url", required: true }],
  wifi: [
    { key: "ssid", type: "text", required: true },
    { key: "security", type: "select", required: true },
    { key: "password", type: "password", required: false },
    { key: "hidden", type: "checkbox", required: false }
  ]
};

const state = {
  lang: "pt",
  currentPayload: "",
  currentDataUrl: ""
};

const formEl = document.getElementById("dynamic-form");
const typeEl = document.getElementById("qr-type");
const errorEl = document.getElementById("error-message");
const outputEl = document.getElementById("qr-output");
const payloadEl = document.getElementById("payload-preview");
const generateBtn = document.getElementById("generate-btn");
const clearBtn = document.getElementById("clear-btn");
const downloadBtn = document.getElementById("download-btn");
const copyBtn = document.getElementById("copy-btn");
const langPtBtn = document.getElementById("lang-pt");
const langEnBtn = document.getElementById("lang-en");

function t(path) {
  return path.split(".").reduce((acc, part) => acc && acc[part], i18n[state.lang]) || path;
}

function applyI18nText() {
  document.documentElement.lang = state.lang === "pt" ? "pt-BR" : "en";

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    node.textContent = t(key);
  });

  langPtBtn.classList.toggle("is-active", state.lang === "pt");
  langEnBtn.classList.toggle("is-active", state.lang === "en");

  renderDynamicForm();
  renderQrPlaceholder();
}

function buildInputField(field) {
  const wrapper = document.createElement("div");

  if (field.type === "checkbox") {
    const label = document.createElement("label");
    label.className = "inline-option";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.name = field.key;
    input.id = field.key;

    const span = document.createElement("span");
    span.textContent = t(`fields.${field.key}`);

    label.append(input, span);
    wrapper.appendChild(label);
    return wrapper;
  }

  const label = document.createElement("label");
  label.setAttribute("for", field.key);
  label.textContent = t(`fields.${field.key}`);
  wrapper.appendChild(label);

  let input;

  if (field.type === "textarea") {
    input = document.createElement("textarea");
  } else if (field.type === "select") {
    input = document.createElement("select");

    [
      { value: "WPA", labelKey: "securityWpa" },
      { value: "WEP", labelKey: "securityWep" },
      { value: "nopass", labelKey: "securityNone" }
    ].forEach((optionCfg) => {
      const option = document.createElement("option");
      option.value = optionCfg.value;
      option.textContent = t(`fields.${optionCfg.labelKey}`);
      input.appendChild(option);
    });
  } else {
    input = document.createElement("input");
    input.type = field.type;
  }

  input.id = field.key;
  input.name = field.key;
  input.required = field.required;

  wrapper.appendChild(input);
  return wrapper;
}

function renderDynamicForm() {
  const selectedType = typeEl.value;
  formEl.innerHTML = "";
  fieldsByType[selectedType].forEach((field) => {
    formEl.appendChild(buildInputField(field));
  });
}

function getFormValues() {
  const formData = new FormData(formEl);
  const raw = Object.fromEntries(formData.entries());

  raw.hidden = Boolean(formEl.querySelector("#hidden")?.checked);
  return raw;
}

function sanitizePhone(phone) {
  const digitsOnly = (phone || "").replace(/\D+/g, "");
  if (digitsOnly.startsWith("00")) {
    return digitsOnly.slice(2);
  }
  return digitsOnly;
}

function ensureHttpProtocol(urlText) {
  const value = (urlText || "").trim();
  if (!value) {
    return value;
  }
  if (/^https?:\/\//i.test(value)) {
    return value;
  }
  return `https://${value}`;
}

function escapeWifiText(text) {
  return (text || "").replace(/([\\;,:\"])|\n/g, "\\$1");
}

function buildPayload(type, values) {
  switch (type) {
    case "whatsapp": {
      const phone = sanitizePhone(values.phone);
      if (!/^\d{8,15}$/.test(phone)) {
        throw new Error("invalidPhone");
      }
      const msg = (values.message || "").trim();
      const query = msg ? `?text=${encodeURIComponent(msg)}` : "";
      return `https://wa.me/${phone}${query}`;
    }

    case "email": {
      const email = (values.email || "").trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
        throw new Error("invalidEmail");
      }
      const params = new URLSearchParams();
      const subject = (values.subject || "").trim();
      const body = (values.body || "").trim();
      if (subject) {
        params.set("subject", subject);
      }
      if (body) {
        params.set("body", body);
      }
      const suffix = params.toString() ? `?${params.toString()}` : "";
      return `mailto:${email}${suffix}`;
    }

    case "url": {
      const normalized = ensureHttpProtocol(values.url);
      let parsed;
      try {
        parsed = new URL(normalized);
      } catch {
        throw new Error("invalidUrl");
      }
      if (!["http:", "https:"].includes(parsed.protocol)) {
        throw new Error("invalidUrl");
      }
      return parsed.toString();
    }

    case "wifi": {
      const ssid = (values.ssid || "").trim();
      const security = (values.security || "WPA").trim();
      const password = values.password || "";
      const hidden = Boolean(values.hidden);

      if (!ssid) {
        throw new Error("invalidSsid");
      }

      if (security !== "nopass" && !password) {
        throw new Error("invalidPassword");
      }

      return `WIFI:T:${security};S:${escapeWifiText(ssid)};P:${escapeWifiText(password)};H:${hidden};;`;
    }

    default:
      throw new Error("unknown");
  }
}

function generateQrDataUrl(payload) {
  try {
    const qr = qrcode(0, "M");
    qr.addData(payload);
    qr.make();
    return qr.createDataURL(8, 2);
  } catch {
    throw new Error("payloadTooLong");
  }
}

function renderQrPlaceholder() {
  outputEl.innerHTML = `<p>${t("qrPlaceholder")}</p>`;
}

function setError(errorKey) {
  errorEl.textContent = t(`errors.${errorKey}`) || t("errors.unknown");
}

function clearError() {
  errorEl.textContent = "";
}

function enablePreviewActions(enabled) {
  downloadBtn.disabled = !enabled;
  copyBtn.disabled = !enabled;
}

function onGenerate() {
  clearError();

  const type = typeEl.value;
  const values = getFormValues();

  try {
    const payload = buildPayload(type, values);
    const dataUrl = generateQrDataUrl(payload);

    state.currentPayload = payload;
    state.currentDataUrl = dataUrl;

    outputEl.innerHTML = "";
    const img = document.createElement("img");
    img.src = dataUrl;
    img.alt = "Generated QR Code";
    outputEl.appendChild(img);

    payloadEl.textContent = payload;
    enablePreviewActions(true);
  } catch (error) {
    state.currentPayload = "";
    state.currentDataUrl = "";
    payloadEl.textContent = "";
    renderQrPlaceholder();
    enablePreviewActions(false);

    if (error instanceof Error) {
      setError(error.message);
      return;
    }

    setError("unknown");
  }
}

function onClear() {
  formEl.reset();
  clearError();
  payloadEl.textContent = "";
  state.currentPayload = "";
  state.currentDataUrl = "";
  renderDynamicForm();
  renderQrPlaceholder();
  enablePreviewActions(false);
}

function onDownload() {
  if (!state.currentDataUrl) {
    return;
  }

  const type = typeEl.value;
  const stamp = new Date().toISOString().slice(0, 10);
  const link = document.createElement("a");
  link.href = state.currentDataUrl;
  link.download = `qrcode-${type}-${stamp}.png`;
  link.click();
}

async function onCopy() {
  if (!state.currentPayload) {
    return;
  }

  try {
    await navigator.clipboard.writeText(state.currentPayload);
    clearError();
    errorEl.textContent = t("copied");
  } catch {
    setError("unknown");
  }
}

function setLanguage(lang) {
  state.lang = lang;
  applyI18nText();
}

typeEl.addEventListener("change", () => {
  clearError();
  renderDynamicForm();
});

generateBtn.addEventListener("click", onGenerate);
clearBtn.addEventListener("click", onClear);
downloadBtn.addEventListener("click", onDownload);
copyBtn.addEventListener("click", onCopy);
langPtBtn.addEventListener("click", () => setLanguage("pt"));
langEnBtn.addEventListener("click", () => setLanguage("en"));

renderDynamicForm();
applyI18nText();
enablePreviewActions(false);
