# QR Code Generator

Free, open-source QR Code generator for:
- WhatsApp
- Email
- URL
- Wi-Fi

No backend. No paid lock-in. No data sent to a server.

## PT-BR

### O que este projeto faz
Pagina web para gerar QR Codes de forma gratuita, com processamento local no navegador.

### Recursos
- Gera QR para WhatsApp, Email, URL e Wi-Fi.
- Download em PNG.
- Visualizacao do conteudo gerado.
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

### Publicar no GitHub Pages (Projeto)
Este repositorio ja inclui workflow para deploy automatico:
- .github/workflows/deploy-pages.yml

Passos:
1. Envie os arquivos para a branch principal do repositorio.
2. No GitHub, abra Settings > Pages.
3. Em Build and deployment, selecione Source: GitHub Actions.
4. Aguarde o workflow "Deploy GitHub Pages" finalizar.
5. URL esperada:
	- https://<seu-usuario>.github.io/QRCodeGenerator/

### Privacidade
- Toda geracao de QR ocorre no navegador do usuario.
- Nao ha envio de dados para API/servidor.
- Nao ha armazenamento obrigatorio de dados sensiveis.

### Biblioteca usada
- qrcode-generator (MIT)

## EN

### What this project does
Web page to generate QR Codes for free, fully in the browser.

### Features
- QR generation for WhatsApp, Email, URL, and Wi-Fi.
- PNG download.
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

### Publish on GitHub Pages (Project site)
This repository already includes an automatic deployment workflow:
- .github/workflows/deploy-pages.yml

Steps:
1. Push files to the main branch.
2. In GitHub, open Settings > Pages.
3. In Build and deployment, set Source to GitHub Actions.
4. Wait for the "Deploy GitHub Pages" workflow to finish.
5. Expected URL:
	- https://<your-user>.github.io/QRCodeGenerator/

### Privacy
- QR generation happens in the user's browser.
- No payload data is sent to any API/server.
- No mandatory storage of sensitive data.

## License

MIT. See LICENSE.
