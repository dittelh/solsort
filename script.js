// Some initial values
var scrollValue = 0
var scrollValueBefore = 0;
var scrollValuePositive = 0;
var firstTextValue = 1;
var secondSectionValue = 0;
var blackBoxValue = 0.8;
var birdTrackFrames = 0;
var scrollValueSadBird = 0;

// Get document elements
var leafLeft = document.getElementById("leafLeft");
var leafRight = document.getElementById("leafRight");
var firstText = document.getElementById("firstText");
var nestImg = document.getElementById("nest");
var secondSection = document.getElementById("secondSection");
var blackBox = document.getElementById("blackBox");
var vid = document.getElementById('v0'); 
var sadPhoto = document.getElementById("sadBird");
var backgroundRain = document.getElementById("backgroundRain");
var body = document.body;
var rain0 = "";
var rain1 = "";
var rainRemoved = false;

// ScrollMagic
const controller = new ScrollMagic.Controller();

onbeforeunload = function () {
    scrollTo(0, 0);
  }
body.style.overflowX = "hidden";
body.style.overflowY = "hidden";


// Do something when scrolling
addEventListener('wheel', (e) => {
    
    // Get scroll value from event
    scrollValue += e.wheelDelta

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


    // let videoTop = vid.offsetTop;
    // let videoBottom = vid.offsetTop + vid.offsetHeight;
    // console.log(videoTop);
    // console.log(videoBottom)
    // console.log(scrollY)
    
    // console.log(scrollY)
    // Bird tracks
    if(birdTrackFrames > 7100 && scrollY > 8200){
        body.style.overflowY = "unset";
        birdTrackFrames = 7099;
    }
    else if(birdTrackFrames < -10 && scrollY > 8200) {
        body.style.overflowY = "unset";
        birdTrackFrames = 1;
    }
    else if(scrollY > 8200 && scrollY < 8500 && birdTrackFrames < 7100){
        body.style.overflowY = "hidden";
        birdTrackFrames += e.wheelDelta - (e.wheelDelta + e.wheelDelta);
        requestAnimationFrame(scrollPlay);
    }
    if(scrollY < 8000){
        birdTrackFrames = 1;
    }
    


    scrollValuePositive = scrollValue - (scrollValue + scrollValue)

    // Save current value so we can check it as the old value next time we scroll
    scrollValueBefore = scrollValue;


    // Section 7 - img change

    // console.log(isElementInViewport(sadPhoto));
    if(rain0 === ""){
        rain0 = document.getElementsByClassName("rain")[0]
        rain1 = document.getElementsByClassName("rain")[1]
    }

    var sadBirdProgress = scene1.progress();
    console.log(sadBirdProgress)

    birdImages = 22;


    // if(scrollY > 9245 && scrollValueSadBird <= 0){
    //     scrollValueSadBird += e.wheelDelta;
    //     // body.style.overflowY = "hidden";
    // } else if(scrollValueSadBird > 0) {
    //     scrollValueSadBird = 0;
    //     // body.style.overflowY = "unset";
    //     sadPhoto.src = "assets/img/sadBird/sad0.png"
    // }
    
    if(sadBirdProgress <= ( 1 / birdImages)){
        console.log("sad0")
        sadPhoto.src = "assets/img/sadBird/sad0.png";
    }
    
    else if(sadBirdProgress <= ( 2 / birdImages)){
        console.log("sad1")
        sadPhoto.src = "assets/img/sadBird/sad1.png"
    } 
    else if(sadBirdProgress <= ( 3 / birdImages)){
        sadPhoto.src = "assets/img/sadBird/sad2.png"
    }
    else if(sadBirdProgress <= ( 4 / birdImages)){
        sadPhoto.src = "assets/img/sadBird/sad3.png"
    } 
    else if(sadBirdProgress <= ( 5 / birdImages)){
        sadPhoto.src = "assets/img/sadBird/sad4.png"
    } 
    else if(sadBirdProgress <= ( 6 / birdImages)){
        sadPhoto.src = "assets/img/sadBird/sad5.png"
    } 
    else if(sadBirdProgress <= ( 7 / birdImages)){
        sadPhoto.src = "assets/img/sadBird/sad6.png"
    } 
    else if(sadBirdProgress <= ( 8 / birdImages)){
        sadPhoto.src = "assets/img/sadBird/sad7.png"
    } 
    else if(sadBirdProgress <= ( 9 / birdImages)){
        sadPhoto.src = "assets/img/sadBird/sad8.png"
    } 
    else if(sadBirdProgress <= ( 10 / birdImages)){
        sadPhoto.src = "assets/img/sadBird/sad9.png"
    } 
    else if(sadBirdProgress <= ( 11 / birdImages)){
        sadPhoto.src = "assets/img/sadBird/sad10.png"
        // console.log(rain0);

        if(rainRemoved){
            backgroundRain.appendChild(rain0)
            backgroundRain.appendChild(rain1)

            rainRemoved = false;
        }
    } 
    else if(sadBirdProgress <= ( 12 / birdImages)){
        sadPhoto.src = "assets/img/idea.jpg"

        if(!rainRemoved){
            rain0.remove();
            rain1.remove();

            rainRemoved = true;
        }
    }
    else if(sadBirdProgress <= ( 13 / birdImages)){
        sadPhoto.src = "assets/img/singing/singing1.png"
    } 
    else if(sadBirdProgress <= ( 14 / birdImages)){
        sadPhoto.src = "assets/img/singing/singing2.png"
    } 
    else if(sadBirdProgress <= ( 15 / birdImages)){
        sadPhoto.src = "assets/img/singing/singing3.png"
    } 
    else if(sadBirdProgress <= ( 16 / birdImages)){
        sadPhoto.src = "assets/img/singing/singing4.png"
    } 
    else if(sadBirdProgress <= ( 17 / birdImages)){
        sadPhoto.src = "assets/img/singing/singing5.png"
    }
    else if(sadBirdProgress <= ( 18 / birdImages)){
        sadPhoto.src = "assets/img/singing/singing1.png"
    } 
    else if(sadBirdProgress <= ( 19 / birdImages)){
        sadPhoto.src = "assets/img/singing/singing2.png"
    } 
    else if(sadBirdProgress <= ( 20 / birdImages)){
        sadPhoto.src = "assets/img/singing/singing3.png"
    } 
    else if(sadBirdProgress <= ( 21 / birdImages)){
        sadPhoto.src = "assets/img/singing/singing4.png"
    } 
    else if(sadBirdProgress <= ( 22 / birdImages)){
        sadPhoto.src = "assets/img/singing/singing5.png"
    }  
})



