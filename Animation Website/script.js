//query selector used to select html elements in javascript
var crsr=document.querySelector("#cursor");
var crsr2=document.querySelector("#cursor-blur");
//document means entire html document
// dets give details about all the movements or events happen when mouse moves
// event listner tols about the events happening in dom
document.addEventListener("mousemove",function(dets){
    // console.log("hey");
    // console.log(dets);
    crsr.style.left = dets.x+20+"px"
    crsr.style.top = dets.y+5+"px"
    crsr2.style.left = dets.x-200+"px"
    crsr2.style.top = dets.y-200+"px"
})

var h4all=document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3;
        crsr.style.border="0.5px solid white";
        crsr.style.backgroundColor="transparent";
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1;
        crsr.style.border="none";
        crsr.style.backgroundColor="#96C11E";
        crsr.style.opacity="0.6";
    })
})

var h3all=document.querySelectorAll("#last-tab h3");
h3all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3;
        crsr.style.border="0.5px solid white";
        crsr.style.backgroundColor="transparent";
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1;
        crsr.style.border="none";
        crsr.style.backgroundColor="#96C11E";
        crsr.style.opacity="0.6";
    })
})

var mtxt=document.querySelector("#p-text");
document.addEventListener("mouseenter",function(dets){
    mtxt.style.left=dets.x/100
    mtxt.style.top=dets.y/100
})
// gsap library

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"150px",
    // scroll trigger used to do animation on scroll
    scrollTrigger:{
        trigger:"#nav",
        scroll:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
        // scrub used to slow down animation
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
     scrollTrigger:{
         trigger:"#main",
         scroll:"body",
        //  markers:true,
         start:"top -25%",
         end:"top -70%",
         scrub:2
     }
})

gsap.from("#aboutus img, #about-text",{
    y:100,
    opacity:0,
    duration:3,
    // stagger:0.4, used to do animation one by one
    scrollTrigger:{
        trigger:"#aboutus",
        scroll:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:3
    }
})
gsap.from(".cards",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.6,
    scrollTrigger:{
        trigger:"#card-container",
        scroll:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
})
gsap.from("#colon1",{
    y:-50,
    x:-50,
    duration:2,
    scrollTrigger:{
        trigger:"#p-text",
        scroll:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:5
    }
})
gsap.from("#colon2",{
    y:50,
    x:50,
    duration:2,
    scrollTrigger:{
        trigger:"#p-text",
        scroll:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:5
    }
})
// gsap.to("#p-text",{
    
// })