const i18n = {
  pt: {
    privacyBadge: "100% local. Gratuito. Sem pegadinhas.",
    title: "QR & Barcode Generator",
    subtitle: "Crie QR Codes e codigos de barras para WhatsApp, Email, URL, Wi-Fi, varejo e logistica sem enviar seus dados para nenhum servidor.",
    typeLabel: "Tipo de codigo",
    categoryQr: "QR Code",
    categoryBarcode: "Codigo de Barras",
    formatLabel: "Formato",
    typeWhatsapp: "WhatsApp",
    typeEmail: "Email",
    typeUrl: "URL",
    typeWifi: "Wi-Fi",
    typeCode128: "Code 128",
    typeGs1128: "GS1-128",
    typeEan13: "EAN-13",
    typeUpca: "UPC-A",
    typeItf14: "ITF-14",
    typeCode39: "Code 39",
    resolutionLabel: "Resolucao do codigo",
    generateBtn: "Gerar codigo",
    clearBtn: "Limpar",
    privacyHint: "Seus dados ficam no seu navegador. Nada e enviado para servidor.",
    qrPlaceholder: "Seu codigo aparecera aqui.",
    downloadBtn: "Baixar PNG",
    downloadSvgBtn: "Baixar SVG",
    printBtn: "Imprimir",
    copyBtn: "Copiar conteudo",
    payloadSummary: "Conteudo gerado",
    footerText: "Open source no GitHub. Licenca MIT.",
    themeToDark: "Modo escuro",
    themeToLight: "Modo claro",
    themeToggleAria: "Alternar modo claro e escuro",
    privacyTitle: "Privacidade e Dados",
    privacyLine1: "Nenhuma informacao preenchida e salva neste site.",
    privacyLine2: "Nenhum payload de codigo e enviado para servidor.",
    privacyLine3: "Nao usamos analytics, rastreadores ou cookies de perfil.",
    aboutTitle: "Desenvolvedor e Contatos",
    developerLabel: "Desenvolvido por:",
    repoLabel: "Repositorio do projeto",
    linkedinLabel: "LinkedIn:",
    copied: "Conteudo copiado para a area de transferencia.",
    generated: "Codigo gerado com sucesso.",
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
      securityNone: "Sem senha",
      barcodeValue: "Valor do codigo",
      code128Hint: "Use texto ASCII imprimivel.",
      ean13Hint: "Informe 12 digitos para calcular o verificador ou 13 para validar.",
      upcaHint: "Informe 11 digitos para calcular o verificador ou 12 para validar.",
      itf14Hint: "Informe 13 digitos para calcular o verificador ou 14 para validar.",
      code39Hint: "Use letras, numeros, espaco e os simbolos - . $ / + %.",
      gs1Primary: "Identificador principal",
      gs1PrimarySscc: "SSCC (00)",
      gs1PrimaryGtin: "GTIN (01)",
      gs1Id: "SSCC ou GTIN",
      gs1IdHint: "SSCC: 17/18 digitos. GTIN: 13/14 digitos.",
      gs1Expiry: "Validade YYMMDD (opcional)",
      gs1Lot: "Lote (10, opcional)",
      gs1Serial: "Serial (21, opcional)"
    },
    errors: {
      invalidPhone: "Informe um telefone valido no formato internacional.",
      invalidEmail: "Informe um email valido.",
      invalidUrl: "Informe uma URL valida.",
      invalidSsid: "Informe o SSID da rede Wi-Fi.",
      invalidPassword: "Informe a senha da rede para o tipo de seguranca escolhido.",
      weakWifiPassword: "Senha Wi-Fi invalida para o tipo de seguranca selecionado.",
      payloadTooLong: "Conteudo muito grande para um QR legivel. Reduza os dados.",
      invalidBarcodeText: "Informe um valor valido para este tipo de codigo de barras.",
      invalidBarcodeChecksum: "Digito verificador invalido para este codigo.",
      invalidGs1Date: "Informe a validade no formato YYMMDD.",
      invalidGs1Variable: "Lote e serial aceitam ate 20 caracteres alfanumericos e . _ / -.",
      invalidSscc: "Informe um SSCC com 17 ou 18 digitos.",
      invalidGtin: "Informe um GTIN com 13 ou 14 digitos.",
      invalidBarcode: "Nao foi possivel gerar este codigo de barras.",
      unknown: "Nao foi possivel gerar o codigo."
    }
  },
  en: {
    privacyBadge: "100% local. Free. No traps.",
    title: "QR & Barcode Generator",
    subtitle: "Create QR Codes and barcodes for WhatsApp, Email, URL, Wi-Fi, retail, and logistics without sending your data to any server.",
    typeLabel: "Code type",
    categoryQr: "QR Code",
    categoryBarcode: "Barcode",
    formatLabel: "Format",
    typeWhatsapp: "WhatsApp",
    typeEmail: "Email",
    typeUrl: "URL",
    typeWifi: "Wi-Fi",
    typeCode128: "Code 128",
    typeGs1128: "GS1-128",
    typeEan13: "EAN-13",
    typeUpca: "UPC-A",
    typeItf14: "ITF-14",
    typeCode39: "Code 39",
    resolutionLabel: "Code resolution",
    generateBtn: "Generate code",
    clearBtn: "Clear",
    privacyHint: "Your data stays in your browser. Nothing is sent to a server.",
    qrPlaceholder: "Your code will show up here.",
    downloadBtn: "Download PNG",
    downloadSvgBtn: "Download SVG",
    printBtn: "Print",
    copyBtn: "Copy content",
    payloadSummary: "Generated content",
    footerText: "Open source on GitHub. MIT license.",
    themeToDark: "Dark mode",
    themeToLight: "Light mode",
    themeToggleAria: "Toggle light and dark mode",
    privacyTitle: "Privacy and Data",
    privacyLine1: "No information entered here is saved by this site.",
    privacyLine2: "No code payload is sent to any server.",
    privacyLine3: "We do not use analytics, trackers, or profiling cookies.",
    aboutTitle: "Developer and Contacts",
    developerLabel: "Developed by:",
    repoLabel: "Project repository",
    linkedinLabel: "LinkedIn:",
    copied: "Content copied to clipboard.",
    generated: "Code generated successfully.",
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
      securityNone: "No password",
      barcodeValue: "Code value",
      code128Hint: "Use printable ASCII text.",
      ean13Hint: "Enter 12 digits to calculate the check digit or 13 to validate it.",
      upcaHint: "Enter 11 digits to calculate the check digit or 12 to validate it.",
      itf14Hint: "Enter 13 digits to calculate the check digit or 14 to validate it.",
      code39Hint: "Use letters, numbers, spaces, and the symbols - . $ / + %.",
      gs1Primary: "Primary identifier",
      gs1PrimarySscc: "SSCC (00)",
      gs1PrimaryGtin: "GTIN (01)",
      gs1Id: "SSCC or GTIN",
      gs1IdHint: "SSCC: 17/18 digits. GTIN: 13/14 digits.",
      gs1Expiry: "Expiration YYMMDD (optional)",
      gs1Lot: "Lot (10, optional)",
      gs1Serial: "Serial (21, optional)"
    },
    errors: {
      invalidPhone: "Enter a valid phone number in international format.",
      invalidEmail: "Enter a valid email address.",
      invalidUrl: "Enter a valid URL.",
      invalidSsid: "Enter the Wi-Fi SSID.",
      invalidPassword: "Enter the network password for the selected security type.",
      weakWifiPassword: "Invalid Wi-Fi password for the selected security type.",
      payloadTooLong: "Content is too long for a readable QR code. Reduce input size.",
      invalidBarcodeText: "Enter a valid value for this barcode type.",
      invalidBarcodeChecksum: "Invalid check digit for this code.",
      invalidGs1Date: "Enter the expiration date as YYMMDD.",
      invalidGs1Variable: "Lot and serial accept up to 20 alphanumeric characters and . _ / -.",
      invalidSscc: "Enter an SSCC with 17 or 18 digits.",
      invalidGtin: "Enter a GTIN with 13 or 14 digits.",
      invalidBarcode: "Unable to generate this barcode.",
      unknown: "Unable to generate the code."
    }
  }
};

