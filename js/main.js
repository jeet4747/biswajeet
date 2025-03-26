// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Initialize preloader
    initPreloader();
    
    // Initialize theme toggle
    initThemeToggle();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize scroll effects
    initScrollEffects();
    
    // Initialize experience timeline
    initExperienceTimeline();
    
    // Initialize back to top button
    initBackToTop();
    
    // Initialize contact form
    initContactForm();
    
    // Initialize 3D animation for hero section
    initHero3DAnimation();
});

// Preloader functionality
function initPreloader() {
    const preloader = document.querySelector('.preloader');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hide');
            
            // Enable scrolling on body
            document.body.style.overflow = 'auto';
        }, 500);
    });
    
    // Disable scrolling on body until page loads
    document.body.style.overflow = 'hidden';
}

// Theme toggle functionality
function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const storedTheme = localStorage.getItem('theme');
    
    // Check for saved theme preference
    if (storedTheme === 'light') {
        document.body.classList.add('light-mode');
    }
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        
        // Save theme preference
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        
        // Toggle mobile menu button appearance
        const spans = mobileMenuBtn.querySelectorAll('span');
        
        if (navLinks.classList.contains('show')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Close mobile menu when clicking on a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
            
            // Reset mobile menu button appearance
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

// Scroll effects functionality
function initScrollEffects() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Smooth scroll to section when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
    
    // Highlight active nav link based on scroll position
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Scroll indicator functionality
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }
    
    // Add scroll animations using IntersectionObserver
    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };
    
    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);
    
    // Apply to all elements with fade-in class
    document.querySelectorAll('.fade-in').forEach(element => {
        appearOnScroll.observe(element);
    });
}

// Experience timeline functionality
function initExperienceTimeline() {
    const showMoreBtn = document.querySelector('.show-more-btn');
    const hiddenTimeline = document.querySelector('.hidden-timeline');
    
    if (showMoreBtn && hiddenTimeline) {
        showMoreBtn.addEventListener('click', () => {
            hiddenTimeline.style.display = hiddenTimeline.style.display === 'block' ? 'none' : 'block';
            showMoreBtn.classList.toggle('active');
            
            // Change text based on state
            const btnText = showMoreBtn.querySelector('span');
            btnText.textContent = hiddenTimeline.style.display === 'block' ? 'Show Less' : 'Show More';
        });
    }
}

// Back to top button functionality
function initBackToTop() {
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.querySelector('.form-status');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simple form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !subject || !message) {
                formStatus.innerHTML = '<p class="error">Please fill out all fields.</p>';
                return;
            }
            
            // Here you would normally use EmailJS or another service to send the email
            // For demonstration, we'll just show a success message
            formStatus.innerHTML = '<p class="success">Thank you for your message. I will get back to you soon!</p>';
            contactForm.reset();
            
            // Clear status message after 5 seconds
            setTimeout(() => {
                formStatus.innerHTML = '';
            }, 5000);
        });
    }
}

// Initialize 3D animation for hero section using Three.js
function initHero3DAnimation() {
    const heroAnimation = document.getElementById('hero-animation');
    
    if (heroAnimation && window.THREE) {
        try {
            // Set up scene
            const scene = new THREE.Scene();
            
            // Set up camera
            const camera = new THREE.PerspectiveCamera(75, heroAnimation.clientWidth / heroAnimation.clientHeight, 0.1, 1000);
            camera.position.z = 5;
            
            // Set up renderer
            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            renderer.setSize(heroAnimation.clientWidth, heroAnimation.clientHeight);
            renderer.setClearColor(0x000000, 0);
            heroAnimation.appendChild(renderer.domElement);
            
            // Create geometry - a simple sphere of particles
            const geometry = new THREE.SphereGeometry(2, 32, 32);
            const material = new THREE.PointsMaterial({
                color: 0x4d80e4,
                size: 0.05,
                transparent: true
            });
            
            const sphere = new THREE.Points(geometry, material);
            scene.add(sphere);
            
            // Animation loop
            function animate() {
                requestAnimationFrame(animate);
                
                sphere.rotation.x += 0.003;
                sphere.rotation.y += 0.003;
                
                renderer.render(scene, camera);
            }
            
            // Handle window resize
            window.addEventListener('resize', () => {
                camera.aspect = heroAnimation.clientWidth / heroAnimation.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(heroAnimation.clientWidth, heroAnimation.clientHeight);
            });
            
            // Start animation
            animate();
        } catch (error) {
            console.log("Three.js animation couldn't be initialized: ", error);
            
            // Fallback animation - simple CSS animation
            initFallbackAnimation(heroAnimation);
        }
    } else if (heroAnimation) {
        // If Three.js is not available, use a simple CSS animation as fallback
        initFallbackAnimation(heroAnimation);
    }
}

// Fallback animation when Three.js is not available
function initFallbackAnimation(element) {
    element.innerHTML = `
        <div class="fallback-animation">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
        </div>
    `;
    
    // Add CSS for fallback animation
    const style = document.createElement('style');
    style.textContent = `
        .fallback-animation {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }
        
        .fallback-animation .circle {
            position: absolute;
            border-radius: 50%;
            background: var(--gradient);
            opacity: 0.2;
            animation: pulse 4s infinite ease-in-out;
        }
        
        .fallback-animation .circle:nth-child(1) {
            width: 200px;
            height: 200px;
            animation-delay: 0s;
        }
        
        .fallback-animation .circle:nth-child(2) {
            width: 250px;
            height: 250px;
            animation-delay: 1s;
        }
        
        .fallback-animation .circle:nth-child(3) {
            width: 300px;
            height: 300px;
            animation-delay: 2s;
        }
        
        @keyframes pulse {
            0%, 100% {
                transform: scale(0.9);
                opacity: 0.2;
            }
            50% {
                transform: scale(1.1);
                opacity: 0.5;
            }
        }
    `;
    document.head.appendChild(style);
} 