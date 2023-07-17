gsap.fromTo(".txt",{y:500},{y:100 , duration:2 , scale:3}); //parallax for text

gsap.fromTo(".birds",{y:0},{y:170 , duration:1 , scale:1}); //animation for birds


//cloud parallax scroling
gsap.from(".cloud1",{
    scrollTrigger : {
        scrub: 1

    },
    x: -300,
})
gsap.from(".cloud2",{
    scrollTrigger : {
        scrub: 1

    },
    x: 600,
})
gsap.from(".bushes",{
    scrollTrigger : {
        scrub: 1

    },
    x: -150,
    scale:1,
})
gsap.from(".button",{
    scrollTrigger : {
        scrub: 1

    },
    x:700,
    opacity:0,
})
gsap.from(".turtle",{
    scrollTrigger : {
        scrub: 1

    },
    x: 600,
    opacity:0,
})

let sec=document.getElementById("special")
setTimeout(surprise, 15000);

function surprise(){
    sec.setAttribute("class", "special");
}

