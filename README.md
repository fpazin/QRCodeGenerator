# QR & Barcode Generator

URL: https://fpazin.github.io/QRCodeGenerator/

Free, open-source generator for QR Codes and common 1D barcodes:

- QR: WhatsApp, Email, URL, and Wi-Fi
- Barcode: Code 128, GS1-128, EAN-13, UPC-A, ITF-14, and Code 39

No backend. No paid lock-in. No data sent to a server.

## PT-BR

### O que este projeto faz

Pagina web para gerar QR Codes e codigos de barras de forma gratuita, com processamento local no navegador.

### Recursos

- Gera QR para WhatsApp, Email, URL e Wi-Fi.
- Gera codigos de barras Code 128, GS1-128, EAN-13, UPC-A, ITF-14 e Code 39.
- Seleciona primeiro a categoria QR Code ou Codigo de Barras e depois o formato especifico.
- GS1-128 guiado para AIs comuns: SSCC (00), GTIN (01), validade (17), lote (10) e serial (21).
- Download em PNG e SVG.
- Resolucao configuravel para PNG e impressao: 512x512, 1024x1024 ou 2048x2048.
- Visualizacao do conteudo gerado.
- Interface bilingue (PT/EN).
- Modo claro/escuro com padrao claro e preferencia salva no navegador.
- Favicon local em SVG com visual de QR + codigo de barras.
- Sem backend e sem analytics.

### Rodar localmente

1. Clone o repositorio.
2. Abra o arquivo index.html no navegador.

Opcional (servidor local simples com Python):

```bash
python -m http.server 8080
```

Depois acesse:

```text
http://localhost:8080
```

### Privacidade

- Toda geracao ocorre no navegador do usuario.
- Nao ha envio de dados para API/servidor.
- Nao ha armazenamento obrigatorio de dados sensiveis.
- A pagina exibe informacoes de privacidade e links de contato do desenvolvedor.

### Bibliotecas usadas

- qrcode-generator (MIT)
- JsBarcode (MIT)

## EN

### What this project does

Web page to generate QR Codes and barcodes for free, fully in the browser.

### Features

- QR generation for WhatsApp, Email, URL, and Wi-Fi.
- Barcode generation for Code 128, GS1-128, EAN-13, UPC-A, ITF-14, and Code 39.
- Two-step selection: choose QR Code or Barcode first, then the specific format.
- Guided GS1-128 support for common AIs: SSCC (00), GTIN (01), expiration (17), lot (10), and serial (21).
- PNG and SVG download.
- Configurable PNG and print resolution: 512x512, 1024x1024, or 2048x2048.
- Generated content preview.
- Bilingual UI (PT/EN).
- Light/dark mode with light as the default and saved browser preference.
- Local SVG favicon combining QR and barcode visuals.
- No backend and no analytics.

### Run locally

1. Clone the repository.
2. Open index.html in your browser.

Optional (simple local server with Python):

```bash
python -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

### Privacy

- Code generation happens in the user's browser.
- No payload data is sent to any API/server.
- No mandatory storage of sensitive data.
- The page shows privacy information and developer contact links.

## License

MIT. See LICENSE.
