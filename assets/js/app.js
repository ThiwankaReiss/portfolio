

// Sample array of search suggestions
 const suggestions = ["JavaScript", "HTML", "CSS", "React", "Node.js", "Dark Mode", "Web Development"];

 const searchInput = document.getElementById("search-input");
 const searchSuggestions = document.getElementById("search-suggestions");

 searchInput.addEventListener("input", function() {
     const searchTerm = searchInput.value.toLowerCase();
     const filteredSuggestions = suggestions.filter(suggestion =>
         suggestion.toLowerCase().includes(searchTerm)
     );

     displaySuggestions(filteredSuggestions);
 });

 function displaySuggestions(filteredSuggestions) {
     // Clear previous suggestions
     searchSuggestions.innerHTML = "";

     // Display new suggestions
     filteredSuggestions.forEach(suggestion => {
         const li = document.createElement("li");
         li.textContent = suggestion;
         li.addEventListener("click", function() {
             // Handle the click on a suggestion (e.g., perform a search)
             alert("You clicked on: " + suggestion);
         });
         searchSuggestions.appendChild(li);
     });

     // Show or hide the suggestions container based on the number of suggestions
     searchSuggestions.style.display = filteredSuggestions.length > 0 ? "block" : "none";
 }

 // Close the suggestions when clicking outside the search container
 document.addEventListener("click", function(event) {
     if (!event.target.closest("#search-container")) {
         searchSuggestions.style.display = "none";
     }
 });

var app=document.getElementById('txt-animation');
var Typewriter = new Typewriter(app,{
    loop: false,
    delay: 40,
});

Typewriter
    .pauseFor(700)
    .typeString(
        '<span style="color:white; font-size: 25px; padding-left :40px;">Hi, I’m thiwanka reiss.</span>')
    .pauseFor(700)
    .deleteChars(15)
    .typeString(
        '<span style="color:white; font-size: 25px;">THIWANKA REISS.</span><br><br>')
    .pauseFor(500)
    .typeString(
        '<span style="color:white">I’m an Under Graduate (Unversity Of Moratuwa) with superb coding skills in java based (full stack) app development and web development (Responsive web site creation).</span><br>')
    .pauseFor(500)
        .typeString(
        '<span style="color:white; font-size: 40px; padding-left :40px;">Hmmm!!!!</span>')
    .pauseFor(1000)
        .deleteChars(8)
    .typeString(
        '<span style="color:white; font-size: 20px;">Here’s What I’m Good at ...</span><br>')
    .typeString(
        '<span style="color:white;font-size: 12px;">Java Back-End and Front-End Development using Intelij IDEA or net-beans tools. <br>Data Base Management <br>HTML (Frame works :Bootstrap, Angular etc.. ) <br>CSS  <br>Java Script  <br>Some 3D art and Animation skills in Java</span>')    
    .start()



let currentSlide = 0;
const slides = document.getElementsByClassName('carousel-slide');
const descriptions = document.getElementsByClassName('carousel-description');

function showSlide(n) {
    if (n >= slides.length) {
    currentSlide = 0;
    } else if (n < 0) {
    currentSlide = slides.length - 1;
    } else {
    currentSlide = n;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    }

    // Display the current slide
    slides[currentSlide].style.display = 'block';
}

function showNextSlide() {
    showSlide(currentSlide + 1);
}

function showPreviousSlide() {
    showSlide(currentSlide - 1);
}

function changeSlide(n) {
    showSlide(currentSlide + n);
}

// Automatically transition to the next slide every 2 seconds
setInterval(showNextSlide, 4000);

// Display the initial slide
showSlide(currentSlide);




function openKiwiPage() {
    // Specify the URL of the webpage you want to open
    var url = 'https://thiwankareiss.github.io/kiwi-final/';

    // Open the new webpage in a new window or tab
    window.open(url, '_blank');
  }

  

function openKiwiCode() {
    // Specify the URL of the webpage you want to open
    var url = 'https://github.com/ThiwankaReiss/kiwi-final.git';

    // Open the new webpage in a new window or tab
    window.open(url, '_blank');
}