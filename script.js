// Disease data from the original model
const diseaseClasses = [
    'Apple___Apple_scab', 'Apple___Black_rot', 'Apple___Cedar_apple_rust', 'Apple___healthy',
    'Blueberry___healthy', 'Cherry_(including_sour)___Powdery_mildew', 
    'Cherry_(including_sour)___healthy', 'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot', 
    'Corn_(maize)___Common_rust_', 'Corn_(maize)___Northern_Leaf_Blight', 'Corn_(maize)___healthy', 
    'Grape___Black_rot', 'Grape___Esca_(Black_Measles)', 'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)', 
    'Grape___healthy', 'Orange___Haunglongbing_(Citrus_greening)', 'Peach___Bacterial_spot',
    'Peach___healthy', 'Pepper,_bell___Bacterial_spot', 'Pepper,_bell___healthy', 
    'Potato___Early_blight', 'Potato___Late_blight', 'Potato___healthy', 
    'Raspberry___healthy', 'Soybean___healthy', 'Squash___Powdery_mildew', 
    'Strawberry___Leaf_scorch', 'Strawberry___healthy', 'Tomato___Bacterial_spot', 
    'Tomato___Early_blight', 'Tomato___Late_blight', 'Tomato___Leaf_Mold', 
    'Tomato___Septoria_leaf_spot', 'Tomato___Spider_mites Two-spotted_spider_mite', 
    'Tomato___Target_Spot', 'Tomato___Tomato_Yellow_Leaf_Curl_Virus', 'Tomato___Tomato_mosaic_virus',
    'Tomato___healthy'
];

// Disease information database
const diseaseInfo = {
    'Apple___Apple_scab': {
        description: 'Apple scab is a fungal disease that causes dark, scabby lesions on leaves and fruit.',
        recommendations: [
            'Apply fungicide during wet spring conditions',
            'Remove fallen leaves and infected fruit',
            'Prune trees to improve air circulation',
            'Choose resistant apple varieties'
        ]
    },
    'Apple___Black_rot': {
        description: 'Black rot causes dark, circular spots on leaves and cankers on branches.',
        recommendations: [
            'Remove infected plant parts immediately',
            'Apply copper-based fungicide',
            'Improve drainage around trees',
            'Avoid overhead irrigation'
        ]
    },
    'Tomato___Early_blight': {
        description: 'Early blight causes dark brown spots with concentric rings on leaves, starting from bottom leaves.',
        recommendations: [
            'Remove affected leaves immediately',
            'Apply fungicide treatment',
            'Improve air circulation around plants',
            'Avoid overhead watering',
            'Use mulch to prevent soil splash'
        ]
    },
    'Tomato___Late_blight': {
        description: 'Late blight causes water-soaked spots on leaves that turn brown and papery.',
        recommendations: [
            'Remove infected plants immediately',
            'Apply preventive fungicide',
            'Ensure good air circulation',
            'Avoid working with wet plants',
            'Plant resistant varieties'
        ]
    },
    'Corn_(maize)___Common_rust_': {
        description: 'Common rust appears as small, oval, cinnamon-brown pustules on both leaf surfaces.',
        recommendations: [
            'Plant resistant hybrid varieties',
            'Apply fungicide if severe',
            'Remove infected debris',
            'Rotate crops annually'
        ]
    }
};

// Training history data from the model
const trainingData = {
    epochs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    trainAccuracy: [8.16, 30.24, 46.52, 56.80, 63.64, 68.75, 72.93, 76.45, 78.93, 81.01],
    valAccuracy: [31.66, 53.04, 64.17, 68.45, 75.94, 79.62, 81.50, 83.61, 84.48, 87.08],
    trainLoss: [0.128, 0.093, 0.074, 0.062, 0.054, 0.048, 0.042, 0.038, 0.035, 0.032],
    valLoss: [0.095, 0.069, 0.055, 0.047, 0.039, 0.034, 0.030, 0.028, 0.026, 0.023]
};

