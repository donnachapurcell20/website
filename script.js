const arrow = document.querySelector('.scroll-down-arrow');
        
arrow.addEventListener('click', (e) => {
  e.preventDefault();
  const targetSection = document.querySelector('#about-section');
  const offsetTop = targetSection.getBoundingClientRect().top + window.pageYOffset;
  const duration = 500; // in milliseconds

  // Smooth scrolling
  const start = window.pageYOffset;
  const startTime = performance.now();

  const easeInOutQuad= (t, b, c, d) => {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
  };

  const animateScroll = (currentTime) => {
    const timeElapsed = currentTime - startTime;
    const newPosition = easeInOutQuad(timeElapsed, start, offsetTop - start, duration);
    window.scrollTo(0, newPosition);
    if (timeElapsed < duration) requestAnimationFrame(animateScroll);
  };

  requestAnimationFrame(animateScroll);
});


// Get the header element
const header = document.querySelector('.hero');

// Get the initial top position of the navbar
const initialTop = navbar.offsetTop;

// Add an event listener to the window to detect scroll events
window.addEventListener('scroll', () => {
const scrollPosition = window.scrollY;

// Check if the user has scrolled past the initial top position of the navbar
if (scrollPosition > initialTop) {
// Add the 'is-sidebar' class to the navbar to transition it to a sidebar
navbar.classList.add('is-sidebar');
} else {
// Remove the 'is-sidebar' class to return the navbar to its original position
navbar.classList.remove('is-sidebar');
}
});

// Add an event listener to the navbar to detect clicks
navbar.addEventListener('click', () => {
navbar.classList.toggle('show');
});

// Add an event listener to the navbar to detect clicks
const navbar = document.querySelector('.navbar');
navbar.addEventListener('click', (e) => {
if (e.target.closest('.navbar-item')) {
navbar.classList.toggle('show');
}
});