const qrTypes = new Set(["whatsapp", "email", "url", "wifi"]);
const barcodeTypes = new Set(["code128", "gs1-128", "ean13", "upca", "itf14", "code39"]);
const FNC1 = String.fromCharCode(207);
const THEME_STORAGE_KEY = "qrCodeGeneratorTheme";

const formatOptionsByCategory = {
  qr: [
    { value: "whatsapp", labelKey: "typeWhatsapp" },
    { value: "email", labelKey: "typeEmail" },
    { value: "url", labelKey: "typeUrl" },
    { value: "wifi", labelKey: "typeWifi" }
  ],
  barcode: [
    { value: "code128", labelKey: "typeCode128" },
    { value: "gs1-128", labelKey: "typeGs1128" },
    { value: "ean13", labelKey: "typeEan13" },
    { value: "upca", labelKey: "typeUpca" },
    { value: "itf14", labelKey: "typeItf14" },
    { value: "code39", labelKey: "typeCode39" }
  ]
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
    {
      key: "security",
      type: "select",
      required: true,
      options: [
        { value: "WPA", labelKey: "securityWpa" },
        { value: "WEP", labelKey: "securityWep" },
        { value: "nopass", labelKey: "securityNone" }
      ]
    },
    { key: "password", type: "password", required: false },
    { key: "hidden", type: "checkbox", required: false }
  ],
  code128: [{ key: "barcodeValue", type: "text", required: true, hintKey: "code128Hint" }],
  ean13: [{ key: "barcodeValue", type: "text", required: true, inputMode: "numeric", hintKey: "ean13Hint" }],
  upca: [{ key: "barcodeValue", type: "text", required: true, inputMode: "numeric", hintKey: "upcaHint" }],
  itf14: [{ key: "barcodeValue", type: "text", required: true, inputMode: "numeric", hintKey: "itf14Hint" }],
  code39: [{ key: "barcodeValue", type: "text", required: true, hintKey: "code39Hint" }],
  "gs1-128": [
    {
      key: "gs1Primary",
      type: "select",
      required: true,
      options: [
        { value: "01", labelKey: "gs1PrimaryGtin" },
        { value: "00", labelKey: "gs1PrimarySscc" }
      ]
    },
    { key: "gs1Id", type: "text", required: true, inputMode: "numeric", hintKey: "gs1IdHint" },
    { key: "gs1Expiry", type: "text", required: false, inputMode: "numeric" },
    { key: "gs1Lot", type: "text", required: false, maxLength: 20 },
    { key: "gs1Serial", type: "text", required: false, maxLength: 20 }
  ]
};

