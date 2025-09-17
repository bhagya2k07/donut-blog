// Mobile menu toggle
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuBtn = document.querySelector('.mobile-menu-btn i');

    if (mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
        mobileNav.style.display = 'none';
        menuBtn.classList.remove('fa-times');
        menuBtn.classList.add('fa-bars');
    } else {
        mobileNav.classList.add('active');
        mobileNav.style.display = 'flex';
        menuBtn.classList.remove('fa-bars');
        menuBtn.classList.add('fa-times');
    }
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const mobileNav = document.getElementById('mobileNav');
        const menuBtn = document.querySelector('.mobile-menu-btn i');

        mobileNav.classList.remove('active');
        mobileNav.style.display = 'none';
        menuBtn.classList.remove('fa-times');
        menuBtn.classList.add('fa-bars');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact form submission
function handleFormSubmit(event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };

    // Simple validation
    if (!data.name || !data.email || !data.subject || !data.message) {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate form submission
    alert('Thank you for your message! We\'ll get back to you soon with more sweet donut content.');

    // Reset form
    event.target.reset();
}

// Newsletter subscription
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        const subscribeBtn = newsletterForm.querySelector('.btn');
        const emailInput = newsletterForm.querySelector('input[type="email"]');

        subscribeBtn.addEventListener('click', function(e) {
            e.preventDefault();

            const email = emailInput.value.trim();

            if (!email) {
                alert('Please enter your email address.');
                return;
            }

            if (!isValidEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            alert('Thank you for subscribing to our newsletter! You\'ll receive the sweetest donut updates.');
            emailInput.value = '';
        });
    }
});

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.post-card, .sidebar-card, .featured-card');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    // Set initial state for animated elements
    const elements = document.querySelectorAll('.post-card, .sidebar-card, .featured-card');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Trigger initial animation check
    animateOnScroll();
});

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);

// Category item click handlers
document.addEventListener('DOMContentLoaded', function() {
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            const categoryName = this.querySelector('.category-name').textContent;
            alert(`Showing posts in category: ${categoryName}`);
        });
    });

    const recentPosts = document.querySelectorAll('.recent-post');
    recentPosts.forEach(post => {
        post.addEventListener('click', function() {
            const postTitle = this.querySelector('.recent-title').textContent;
            alert(`Opening post: ${postTitle}`);
        });
    });

    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.addEventListener('click', function() {
            const tagName = this.textContent;
            alert(`Showing posts tagged with: ${tagName}`);
        });
    });
});

// Button click handlers for demo purposes
document.addEventListener('DOMContentLoaded', function() {
    // Hero buttons
    const exploreBtn = document.querySelector('.hero-buttons .btn-pink');
    const latestBtn = document.querySelector('.hero-buttons .btn-blue-outline');

    if (exploreBtn) {
        exploreBtn.addEventListener('click', function() {
            document.querySelector('#blog').scrollIntoView({ behavior: 'smooth' });
        });
    }

    if (latestBtn) {
        latestBtn.addEventListener('click', function() {
            document.querySelector('#blog').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Read more buttons
    const readMoreBtns = document.querySelectorAll('.btn-blue-outline-sm, .featured-content .btn-pink');
    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('This would open the full blog post. In a real implementation, this would navigate to the individual post page.');
        });
    });
});
