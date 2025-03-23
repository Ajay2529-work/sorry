// // Animation for quotes
// const quotes = document.querySelectorAll('.quotes p');
// let quoteIndex = 0;

// quotes[quoteIndex].classList.add('fade-in');

// setInterval(() => {
//   quotes[quoteIndex].classList.remove('fade-in');
//   quoteIndex = (quoteIndex + 1) % quotes.length;
//   quotes[quoteIndex].classList.add('fade-in');
// }, 5000);


// Animation for quotes
const quotes = document.querySelectorAll('.quotes p');
let quoteIndex = 0;
const checkbox = document.getElementById('open');

// Show quotes immediately when the card is opened
checkbox.addEventListener('change', function() {
  if (this.checked) {
    quotes.forEach(q => q.style.opacity = '1');
  } else {
    quotes.forEach(q => q.style.opacity = '0');
  }
});


