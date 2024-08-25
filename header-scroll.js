// Function to handle header opacity
function handleHeaderOpacity() {
    const header = document.querySelector('header');
    let lastScrollTop = 0;

    function setHeaderOpacity(opacity) {
        header.style.opacity = opacity;
    }

    // Set full opacity on hover
    header.addEventListener('mouseenter', () => {
        setHeaderOpacity(1);
    });

    // Set default opacity when mouse leaves
    header.addEventListener('mouseleave', () => {
        setHeaderOpacity(0.5);
    });

    // Handle scroll events
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            setHeaderOpacity(0.15);
        } else {
            // Scrolling up
            setHeaderOpacity(0.7);
        }
        
        if (scrollTop === 0) {
            // At the top of the page
            setHeaderOpacity(1);
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });

    // Initial opacity
    setHeaderOpacity(1);
}

// Call the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', handleHeaderOpacity);
