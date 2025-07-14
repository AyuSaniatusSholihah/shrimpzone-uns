document.addEventListener('DOMContentLoaded', () => {
    // ==========================================================
    // BAGIAN UNTUK MOBILE MENU DAN TESTIMONIAL SLIDER
    // (Jika elemen ini ada di halaman yang sedang dimuat)
    // ==========================================================
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) { // Cek apakah elemen ini ada (misalnya di halaman Home)
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
        });
    }

    const testimonialSlider = document.getElementById('testimonial-slider');
    const testimonialDots = document.querySelectorAll('.testimonial-dot'); // Ini akan kosong jika tidak ada di DOM

    if (testimonialSlider && testimonialDots.length > 0) { // Cek apakah elemen ini ada (misalnya di halaman Home)
        let currentSlide = 0;
        const testimonialSlides = document.querySelectorAll('.testimonial-slide');
        const slideCount = testimonialSlides.length;

        function showSlide(index) {
            if (testimonialSlides.length === 0) return; // Pastikan ada slide
            testimonialSlider.style.transform = `translateX(-${index * 100}%)`;

            // Update active dot
            testimonialDots.forEach((dot, i) => {
                if (i === index) {
                    dot.classList.add('active-dot');
                } else {
                    dot.classList.remove('active-dot');
                }
            });

            currentSlide = index;
        }

        testimonialDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
            });
        });

        // Auto slide change
        setInterval(() => {
            let nextSlide = (currentSlide + 1) % slideCount;
            showSlide(nextSlide);
        }, 5000);

        // Initially show first slide
        showSlide(0);
    }


    // ==========================================================
    // FUNGSI UMUM (Bisa digunakan oleh berbagai bagian skrip)
    // ==========================================================

    // Fungsi untuk menghasilkan bintang rating (digunakan di daftar dan detail produk)
    const generateStars = (rating) => {
        let starsHtml = '';
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            starsHtml += '<i class="fas fa-star gold"></i>';
        }
        if (hasHalfStar) {
            starsHtml += '<i class="fas fa-star grey"></i>'; // Atau bisa juga: <i class="fas fa-star-half-alt gold"></i> jika ada ikon half-star
        }
        // Isi sisa bintang dengan abu-abu (total 5 bintang)
        for (let i = 0; i < (5 - Math.ceil(rating)); i++) {
            starsHtml += '<i class="fas fa-star grey"></i>';
        }
        return starsHtml;
    };


    // ==========================================================
    // BAGIAN UNTUK HALAMAN DAFTAR PRODUK (product_list.html)
    // ==========================================================
    const productGrid = document.getElementById('product-grid');
    if (productGrid) { // Cek apakah elemen product-grid ada di halaman ini
        // --- Data Produk untuk Daftar (SIMULASI - DI REAL-APP AMBIL DARI BACKEND) ---
        const products = [
            {
                id: 'prod1',
                name: 'Udang Vaname Segar Ukuran Medium',
                imageUrl: 'images/udangvename.png', // <-- Pastikan path gambar benar
                rating: 4.5,
                reviews: 127,
                price: 95000,
                unit: '/ Kg',
                isBestSeller: true,
                isNew: false,
                variants: [{ weight: '500g', price: 45000, stock: 30 }] // Tambahkan varian default untuk tombol keranjang
            },
            {
                id: 'prod2',
                name: 'Udang Windu Ukuran Besar',
                imageUrl: 'images/udang windu.jpg', // <-- Pastikan path gambar benar
                rating: 4.8,
                reviews: 90,
                price: 125000,
                unit: '/ Kg',
                isBestSeller: false,
                isNew: false,
                variants: [{ weight: '500g', price: 60000, stock: 15 }]
            },
            {
                id: 'prod3',
                name: 'Udang Galah Jumbo',
                imageUrl: 'images/udang galah.jpg', // <-- Pastikan path gambar benar
                rating: 4.7,
                reviews: 68,
                price: 150000,
                unit: '/ Kg',
                isBestSeller: false,
                isNew: false,
                variants: [{ weight: '500g', price: 75000, stock: 12 }]
            },
            {
                id: 'prod4',
                name: 'Paket Udang Vaname 5 Kg',
                imageUrl: 'images/udangvename.png', // <-- Pastikan path gambar benar
                rating: 4.2,
                reviews: 34,
                price: 425000,
                oldPrice: 475000, // Harga coret
                unit: '',
                isBestSeller: false,
                isNew: true,
                variants: [{ weight: '5000g', price: 425000, stock: 5 }]
            },
            {
                id: 'prod5',
                name: 'Udang Vaname Segar Ukuran Medium',
                imageUrl: 'images/udang_vaname_medium.jpg', // <-- Pastikan path gambar benar
                rating: 4.5,
                reviews: 127,
                price: 95000,
                unit: '/ Kg',
                isBestSeller: true,
                isNew: false,
                variants: [{ weight: '500g', price: 45000, stock: 30 }]
            },
            {
                id: 'prod6',
                name: 'Udang Windu Ukuran Besar',
                imageUrl: 'images/udang_windu_besar.jpg', // <-- Pastikan path gambar benar
                rating: 4.8,
                reviews: 90,
                price: 125000,
                unit: '/ Kg',
                isBestSeller: false,
                isNew: false,
                variants: [{ weight: '500g', price: 60000, stock: 15 }]
            },
            {
                id: 'prod7',
                name: 'Udang Galah Jumbo',
                imageUrl: 'images/udang_galah_jumbo.jpg', // <-- Pastikan path gambar benar
                rating: 4.7,
                reviews: 68,
                price: 150000,
                unit: '/ Kg',
                isBestSeller: false,
                isNew: false,
                variants: [{ weight: '500g', price: 75000, stock: 12 }]
            },
            {
                id: 'prod8',
                name: 'Paket Udang Vaname 5 Kg',
                imageUrl: 'images/udang_vaname_paket.jpg', // <-- Pastikan path gambar benar
                rating: 4.2,
                reviews: 34,
                price: 425000,
                oldPrice: 475000,
                unit: '',
                isBestSeller: false,
                isNew: true,
                variants: [{ weight: '5000g', price: 425000, stock: 5 }]
            }
        ];

        // --- Fungsi untuk menangani penambahan ke keranjang dari daftar produk ---
        const handleAddToCart = (productId) => {
            const productToAdd = products.find(p => p.id === productId);
            if (!productToAdd) {
                alert('Produk tidak ditemukan!');
                return;
            }

            // Simulasikan penambahan varian default (misal, ambil varian pertama atau 500g jika ada)
            // Di real-app, Anda mungkin punya modal/popup untuk pilih varian/qty
            const defaultVariant = productToAdd.variants ? productToAdd.variants.find(v => v.weight === '500g') || productToAdd.variants[0] : null;

            if (!defaultVariant) {
                alert(`Tidak ada varian yang tersedia untuk ${productToAdd.name}.`);
                return;
            }
            if (defaultVariant.stock <= 0) {
                alert(`Maaf, stok ${productToAdd.name} (${defaultVariant.weight}) sedang kosong.`);
                return;
            }

            // --- Di sini Anda akan membuat PANGGILAN API ke backend Anda ---
            // Contoh (dikomentari):
            /*
            fetch('/api/cart/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('userToken') // Jika ada otentikasi
                },
                body: JSON.stringify({
                    productId: productId,
                    variant: defaultVariant.weight,
                    quantity: 1 // Tambahkan 1 unit secara default
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert(`${productToAdd.name} (${defaultVariant.weight}) berhasil ditambahkan ke keranjang!`);
                    // Mungkin perbarui tampilan jumlah item di keranjang navbar
                } else {
                    alert('Gagal menambahkan ke keranjang: ' + data.message);
                }
            })
            .catch(error => {
                console.error('Error adding to cart:', error);
                alert('Terjadi kesalahan saat menambahkan produk ke keranjang.');
            });
            */

            // SIMULASI SUKSES (untuk demo tanpa backend)
            alert(`${productToAdd.name} (${defaultVariant.weight}) berhasil ditambahkan ke keranjang! (Simulasi)`);
            console.log(`Produk ditambahkan ke keranjang: ${productToAdd.name}, Varian: ${defaultVariant.weight}, Jumlah: 1`);
        };


        // --- Fungsi untuk membuat kartu produk ---
        const createProductCard = (product) => {
            const card = document.createElement('div');
            card.classList.add('product-card');

            const ratingStars = generateStars(product.rating);
            const formattedPrice = `Rp ${product.price.toLocaleString('id-ID')}`;
            const oldPriceHtml = product.oldPrice ? `<span class="product-card-old-price">Rp ${product.oldPrice.toLocaleString('id-ID')}</span>` : '';

            let labelHtml = '';
            if (product.isBestSeller) {
                labelHtml = '<span class="product-label terlaris">Terlaris</span>';
            } else if (product.isNew) {
                labelHtml = '<span class="product-label terbaru">Terbaru</span>';
            }

            card.innerHTML = `
                <div class="product-card-image-container">
                    <img src="${product.imageUrl}" alt="${product.name}" class="product-card-image">
                </div>
                ${labelHtml}
                <div class="product-card-content">
                    <h3 class="product-card-title">${product.name}</h3>
                    <div class="product-actions"> <div class="product-card-rating">
                            ${ratingStars}
                            <span class="reviews">(${product.reviews} reviews)</span>
                        </div>
                        <div class="action-icons">
                            <i class="fas fa-ellipsis-h more-options-icon"></i> <i class="fas fa-shopping-cart add-to-cart-icon" data-product-id="${product.id}"></i> </div>
                    </div>
                    <p class="product-card-price">${formattedPrice} ${product.unit} ${oldPriceHtml}</p>
                    <a href="product_detail.html?id=${product.id}" class="product-card-button">Lihat Detail</a>
                </div>
            `;

            // --- TAMBAHKAN EVENT LISTENER DI SINI (SETELAH card dibuat) ---
            const addToCartIcon = card.querySelector('.add-to-cart-icon');
            if (addToCartIcon) {
                addToCartIcon.addEventListener('click', (event) => {
                    event.stopPropagation(); // Mencegah klik menyebar ke tombol "Lihat Detail" atau kartu
                    handleAddToCart(product.id); // Panggil fungsi untuk menangani penambahan ke keranjang
                });
            }

            return card;
        };

        // --- Render semua produk ---
        products.forEach(product => {
            const productCard = createProductCard(product);
            productGrid.appendChild(productCard);
        });
    }


    // ==========================================================
    // BAGIAN UNTUK HALAMAN DETAIL PRODUK (product_detail.html)
    // ==========================================================
    const productNameElem = document.getElementById('product-name');
    if (productNameElem) { // Cek apakah elemen product-name ada di halaman ini
        // === Data Produk (Simulasi, di real-app ambil dari backend) ===
        // Di sini Anda bisa mengambil ID dari URL dan memuat data yang sesuai dari backend
        // Untuk demo ini, kita akan pakai data default atau ambil dari parameter URL jika ada
        const urlParams = new URLSearchParams(window.location.search);
        const productIdFromUrl = urlParams.get('id');

        // Ini hanya simulasi, di real-app Anda akan FETCH data dari backend berdasarkan productIdFromUrl
        const simulatedProductDataList = [
            { id: 'prod1', name: 'Udang Vaname Segar Ukuran Medium', imageUrl: 'images/udangvename.png', basePrice: 85000, variants: [{ weight: '200g', price: 20000, stock: 50 }, { weight: '500g', price: 45000, stock: 30 }, { weight: '1000g', price: 85000, stock: 20 }], reviews: 127, rating: 4.5 },
            { id: 'prod2', name: 'Udang Windu Ukuran Besar', imageUrl: 'images/udang windu.jpg', basePrice: 125000, variants: [{ weight: '500g', price: 60000, stock: 15 }, { weight: '1000g', price: 120000, stock: 10 }], reviews: 90, rating: 4.8 },
            { id: 'prod3', name: 'Udang Galah Jumbo', imageUrl: 'images/udang galah.jpg', basePrice: 150000, variants: [{ weight: '500g', price: 75000, stock: 12 }, { weight: '1000g', price: 150000, stock: 8 }], reviews: 68, rating: 4.7 },
            { id: 'prod4', name: 'Paket Udang Vaname 5 Kg', imageUrl: 'images/udangvename.png', basePrice: 425000, variants: [{ weight: '5000g', price: 425000, stock: 5 }], reviews: 34, rating: 4.2 },
            { id: 'prod5', name: 'Udang Vaname Segar Ukuran Medium', imageUrl: 'images/udang_vaname_medium.jpg', basePrice: 95000, variants: [{ weight: '200g', price: 20000, stock: 50 }, { weight: '500g', price: 45000, stock: 30 }, { weight: '1000g', price: 85000, stock: 20 }], reviews: 127, rating: 4.5 },
            { id: 'prod6', name: 'Udang Windu Ukuran Besar', imageUrl: 'images/udang_windu_besar.jpg', basePrice: 125000, variants: [{ weight: '500g', price: 60000, stock: 15 }, { weight: '1000g', price: 120000, stock: 10 }], reviews: 90, rating: 4.8 },
            { id: 'prod7', name: 'Udang Galah Jumbo', imageUrl: 'images/udang_galah_jumbo.jpg', basePrice: 150000, variants: [{ weight: '500g', price: 75000, stock: 12 }, { weight: '1000g', price: 150000, stock: 8 }], reviews: 68, rating: 4.7 },
            { id: 'prod8', name: 'Paket Udang Vaname 5 Kg', imageUrl: 'images/udang_vaname_paket.jpg', basePrice: 425000, variants: [{ weight: '5000g', price: 425000, stock: 5 }], reviews: 34, rating: 4.2 }
        ];

        let productData = simulatedProductDataList.find(p => p.id === productIdFromUrl);
        if (!productData) {
            // Fallback jika ID tidak ditemukan atau tidak ada di URL
            productData = simulatedProductDataList[0]; // Gunakan produk pertama sebagai default
            console.warn("Product ID not found in URL or data. Displaying default product.");
        }


        // === Elemen HTML ===
        const variantOptionsContainer = document.getElementById('variant-options');
        const quantityDisplay = document.getElementById('quantity-display');
        const decreaseQtyBtn = document.getElementById('decrease-qty');
        const increaseQtyBtn = document.getElementById('increase-qty');
        const displayPriceElem = document.getElementById('display-price');
        const paymentOptionsContainer = document.querySelector('.payment-options');
        const checkoutButton = document.getElementById('checkout-button');
        const alamatInput = document.getElementById('alamat');
        const productImageElem = document.querySelector('.product-image'); // Untuk gambar produk
        const productRatingElem = document.querySelector('.product-rating'); // Untuk rating bintang

        let currentSelectedVariant = productData.variants[0]; // Default ke varian pertama
        let currentQuantity = 1;
        let selectedPaymentMethod = null;

        // === Fungsi untuk memperbarui tampilan harga dan stok ===
        const updateDisplayPrice = () => {
            const totalHarga = currentQuantity * currentSelectedVariant.price;
            let displayWeight = currentSelectedVariant.weight;
            if (displayWeight.endsWith('g')) {
                const grams = parseInt(displayWeight.replace('g', ''));
                if (grams >= 1000 && grams % 1000 === 0) {
                    displayWeight = (grams / 1000) + ' Kg';
                }
            }

            // Memperbarui rating bintang
            if (productRatingElem) {
                productRatingElem.innerHTML = `
                    ${generateStars(productData.rating)}
                    <span class="reviews">(${productData.reviews} reviews)</span>
                `;
            }

            displayPriceElem.textContent = `Rp ${totalHarga.toLocaleString('id-ID')} / ${displayWeight}`;
        };

        // === Inisialisasi Tampilan Berdasarkan productData ===
        productNameElem.textContent = productData.name;
        if (productImageElem) {
            productImageElem.src = productData.imageUrl || `https://via.placeholder.com/400x300?text=${encodeURIComponent(productData.name)}`;
            productImageElem.alt = productData.name;
        }

        // Render varian
        if (variantOptionsContainer) {
            variantOptionsContainer.innerHTML = ''; // Kosongkan dulu
            productData.variants.forEach((variant, index) => {
                const button = document.createElement('button');
                button.classList.add('variant-btn');
                if (index === 0) {
                    button.classList.add('active'); // Set aktif untuk varian pertama
                }
                button.dataset.weight = variant.weight;
                button.dataset.price = variant.price; // Data price untuk kemudahan
                button.textContent = variant.weight.replace('g', ' gram').replace('kg', ' Kg');
                variantOptionsContainer.appendChild(button);
            });
        }


        quantityDisplay.textContent = currentQuantity; // Atur jumlah awal
        updateDisplayPrice(); // Atur harga awal

        // === Event Listeners untuk Varian ===
        if (variantOptionsContainer) {
            variantOptionsContainer.addEventListener('click', (event) => {
                if (event.target.classList.contains('variant-btn')) {
                    // Hapus kelas 'active' dari semua tombol varian
                    document.querySelectorAll('.variant-btn').forEach(btn => btn.classList.remove('active'));

                    // Tambahkan kelas 'active' ke tombol yang diklik
                    event.target.classList.add('active');

                    // Update varian yang dipilih
                    const selectedWeight = event.target.dataset.weight;
                    currentSelectedVariant = productData.variants.find(v => v.weight === selectedWeight);

                    // Reset quantity jika stok tidak cukup atau jika terlalu besar untuk varian baru
                    if (currentQuantity > currentSelectedVariant.stock) {
                        currentQuantity = currentSelectedVariant.stock > 0 ? 1 : 0; // Jika stok 0, quantity 0
                        quantityDisplay.textContent = currentQuantity;
                    } else if (currentQuantity === 0 && currentSelectedVariant.stock > 0) {
                        currentQuantity = 1; // Jika sebelumnya 0 karena stok habis, kembalikan ke 1 jika ada stok
                        quantityDisplay.textContent = currentQuantity;
                    }

                    updateDisplayPrice();
                }
            });
        }


        // === Event Listeners untuk Kuantitas ===
        if (decreaseQtyBtn && increaseQtyBtn) {
            decreaseQtyBtn.addEventListener('click', () => {
                if (currentQuantity > 1) { // Minimal 1
                    currentQuantity--;
                    quantityDisplay.textContent = currentQuantity;
                    updateDisplayPrice();
                }
            });

            increaseQtyBtn.addEventListener('click', () => {
                if (currentQuantity < currentSelectedVariant.stock) { // Maksimal stok yang tersedia
                    currentQuantity++;
                    quantityDisplay.textContent = currentQuantity;
                    updateDisplayPrice();
                } else {
                    alert(`Stok ${currentSelectedVariant.weight} hanya tersedia ${currentSelectedVariant.stock}.`);
                }
            });
        }


        // === Event Listeners untuk Metode Pembayaran ===
        if (paymentOptionsContainer) {
            paymentOptionsContainer.addEventListener('click', (event) => {
                if (event.target.classList.contains('payment-btn')) {
                    document.querySelectorAll('.payment-btn').forEach(btn => btn.classList.remove('active'));
                    event.target.classList.add('active');
                    selectedPaymentMethod = event.target.dataset.method;
                    console.log('Metode pembayaran dipilih:', selectedPaymentMethod);
                }
            });
        }

        // === Event Listener untuk Tombol Checkout ===
        if (checkoutButton) {
            checkoutButton.addEventListener('click', () => {
                const alamat = alamatInput.value.trim();

                if (currentQuantity === 0) {
                    alert("Jumlah produk tidak bisa 0.");
                    return;
                }

                if (!alamat) {
                    alert("Harap masukkan alamat pengiriman Anda.");
                    return;
                }

                if (!selectedPaymentMethod) {
                    alert("Harap pilih metode pembayaran.");
                    return;
                }

                // --- Simulasi Proses Checkout ---
                console.log("Melakukan Checkout...");
                console.log("Produk:", productData.name);
                console.log("Varian:", currentSelectedVariant.weight);
                console.log("Jumlah:", currentQuantity);
                console.log("Total Harga:", (currentQuantity * currentSelectedVariant.price).toLocaleString('id-ID'));
                console.log("Alamat:", alamat);
                console.log("Metode Pembayaran:", selectedPaymentMethod);

                alert(`Checkout Berhasil! (Simulasi)
Produk: ${productData.name} (${currentSelectedVariant.weight})
Jumlah: ${currentQuantity}
Total: Rp ${(currentQuantity * currentSelectedVariant.price).toLocaleString('id-ID')}
Alamat: ${alamat}
Pembayaran: ${selectedPaymentMethod}

Data ini akan dikirim ke backend Anda.`);

                // Setelah simulasi, mungkin redirect ke halaman konfirmasi atau keranjang
                // window.location.href = 'confirmation.html';
            });
        }
    }
});

