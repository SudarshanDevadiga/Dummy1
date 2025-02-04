// Navigation menu toggle for mobile
document.addEventListener('DOMContentLoaded', function() {
    // Scroll Progress Bar
    const scrollProgress = document.createElement('div');
    scrollProgress.className = 'scroll-progress';
    document.body.appendChild(scrollProgress);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        scrollProgress.style.width = `${scrolled}%`;
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href'))?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Active Navigation Highlight
    function updateActiveNav() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav ul li a');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - sectionHeight/3)) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if(link.getAttribute('href').slice(1) === section.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);

    // Animate Elements on Scroll
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.project, .skills, .interests, .contact-content').forEach(el => {
        animateOnScroll.observe(el);
    });

    // Typing Animation for Hero Section
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.innerHTML = '';
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Skills Progress Animation
    document.querySelectorAll('.skills li').forEach(skill => {
        skill.addEventListener('mouseenter', () => {
            skill.classList.add('slide-in');
        });
    });

    // Profile Image Parallax Effect
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        window.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const x = (clientX - innerWidth/2) / 50;
            const y = (clientY - innerHeight/2) / 50;
            profileImage.style.transform = `translate(${x}px, ${y}px)`;
        });
    }

    // Project Cards Hover Effect
    document.querySelectorAll('.project').forEach(project => {
        project.addEventListener('mouseenter', (e) => {
            const { left, top } = project.getBoundingClientRect();
            const x = e.clientX - left;
            const y = e.clientY - top;
            project.style.setProperty('--x', `${x}px`);
            project.style.setProperty('--y', `${y}px`);
        });
    });

    // Initialize Animations
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
    });

    // Add fade-in animation to sections
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    });

    document.querySelectorAll('section').forEach((section) => {
        observer.observe(section);
    });

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                showStatus('Please enter a valid email address.', 'error');
                return;
            }

            // Here you would typically send the data to a server
            // For now, we'll just show a success message
            showStatus('Thank you for your message! I will get back to you soon.', 'success');
            contactForm.reset();
        });
    }

    function showStatus(message, type) {
        formStatus.textContent = message;
        formStatus.className = 'form-status ' + type;
        
        // Hide the message after 5 seconds
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
    }
});
