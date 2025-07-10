// products.js
document.addEventListener('DOMContentLoaded', function() {
    // Dummy Product Data - In a real application, this would come from an API
    const productsData = [
        // Packaged Food (Price ranges: Low <50, Medium 50-200, High 201-500, Premium >500)
        { id: 1, name: "Premium Instant Coffee", brand: "Nescafe", category: "packaged-food", price: 150, description: "Rich aroma, perfect for every morning start. Available in 100g packs.", image: "https://www.nescafe.com/in/sites/default/files/2024-09/Nescafe%20All%20in%201%20Share%20Bag_Front%20Render.png" },
        { id: 2, name: "Assorted Biscuits Pack", brand: "Britannia", category: "packaged-food", price: 80, description: "A delightful mix of classic and popular biscuits. 500g family pack.", image: "https://m.media-amazon.com/images/I/71i3nPVLClL.jpg" },
        { id: 3, name: "Organic Basmati Rice", brand: "Daawat", category: "packaged-food", price: 320, description: "Premium long-grain Basmati rice, ideal for biryani and pulao. 1kg pack.", image: "https://m.media-amazon.com/images/I/719YfS1K6xL._UF1000,1000_QL80_.jpg" },
        { id: 4, name: "Whole Wheat Pasta", brand: "Borges", category: "packaged-food", price: 120, description: "Healthy and delicious whole wheat pasta, cooks in 10 minutes. 500g pack.", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTmOslh_TAojPjalhE0GBrtP6kMWJGZ_GuT3BhxaT_ZeTayCWKNsI0A85oK_kz7Jcp95GmiBgUwIft9Zuc_7meAEsu5BdDrENjVj39YdQLYb2RLRcbVhiix79I" },
        { id: 5, name: "Instant Noodles (Multipack)", brand: "Maggi", category: "packaged-food", price: 75, description: "Quick and tasty noodles, a favorite for all ages. Pack of 4.", image: "https://www.bbassets.com/media/uploads/p/l/1230073_3-maggi-2-minute-instant-noodles-masala.jpg" },
        { id: 6, name: "Tomato Ketchup", brand: "Heinz", category: "packaged-food", price: 95, description: "Classic tomato ketchup for all your snacks. 500g bottle.", image: "https://m.media-amazon.com/images/I/714EBeI5hyL.jpg" },
        { id: 25, name: "Snack Crackers", brand: "Parle", category: "packaged-food", price: 30, description: "Light and crispy crackers, perfect for tea time. 100g pack.", image: "https://m.media-amazon.com/images/I/81jfMoSD4SL._UF1000,1000_QL80_.jpg" },
        { id: 26, name: "Dairy Milk Chocolate", brand: "Cadbury", category: "packaged-food", price: 120, description: "Classic milk chocolate bar. 100g.", image: "https://cococart.in/cdn/shop/products/1CH1644.png?v=1668520772" },
        { id: 30, name: "Coffee Powder", brand: "Bru", category: "packaged-food", price: 220, description: "Finely ground coffee for a rich brew. 200g pack.", image: "https://m.media-amazon.com/images/I/61zMrAJcQXL._UF1000,1000_QL80_.jpg" },
        { id: 31, name: "Cookies", brand: "Sunfeast", category: "packaged-food", price: 60, description: "Delicious chocolate chip cookies. 150g pack.", image: "https://via.placeholder.com/400x200/A0C4FF/000000?text=Cookies" },
        { id: 35, name: "Instant Soup Mix", brand: "Knorr", category: "packaged-food", price: 40, description: "Quick and easy soup for a warm meal. Single serving.", image: "https://via.placeholder.com/400x200/A0C4FF/000000?text=Soup+Mix" },

        // Beverages
        { id: 7, name: "Orange Juice (1L)", brand: "Real", category: "beverages", price: 105, description: "100% pure orange juice, no added sugar. 1-liter carton.", image: "https://via.placeholder.com/400x200/A0C4FF/000000?text=Orange+Juice" },
        { id: 8, name: "Carbonated Soft Drink (Can)", brand: "Coca-Cola", category: "beverages", price: 40, description: "Refreshing cola in a convenient can. 300ml.", image: "https://via.placeholder.com/400x200/A0C4FF/000000?text=CocaCola" },
        { id: 9, name: "Mineral Water Bottle (1L)", brand: "Kinley", category: "beverages", price: 20, description: "Pure and safe mineral water for hydration. 1-liter bottle.", image: "https://via.placeholder.com/400x200/A0C4FF/000000?text=Water" },
        { id: 10, name: "Green Tea Bags", brand: "Lipton", category: "beverages", price: 180, description: "Healthy and invigorating green tea. Pack of 50 tea bags.", image: "https://via.placeholder.com/400x200/A0C4FF/000000?text=Green+Tea" },
        { id: 11, name: "Energy Drink", brand: "Red Bull", category: "beverages", price: 120, description: "Boost your energy with this classic energy drink. 250ml can.", image: "https://via.placeholder.com/400x200/A0C4FF/000000?text=Energy+Drink" },
        { id: 27, name: "Cold Drink (Diet)", brand: "Pepsi", category: "beverages", price: 45, description: "Sugar-free cola. 300ml can.", image: "https://via.placeholder.com/400x200/A0C4FF/000000?text=Diet+Pepsi" },
        { id: 32, name: "Fruit Nectar (Mixed Fruit)", brand: "Paper Boat", category: "beverages", price: 50, description: "Traditional Indian drinks with a modern twist. 250ml.", image: "https://via.placeholder.com/400x200/A0C4FF/000000?text=Fruit+Nectar" },

        // Personal Care
        { id: 12, name: "Moisturizing Soap Bar (Multipack)", brand: "Dove", category: "personal-care", price: 160, description: "Gentle cleansing with moisturizing benefits. Pack of 3.", image: "https://via.placeholder.com/400x200/A0C4FF/000000?text=Dove+Soap" },
        { id: 13, name: "Herbal Shampoo (400ml)", brand: "Himalaya", category: "personal-care", price: 250, description: "Natural ingredients for healthy and shiny hair.", image: "https://via.placeholder.com/400x200/A0C4FF/000000?text=Shampoo" },
        { id: 14, name: "Toothpaste (Advanced Whitening)", brand: "Colgate", category: "personal-care", price: 90, description: "For brighter teeth and fresh breath. 150g tube.", image: "https://via.placeholder.com/400x200/A0C4FF/000000?text=Toothpaste" },
        { id: 15, name: "Body Lotion (Deep Nourishment)", brand: "Nivea", category: "personal-care", price: 300, description: "24-hour hydration for smooth skin. 250ml bottle.", image: "https://via.placeholder.com/400x200/A0C4FF/000000?text=Body+Lotion" },
        { id: 16, name: "Hand Wash (Germ Protection)", brand: "Dettol", category: "personal-care", price: 70, description: "Kills 99.9% of germs. 200ml pump bottle.", image: "https://via.placeholder.com/400x200/A0C4FF/000000?text=Hand+Wash" },
        { id: 23, name: "Diapers (Large Size)", brand: "Pampers", category: "personal-care", price: 650, description: "Comfortable and absorbent diapers for babies. Pack of 50.", image: "https://via.placeholder.com/400x200/A0C4FF/000000?text=Diapers" },
        { id: 24, name: "Baby Wipes", brand: "Huggies", category: "personal-care", price: 90, description: "Gentle and soft baby wipes. Pack of 80.", image: "https://via.placeholder.com/400x200/A0C4FF/000000?text=Baby+Wipes" },
        { id: 28, name: "Hair Oil", brand: "Dabur Amla", category: "personal-care", price: 180, description: "Nourishing hair oil for strong hair. 200ml bottle.", image: "https://via.placeholder.com/400x200/A0C4FF/000000?text=Hair+Oil" },
        { id: 33, name: "Shaving Cream", brand: "Gillette", category: "personal-care", price: 85, description: "Smooth shave with rich lather. 60g tube.", image: "https://via.placeholder.com/400x200/A0C4FF/000000?text=Shaving+Cream" },


        // Household Products
        { id: 17, name: "Dishwashing Liquid (Lemon)", brand: "Vim", category: "household", price: 110, description: "Powerful grease cleaning, fresh lemon scent. 500ml bottle.", image: "https://via.placeholder.com/400x200/A0C4FF/000000?text=Dishwash" },
        { id: 18, name: "Laundry Detergent Powder", brand: "Surf Excel", category: "household", price: 450, description: "Removes tough stains, keeps clothes bright. 1kg pack.", image: "https://via.placeholder.com/400x200/A0C4FF/000000?text=Detergent" },
        { id: 19, name: "Toilet Cleaner", brand: "Haripic", category: "household", price: 90, description: "Effective toilet bowl cleaner for a sparkling clean. 500ml bottle.", image: "https://via.placeholder.com/400x200/A0C4FF/000000?text=Toilet+Cleaner" },
        { id: 20, name: "Paper Towel Rolls", brand: "Viva", category: "household", price: 130, description: "Super absorbent paper towels for spills and cleaning. Pack of 2 rolls.", image: "https://via.placeholder.com/400x200/A0C4FF/000000?text=Paper+Towels" },
        { id: 21, name: "All-Purpose Cleaner", brand: "Lizol", category: "household", price: 180, description: "Disinfects and cleans multiple surfaces. 900ml bottle.", image: "https://via.placeholder.com/400x200/A0C4FF/000000?text=All+Purpose+Cleaner" },
        { id: 22, name: "Floor Cleaner (Floral)", brand: "Domex", category: "household", price: 160, description: "Keeps floors clean and fragrant. 1L bottle.", image: "https://via.placeholder.com/400x200/A0C4FF/000000?text=Floor+Cleaner" },
        { id: 29, name: "Insect Repellent Spray", brand: "Goodknight", category: "household", price: 210, description: "Effective protection against mosquitoes. 100ml spray.", image: "https://via.placeholder.com/400x200/A0C4FF/000000?text=Insect+Repellent" },
        { id: 34, name: "Glass Cleaner", brand: "Colin", category: "household", price: 100, description: "Sparkling clean glass surfaces. 500ml spray.", image: "https://via.placeholder.com/400x200/A0C4FF/000000?text=Glass+Cleaner" },
    ];

    // Get DOM elements
    const productsGrid = document.getElementById('productsGrid');
    const productSearch = document.getElementById('productSearch');
    const categoryFilter = document.getElementById('categoryFilter');
    const priceRangeFilter = document.getElementById('priceRange');
    const brandFilter = document.getElementById('brandFilter');
    const applyFiltersBtn = document.getElementById('applyFilters');
    const resetFiltersBtn = document.getElementById('resetFilters');
    const productPagination = document.getElementById('productPagination');

    const productsPerPage = 9; // Number of products to display per page
    let currentPage = 1; // Current active page

    /**
     * Renders product cards to the DOM based on the provided array of products.
     * Also handles pagination display.
     * @param {Array} productsToDisplay - The array of products to render.
     */
    function renderProducts(productsToDisplay) {
        productsGrid.innerHTML = ''; // Clear existing products

        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const paginatedProducts = productsToDisplay.slice(startIndex, endIndex);

        if (paginatedProducts.length === 0) {
            productsGrid.innerHTML = '<div class="col-12 text-center py-5"><p class="lead text-muted">No products found matching your criteria.</p></div>';
            productPagination.innerHTML = ''; // Clear pagination if no products
            return;
        }

        paginatedProducts.forEach(product => {
            const productCardHtml = `
                <div class="col product-item-card" data-category="${product.category}" data-price="${product.price}" data-brand="${product.brand.toLowerCase()}">
                    <div class="custom-card">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text brand-name">Brand: ${product.brand}</p>
                            <p class="card-text">${product.description}</p>
                            <p class="price-placeholder">₹ ${product.price.toFixed(2)}</p>
                            <a href="#" class="btn btn-primary-custom btn-sm mt-auto">Add to Cart</a>
                        </div>
                    </div>
                </div>
            `;
            productsGrid.insertAdjacentHTML('beforeend', productCardHtml);
        });

        renderPagination(productsToDisplay.length);
    }

    /**
     * Filters the global productsData based on current filter selections.
     * Resets current page to 1 after filtering.
     */
    function filterProducts() {
        const searchTerm = productSearch.value.toLowerCase().trim();
        const selectedCategory = categoryFilter.value;
        const selectedPriceRange = priceRangeFilter.value;
        const searchBrand = brandFilter.value.toLowerCase().trim();

        let filtered = productsData.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                                  product.description.toLowerCase().includes(searchTerm);

            const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;

            const matchesPrice = (function() {
                switch (selectedPriceRange) {
                    case 'all': return true;
                    case 'low': return product.price < 50;
                    case 'medium': return product.price >= 50 && product.price <= 200;
                    case 'high': return product.price > 200 && product.price <= 500;
                    case 'premium': return product.price > 500;
                    default: return true;
                }
            })();

            const matchesBrand = product.brand.toLowerCase().includes(searchBrand);

            return matchesSearch && matchesCategory && matchesPrice && matchesBrand;
        });

        currentPage = 1; // Reset to first page after filtering
        renderProducts(filtered);
    }

    /**
     * Renders the pagination controls based on the total number of products.
     * @param {number} totalProducts - The total count of products after filtering.
     */
    function renderPagination(totalProducts) {
        productPagination.innerHTML = ''; // Clear existing pagination
        const totalPages = Math.ceil(totalProducts / productsPerPage);

        if (totalPages <= 1) {
            return; // No pagination needed for 1 or fewer pages
        }

        // Previous button
        const prevLi = document.createElement('li');
        prevLi.classList.add('page-item');
        if (currentPage === 1) prevLi.classList.add('disabled');
        prevLi.innerHTML = `<a class="page-link" href="#" tabindex="-1" aria-disabled="${currentPage === 1 ? 'true' : 'false'}">Previous</a>`;
        prevLi.addEventListener('click', function(e) {
            e.preventDefault();
            if (currentPage > 1) {
                currentPage--;
                filterProducts(); // Re-render with current filters but new page
            }
        });
        productPagination.appendChild(prevLi);

        // Page numbers
        let startPage = Math.max(1, currentPage - 1);
        let endPage = Math.min(totalPages, currentPage + 1);

        if (currentPage === 1) {
            endPage = Math.min(totalPages, 3);
        } else if (currentPage === totalPages) {
            startPage = Math.max(1, totalPages - 2);
        }

        for (let i = startPage; i <= endPage; i++) {
            const pageLi = document.createElement('li');
            pageLi.classList.add('page-item');
            if (i === currentPage) pageLi.classList.add('active');
            pageLi.innerHTML = `<a class="page-link" href="#">${i}</a>`;
            pageLi.addEventListener('click', function(e) {
                e.preventDefault();
                currentPage = i;
                filterProducts();
            });
            productPagination.appendChild(pageLi);
        }

        // Add ellipsis if needed
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) { // Only add ellipsis if there's at least one page between last visible and total
                const ellipsisLi = document.createElement('li');
                ellipsisLi.classList.add('page-item', 'disabled');
                ellipsisLi.innerHTML = `<span class="page-link">...</span>`;
                productPagination.appendChild(ellipsisLi);
            }
            if (endPage < totalPages) { // Always show last page if not already shown
                const lastPageLi = document.createElement('li');
                lastPageLi.classList.add('page-item');
                lastPageLi.innerHTML = `<a class="page-link" href="#">${totalPages}</a>`;
                lastPageLi.addEventListener('click', function(e) {
                    e.preventDefault();
                    currentPage = totalPages;
                    filterProducts();
                });
                productPagination.appendChild(lastPageLi);
            }
        }


        // Next button
        const nextLi = document.createElement('li');
        nextLi.classList.add('page-item');
        if (currentPage === totalPages) nextLi.classList.add('disabled');
        nextLi.innerHTML = `<a class="page-link" href="#">Next</a>`;
        nextLi.addEventListener('click', function(e) {
            e.preventDefault();
            if (currentPage < totalPages) {
                currentPage++;
                filterProducts();
            }
        });
        productPagination.appendChild(nextLi);
    }

    // Event Listeners for filters and buttons
    applyFiltersBtn.addEventListener('click', filterProducts);
    resetFiltersBtn.addEventListener('click', function() {
        productSearch.value = '';
        categoryFilter.value = 'all';
        priceRangeFilter.value = 'all';
        brandFilter.value = '';
        currentPage = 1; // Reset to first page
        filterProducts(); // Re-render all products (no filters applied)
    });

    // Initial render of products when the page loads
    filterProducts(); // This will initially render all products and setup pagination
});