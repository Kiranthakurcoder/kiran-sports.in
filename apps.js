let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

// Match data for dynamically adding matches
const matches = [
  { teams: "IND vs AUS", date: ", Adelaide" },
  { teams: "IND vs AUS", date: " Brisbane" },
  { teams: "IND vs AUS", date: "Melbourne " },
  { teams: "IND vs AUS", date: "Sydney Cricket" }
];




// Updated the second to fourth elements in the array


// Add matches to the schedule dynamically
const matchList = document.getElementById("match-list");
matches.forEach((match) => {
  const matchItem = document.createElement("li");
  matchItem.textContent = `${match.teams} - ${match.date}`;
  matchList.appendChild(matchItem);
});

// Button functionality to show a message
function showLive() {
  alert("Live Streaming Coming Soon!");
}

// Show specific slide based on index
function showSlide(index) {
  // Reset all slides and dots
  slides.forEach((slide) => slide.classList.remove('active'));
  dots.forEach((dot) => dot.classList.remove('active'));

  // Activate current slide and dot
  slides[index].classList.add('active');
  dots[index].classList.add('active');
}

// Auto slide functionality
function autoSlide() {
  currentIndex = (currentIndex + 1) % slides.length; // Increment index and loop back to 0
  showSlide(currentIndex);
}

// Set specific slide when a dot is clicked
function setSlide(index) {
  currentIndex = index;
  showSlide(currentIndex);
}

// Initialize the first slide
showSlide(currentIndex);

// Set the interval for automatic slide change
setInterval(autoSlide, 4000); // Change slide every 4 seconds