const state = {
  lang: "pt",
  theme: "light",
  currentKind: "",
  currentPayload: "",
  currentDataUrl: "",
  currentSvg: "",
  currentFilePrefix: "",
  qrResolution: 1024
};

const formEl = document.getElementById("dynamic-form");
const categoryEl = document.getElementById("code-category");
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
const themeToggleBtn = document.getElementById("theme-toggle");
const themeLabelEl = document.getElementById("theme-label");

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
  themeToggleBtn.setAttribute("aria-label", t("themeToggleAria"));

  renderFormatOptions(true);
  if (!state.currentDataUrl) {
    renderCodePlaceholder();
  }
}

function updateThemeUi() {
  document.documentElement.setAttribute("data-theme", state.theme);
  themeToggleBtn.classList.toggle("is-dark", state.theme === "dark");
  themeLabelEl.textContent = t(state.theme === "dark" ? "themeToLight" : "themeToDark");
  themeToggleBtn.setAttribute("aria-label", t("themeToggleAria"));
}

function getStoredTheme() {
  try {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    return storedTheme === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
}

function setTheme(theme) {
  state.theme = theme === "dark" ? "dark" : "light";
  updateThemeUi();

  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, state.theme);
  } catch {
    // Theme persistence is optional; the UI can still switch without storage.
  }
}