// DOM elements
let currentPage = 'home';
let uploadedImage = null;
let performanceChart = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeImageUpload();
    initializeContactForm();
    populateDiseasesGrid();
    initializeAnimations();
    
    // Show home page by default
    showPage('home');
});

// Navigation functionality
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Hamburger menu toggle
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            showPage(page);
        });
    });
}

// Page navigation
function showPage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    document.getElementById(pageName).classList.add('active');

    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === pageName) {
            link.classList.add('active');
        }
    });

    currentPage = pageName;

    // Initialize page-specific functionality
    if (pageName === 'about') {
        setTimeout(initializePerformanceChart, 300);
    } else if (pageName === 'dataset') {
        setTimeout(animateProgressBars, 300);
    }

    // Update URL without page reload
    window.history.pushState({page: pageName}, '', `#${pageName}`);
}

// Image upload functionality
function initializeImageUpload() {
    const uploadArea = document.getElementById('uploadArea');
    const imageInput = document.getElementById('imageInput');
    const imagePreview = document.getElementById('imagePreview');
    const previewImg = document.getElementById('previewImg');
    const analyzeBtn = document.getElementById('analyzeBtn');
    const clearBtn = document.getElementById('clearBtn');
    const resultsSection = document.getElementById('resultsSection');

    if (!uploadArea) return;

    // Click to upload
    uploadArea.addEventListener('click', () => {
        imageInput.click();
    });

    // Drag and drop functionality
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });

    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('dragover');
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleImageUpload(files[0]);
        }
    });

    // File input change
    imageInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            handleImageUpload(e.target.files[0]);
        }
    });

    // Analyze button
    analyzeBtn.addEventListener('click', () => {
        if (uploadedImage) {
            analyzeImage();
        }
    });

    // Clear button
    clearBtn.addEventListener('click', () => {
        clearImageUpload();
    });
}

// Handle image upload
function handleImageUpload(file) {
    if (!file.type.startsWith('image/')) {
        alert('Please upload a valid image file.');
        return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
        uploadedImage = e.target.result;
        document.getElementById('previewImg').src = uploadedImage;
        document.getElementById('uploadArea').style.display = 'none';
        document.getElementById('imagePreview').style.display = 'block';
        document.getElementById('resultsSection').style.display = 'none';
    };
    reader.readAsDataURL(file);
}

// Clear image upload
function clearImageUpload() {
    uploadedImage = null;
    document.getElementById('uploadArea').style.display = 'flex';
    document.getElementById('imagePreview').style.display = 'none';
    document.getElementById('resultsSection').style.display = 'none';
    document.getElementById('imageInput').value = '';
}

// Simulate image analysis
function analyzeImage() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    const resultsSection = document.getElementById('resultsSection');
    
    // Show loading
    loadingOverlay.style.display = 'flex';
    
    // Simulate processing delay
    setTimeout(() => {
        // Hide loading
        loadingOverlay.style.display = 'none';
        
        // Generate random prediction
        const randomIndex = Math.floor(Math.random() * diseaseClasses.length);
        const predictedDisease = diseaseClasses[randomIndex];
        const confidence = Math.random() * (95 - 75) + 75; // Random confidence between 75-95%
        
        displayAnalysisResults(predictedDisease, confidence);
        resultsSection.style.display = 'block';
        
        // Scroll to results
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 2000 + Math.random() * 2000); // Random delay 2-4 seconds
}

