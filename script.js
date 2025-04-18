// Função para carregar o arquivo JSON
async function fetchProducts() {
    const response = await fetch('./products.json'); // Carrega o arquivo JSON
    return await response.json(); // Retorna os dados como objeto JavaScript
}

// Função para criar os cartões dinamicamente
async function createProductCards(category = null) {
    const products = await fetchProducts(); // Obtém os produtos do JSON
    const main = document.querySelector('main'); // Seleciona o elemento <main>
    main.innerHTML = ''; // Limpa os cartões existentes

    // Filtra os produtos pela categoria, se uma categoria for selecionada
    const filteredProducts = category
        ? products.filter(product => product.category === category)
        : products;

    filteredProducts.forEach(product => {
        // Cria o elemento do cartão
        const card = document.createElement('div');
        card.classList.add('product-card');

        // Adiciona o conteúdo do cartão
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <div class="details">
            <div class="title">${product.title}</div>
            <div class="description">${product.description}</div>
            <div class="price">
                <span class="old-price">${product.oldPrice}</span>
                <span class="new-price">${product.price}</span>
            </div>
            <a href="https://wa.me/5571991706957?text=${encodeURIComponent(
                `Oi Jéssica! Estou interessado(a) no chocolate ${product.title}. Poderia me informar como posso adquiri-lo?`
            )}" class="buy-button" target="_blank">
                <img src="https://img.icons8.com/color/48/000000/whatsapp.png" alt="WhatsApp Icon" style="width: 20px; vertical-align: middle; margin-right: 5px;">
                Compre no WhatsApp
            </a>
            </div>
        `;

        // Adiciona o cartão ao elemento <main>
        main.appendChild(card);
    });
}

// Função para configurar o seletor de categorias
function setupCategorySelector() {
    const categorySelect = document.getElementById('category-select');

    categorySelect.addEventListener('change', () => {
        const selectedCategory = categorySelect.value; // Obtém o valor selecionado
        createProductCards(selectedCategory); // Filtra os produtos pela categoria
    });
}

// Inicializa a página
document.addEventListener('DOMContentLoaded', () => {
    createProductCards(); // Exibe todos os produtos inicialmente
    setupCategorySelector(); // Configura o seletor de categorias
});