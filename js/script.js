//text mouve
/*gsap.from(".txt",{
    scrollTrigger : {
        scrub: true

    },
    y: 500,
})*/
gsap.fromto(".text",{x:300, y:500},{

    y:100,
    x:300,
    duration:3 ,

})
//brids move
gsap.from(".birds",{
    scrollTrigger : {
        scrub: true

    },
    y: 40,
})
gsap.from(".birds",{
    scrollTrigger : {
        scrub: true

    },
    y: -60,
})


