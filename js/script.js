gsap.fromTo(".txt",{y:500},{y:100 , duration:5 , scale:3}); //parallax for text

gsap.fromTo(".birds",{y:0},{y:150 , duration:5 , scale:1}); //animation for birds

//cloud parallax scroling
gsap.from(".cloud1",{
    scrollTrigger : {
        scrub: true

    },
    x: -300,
})
gsap.from(".cloud2",{
    scrollTrigger : {
        scrub: true

    },
    x: 600,
})



