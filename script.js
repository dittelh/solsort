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
    

    // console.log(scrollValue);

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
        // console.log(blackBoxValue)
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
// gsap.registerPlugin()




// Section 3

const flightPath = {


    curviness: 1.25,
    // autoRotate: true,
    values: [
    {x: -100, y: -70},
    {x: -200, y: -50},
    {x:-500, y: 120},
    {x:-800, y: -60},
    {x:-1100, y: 100},
    {x:-1300, y: -115},
    {x:-1600, y: 175},
    {x: -2300, y: -250},
    ]

};

const tween = new TimelineLite();

tween.add(
    TweenLite.to('#solsort', 1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '.animation',
    duration: 3000,
    triggerHook: 0,
})
.setTween(tween)
// .addIndicators()
.setPin('.animation')
.addTo(controller);



// Change img src function

var drengSolsort = document.getElementById("solsort");
var hostname = window.location.protocol + "//" + window.location.hostname;

// Add port for localhost
if (window.location.hostname === "localhost") {
  hostname += ":5500";
}

window.setInterval(changeBirdImg, 200);

function changeBirdImg() {
    if(drengSolsort.src === hostname + "/assets/img/boy1.png"){
        drengSolsort.src = hostname + "/assets/img/boy2.png"
    } else{
        drengSolsort.src = hostname + "/assets/img/boy1.png"
    }
    
}



// Section 4


var container = document.getElementById('birdsfeet');
// Set up our animation 

var animData = {
    container: container,
    renderer: 'svg',
    autoplay: true,
    loop: true,
    path : 'assets/img/birdsfeet.json'
};
var anim = bodymovin.loadAnimation(animData);





// Section 7
// Rain

  //clear out everything
  document.querySelector('.rain').empty();

  var increment = 0;
  var drops = "";
  var backDrops = "";

  while (increment < 100) {
    //couple random numbers to use for various randomizations
    //random number between 98 and 1
    var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
    //random number between 5 and 2
    var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
    //increment
    increment += randoFiver;
    //add in a new raindrop with various randomizations to certain CSS properties
    drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
  }

  document.querySelector('.rain.front-row').insertAdjacentHTML("beforeend",drops);
  document.querySelector('.rain.back-row').insertAdjacentHTML("beforeend",backDrops);


document.querySelector('.splat-toggle.toggle').addEventListener('click', function() {
  document.querySelector('body').classList.toggle('splat-toggle');
  document.querySelector('.splat-toggle.toggle').classList.toggle('active');
  makeItRain();
});

document.querySelector('.back-row-toggle.toggle').addEventListener('click', function() {
  document.querySelector('body').classList.toggle('back-row-toggle');
  document.querySelector('.back-row-toggle.toggle').classList.toggle('active');
  makeItRain();
});

document.querySelector('.single-toggle.toggle').addEventListener('click', function() {
  document.querySelector('body').classList.toggle('single-toggle');
  document.querySelector('.single-toggle.toggle').classList.toggle('active');
  makeItRain();
});

makeItRain();














// LottieInteractivity.create({
//     mode: "scroll",
//     player: "#birdsfeet",
//     actions: [
//         {
//             visibility:[0,1],
//             type: "seek",
//             frames: [0,444],
//         },
//     ]
// });

// https://greensock.com/docs/v3/HelperFunctions#lottie d. 26/9-22

// function LottieScrollTrigger(vars) {
// 	let playhead = {frame: 0},
// 		target = gsap.utils.toArray(vars.target)[0],
// 		speeds = {slow: "+=3000", medium: "+=1000", fast: "+=500"},
// 		st = {trigger: target, pin: true, start: "top top", end: speeds[vars.speed] || "+=500", scrub: 1},
// 		animation = lottie.loadAnimation({
// 			container: target,
// 			renderer: vars.renderer || "svg",
// 			loop: false,
// 			autoplay: false,
// 			path: vars.path
// 		});
// 	for (let p in vars) { // let users override the ScrollTrigger defaults
// 		st[p] = vars[p];
// 	}
// 	animation.addEventListener("DOMLoaded", function() {
// 		gsap.to(playhead, {
//       duration: vars.duration || 0.5,
//       delay: vars.delay || 0,
// 			frame: animation.totalFrames - 1,
// 			ease: vars.ease || "none",
// 			onUpdate: () => animation.goToAndStop(playhead.frame, true),
// 			scrollTrigger: st
// 		});
//     // in case there are any other ScrollTriggers on the page and the loading of this Lottie asset caused layout changes
//     ScrollTrigger.sort();
//     ScrollTrigger.refresh(); 
// 	});
//   return animation;
// }

// LottieScrollTrigger({
//     target: "#birdsfeet",
//     path: "https://lottie.host/fcbb3ebf-aece-45ee-bfa2-469f1643bed1/efYoTgZMmR.json",
//     speed: "slow",
//     scrub: 2 // seconds it takes for the playhead to "catch up"
//     // you can also add ANY ScrollTrigger values here too, like trigger, start, end, onEnter, onLeave, onUpdate, etc. See https://greensock.com/docs/v3/Plugins/ScrollTrigger
//    });