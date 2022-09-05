var scrollValue = 0
addEventListener('wheel', (e) => {

    scrollValue += e.wheelDelta
    console.log(scrollValue)
})