// Display analysis results
function displayAnalysisResults(diseaseName, confidence) {
    const diseaseNameEl = document.getElementById('diseaseName');
    const confidenceValueEl = document.getElementById('confidenceValue');
    const confidenceFillEl = document.getElementById('confidenceFill');
    const diseaseDescriptionEl = document.getElementById('diseaseDescription');
    const recommendationsListEl = document.getElementById('recommendationsList');
    
    // Format disease name for display
    const formattedName = formatDiseaseName(diseaseName);
    diseaseNameEl.textContent = formattedName;
    
    // Set confidence
    const confidencePercent = confidence.toFixed(1);
    confidenceValueEl.textContent = `${confidencePercent}%`;
    confidenceFillEl.style.width = `${confidencePercent}%`;
    
    // Set disease information
    const info = diseaseInfo[diseaseName] || {
        description: 'Disease information is being updated. Please consult with agricultural experts for detailed treatment recommendations.',
        recommendations: [
            'Consult with local agricultural extension service',
            'Take additional photos from different angles',
            'Monitor plant condition closely',
            'Consider professional plant pathology analysis'
        ]
    };
    
    diseaseDescriptionEl.textContent = info.description;
    
    // Set recommendations
    recommendationsListEl.innerHTML = '';
    info.recommendations.forEach(recommendation => {
        const li = document.createElement('li');
        li.textContent = recommendation;
        recommendationsListEl.appendChild(li);
    });
}

// Format disease name for display
function formatDiseaseName(diseaseName) {
    return diseaseName
        .replace(/___/g, ' - ')
        .replace(/_/g, ' ')
        .replace(/\(|\)/g, '')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

// Initialize performance chart
function initializePerformanceChart() {
    const ctx = document.getElementById('performanceChart');
    if (!ctx || performanceChart) return;

    performanceChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: trainingData.epochs,
            datasets: [
                {
                    label: 'Training Accuracy',
                    data: trainingData.trainAccuracy,
                    borderColor: '#2E8B57',
                    backgroundColor: 'rgba(46, 139, 87, 0.1)',
                    fill: false,
                    tension: 0.4
                },
                {
                    label: 'Validation Accuracy',
                    data: trainingData.valAccuracy,
                    borderColor: '#FF7F50',
                    backgroundColor: 'rgba(255, 127, 80, 0.1)',
                    fill: false,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Epoch'
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.parsed.y.toFixed(2) + '%';
                        }
                    }
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeOutCubic'
            }
        }
    });
}

// Animate progress bars
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.breakdown-card .fill');
    progressBars.forEach((bar, index) => {
        setTimeout(() => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        }, index * 200);
    });
}

// Populate diseases grid
function populateDiseasesGrid() {
    const diseasesContainer = document.getElementById('diseasesContainer');
    if (!diseasesContainer) return;

    diseaseClasses.forEach(diseaseClass => {
        const parts = diseaseClass.split('___');
        const crop = parts[0];
        const disease = parts[1] || 'Healthy';
        
        const diseaseItem = document.createElement('div');
        diseaseItem.className = 'disease-item';
        
        diseaseItem.innerHTML = `
            <div class="crop">${formatCropName(crop)}</div>
            <div class="disease">${formatDiseaseName(disease)}</div>
        `;
        
        diseasesContainer.appendChild(diseaseItem);
    });
}

// Format crop name
function formatCropName(cropName) {
    return cropName
        .replace(/\(.*?\)/g, '')
        .replace(/_/g, ' ')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ')
        .trim();
}

// Initialize contact form
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            submitBtn.style.background = '#28a745';
            
            // Reset form
            setTimeout(() => {
                this.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
            }, 2000);
        }, 1500);
    });
}

// Initialize scroll animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle browser back/forward buttons
window.addEventListener('popstate', function(e) {
    if (e.state && e.state.page) {
        showPage(e.state.page);
    } else {
        showPage('home');
    }
});

// Handle window resize
window.addEventListener('resize', debounce(() => {
    if (performanceChart) {
        performanceChart.resize();
    }
}, 250));

// Add smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Initialize tooltips and other interactive elements
function initializeTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.dataset.tooltip;
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
        });
        
        element.addEventListener('mouseleave', function() {
            document.querySelectorAll('.tooltip').forEach(tooltip => {
                tooltip.remove();
            });
        });
    });
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('Application error:', e.error);
    // Could implement user-friendly error reporting here
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        }, 0);
    });
}

