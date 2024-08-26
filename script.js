// Sample Product Data
const products = {
    vegetables: [
        { name: "Onion (Pyaz)", weight: "0.95 - 1.05 kg", price: 59, originalPrice: 78, discount: 24, imgSrc: "https://via.placeholder.com/150" },
        { name: "Desi Tomato (Tamatar)", weight: "500 g", price: 37, originalPrice: 49, discount: 24, imgSrc: "https://via.placeholder.com/150" },
        { name: "Orange Carrot (Gajar)", weight: "200 g - 250 g", price: 21, originalPrice: 26, discount: 19, imgSrc: "https://via.placeholder.com/150" },
        { name: "Green Chilli (Hari Mirch)", weight: "100 g", price: 15, originalPrice: 20, discount: 25, imgSrc: "https://via.placeholder.com/150" },
        { name: "Lemon", weight: "220 g - 250 g", price: 73, originalPrice: 96, discount: 23, imgSrc: "https://via.placeholder.com/150" },
        { name: "Potato", weight: "1 kg", price: 35, originalPrice: 45, discount: 22, imgSrc: "https://via.placeholder.com/150" },
        { name: "Cabbage", weight: "500 g", price: 30, originalPrice: 38, discount: 21, imgSrc: "https://via.placeholder.com/150" },
        { name: "Spinach", weight: "300 g", price: 28, originalPrice: 34, discount: 18, imgSrc: "https://via.placeholder.com/150" },
        { name: "Garlic", weight: "250 g", price: 40, originalPrice: 50, discount: 20, imgSrc: "https://via.placeholder.com/150" },
        { name: "Ginger", weight: "250 g", price: 50, originalPrice: 60, discount: 16, imgSrc: "https://via.placeholder.com/150" },
        { name: "Onion (Pyaz)", weight: "0.95 - 1.05 kg", price: 59, originalPrice: 78, discount: 24, imgSrc: "https://via.placeholder.com/150" },
        { name: "Desi Tomato (Tamatar)", weight: "500 g", price: 37, originalPrice: 49, discount: 24, imgSrc: "https://via.placeholder.com/150" },
        { name: "Orange Carrot (Gajar)", weight: "200 g - 250 g", price: 21, originalPrice: 26, discount: 19, imgSrc: "https://via.placeholder.com/150" },
        { name: "Green Chilli (Hari Mirch)", weight: "100 g", price: 15, originalPrice: 20, discount: 25, imgSrc: "https://via.placeholder.com/150" },
        { name: "Lemon", weight: "220 g - 250 g", price: 73, originalPrice: 96, discount: 23, imgSrc: "https://via.placeholder.com/150" },
        { name: "Potato", weight: "1 kg", price: 35, originalPrice: 45, discount: 22, imgSrc: "https://via.placeholder.com/150" },
        { name: "Cabbage", weight: "500 g", price: 30, originalPrice: 38, discount: 21, imgSrc: "https://via.placeholder.com/150" },
        { name: "Spinach", weight: "300 g", price: 28, originalPrice: 34, discount: 18, imgSrc: "https://via.placeholder.com/150" },
        { name: "Garlic", weight: "250 g", price: 40, originalPrice: 50, discount: 20, imgSrc: "https://via.placeholder.com/150" },
        { name: "Ginger", weight: "250 g", price: 50, originalPrice: 60, discount: 16, imgSrc: "https://via.placeholder.com/150" }
    ],
    fruits: [
        { name: "Apple", weight: "1 kg", price: 150, originalPrice: 180, discount: 17, imgSrc: "https://via.placeholder.com/150" },
        { name: "Banana", weight: "1 dozen", price: 60, originalPrice: 80, discount: 25, imgSrc: "https://via.placeholder.com/150" },
        { name: "Orange", weight: "1 kg", price: 80, originalPrice: 100, discount: 20, imgSrc: "https://via.placeholder.com/150" },
        { name: "Grapes", weight: "500 g", price: 90, originalPrice: 110, discount: 18, imgSrc: "https://via.placeholder.com/150" },
        { name: "Pineapple", weight: "1 piece", price: 70, originalPrice: 90, discount: 22, imgSrc: "https://via.placeholder.com/150" },
        { name: "Strawberry", weight: "250 g", price: 120, originalPrice: 150, discount: 20, imgSrc: "https://via.placeholder.com/150" },
        { name: "Papaya", weight: "1 piece", price: 50, originalPrice: 70, discount: 28, imgSrc: "https://via.placeholder.com/150" },
        { name: "Kiwi", weight: "3 pieces", price: 90, originalPrice: 110, discount: 18, imgSrc: "https://via.placeholder.com/150" },
        { name: "Mango", weight: "1 kg", price: 100, originalPrice: 130, discount: 23, imgSrc: "https://via.placeholder.com/150" },
        { name: "Watermelon", weight: "1 piece", price: 40, originalPrice: 60, discount: 33, imgSrc: "https://via.placeholder.com/150" }
    ]
    // You can add more categories as needed
};






