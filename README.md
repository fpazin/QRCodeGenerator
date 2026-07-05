# QR Code Generator

URL: https://fpazin.github.io/QRCodeGenerator/

Free, open-source QR Code generator for:

- WhatsApp
- Email
- URL
- Wi-Fi

No backend. No paid lock-in. No data sent to a server.

## PT-BR

### O que este projeto faz

Página web para gerar QR Codes de forma gratuita, com processamento local no navegador.

### Recursos

- Gera QR para WhatsApp, Email, URL e Wi-Fi.
- Download em PNG e SVG.
- Resolução configurável para PNG e impressão: 512x512, 1024x1024 ou 2048x2048.
- Visualização do conteúdo gerado.
- Interface bilingue (PT/EN).
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

- Toda geração de QR ocorre no navegador do usuário.
- Não há envio de dados para API/servidor.
- Não há armazenamento obrigatório de dados sensíveis.
- A página exibe informações de privacidade e links de contato do desenvolvedor.

### Biblioteca usada

- qrcode-generator (MIT)

## EN

### What this project does

Web page to generate QR Codes for free, fully in the browser.

### Features

- QR generation for WhatsApp, Email, URL, and Wi-Fi.
- PNG and SVG download.
- Configurable PNG and print resolution: 512x512, 1024x1024, or 2048x2048.
- Generated payload preview.
- Bilingual UI (PT/EN).
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

- QR generation happens in the user's browser.
- No payload data is sent to any API/server.
- No mandatory storage of sensitive data.
- The page shows privacy information and developer contact links.

## License

MIT. See LICENSE.