// Scrolling bar
onscroll = function() {myFunction()};

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


const scene = new ScrollMagic.Scene({
    triggerElement: '.animation',
    duration: 3000,
    triggerHook: 0,
})
.setTween(tween)
// .addIndicators()
.setPin('.animation')
.addTo(controller);


const scene1 = new ScrollMagic.Scene({
    triggerElement: '#backgroundRain',
    duration: 20000,
    triggerHook: 0,
})
// .addIndicators()
.setPin('#backgroundRain')
.addTo(controller);



// Change img src function

var drengSolsort = document.getElementById("solsort");
var hostname = location.protocol + "//" + location.hostname;

// Add port for localhost
if (location.hostname === "localhost") {
  hostname += ":5500";
}

setInterval(changeBirdImg, 200);

function changeBirdImg() {
    if(drengSolsort.src === hostname + "/assets/img/boy1.png"){
        drengSolsort.src = hostname + "/assets/img/boy2.png"
    } else{
        drengSolsort.src = hostname + "/assets/img/boy1.png"
    }
    
}



// Section 4
"use strict";!function(e){"function"==typeof define&&define.amd?define(e):"undefined"!=typeof module&&module.exports?module.exports=e():enterView=e.call(this)}(function(){var e=function(e){function n(){g=requestAnimationFrame||webkitRequestAnimationFrame||mozRequestAnimationFrame||msRequestAnimationFrame||function(e){return setTimeout(e,1e3/60)}}function t(){if(h&&"number"==typeof h){var e=Math.min(Math.max(0,h),1);return q-e*q}return q}function i(){var e=document.documentElement.clientHeight,n=innerHeight||0;q=Math.max(e,n)}function o(){y=!1;var e=t();A=A.filter(function(n){var t=n.getBoundingClientRect(),i=t.top,o=i<e;if(o&&!n.__enter_view){if(m(n),_)return!1}else!o&&n.__enter_view&&w&&w(n);return n.__enter_view=o,!0}),A.length||removeEventListener("scroll",r,!0)}function r(){y||(y=!0,g(o))}function u(){i(),o()}function f(e){for(var n=e.length,t=[],i=0;i<n;i+=1)t.push(e[i]);return t}function c(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return"string"==typeof e?f(n.querySelectorAll(e)):e instanceof NodeList?f(e):e instanceof Array?e:void 0}function d(){A=c(l)}function a(){addEventListener("resize",u,!0),addEventListener("scroll",r,!0),u()}function s(){var e=l&&m;e||console.error("must set selector and enter options"),n(),d(),a(),o()}var l=e.selector,m=e.enter,w=e.exit,v=e.offset,h=void 0===v?0:v,p=e.once,_=void 0!==p&&p,g=null,y=!1,A=[],q=0;s()};return e});
enterView({
    selector: 'section',
    enter: function(el) {
        el.classList.add('entered');
    }
})

// var frameNumber = 50; 

var playbackConst = 500;

// dynamically set the page height according to video length
vid.addEventListener('loadedmetadata', function() {
// setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
});


// Use requestAnimationFrame for smooth playback
function scrollPlay(){  
// var frameNumber  = pageYOffset/playbackConst;
var frameNumber  = birdTrackFrames/playbackConst;
vid.currentTime  = frameNumber;
requestAnimationFrame(scrollPlay);
}




// Section 7
// Rain https://codepen.io/arickle/pen/XKjMZY d. 28/9-22


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
    drops += '<div class="drop" style="left: ' + increment + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    backDrops += '<div class="drop" style="right: ' + increment + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
}
document.querySelector('.rain.front-row').insertAdjacentHTML("beforeend", drops);
document.querySelector('.rain.back-row').insertAdjacentHTML("beforeend", backDrops);


function playSound(){
    var music = new Audio('assets/img/birdsong.mp3');
    music.play();
}













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