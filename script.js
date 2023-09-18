
var tl=gsap.timeline();

tl.from(".nav",{
    opacity:0,
    y:20,
})
    
tl.from(".img",{
    delay:0.3,
    opacity:0,
    duration:0.8,
    y:100
})
tl.from(".img2",{
    delay:0.3,
    opacity:0,
    duration:0.8,
    x:100
    
},"-=0.8")

tl.from(".img3",{
    delay:0.3,
    opacity:0,
    duration:0.8,  
    y:-100
},"-=0.8")

tl.from(".main>h1",{
    delay:0,
    opacity:0,
    duration:0.4,
},"-=0.8")




gsap.to(".page1",{
    scrollTrigger:{
        trigger:".page1",
        start:"top 80%",
        scroller:"body",

    },
    y:-70,
    duration:1
})
gsap.to(".page2",{
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        start:"top 90%",

    },
    y:-70,
    duration:1
})

gsap.to(".page2 .box2",{
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        start:"top 90%",

    },
    y:-80,
    delay:0.1,
    duration:1
})

gsap.to(".page3",{
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",

    },
    y:-70,
    duration:1
})
gsap.to(".page4",{
    scrollTrigger:{
        trigger:".page4",
        scroller:"body",
        
    },
    y:-80,
    duration:1
})
    
gsap.to(".bio",{
    scrollTrigger:{
        trigger:".bio",
        scroller:"body",
    

    },
    y:50,
    duration:1,
    
})

gsap.to(".bio1",{
    scrollTrigger:{
        trigger:".bio1",
        scroller:"body",
        

    },
    y:-70,
    duration:1
})

gsap.to(".footer",{
    scrollTrigger:{
        trigger:".footer",
        scroller:"body",
        

    },
    y:-70,
    duration:1
})

gsap.to(".footer_box",{
    scrollTrigger:{
        trigger:".footer_box",
        scroller:"body",
       

    },
    y:-20,
    duration:1
})

gsap.to(".upper_box1 ",{
    scrollTrigger:{
        trigger:".upper_box1",
        scroller:"body",
        

    },
    x:20,
    duration:1,
})
gsap.to(".upper_box2",{
    scrollTrigger:{
        trigger:".upper_box2",
        scroller:"body",
       

    },
    x:15,
    duration:1,
    delay:0.4
})

gsap.to(".upper_box3",{
    scrollTrigger:{
        trigger:".upper_box3",
        scroller:"body",
     

    },
    x:15,
    duration:1,
    delay:0.4
})

gsap.to(".upper_box4",{
    scrollTrigger:{
        trigger:".upper_box4",
        scroller:"body",
        

    },
    x:15,
    duration:1,
    delay:0.4
})

gsap.to(".upper_box5 img",{
    scrollTrigger:{
        trigger:".upper_box5",
        scroller:"body",
       

    },
    x:-15,
    duration:1,
    delay:0.4
})

gsap.to(".footer_last_end",{
    scrollTrigger:{
        trigger:".footer_last_end",
        scroller:"body",
        

    },
    y:30,
    duration:1,
    
})








