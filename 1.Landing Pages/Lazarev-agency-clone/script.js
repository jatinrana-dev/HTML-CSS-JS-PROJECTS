var section3center = document.querySelector('#section3-center')
var video = document.querySelector('#section-3 video')
section3center.addEventListener("click",function(){
    console.log("clicked")
    video.play(),
    gsap.to(video,{
        
         scaleX: 1,
        scaleY: 1,
        opacity:1,
        borderRadius:0
    })
})

video.addEventListener("click",function(){
    video.pause(),
    gsap.to(video,{
        
         scaleX: 0,
        scaleY: 0,
        opacity:0,
        borderRadius:0
         })
})