function toggleTheme() {
  setTheme(state.theme === "dark" ? "light" : "dark");
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
    field.options.forEach((optionCfg) => {
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

  if (field.inputMode) {
    input.inputMode = field.inputMode;
  }

  if (field.maxLength) {
    input.maxLength = field.maxLength;
  }

  wrapper.appendChild(input);

  if (field.hintKey) {
    const hint = document.createElement("p");
    hint.className = "field-hint";
    hint.textContent = t(`fields.${field.hintKey}`);
    wrapper.appendChild(hint);
  }

  return wrapper;
}

function getSelectedCategory() {
  return categoryEl.value === "barcode" ? "barcode" : "qr";
}

function renderFormatOptions(preserveValue) {
  const category = getSelectedCategory();
  const currentValue = typeEl.value;
  const options = formatOptionsByCategory[category];

  typeEl.innerHTML = "";

  options.forEach((optionCfg) => {
    const option = document.createElement("option");
    option.value = optionCfg.value;
    option.textContent = t(optionCfg.labelKey);
    typeEl.appendChild(option);
  });

  const hasCurrentValue = options.some((optionCfg) => optionCfg.value === currentValue);
  typeEl.value = preserveValue && hasCurrentValue ? currentValue : options[0].value;

  renderDynamicForm();
}

function renderDynamicForm() {
  const selectedType = typeEl.value;
  formEl.innerHTML = "";
  (fieldsByType[selectedType] || []).forEach((field) => {
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
  return (text || "").replace(/([\\;,:"])|\n/g, "\\$1");
}

function isValidWepPassword(password) {
  const plainLengths = [5, 13, 16];
  if (plainLengths.includes(password.length)) {
    return true;
  }

  return /^[A-Fa-f0-9]{10}$|^[A-Fa-f0-9]{26}$|^[A-Fa-f0-9]{32}$/.test(password);
}

function buildQrPayload(type, values) {
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

function computeModulo10CheckDigit(digits) {
  const sum = digits
    .split("")
    .reverse()
    .reduce((acc, digit, index) => acc + Number.parseInt(digit, 10) * (index % 2 === 0 ? 3 : 1), 0);
  return String((10 - (sum % 10)) % 10);
}

function normalizeModulo10Code(value, lengthWithoutCheck, lengthWithCheck, lengthErrorKey) {
  const digits = (value || "").trim();
  if (!/^\d+$/.test(digits)) {
    throw new Error(lengthErrorKey);
  }

  if (digits.length === lengthWithoutCheck) {
    return `${digits}${computeModulo10CheckDigit(digits)}`;
  }

  if (digits.length === lengthWithCheck) {
    const body = digits.slice(0, -1);
    const checkDigit = digits.slice(-1);
    if (computeModulo10CheckDigit(body) !== checkDigit) {
      throw new Error("invalidBarcodeChecksum");
    }
    return digits;
  }

  throw new Error(lengthErrorKey);
}

function validateGs1Date(value) {
  const digits = (value || "").trim();
  if (!digits) {
    return "";
  }

  if (!/^\d{6}$/.test(digits)) {
    throw new Error("invalidGs1Date");
  }

  const year = 2000 + Number.parseInt(digits.slice(0, 2), 10);
  const month = Number.parseInt(digits.slice(2, 4), 10);
  const day = Number.parseInt(digits.slice(4, 6), 10);
  const date = new Date(Date.UTC(year, month - 1, day));

  if (date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) {
    throw new Error("invalidGs1Date");
  }

  return digits;
}

function normalizeGs1Variable(value) {
  const text = (value || "").trim();
  if (!text) {
    return "";
  }

  if (text.length > 20 || !/^[A-Za-z0-9 ._/-]+$/.test(text)) {
    throw new Error("invalidGs1Variable");
  }

  return text;
}

function buildGs1128Data(values) {
  const primary = values.gs1Primary || "01";
  const rawId = values.gs1Id || "";
  const expiry = validateGs1Date(values.gs1Expiry);
  const lot = normalizeGs1Variable(values.gs1Lot);
  const serial = normalizeGs1Variable(values.gs1Serial);

  let encodedValue = "";
  const humanParts = [];

  if (primary === "00") {
    const sscc = normalizeModulo10Code(rawId, 17, 18, "invalidSscc");
    encodedValue += `00${sscc}`;
    humanParts.push(`(00)${sscc}`);
  } else {
    const gtin = normalizeModulo10Code(rawId, 13, 14, "invalidGtin");
    encodedValue += `01${gtin}`;
    humanParts.push(`(01)${gtin}`);
  }

  if (expiry) {
    encodedValue += `17${expiry}`;
    humanParts.push(`(17)${expiry}`);
  }

  if (lot) {
    encodedValue += `10${lot}${serial ? FNC1 : ""}`;
    humanParts.push(`(10)${lot}`);
  }

  if (serial) {
    encodedValue += `21${serial}`;
    humanParts.push(`(21)${serial}`);
  }

  return {
    format: "CODE128",
    encodedValue,
    displayText: humanParts.join(""),
    ean128: true,
    filePrefix: "gs1-128"
  };
}

function buildBarcodeData(type, values) {
  const value = (values.barcodeValue || "").trim();

  switch (type) {
    case "code128":
      if (!/^[\x20-\x7E]+$/.test(value)) {
        throw new Error("invalidBarcodeText");
      }
      return { format: "CODE128", encodedValue: value, displayText: value, filePrefix: "code128" };

    case "ean13": {
      const normalized = normalizeModulo10Code(value, 12, 13, "invalidBarcodeText");
      return { format: "EAN13", encodedValue: normalized, displayText: normalized, filePrefix: "ean13" };
    }

    case "upca": {
      const normalized = normalizeModulo10Code(value, 11, 12, "invalidBarcodeText");
      return { format: "UPC", encodedValue: normalized, displayText: normalized, filePrefix: "upca" };
    }

    case "itf14": {
      const normalized = normalizeModulo10Code(value, 13, 14, "invalidBarcodeText");
      return { format: "ITF14", encodedValue: normalized, displayText: normalized, filePrefix: "itf14" };
    }

    case "code39": {
      const normalized = value.toUpperCase();
      if (!/^[0-9A-Z .$/+%-]+$/.test(normalized)) {
        throw new Error("invalidBarcodeText");
      }
      return { format: "CODE39", encodedValue: normalized, displayText: normalized, filePrefix: "code39" };
    }

    case "gs1-128":
      return buildGs1128Data(values);

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

function generateBarcodeSvg(barcodeData) {
  const barcodeRenderer = window.JsBarcode || (typeof JsBarcode === "function" ? JsBarcode : null);

  if (typeof barcodeRenderer !== "function") {
    throw new Error("unknown");
  }

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

  try {
    barcodeRenderer(svg, barcodeData.encodedValue, {
      format: barcodeData.format,
      ean128: Boolean(barcodeData.ean128),
      text: barcodeData.displayText,
      displayValue: true,
      width: 2,
      height: 96,
      margin: 12,
      font: "Arial",
      fontSize: 18,
      textMargin: 8,
      lineColor: "#000000",
      background: "#ffffff"
    });
  } catch {
    throw new Error("invalidBarcode");
  }

  if (!svg.getAttribute("xmlns")) {
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  }

  return new XMLSerializer().serializeToString(svg);
}

function renderSvgDataUrl(svgText, resolution) {
  return new Promise((resolve, reject) => {
    const blob = new Blob([svgText], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const image = new Image();

    image.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = resolution;
        canvas.height = resolution;

        if (!ctx) {
          throw new Error("unknown");
        }

        const sourceWidth = image.naturalWidth || image.width || resolution;
        const sourceHeight = image.naturalHeight || image.height || Math.round(resolution / 3);
        const padding = Math.round(resolution * 0.06);
        const maxWidth = resolution - padding * 2;
        const maxHeight = resolution - padding * 2;
        const scale = Math.min(maxWidth / sourceWidth, maxHeight / sourceHeight);
        const drawWidth = Math.round(sourceWidth * scale);
        const drawHeight = Math.round(sourceHeight * scale);
        const x = Math.round((resolution - drawWidth) / 2);
        const y = Math.round((resolution - drawHeight) / 2);

        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, resolution, resolution);
        ctx.drawImage(image, x, y, drawWidth, drawHeight);
        resolve(canvas.toDataURL("image/png"));
      } catch (error) {
        reject(error);
      } finally {
        URL.revokeObjectURL(url);
      }
    };

    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("unknown"));
    };

    image.src = url;
  });
}

async function generateCode(type, values, resolution) {
  if (qrTypes.has(type)) {
    const payload = buildQrPayload(type, values);
    return {
      kind: "qr",
      payload,
      dataUrl: generateQrDataUrl(payload, resolution),
      svg: generateQrSvg(payload),
      filePrefix: type
    };
  }

  if (barcodeTypes.has(type)) {
    const barcodeData = buildBarcodeData(type, values);
    const svg = generateBarcodeSvg(barcodeData);
    return {
      kind: "barcode",
      payload: barcodeData.displayText,
      dataUrl: await renderSvgDataUrl(svg, resolution),
      svg,
      filePrefix: barcodeData.filePrefix
    };
  }

  throw new Error("unknown");
}

function renderCodePlaceholder() {
  frameEl.classList.remove("is-barcode");
  frameEl.innerHTML = `<p>${t("qrPlaceholder")}</p>`;
}

function resetPreview() {
  payloadEl.textContent = "";
  state.currentKind = "";
  state.currentPayload = "";
  state.currentDataUrl = "";
  state.currentSvg = "";
  state.currentFilePrefix = "";
  renderCodePlaceholder();
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

function renderCodeImage(dataUrl, kind) {
  frameEl.innerHTML = "";
  frameEl.classList.toggle("is-barcode", kind === "barcode");
  const img = document.createElement("img");
  img.src = dataUrl;
  img.alt = "Generated code";
  frameEl.appendChild(img);
}

async function onGenerate() {
  clearError();
  clearStatus();
  generateBtn.disabled = true;

  const type = typeEl.value;
  const values = getFormValues();

  try {
    const result = await generateCode(type, values, state.qrResolution);

    state.currentKind = result.kind;
    state.currentPayload = result.payload;
    state.currentDataUrl = result.dataUrl;
    state.currentSvg = result.svg;
    state.currentFilePrefix = result.filePrefix;

    renderCodeImage(result.dataUrl, result.kind);
    payloadEl.textContent = result.payload;
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
  } finally {
    generateBtn.disabled = false;
  }
}

function onClear() {
  formEl.reset();
  clearError();
  clearStatus();
  renderDynamicForm();
  resetPreview();
}

function getDownloadBaseName() {
  const kind = state.currentKind === "barcode" ? "barcode" : "qrcode";
  const type = state.currentFilePrefix || typeEl.value;
  const stamp = new Date().toISOString().slice(0, 10);
  return `${kind}-${type}-${stamp}`;
}

function onDownload() {
  if (!state.currentDataUrl) {
    return;
  }

  const link = document.createElement("a");
  link.href = state.currentDataUrl;
  link.download = `${getDownloadBaseName()}.png`;
  link.click();
}

function onDownloadSvg() {
  if (!state.currentSvg) {
    return;
  }

  try {
    const blob = new Blob([state.currentSvg], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${getDownloadBaseName()}.svg`;
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
      <title>Code Print ${state.qrResolution}x${state.qrResolution}</title>
      <style>
        @page { margin: 12mm; }
        body { margin: 0; font-family: Arial, sans-serif; color: #334155; }
        .sheet { min-height: calc(100vh - 24mm); display: grid; place-items: center; }
        .code { width: min(80vw, 150mm); text-align: center; }
        .code img { width: 100%; height: auto; display: block; }
        .meta { font-size: 10pt; margin-top: 8mm; overflow-wrap: anywhere; }
      </style>
    </head>
    <body>
      <main class="sheet">
        <section class="code">
          <img src="${state.currentDataUrl}" alt="Generated code" />
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

async function updateResolution() {
  state.qrResolution = getSelectedResolution();

  if (!state.currentPayload) {
    return;
  }

  try {
    if (state.currentKind === "barcode") {
      state.currentDataUrl = await renderSvgDataUrl(state.currentSvg, state.qrResolution);
    } else {
      state.currentDataUrl = generateQrDataUrl(state.currentPayload, state.qrResolution);
    }
    renderCodeImage(state.currentDataUrl, state.currentKind);
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
  updateThemeUi();
}

categoryEl.addEventListener("change", () => {
  clearError();
  clearStatus();
  renderFormatOptions(false);
  resetPreview();
});

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
themeToggleBtn.addEventListener("click", toggleTheme);

state.theme = getStoredTheme();
qrResolutionEl.value = String(state.qrResolution);
categoryEl.value = "qr";
renderFormatOptions(false);
applyI18nText();
updateThemeUi();
enablePreviewActions(false);
