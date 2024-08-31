const typingText = document.querySelector('.typing-effect');
const textArray = 'Welcome to our website!'.split('');
let i = 0;

setInterval(() => {
  if (i < textArray.length) {
    typingText.innerHTML += textArray[i];
    i++;
  }
}, 100);

const hoverImages = document.querySelectorAll('.slideshow');

hoverImages.forEach((image) => {
  image.style.display = 'block'; // Make sure images are displayed
  image.style.width = '200px'; // Set a default width
  image.style.height = '200px'; // Set a default height

  image.addEventListener('mouseover', () => {
    image.style.transform = 'scale(1.2)';
    image.style.webkitTransform = 'scale(1.2)'; // Add vendor prefix for Safari
    image.style.msTransform = 'scale(1.2)'; // Add vendor prefix for IE
    image.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    image.style.webkitBoxShadow = '0 0 10px rgba(0, 0, 0, 0.5)'; // Add vendor prefix for Safari
  });

  image.addEventListener('mouseout', () => {
    image.style.transform = 'scale(1)';
    image.style.webkitTransform = 'scale(1)'; // Add vendor prefix for Safari
    image.style.msTransform = 'scale(1)'; // Add vendor prefix for IE
    image.style.boxShadow = 'none';
    image.style.webkitBoxShadow = 'none'; // Add vendor prefix for Safari
  });
});