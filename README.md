# Páginas de Links Dinâmicas

Projeto acadêmico experimental que utiliza um arquivo JSON, **json-server** e **Vite** para gerar páginas de links de usuários de forma dinâmica.

## 📖 Visão Geral

Este projeto lê o arquivo `dados.json` com perfis de usuários e seus links, expõe uma API REST com **json-server** e constrói um frontend com **Vite** e **TypeScript**. As páginas são renderizadas dinamicamente com base em parâmetros de URL (ex.: `?id=1`), exibindo foto do usuário, nome, lista personalizada de links e um QRCode.

Exemplo de layout gerado através das informações contidas no JSON:

![Screenshot](./public/assets/images/readme/Screenshot%202025-06-04%20at%2017.02.59.png)

```json
{
    "usuarios": [
        {
            "id": "1",
            "imagem": "./public/assets/images/people/eu.jpg",
            "nome": "Vinícius Moraes",
            "background": "#f5f6fa",
            "cor_link": "#e3e8ee",
            "cor_hover": "#bfc9d9",
            "cor_icone": "#fff",
            "cor_texto_link": "#000",
            "border_radius": "8px",
            "link": [
                {
                    "icone": "./public/assets/images/icons/linkedin.png",
                    "texto": "LinkedIn",
                    "url": "https://www.linkedin.com/in/moraesvini/"
                },
                {
                    "icone": "./public/assets/images/icons/github.png",
                    "texto": "GitHub",
                    "url": "https://github.com/vximoraes"
                },
                {
                    "icone": "./public/assets/images/icons/mail.png",
                    "texto": "E-mail",
                    "url": "mailto:viniciusmoraesvha@gmail.com"
                }
            ],
            "qrcode": "./public/assets/images/qrcode/image 6.png"
        }
    ]
}
```

## 🚀 Funcionalidades

- Servir o `dados.json` como API REST usando **json-server**
- Renderização no cliente com **Vite**, **TypeScript** e manipulação direta do DOM
- Roteamento dinâmico via parâmetro de URL para buscar e exibir dados do usuário
- Layout responsivo e estilos personalizáveis
- Estrutura modular: camada de API, helpers de UI e tratamentos de mensagens

## 🛠️ Tecnologias

- **json-server**: mock de API REST a partir de um arquivo JSON
- **Vite**: servidor de desenvolvimento rápido e bundler moderno
- **TypeScript**: tipagem estática e recursos avançados de JS
- **CSS**: estilos modulares em `public/assets/css`

## 📦 Pré-requisitos

- Node.js (v14 ou superior)
- npm ou yarn
- **json-server**: instale localmente na pasta base com `npm install json-server`. Veja a [documentação oficial](https://www.npmjs.com/package/json-server).

## ⚡️ Configuração e Instalação

1. **Clonar o repositório**

   ```bash
   git clone https://github.com/vximoraes/dynamic-link-pages.git
   cd dynamic-link-pages
   ```

2. **Instalar dependências**

   ```bash
   npm install
   # ou yarn install
   ```

3. **Iniciar o json-server**

   Sirva o `dados.json` na porta 3000 (ou outra, caso desejar):

   ```bash
   npm run server
   ```

4. **Executar o servidor de desenvolvimento do Vite**

   Em outro terminal:

   ```bash
   npm run dev
   # ou yarn dev
   ```

## 📊 Como Utilizar

Acesse no navegador: `http://localhost:5173/?id=<ID_DO_USUÁRIO>` para visualizar a página de links dinâmica.

Exemplo:

```
http://localhost:5173/?id=1
```

![Screenshot](./public/assets/images/readme/Screenshot%202025-06-04%20at%2015.33.47.png)

## 🔍 Endpoints da API (json-server)

O **json-server** expõe automaticamente um conjunto completo de rotas REST para o recurso `usuarios` baseado no arquivo `dados.json`:

- `GET    /usuarios`        — lista todos os usuários
- `GET    /usuarios/:id`    — exibe dados de um usuário pelo ID
- `POST   /usuarios`        — adiciona um novo usuário
- `PUT    /usuarios/:id`    — substitui o usuário especificado
- `PATCH  /usuarios/:id`    — atualiza parcialmente o usuário especificado
- `DELETE /usuarios/:id`    — remove o usuário especificado

A estrutura dos dados segue o arquivo `dados.json` na raiz do projeto.

## 🗂️ Estrutura do Projeto

```
├── dados.json            # fonte de dados para o json-server
├── index.html            # template HTML base
├── public/               # ativos estáticos e CSS
│   ├── assets/css/       # estilos (body, imagem, links, nome, qrcode, etc.)
│   └── assets/images/    # ícones, fotos de usuários, QR codes
├── src/                  # código TypeScript fonte
│   ├── api/              # cliente de API (usuarioApi.ts)
│   ├── ui/               # helpers de UI (inserirInformacoes, mensagens)
│   └── main.ts           # ponto de entrada
├── tsconfig.json         # configuração do TypeScript
├── package.json          # scripts e dependências npm
└── vite.config.ts        # configuração do Vite 
```

## 📝 Personalização

- Edite `dados.json` para adicionar, remover ou modificar perfis de usuários e seus links.

## 📜 Licença

Este projeto está licenciado sob a **Licença MIT**. Veja [LICENSE](LICENSE) para mais detalhes.