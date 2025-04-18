# Pascoa Parafuso 🍫

Este é um projeto de e-commerce simples para exibição e venda de chocolates importados. A aplicação é construída com HTML, CSS e JavaScript, e utiliza um arquivo JSON para armazenar os dados dos produtos.

## Estrutura do Projeto

### Arquivos principais

- **`index.html`**: Página principal do projeto, contendo a estrutura básica do site.
- **`styles.css`**: Arquivo de estilos para personalizar o layout e design do site.
- **`script.js`**: Script responsável por carregar os produtos dinamicamente e implementar a funcionalidade de filtro por categoria.
- **`products.json`**: Arquivo JSON contendo os dados dos produtos, como título, descrição, preço, imagem e categoria.
- **`img/`**: Pasta contendo as imagens dos produtos.

---

## Funcionalidades

1. **Exibição de Produtos**:
   - Os produtos são carregados dinamicamente a partir do arquivo `products.json`.
   - Cada produto é exibido em um cartão com imagem, título, descrição, preço (antigo e atual) e um botão para compra via WhatsApp.

2. **Filtro por Categoria**:
   - Um seletor de categorias permite filtrar os produtos exibidos com base em suas categorias, como "Chocolate amargo 70%", "Chocolate ao Leite", etc.

3. **Compra via WhatsApp**:
   - Cada produto possui um botão que redireciona o usuário para o WhatsApp com uma mensagem pré-formatada para iniciar a compra.

---

## Como Executar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone <url-do-repositorio>
   cd parafuso-pascoa
