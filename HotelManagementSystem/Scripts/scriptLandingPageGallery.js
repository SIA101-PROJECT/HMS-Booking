// FOR GALLERY
// gallery images array
const galleryImages = [
{
    src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
alt: "Gallery 0 Front"
        },
{
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
alt: "Gallery 1"
        },
{
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
alt: "Gallery 2"
        },
{
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
alt: "Gallery 3"
        },
{
    src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
alt: "Gallery 4"
        }
];

let currentImageIndex = 0;

// DOM elements
const mainImage = document.getElementById('galleryMainImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const thumbnails = document.querySelectorAll('.thumbnail');
const dots = document.querySelectorAll('.dot');

// function to update the main image
function updateMainImage(index) {
    mainImage.classList.add('fade-out');
            
        setTimeout(() => {
    mainImage.src = galleryImages[index].src;
    mainImage.alt = galleryImages[index].alt;
    mainImage.classList.remove('fade-out');
    mainImage.classList.add('fade-in');
        }, 150);

        // update active states
        thumbnails.forEach((thumb, i) => {
    thumb.classList.toggle('active', i === index);
        });

        dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
        });

currentImageIndex = index;
    }

    // previous button
    prevBtn.addEventListener('click', () => {
        const newIndex = currentImageIndex === 0 ? galleryImages.length - 1 : currentImageIndex - 1;
updateMainImage(newIndex);
    });

    // next button
    nextBtn.addEventListener('click', () => {
        const newIndex = currentImageIndex === galleryImages.length - 1 ? 0 : currentImageIndex + 1;
updateMainImage(newIndex);
    });

    // thumbnail clicks
    thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        updateMainImage(index);
    });
    });

    // dot clicks
    dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        updateMainImage(index);
    });
    });

// auto-play gallery
let autoPlayInterval;

function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        const nextIndex = currentImageIndex === galleryImages.length - 1 ? 0 : currentImageIndex + 1;
        updateMainImage(nextIndex);
    }, 5000);
    }

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
    }

// start auto-play on load
startAutoPlay();

// pause auto-play on hover
const galleryContainer = document.querySelector('.gallery-container');
galleryContainer.addEventListener('mouseenter', stopAutoPlay);
galleryContainer.addEventListener('mouseleave', startAutoPlay);

    // keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
    prevBtn.click();
        } else if (e.key === 'ArrowRight') {
    nextBtn.click();
        }
    });