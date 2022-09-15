// Some initial values
var scrollValue = 0
var scrollValueBefore = 0;
var firstTextValue = 1;

// Get document elements
var leafLeft = document.getElementById("leafLeft");
var leafRight = document.getElementById("leafRight");
var firstText = document.getElementById("firstText");
var body = document.body;

// Do something when scrolling
addEventListener('wheel', (e) => {
    
    // Get scroll value from event
    scrollValue += e.wheelDelta
    
    console.log(scrollValue);
    // Set leafs position values
    let leafLeftValue = scrollValue / 2; // Divide so the value wont become too high
    let leafRightValue = leafLeftValue - (leafLeftValue + (leafLeftValue * 2)) // Get a positive value (instead of negative)
   
    // Set text opacity depending of we are scrolling up or down
    scrollValue < scrollValueBefore ? firstTextValue -= 0.1 : firstTextValue += 0.1;

    // If we are scrolling down then give new styling values to elements
    if(scrollValue < 0) {
        leafLeft.style.transform = "translateX(" + leafLeftValue + "px)"
        leafRight.style.transform = "translateX(" + leafRightValue + "px)"
        firstText.style.opacity = firstTextValue

    } else {
        // Reset values if we go back to top
        scrollValue = 0;
        firstTextValue = 1;
        firstText.style.opacity = firstTextValue
    }

    // Save current value so we can check it as the old value next time we scroll
    scrollValueBefore = scrollValue;


    // Toggle scrolling
    if(scrollValue < -1300){
        body.style.overflow = "unset";
    } else if(scrollValue === 0){
        body.style.overflow = "hidden";
    }
})




window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}