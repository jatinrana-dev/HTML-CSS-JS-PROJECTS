function section3video() {
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
}

section3video()

var videos = document.querySelectorAll("#section5top")


videos.forEach(function(elem){

    var video = elem.querySelector('.video video')
    elem.addEventListener('mouseenter',function(){
        video.play()
        video.style.opacity = 1;
    })
    elem.addEventListener('mouseleave',function(){
        video.pause()
        video.load()
        video.style.opactiy = 0
    })
})


var videoss = document.querySelectorAll("#section5bottom")



videoss.forEach(function(elem){

    var videoo = elem.querySelector('.video video')
    elem.addEventListener('mouseenter',function(){
        videoo.play()
        videoo.style.opacity = 1;
    })
    elem.addEventListener('mouseleave',function(){
        videoo.pause()
        videoo.load()
        videoo.style.opacity = 0
    })
})





const sectionTop = document.querySelector('.section-5-top');

sectionTop.addEventListener('mouseenter', () => {
    sectionTop.classList.add('active');
});

sectionTop.addEventListener('mouseleave', () => {
    sectionTop.classList.remove('active');
});


const sectionBottom = document.querySelector('.section-5-bottom');

sectionBottom.addEventListener('mouseenter', () => {
    sectionBottom.classList.add('active');
});

sectionBottom.addEventListener('mouseleave', () => {
    sectionBottom.classList.remove('active');
});