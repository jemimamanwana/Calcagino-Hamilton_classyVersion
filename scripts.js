// ===================================
// Calcagino-Hamilton - Main JavaScript
// ===================================

document.addEventListener('DOMContentLoaded', function() {

    // ===================================
    // Preloader
    // ===================================
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', function() {
            setTimeout(() => {
                preloader.classList.add('fade-out');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }, 1500);
        });
    }

    // ===================================
    // DOM Elements
    // ===================================
    const propertiesGrid = document.getElementById('properties-grid');
    const propertyModal = document.getElementById('property-modal');
    const modalBody = document.getElementById('modal-body');
    const modalClose = document.getElementById('modal-close');
    const backToTopBtn = document.getElementById('back-to-top');
    const header = document.getElementById('header');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    const testimonialSlides = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    const contactForm = document.getElementById('contactForm');

    // ===================================
    // Property Data
    // ===================================
    const properties = [
        {
            id: 1,
            title: "Oceanfront Montecito Estate",
            price: "$12,750,000",
            address: "123 Butterfly Lane, Montecito, CA",
            description: "This stunning oceanfront estate offers breathtaking panoramic views from nearly every room. The property features 6 bedrooms, 8 bathrooms, and approximately 9,500 square feet of luxurious living space with exquisite finishes throughout.",
            bedrooms: 6,
            bathrooms: 8,
            sqft: 9500,
            year: 2018,
            features: ["Oceanfront", "Infinity Pool", "Home Theater", "Wine Cellar", "Smart Home", "Gourmet Kitchen", "Guest House", "Private Beach Access"],
            images: [
                "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            ]
        },
        {
            id: 2,
            title: "Historic Spanish Villa",
            price: "$8,950,000",
            address: "456 Olive Mill Road, Santa Barbara, CA",
            description: "A meticulously restored 1920s Spanish villa with modern amenities while preserving historic charm. The property sits on 2.5 acres of lush gardens with mountain views, featuring 5 bedrooms, 6.5 bathrooms, and a separate guest casita.",
            bedrooms: 5,
            bathrooms: 6.5,
            sqft: 7800,
            year: 1927,
            features: ["Historic Property", "Guest Casita", "Fountain Courtyard", "Chef's Kitchen", "Wine Cellar", "Solar Panels", "Fruit Orchard", "Mountain Views"],
            images: [
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            ]
        },
        {
            id: 3,
            title: "Modern Hillside Retreat",
            price: "$15,250,000",
            address: "789 Hot Springs Road, Montecito, CA",
            description: "This architectural masterpiece offers privacy and panoramic ocean views from its hillside perch. The sleek, modern design features floor-to-ceiling glass, smart home technology, and seamless indoor-outdoor living with a negative-edge pool and spa.",
            bedrooms: 7,
            bathrooms: 9,
            sqft: 11000,
            year: 2020,
            features: ["Smart Home", "Home Theater", "Wine Room", "Elevator", "Infinity Pool", "Outdoor Kitchen", "Ocean Views", "Guest House"],
            images: [
                "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            ]
        },
        {
            id: 4,
            title: "Coastal Ranch Compound",
            price: "$22,000,000",
            address: "101 Mountain Drive, Santa Barbara, CA",
            description: "A rare 25-acre coastal ranch with 1/4 mile of ocean frontage. The compound includes a 6-bedroom main house, 2 guest houses, a barn, riding arena, and private beach access. Zoned for equestrian use with stunning ocean and island views.",
            bedrooms: 6,
            bathrooms: 7,
            sqft: 8500,
            year: 2005,
            features: ["25 Acres", "Private Beach", "Guest Houses", "Barn", "Riding Arena", "Ocean Frontage", "Equestrian", "Vineyard"],
            images: [
                "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            ]
        },
        {
            id: 5,
            title: "Mediterranean Villa",
            price: "$9,500,000",
            address: "234 Garden Street, Santa Barbara, CA",
            description: "Inspired by the villas of the Italian countryside, this estate features hand-carved stone details, antique terra cotta tiles, and lush formal gardens. The property includes a main residence, pool house, and detached studio with ocean views.",
            bedrooms: 5,
            bathrooms: 6,
            sqft: 8200,
            year: 2015,
            features: ["Mediterranean Style", "Formal Gardens", "Pool House", "Wine Cellar", "Chef's Kitchen", "Ocean Views", "Outdoor Kitchen", "Solar Heated Pool"],
            images: [
                "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            ]
        },
        {
            id: 6,
            title: "Contemporary Cliffside Home",
            price: "$18,750,000",
            address: "567 Cliff Drive, Montecito, CA",
            description: "Perched dramatically on the cliffs above the Pacific, this contemporary home features walls of glass to maximize the breathtaking ocean and coastline views. The property includes an elevator, home theater, gym, and infinity-edge pool.",
            bedrooms: 6,
            bathrooms: 7.5,
            sqft: 9800,
            year: 2019,
            features: ["Cliffside Location", "Elevator", "Home Theater", "Gym", "Infinity Pool", "Smart Home", "Guest Suite", "Panoramic Views"],
            images: [
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            ]
        }
    ];

    // ===================================
    // Load Properties (Home Page)
    // ===================================
    function loadProperties() {
        if (!propertiesGrid) return;
        propertiesGrid.innerHTML = '';
        properties.forEach(property => {
            const propertyCard = document.createElement('div');
            propertyCard.className = 'property-card';
            propertyCard.innerHTML = `
                <div class="property-img">
                    <img src="${property.images[0]}" alt="${property.title}">
                    <div class="property-price">${property.price}</div>
                </div>
                <div class="property-info">
                    <h3>${property.title}</h3>
                    <p>${property.address}</p>
                    <div class="property-features">
                        <div class="feature">
                            <i class="fas fa-bed"></i>
                            <span>${property.bedrooms} Beds</span>
                        </div>
                        <div class="feature">
                            <i class="fas fa-bath"></i>
                            <span>${property.bathrooms} Baths</span>
                        </div>
                        <div class="feature">
                            <i class="fas fa-ruler-combined"></i>
                            <span>${property.sqft.toLocaleString()} SqFt</span>
                        </div>
                    </div>
                </div>
            `;
            propertyCard.addEventListener('click', () => openModal(property));
            propertiesGrid.appendChild(propertyCard);
        });
    }

    // ===================================
    // Property Modal
    // ===================================
    function openModal(property) {
        if (!modalBody || !propertyModal) return;
        modalBody.innerHTML = `
            <div class="modal-property">
                <div class="modal-property-images">
                    <div class="modal-main-image">
                        <img src="${property.images[0]}" alt="${property.title}" id="main-image">
                    </div>
                    <div class="modal-thumbnails">
                        ${property.images.map((img, index) => `
                            <div class="modal-thumbnail ${index === 0 ? 'active' : ''}" data-img="${img}">
                                <img src="${img}" alt="Thumbnail ${index + 1}">
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="modal-property-info">
                    <h2>${property.title}</h2>
                    <div class="modal-property-price">${property.price}</div>
                    <div class="modal-property-address">${property.address}</div>
                    <div class="modal-property-description">
                        <p>${property.description}</p>
                    </div>
                    <div class="modal-property-features">
                        ${property.features.map(feature => `
                            <div class="modal-feature">
                                <i class="fas fa-check"></i>
                                <span>${feature}</span>
                            </div>
                        `).join('')}
                    </div>
                    <a href="book-tour.html" class="btn btn-gold modal-tour-btn">Schedule a Private Tour</a>
                </div>
            </div>
        `;

        // Thumbnail click events
        const thumbnails = document.querySelectorAll('.modal-thumbnail');
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', () => {
                document.querySelector('.modal-thumbnail.active').classList.remove('active');
                thumb.classList.add('active');
                document.getElementById('main-image').src = thumb.dataset.img;
            });
        });

        propertyModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Close modal
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            propertyModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    // Close modal when clicking outside
    if (propertyModal) {
        propertyModal.addEventListener('click', (e) => {
            if (e.target === propertyModal) {
                propertyModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }

    // ===================================
    // Back to Top & Header Scroll
    // ===================================
    if (backToTopBtn && header) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('active');
                header.classList.add('scrolled');
            } else {
                backToTopBtn.classList.remove('active');
                header.classList.remove('scrolled');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ===================================
    // Mobile Menu
    // ===================================
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuBtn.innerHTML = navMenu.classList.contains('active') ?
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
    }

    // Close mobile menu when clicking a link
    document.querySelectorAll('#nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) navMenu.classList.remove('active');
            if (mobileMenuBtn) mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // ===================================
    // Testimonial Slider
    // ===================================
    if (testimonialSlides.length > 0 && dots.length > 0) {
        let currentSlide = 0;

        function showSlide(index) {
            testimonialSlides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            testimonialSlides[index].classList.add('active');
            dots[index].classList.add('active');
            currentSlide = index;
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => showSlide(index));
        });

        setInterval(() => {
            currentSlide = (currentSlide + 1) % testimonialSlides.length;
            showSlide(currentSlide);
        }, 5000);
    }

    // ===================================
    // Smooth Scrolling
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===================================
    // Contact Form
    // ===================================
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message. Our team will contact you shortly.');
            contactForm.reset();
        });
    }

    // ===================================
    // Book Tour Form
    // ===================================
    const bookingForm = document.getElementById('bookingForm');
    const confirmationMessage = document.getElementById('confirmationMessage');
    const bookingFormWrapper = document.getElementById('bookingFormWrapper');

    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const booking = {
                id: Date.now(),
                name: document.getElementById('bookName').value,
                email: document.getElementById('bookEmail').value,
                phone: document.getElementById('bookPhone').value,
                date: document.getElementById('bookDate').value,
                time: document.getElementById('bookTime').value,
                property: document.getElementById('bookProperty').value,
                guests: document.getElementById('bookGuests').value,
                notes: document.getElementById('bookNotes').value
            };

            // Save to localStorage
            let bookings = JSON.parse(localStorage.getItem('tourBookings')) || [];
            bookings.push(booking);
            localStorage.setItem('tourBookings', JSON.stringify(bookings));

            // Show confirmation
            if (bookingFormWrapper) bookingFormWrapper.style.display = 'none';
            if (confirmationMessage) {
                confirmationMessage.classList.add('show');
                document.getElementById('confirmName').textContent = booking.name;
                document.getElementById('confirmDate').textContent = formatDate(booking.date);
                document.getElementById('confirmTime').textContent = formatTime(booking.time);
                document.getElementById('confirmProperty').textContent = booking.property;
            }

            // Refresh bookings list
            loadBookings();
        });
    }

    // Load saved bookings
    function loadBookings() {
        const bookingsContainer = document.getElementById('bookingsContainer');
        if (!bookingsContainer) return;

        const bookings = JSON.parse(localStorage.getItem('tourBookings')) || [];

        if (bookings.length === 0) {
            bookingsContainer.innerHTML = '<p class="no-bookings">No tour bookings yet. Fill out the form above to schedule your first tour.</p>';
            return;
        }

        // Sort by date (newest first)
        bookings.sort((a, b) => new Date(b.date) - new Date(a.date));

        bookingsContainer.innerHTML = bookings.map(booking => `
            <div class="booking-card" data-id="${booking.id}">
                <div class="booking-card-info">
                    <h4>${booking.name}</h4>
                    <p><i class="fas fa-home"></i> ${booking.property}</p>
                    <p><i class="fas fa-envelope"></i> ${booking.email}</p>
                </div>
                <div class="booking-card-date">
                    <div class="date">${formatDate(booking.date)}</div>
                    <div class="time">${formatTime(booking.time)}</div>
                </div>
                <div class="booking-card-actions">
                    <button class="btn-cancel" data-cancel-id="${booking.id}">Cancel</button>
                </div>
            </div>
        `).join('');
    }

    function formatDate(dateStr) {
        const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', options);
    }

    function formatTime(timeStr) {
        const [hours, minutes] = timeStr.split(':');
        const h = parseInt(hours);
        const ampm = h >= 12 ? 'PM' : 'AM';
        const hour12 = h % 12 || 12;
        return `${hour12}:${minutes} ${ampm}`;
    }

    // Cancel booking via event delegation
    const bookingsContainer = document.getElementById('bookingsContainer');
    if (bookingsContainer) {
        bookingsContainer.addEventListener('click', function(e) {
            const cancelBtn = e.target.closest('[data-cancel-id]');
            if (cancelBtn) {
                const id = Number(cancelBtn.dataset.cancelId);
                let bookings = JSON.parse(localStorage.getItem('tourBookings')) || [];
                bookings = bookings.filter(b => b.id !== id);
                localStorage.setItem('tourBookings', JSON.stringify(bookings));
                loadBookings();
            }
        });
    }

    // Reset booking form
    const resetBtn = document.getElementById('resetBookingBtn');
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            if (bookingFormWrapper) bookingFormWrapper.style.display = 'block';
            if (confirmationMessage) confirmationMessage.classList.remove('show');
            if (bookingForm) bookingForm.reset();
        });
    }

    // ===================================
    // Initialize
    // ===================================
    loadProperties();
    loadBookings();
});
