// script.js

document.addEventListener('DOMContentLoaded', function() {
    const imagenHeader = document.querySelector('.imagen-header');
    if (imagenHeader) {
        imagenHeader.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
})




const productData = {
    pizzas: [
        { image: 'img.lepope/pizza1.jpeg', title: 'Pizza Caprese', price: '$5.000' },
        { image: 'img.lepope/pizza1.jpeg', title: 'Pizza Caprese', price: '$14.99' },
        // Agrega más productos de pizzas aquí
    ],
    'pizza-metro': [
        { image: 'img.lepope/pizzaxmetro1.jpeg', title: 'Pizza x Metro Especial', price: '$25.99' },
        { image: 'img.lepope/pizzaxmetro2.jpeg', title: 'Pizza x Metro Especial', price: '$25.99' },
        { image: 'img.lepope/pizzaxmetro3.jpeg', title: 'Pizza x Metro Especial', price: '$25.99' },
        { image: 'img.lepope/pizzaxmetro4.jpeg', title: 'Pizza x Metro Especial', price: '$25.99' },
      
        // Agrega más productos de pizza x metro aquí
    ],
    hamburguesas: [
        { image: 'img.lepope/hamburguesapope.jpeg', title: 'Hamburguesa Clásica', price: '$9.99' },
        { image: 'img.lepope/hamburguesa.jpeg', title: 'Hamburguesa Clásica', price: '$9.99' },
        { image: 'img.lepope/hamburguesacompleta.jpeg', title: 'Hamburguesa Clásica', price: '$9.99' },
        { image: 'img.lepope/promo-hamburguesa.jpeg', title: 'Hamburguesa Clásica', price: '$9.99' },
       
        // Agrega más productos de hamburguesas aquí
    ],
    empanadas: [
        { image: 'img.lepope/empanadasdecarne.jpeg', title: 'Empanada de Carne', price: '$3.99' },
        { image: 'img.lepope/empanadasdevacio.jpeg', title: 'Empanada de Jamón y Queso', price: '$4.49' },
        { image: 'img.lepope/empanadasdepollo.jpeg', title: 'Empanada de Jamón y Queso', price: '$4.49' },
        { image: 'img.lepope/empanadasdevacio.jpeg', title: 'Empanada de Jamón y Queso', price: '$4.49' },
        // Agrega más productos de empanadas aquí
    ],
   
    acompañamientos: [ 
        { image: 'img.lepope/papasfritas-caprese.jpeg', title: 'Papas caprese', price: '$3.500' },
        { image: 'img.lepope/papas-quesoazul.jpeg', title: 'Papas Queso Azul', price: '$4.49' },
        { image: 'img.lepope/armando-papas-caprese.jpeg', title: 'Papas Caprese', price: '$4.49' },
        // Agrega más productos de empanadas aquí
    ],

    Postres: [ 
        { image: 'img.lepope/postreoreo.jpeg', title: 'Postre Oreo', price: '$4.49' },
        { image: 'img.lepope/Postretiramisu.jpeg', title: 'Postre Tiramisu', price: '$4.49' },
        { image: 'img.lepope/postretiramisudedulcedeleche.jpeg', title: 'Tiramisu De Dulce De Leche', price: '$4.49' },
        { image: 'img.lepope/postrechessecake.jpeg', title: 'Postre Chessecake', price: '$4.49' },
        // Agrega más productos de empanadas aquí
    ],
};

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-list a');
    const container = document.getElementById('product-container');

    function renderSection(sectionId) {
        // Limpiar el contenedor
        container.innerHTML = '';

        // Obtener los datos del producto para la sección dada
        const products = productData[sectionId];
        if (products) {
            products.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('product-section');

                productElement.innerHTML = `
                    <h2>${sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}</h2>
                    <div class="product-item">
                        <img src="${product.image}" alt="${product.title}">
                        <h3>${product.title}</h3>
                        <p>Precio: ${product.price}</p>
                    </div>
                `;
                container.appendChild(productElement);
            });
        }
    }

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Previene el comportamiento predeterminado del enlace
            const targetId = link.getAttribute('data-target');
            renderSection(targetId);
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-list a');
    const container = document.getElementById('product-container');

    function renderSection(sectionId) {
        // Limpiar el contenedor
        container.innerHTML = '';

        // Obtener los datos del producto para la sección dada
        const products = productData[sectionId];
        if (products) {
            const productList = document.createElement('div');
            productList.classList.add('product-list'); // Cambiado a 'product-list'

            products.forEach(product => {
                const productItem = document.createElement('div');
                productItem.classList.add('product-item');

                productItem.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <div class="product-info">
                        <h3>${product.title}</h3>
                        <p>Precio: ${product.price}</p>
                    </div>
                `;
                productList.appendChild(productItem);
            });

            container.appendChild(productList);
        }
    }

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Previene el comportamiento predeterminado del enlace
            const targetId = link.getAttribute('data-target');
            renderSection(targetId);
        });
    });
});










