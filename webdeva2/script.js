let text = document.getElementById('text'); 
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

const links = document.querySelectorAll("nav ul li a");

links.forEach(link => 
{
    link.addEventListener("click", function() 
    {
        // Remove active class from all links
        links.forEach(link => link.classList.remove("active"));
        
        // Add active class to the clicked link
        this.classList.add("active");
    });
});

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) 
    {
        event.preventDefault(); // Prevent the default anchor behavior
    });
});

document.getElementById('hamIcon').addEventListener('click', function(event) {
    event.preventDefault();
});

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.parallax img, .parallax h2');
    const delays = [0, 300, 600, 900, 1200, 1500, 1800, 2100, 2400 , 2700]; 

    elements.forEach((element, index) => {
        const delay = delays[index]; // Get delay from the array

        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, delay);
    });
});

window.addEventListener('scroll', ()=> {
    let value = window.scrollY;

    text.style.marginTop = value * 2 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 1.5 + 'px';
})


//target all elements to save to constants
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
var allpages=document.querySelectorAll(".page");

//select all subtopic pages
console.log(allpages);
hideall();
show(1); 

function hideall()
{ //function to hide all pages
    for(let onepage of allpages)
    { //go through all subtopic pages
        onepage.style.display="none"; //hide it
    }
}

function show(pgno)
{ //function to show selected page no
    hideall();
    //select the page based on the parameter passed in
    let onepage=document.querySelector("#page"+pgno);
    //show the page
    onepage.style.display="block";
}

/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () { 
show(1); 
});
page2btn.addEventListener("click", function () { 
show(2); 
});
page3btn.addEventListener("click", function () {
show(3); 
});

const hamBtn = document.querySelector("#hamIcon");
const menuItemsList = document.querySelector("nav ul");
let isMenuVisible = false; // Track menu visibility state

// Function to toggle menu visibility
function toggleMenu() {
    menuItemsList.classList.toggle("menuHide");
    isMenuVisible = !isMenuVisible; // Update menu visibility state
}

// Event listener for hamburger icon click
hamBtn.addEventListener("click", function() {
    toggleMenu();
});

// Function to check and apply menuHide class based on viewport width
function checkViewportWidth() {
    const viewportWidth = window.innerWidth;

    // Adjust menu visibility based on viewport width
    if (viewportWidth > 750) {
        menuItemsList.classList.remove("menuHide"); // Hide menu on wider screens
        isMenuVisible = false; // Update menu visibility state
    } else if (viewportWidth <= 750 && isMenuVisible) {
        menuItemsList.classList.add("menuHide"); // Show menu on narrower screens if currently visible
    }
}
// Initial check on page load
checkViewportWidth();

// Listen for resize events to adjust menu visibility dynamically
window.addEventListener("resize", function() {
    checkViewportWidth();
});

let currentSlide = 1;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        slide.style.order = (i - index + totalSlides) % totalSlides;
    });

    const middleIndex = (index + Math.floor(totalSlides / 2)) % totalSlides;
    slides[middleIndex].classList.add('active');

    // Adjust the order of slides for circular behavior
    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.order = ((i - currentSlide + totalSlides) % totalSlides) + 1;
    }
}

function prevSlide() {
    const totalSlides = document.querySelectorAll('.slide').length;
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : totalSlides - 1;
    showSlide(currentSlide);
}

function nextSlide() {
    const totalSlides = document.querySelectorAll('.slide').length;
    currentSlide = (currentSlide < totalSlides - 1) ? currentSlide + 1 : 0;
    showSlide(currentSlide);
}

// Initialize the first slide
showSlide(currentSlide);