// Service worker registration (for offline functionality)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('SW registered: ', registration);
            })
            .catch(function(registrationError) {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Advanced interactive features

// Animated counter for statistics
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start).toLocaleString();
        }
    }, 16);
}

// Interactive disease search
function initializeDiseasesSearch() {
    const searchContainer = document.querySelector('.diseases-grid');
    if (!searchContainer) return;
    
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search diseases...';
    searchInput.className = 'disease-search';
    searchInput.style.cssText = `
        width: 100%;
        max-width: 400px;
        padding: 1rem;
        margin: 0 auto 2rem;
        display: block;
        border: 2px solid var(--border-light);
        border-radius: 25px;
        font-size: 1rem;
        background: var(--background-white);
        box-shadow: 0 5px 15px var(--shadow-light);
    `;
    
    searchContainer.insertBefore(searchInput, searchContainer.querySelector('.diseases-container'));
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const diseaseItems = document.querySelectorAll('.disease-item');
        
        diseaseItems.forEach(item => {
            const cropText = item.querySelector('.crop').textContent.toLowerCase();
            const diseaseText = item.querySelector('.disease').textContent.toLowerCase();
            
            if (cropText.includes(searchTerm) || diseaseText.includes(searchTerm)) {
                item.style.display = 'block';
                item.style.animation = 'fadeInUp 0.3s ease';
            } else {
                item.style.display = 'none';
            }
        });
    });
}

// Real-time image processing simulation
function simulateImageProcessing(canvas, imageData) {
    const ctx = canvas.getContext('2d');
    const steps = [
        'Loading image...',
        'Preprocessing...',
        'Feature extraction...',
        'CNN analysis...',
        'Classification...',
        'Results ready!'
    ];
    
    return new Promise((resolve) => {
        let currentStep = 0;
        const interval = setInterval(() => {
            if (currentStep < steps.length) {
                // Simulate processing effects
                if (currentStep > 0) {
                    const imageDataCopy = ctx.createImageData(imageData);
                    const data = imageDataCopy.data;
                    
                    for (let i = 0; i < data.length; i += 4) {
                        if (currentStep === 1) {
                            // Grayscale effect
                            const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
                            data[i] = data[i + 1] = data[i + 2] = avg;
                        } else if (currentStep === 2) {
                            // Edge detection simulation
                            data[i] = Math.min(255, data[i] * 1.2);
                            data[i + 1] = Math.min(255, data[i + 1] * 0.8);
                        }
                    }
                    ctx.putImageData(imageDataCopy, 0, 0);
                }
                currentStep++;
            } else {
                clearInterval(interval);
                resolve();
            }
        }, 800);
    });
}

// Interactive 3D card effects
function initialize3DEffects() {
    const cards = document.querySelectorAll('.feature-card, .crop-item, .disease-item');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
}

// Particle animation background
function initializeParticleBackground() {
    const canvas = document.createElement('canvas');
    canvas.id = 'particle-canvas';
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        opacity: 0.1;
    `;
    
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    const particles = [];
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    function createParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 3 + 1,
            opacity: Math.random() * 0.5 + 0.2
        };
    }
    
    function initParticles() {
        for (let i = 0; i < 50; i++) {
            particles.push(createParticle());
        }
    }
    
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0) particle.x = canvas.width;
            if (particle.x > canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = canvas.height;
            if (particle.y > canvas.height) particle.y = 0;
            
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(46, 139, 87, ${particle.opacity})`;
            ctx.fill();
        });
        
        requestAnimationFrame(animateParticles);
    }
    
    resizeCanvas();
    initParticles();
    animateParticles();
    
    window.addEventListener('resize', resizeCanvas);
}

// Interactive statistics dashboard
function initializeStatsDashboard() {
    const statsCards = document.querySelectorAll('.stat-card h3, .performance-value');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const text = element.textContent;
                const number = parseFloat(text.replace(/[^0-9.]/g, ''));
                
                if (!isNaN(number)) {
                    element.textContent = '0';
                    animateCounter(element, number);
                }
            }
        });
    }, { threshold: 0.5 });
    
    statsCards.forEach(card => observer.observe(card));
}

