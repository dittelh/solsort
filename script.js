// Some initial values
var scrollValue = 0
var scrollValueBefore = 0;
var firstTextValue = 1;
var secondSectionValue = 0;
var blackBoxValue = 0.8;

// Get document elements
var leafLeft = document.getElementById("leafLeft");
var leafRight = document.getElementById("leafRight");
var firstText = document.getElementById("firstText");
var nestImg = document.getElementById("nest");
var secondSection = document.getElementById("secondSection");
var blackBox = document.getElementById("blackBox");
var body = document.body;

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
body.style.overflowX = "hidden";
body.style.overflowY = "hidden";

// Do something when scrolling
addEventListener('wheel', (e) => {
    
    // Get scroll value from event
    scrollValue += e.wheelDelta
    

    console.log(scrollValue);

    // Set leafs position values
    let leafLeftValue = scrollValue / 2; // Divide so the value wont become too high
    let leafRightValue = leafLeftValue - (leafLeftValue + (leafLeftValue)) // Get a positive value (instead of negative)

 
    // If we are scrolling down then give new styling values to elements
    if(scrollValue < -800) {
        // Leaf positions
        leafLeft.style.transform = "translateX(" + leafLeftValue + "px)"
        leafRight.style.transform = "translateX(" + leafRightValue + "px)"

        // Text opacity
        scrollValue < scrollValueBefore ? firstTextValue -= 0.1 : firstTextValue += 0.1;
        firstText.style.opacity = firstTextValue

    } if(scrollValue >= 0) {
        // Reset values if we go back to top
        scrollValue = 0;
        firstTextValue = 1;
        firstText.style.opacity = firstTextValue
        leafLeft.style.transform = "translateX(0px)"
        leafRight.style.transform = "translateX(0px)"
    }


    // Black box opacity
    if(scrollValue < 0){
        scrollValue < scrollValueBefore ? blackBoxValue -= 0.2 : blackBoxValue += 0.2;
        blackBox.style.opacity = blackBoxValue;
        console.log(blackBoxValue)
    } else {
        blackBoxValue = 0.8
    }

    // Nest images
    if(scrollValue < -2040){
        nestImg.src = "assets/img/nestCracked.png"
    } 
    if(scrollValue < -2700){
        nestImg.src = "assets/img/nestOpen.png"
    }
    if(scrollValue > -2040){
        nestImg.src = "assets/img/nest.png"
    } 

    // Second section opacity
    if(scrollValue < -3600){
        scrollValue < scrollValueBefore ? secondSectionValue += 0.2 : secondSectionValue -= 0.2;
        secondSection.style.opacity = secondSectionValue
    } else {
        secondSectionValue = 0;
    }



    // Toggle scrolling
    if(scrollValue < -3000){
        body.style.overflowY = "unset";
    } else if(scrollValue > -1700){
        body.style.overflowY = "hidden";
    }

    // Save current value so we can check it as the old value next time we scroll
    scrollValueBefore = scrollValue;
})




window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}