let cartCount = 0;

// Function to render products based on category
function renderProducts(category) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    products[category].forEach((product, index) => {

        const productCard = document.createElement("div");
        productCard.className = "col-12 col-sm-6 col-lg-2-4 col-md-4 col-lg-4 col-xl-4 mb-4";
        productCard.innerHTML = `
            <div class="product-card ">
                <div class="discount-tag">${product.discount}% <br/> OFF</div>
                <img src="${product.imgSrc}" alt="${product.name}">

                <div class="dev-mins"> <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" />  8 MINS</div>
                <h5>${product.name}</h5>
                <p class="product-weight">${product.weight}</p>
                <div class="buy-button-section">
                <p><strong>₹${product.price}</strong> <br/> <span class="text-muted"><s>₹${product.originalPrice}</s></span></p>
                <button class=" add-to-cart-btn">ADD</button>
                <div>
            </div>
        `;
        productList.appendChild(productCard);
    });
}

// Initial rendering of a default category
renderProducts("vegetables");

// Category click event listener
document.querySelectorAll("#category-list li a").forEach((categoryLink, index) => {

    console.log(index, "indexindex")
    categoryLink.addEventListener("click", function () {


        // Remove 'active' class from all links
        document.querySelectorAll("#category-list li a").forEach((link) => {
            link.classList.remove("active-slide");
        });

        // Add 'active' class to the clicked link
        this.classList.add("active-slide");


        const category = this.getAttribute("data-category");
        renderProducts(category);
    });
});

// Search functionality
document.getElementById("search-input").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    Object.keys(products).forEach(category => {
        products[category].forEach(product => {
            if (product.name.toLowerCase().includes(query)) {
                const productCard = document.createElement("div");
                productCard.className = "col-12 col-sm-6 col-lg-2-4 col-md-4 col-lg-4 col-xl-4 mb-4";
                productCard.innerHTML = `
                    <div class="product-card">
                <div class="discount-tag">${product.discount}% <br/> OFF</div>
                        <img src="${product.imgSrc}" alt="${product.name}">
                        <h5>${product.name}</h5>
                        <p>${product.weight}</p>
                        <p><strong>₹${product.price}</strong> <span class="text-muted"><s>₹${product.originalPrice}</s></span></p>
                        <button class="btn btn-success add-to-cart-btn">Add to Cart</button>
                    </div>
                `;
                productList.appendChild(productCard);
            }
        });
    });
});

// Sort functionality
document.getElementById("sort-options").addEventListener("change", function () {
    const sortBy = this.value;
    const category = document.querySelector("#category-list li a.active")?.getAttribute("data-category") || "vegetables";

    let sortedProducts = [...products[category]];

    switch (sortBy) {
        case "price-low-high":
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case "price-high-low":
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case "discount":
            sortedProducts.sort((a, b) => b.discount - a.discount);
            break;
        default:
            // If "Relevance" or any other option is selected, no need to sort.
            break;
    }

    renderSortedProducts(sortedProducts);
});

// Function to render sorted products
function renderSortedProducts(sortedProducts) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    sortedProducts.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "col-12 col-sm-6 col-lg-2-4 col-md-4 col-lg-4 col-xl-4 mb-4";
        productCard.innerHTML = `
            <div class="product-card">
                <div class="discount-tag">${product.discount}% <br/> OFF</div>
                <img src="${product.imgSrc}" alt="${product.name}">
                <h5>${product.name}</h5>
                <p>${product.weight}</p>
                <p><strong>₹${product.price}</strong> <span class="text-muted"><s>₹${product.originalPrice}</s></span></p>
                <button class="btn btn-success add-to-cart-btn">Add to Cart</button>
            </div>
        `;
        productList.appendChild(productCard);
    });
}







// Cart functionality
document.getElementById("product-list").addEventListener("click", function (e) {
    if (e.target.classList.contains("add-to-cart-btn")) {
        cartCount++;
        document.getElementById("cardItem").innerText = `${cartCount}`;
    }
});



//sidebar

function closeLightbox() {
    document.getElementById('navbarLightbox').classList.remove('show');
}

document.querySelector('.navbar-toggler').addEventListener('click', function () {
    document.getElementById('navbarLightbox').classList.add('show');
});