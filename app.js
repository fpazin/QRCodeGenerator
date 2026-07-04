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
    resolutionLabel: "Resolucao do QR",
    generateBtn: "Gerar QR Code",
    clearBtn: "Limpar",
    privacyHint: "Seus dados ficam no seu navegador. Nada e enviado para servidor.",
    qrPlaceholder: "Seu QR Code aparecera aqui.",
    downloadBtn: "Baixar PNG",
    downloadSvgBtn: "Baixar SVG",
    printBtn: "Imprimir",
    copyBtn: "Copiar Conteudo",
    payloadSummary: "Conteudo gerado",
    footerText: "Open source no GitHub. Licenca MIT.",
    privacyTitle: "Privacidade e Dados",
    privacyLine1: "Nenhuma informacao preenchida e salva neste site.",
    privacyLine2: "Nenhum payload de QR e enviado para servidor.",
    privacyLine3: "Nao usamos analytics, rastreadores ou cookies de perfil.",
    aboutTitle: "Desenvolvedor e Contatos",
    developerLabel: "Desenvolvido por:",
    repoLabel: "Repositorio do projeto",
    linkedinLabel: "LinkedIn:",
    copied: "Conteudo copiado para a area de transferencia.",
    generated: "QR Code gerado com sucesso.",
    downloadedSvg: "Arquivo SVG baixado.",
    printReady: "Janela de impressao aberta.",
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
      weakWifiPassword: "Senha Wi-Fi invalida para o tipo de seguranca selecionado.",
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
    resolutionLabel: "QR resolution",
    generateBtn: "Generate QR Code",
    clearBtn: "Clear",
    privacyHint: "Your data stays in your browser. Nothing is sent to a server.",
    qrPlaceholder: "Your QR Code will show up here.",
    downloadBtn: "Download PNG",
    downloadSvgBtn: "Download SVG",
    printBtn: "Print",
    copyBtn: "Copy Payload",
    payloadSummary: "Generated content",
    footerText: "Open source on GitHub. MIT license.",
    privacyTitle: "Privacy and Data",
    privacyLine1: "No information entered here is saved by this site.",
    privacyLine2: "No QR payload is sent to any server.",
    privacyLine3: "We do not use analytics, trackers, or profiling cookies.",
    aboutTitle: "Developer and Contacts",
    developerLabel: "Developed by:",
    repoLabel: "Project repository",
    linkedinLabel: "LinkedIn:",
    copied: "Content copied to clipboard.",
    generated: "QR Code generated successfully.",
    downloadedSvg: "SVG file downloaded.",
    printReady: "Print window opened.",
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
      weakWifiPassword: "Invalid Wi-Fi password for the selected security type.",
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
  currentDataUrl: "",
  currentSvg: "",
  qrResolution: 1024
};

const formEl = document.getElementById("dynamic-form");
const typeEl = document.getElementById("qr-type");
const errorEl = document.getElementById("error-message");
const frameEl = document.getElementById("qr-frame");
const payloadEl = document.getElementById("payload-preview");
const generateBtn = document.getElementById("generate-btn");
const clearBtn = document.getElementById("clear-btn");
const downloadBtn = document.getElementById("download-btn");
const downloadSvgBtn = document.getElementById("download-svg-btn");
const printBtn = document.getElementById("print-btn");
const copyBtn = document.getElementById("copy-btn");
const statusEl = document.getElementById("status-message");
const qrResolutionEl = document.getElementById("qr-resolution");
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
  if (!state.currentDataUrl) {
    renderQrPlaceholder();
  }
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

