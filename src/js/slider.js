const images = document.querySelectorAll(' .about__slider .about__slider-line img')
const sliderLine = document.querySelector('.about__slider-line');
let count = 0;
let width;

function init() {
console.log('resize')
width = document.querySelector('.about__slider').offsetWidth;
sliderLine.style.width = width * images.length + 'px';
images.forEach(item =>{
    item.style.width = width + 'px'
    item.style.height = 'auto'
})
rollSlider()
 console.log(width)
}


 window.addEventListener('resize', init);
 init ()

 document.querySelector('.about__slider-right').addEventListener('click', function(){
    count --;
    if (count < 0) {
        count = images.length - 1
    }

    rollSlider()

 });

 document.querySelector('.about__slider-left').addEventListener('click', function(){
    count ++;
    if (count >= images.length) {
        count = 0
    }

    rollSlider()

 });

 function rollSlider() {
sliderLine.style.transform = 'translate(-' + count * width +'px)'
 } 