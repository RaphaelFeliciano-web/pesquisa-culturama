# 📝 Pesquisa Culturama

Um formulário de pesquisa interativo desenvolvido como um projeto de estudo para explorar a integração entre JavaScript puro e React. A aplicação permite que os usuários enviem suas respostas, que são exibidas em tempo real e persistem no navegador.

## 🚀 Demo Online

Você pode testar o projeto em funcionamento no seguinte link:

**[Clique aqui para ver o projeto online](https://raphaelfeliciano-web.github.io/pesquisa-culturama/)**

## ✨ Funcionalidades

- **Formulário Interativo**: Validação de campos e feedback visual para o usuário.
- **Renderização em Tempo Real**: As respostas enviadas aparecem instantaneamente na lista, sem a necessidade de recarregar a página.
- **Persistência de Dados**: Os dados são salvos no `LocalStorage` do navegador, mantendo as respostas mesmo após fechar e reabrir a aba.
- **Arquitetura Híbrida**: O formulário é controlado por JavaScript puro, que se comunica com a aplicação React através de Eventos Customizados (`CustomEvent`), demonstrando uma integração desacoplada.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído com as seguintes tecnologias:

- **React**: Para a renderização declarativa e reativa da lista de respostas.
- **Vite**: Como ferramenta de build e servidor de desenvolvimento rápido.
- **JavaScript (ES6+)**: Para a lógica do formulário e comunicação com o React.
- **HTML5**: Para a estrutura semântica do formulário.
- **CSS3**: Para a estilização e layout responsivo.

## ⚙️ Como Rodar o Projeto Localmente

Siga os passos abaixo para executar o projeto em sua máquina.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/RaphaelFeliciano-web/pesquisa-culturama.git
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd pesquisa-culturama
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

O projeto abrirá automaticamente em seu navegador no endereço `http://localhost:****`.

## 📦 Gerando a Versão de Produção

Para gerar os arquivos otimizados para fazer o deploy (publicar na internet), execute:

```bash
npm run build
```

Os arquivos finais estarão disponíveis na pasta `dist/`, prontos para serem enviados para um serviço de hospedagem como o GitHub Pages, Vercel ou Netlify.