function isValidWepPassword(password) {
  const plainLengths = [5, 13, 16];
  if (plainLengths.includes(password.length)) {
    return true;
  }

  return /^[A-Fa-f0-9]{10}$|^[A-Fa-f0-9]{26}$|^[A-Fa-f0-9]{32}$/.test(password);
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
      if (!parsed.hostname || /\s/.test(normalized)) {
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

      if (security === "WPA" && (password.length < 8 || password.length > 63)) {
        throw new Error("weakWifiPassword");
      }

      if (security === "WEP" && !isValidWepPassword(password)) {
        throw new Error("weakWifiPassword");
      }

      return `WIFI:T:${security};S:${escapeWifiText(ssid)};P:${escapeWifiText(password)};H:${hidden};;`;
    }

    default:
      throw new Error("unknown");
  }
}

function createQrModel(payload) {
  try {
    const qr = qrcode(0, "M");
    qr.addData(payload);
    qr.make();
    return qr;
  } catch {
    throw new Error("payloadTooLong");
  }
}

function getSelectedResolution() {
  const resolution = Number.parseInt(qrResolutionEl.value, 10);
  if ([512, 1024, 2048].includes(resolution)) {
    return resolution;
  }

  return 1024;
}

function renderQrDataUrl(qr, resolution) {
  const quietZoneModules = 4;
  const moduleCount = qr.getModuleCount();
  const totalModules = moduleCount + quietZoneModules * 2;
  const cellSize = Math.max(1, Math.floor(resolution / totalModules));
  const qrSize = cellSize * totalModules;
  const offset = Math.floor((resolution - qrSize) / 2);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = resolution;
  canvas.height = resolution;

  if (!ctx) {
    throw new Error("unknown");
  }

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, resolution, resolution);
  ctx.fillStyle = "#000000";

  for (let row = 0; row < moduleCount; row += 1) {
    for (let col = 0; col < moduleCount; col += 1) {
      if (qr.isDark(row, col)) {
        ctx.fillRect(
          offset + (col + quietZoneModules) * cellSize,
          offset + (row + quietZoneModules) * cellSize,
          cellSize,
          cellSize
        );
      }
    }
  }

  return canvas.toDataURL("image/png");
}

function generateQrDataUrl(payload, resolution) {
  const qr = createQrModel(payload);
  return renderQrDataUrl(qr, resolution);
}

function generateQrSvg(payload) {
  const qr = createQrModel(payload);
  return qr.createSvgTag(8, 2);
}

function renderQrPlaceholder() {
  frameEl.innerHTML = `<p>${t("qrPlaceholder")}</p>`;
}

function resetPreview() {
  payloadEl.textContent = "";
  state.currentPayload = "";
  state.currentDataUrl = "";
  state.currentSvg = "";
  renderQrPlaceholder();
  enablePreviewActions(false);
}

function setError(errorKey) {
  errorEl.textContent = t(`errors.${errorKey}`) || t("errors.unknown");
}

function clearError() {
  errorEl.textContent = "";
}

function setStatus(messageKey) {
  statusEl.textContent = t(messageKey);
}

function clearStatus() {
  statusEl.textContent = "";
}

function enablePreviewActions(enabled) {
  downloadBtn.disabled = !enabled;
  downloadSvgBtn.disabled = !enabled;
  printBtn.disabled = !enabled;
  copyBtn.disabled = !enabled;
}

function renderQrImage(dataUrl) {
  frameEl.innerHTML = "";
  const img = document.createElement("img");
  img.src = dataUrl;
  img.alt = "Generated QR Code";
  frameEl.appendChild(img);
}