// Dynamic theme switcher
function initializeThemeSwitcher() {
    const themeSwitcher = document.createElement('button');
    themeSwitcher.innerHTML = '<i class="fas fa-moon"></i>';
    themeSwitcher.className = 'theme-switcher';
    themeSwitcher.style.cssText = `
        position: fixed;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        width: 50px;
        height: 50px;
        border: none;
        border-radius: 50%;
        background: var(--primary-color);
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        box-shadow: 0 4px 15px var(--shadow-medium);
        transition: all 0.3s ease;
        z-index: 1001;
    `;
    
    document.body.appendChild(themeSwitcher);
    
    let isDark = false;
    
    themeSwitcher.addEventListener('click', () => {
        isDark = !isDark;
        document.documentElement.style.setProperty('--background-light', isDark ? '#1a1a1a' : '#F8FFFE');
        document.documentElement.style.setProperty('--background-white', isDark ? '#2d2d2d' : '#FFFFFF');
        document.documentElement.style.setProperty('--text-primary', isDark ? '#ffffff' : '#2C3E50');
        document.documentElement.style.setProperty('--text-secondary', isDark ? '#cccccc' : '#7F8C8D');
        
        themeSwitcher.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
}

// Enhanced image upload with preview effects
function enhanceImageUpload() {
    const uploadArea = document.getElementById('uploadArea');
    if (!uploadArea) return;
    
    // Add ripple effect
    uploadArea.addEventListener('click', (e) => {
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(46, 139, 87, 0.3);
            pointer-events: none;
            transform: scale(0);
            animation: ripple 0.6s linear;
        `;
        
        const rect = uploadArea.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (e.clientX - rect.left - size/2) + 'px';
        ripple.style.top = (e.clientY - rect.top - size/2) + 'px';
        
        uploadArea.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
    
    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Interactive crop information modal
function initializeCropInfoModal() {
    const cropItems = document.querySelectorAll('.crop-item');
    
    const modal = document.createElement('div');
    modal.className = 'crop-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 2000;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: var(--background-white);
        border-radius: 20px;
        padding: 2rem;
        max-width: 500px;
        width: 90%;
        max-height: 80%;
        overflow-y: auto;
        position: relative;
    `;
    
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.style.cssText = `
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: none;
        font-size: 2rem;
        cursor: pointer;
        color: var(--text-secondary);
    `;
    
    modalContent.appendChild(closeBtn);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    cropItems.forEach(item => {
        item.addEventListener('click', () => {
            const cropName = item.querySelector('span').textContent;
            modalContent.innerHTML = `
                <button onclick="this.parentElement.parentElement.style.display='none'" style="position: absolute; top: 1rem; right: 1rem; background: none; border: none; font-size: 2rem; cursor: pointer;">×</button>
                <h2>${cropName} Information</h2>
                <p>Detailed information about ${cropName} diseases and care tips would be displayed here.</p>
                <div style="margin-top: 2rem;">
                    <h3>Common Diseases:</h3>
                    <ul>
                        <li>Disease information 1</li>
                        <li>Disease information 2</li>
                        <li>Disease information 3</li>
                    </ul>
                </div>
            `;
            modal.style.display = 'flex';
        });
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Update the main initialization function
function initializeEnhancedFeatures() {
    setTimeout(() => {
        initialize3DEffects();
        initializeParticleBackground();
        initializeStatsDashboard();
        initializeThemeSwitcher();
        enhanceImageUpload();
        initializeCropInfoModal();
        initializeDiseasesSearch();
    }, 1000);
}

// Call enhanced features after DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeEnhancedFeatures);
} else {
    initializeEnhancedFeatures();
}

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        formatDiseaseName,
        formatCropName,
        showPage,
        diseaseClasses,
        trainingData,
        animateCounter,
        initialize3DEffects,
        initializeParticleBackground
    };
}