function onGenerate() {
  clearError();
  clearStatus();

  const type = typeEl.value;
  const values = getFormValues();

  try {
    const payload = buildPayload(type, values);
    const dataUrl = generateQrDataUrl(payload, state.qrResolution);
    const svg = generateQrSvg(payload);

    state.currentPayload = payload;
    state.currentDataUrl = dataUrl;
    state.currentSvg = svg;

    renderQrImage(dataUrl);
    payloadEl.textContent = payload;
    enablePreviewActions(true);
    setStatus("generated");
  } catch (error) {
    resetPreview();
    clearStatus();

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
  clearStatus();
  renderDynamicForm();
  resetPreview();
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

function onDownloadSvg() {
  if (!state.currentSvg) {
    return;
  }

  try {
    const blob = new Blob([state.currentSvg], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const type = typeEl.value;
    const stamp = new Date().toISOString().slice(0, 10);
    const link = document.createElement("a");
    link.href = url;
    link.download = `qrcode-${type}-${stamp}.svg`;
    link.click();
    URL.revokeObjectURL(url);
    setStatus("downloadedSvg");
  } catch {
    setError("unknown");
  }
}

function buildPrintHtml() {
  return `<!doctype html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>QR Print ${state.qrResolution}x${state.qrResolution}</title>
      <style>
        @page { margin: 12mm; }
        body { margin: 0; font-family: Arial, sans-serif; color: #334155; }
        .sheet { min-height: calc(100vh - 24mm); display: grid; place-items: center; }
        .qr { width: min(80vw, 120mm); text-align: center; }
        .qr img { width: 100%; height: auto; display: block; }
        .meta { font-size: 10pt; margin-top: 8mm; }
      </style>
    </head>
    <body>
      <main class="sheet">
        <section class="qr">
          <img src="${state.currentDataUrl}" alt="Generated QR Code" />
          <p class="meta">${state.qrResolution}x${state.qrResolution} | QRCodeGenerator | https://fpazin.github.io/QRCodeGenerator/</p>
        </section>
      </main>
    </body>
  </html>`;
}

function onPrint() {
  if (!state.currentDataUrl) {
    return;
  }

  const iframe = document.createElement("iframe");
  iframe.setAttribute("aria-hidden", "true");
  iframe.style.position = "fixed";
  iframe.style.right = "0";
  iframe.style.bottom = "0";
  iframe.style.width = "0";
  iframe.style.height = "0";
  iframe.style.border = "0";
  document.body.appendChild(iframe);

  const printDocument = iframe.contentDocument || iframe.contentWindow?.document;
  if (!printDocument || !iframe.contentWindow) {
    iframe.remove();
    setError("unknown");
    return;
  }

  let didPrint = false;
  const removePrintFrame = () => {
    window.setTimeout(() => iframe.remove(), 250);
  };

  iframe.contentWindow.addEventListener("afterprint", removePrintFrame, { once: true });

  const printIframe = () => {
    if (didPrint || !iframe.contentWindow) {
      return;
    }

    didPrint = true;
    iframe.contentWindow.focus();
    iframe.contentWindow.print();
    window.setTimeout(() => iframe.remove(), 5000);
  };

  iframe.onload = printIframe;
  printDocument.open();
  printDocument.write(buildPrintHtml());
  printDocument.close();
  window.setTimeout(printIframe, 100);

  setStatus("printReady");
}

function updateResolution() {
  state.qrResolution = getSelectedResolution();

  if (!state.currentPayload) {
    return;
  }

  try {
    state.currentDataUrl = generateQrDataUrl(state.currentPayload, state.qrResolution);
    renderQrImage(state.currentDataUrl);
  } catch (error) {
    resetPreview();
    clearStatus();
    setError(error instanceof Error ? error.message : "unknown");
  }
}

async function onCopy() {
  if (!state.currentPayload) {
    return;
  }

  try {
    await navigator.clipboard.writeText(state.currentPayload);
    clearError();
    setStatus("copied");
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
  clearStatus();
  renderDynamicForm();
  resetPreview();
});

qrResolutionEl.addEventListener("change", updateResolution);

generateBtn.addEventListener("click", onGenerate);
clearBtn.addEventListener("click", onClear);
downloadBtn.addEventListener("click", onDownload);
downloadSvgBtn.addEventListener("click", onDownloadSvg);
printBtn.addEventListener("click", onPrint);
copyBtn.addEventListener("click", onCopy);
langPtBtn.addEventListener("click", () => setLanguage("pt"));
langEnBtn.addEventListener("click", () => setLanguage("en"));

qrResolutionEl.value = String(state.qrResolution);
renderDynamicForm();
applyI18nText();
enablePreviewActions(false);
