
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 3000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    nextDom.click();
}, timeAutoNext)



//Carousel sliding animation
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 5]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 5]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext)
}



// Contact Section
let startX, moveX, distX;
let currentIndex = 0;
const carddd = document.querySelector('.help');

document.addEventListener('touchstart', function(e) {
  startX = e.touches[0].clientX;
});

document.addEventListener('touchmove', function(e) {
  moveX = e.touches[0].clientX;
  distX = moveX - startX;
});

document.addEventListener('touchend', function() {
  if (distX > 50 && currentIndex > 0) {
    currentIndex--;
  } else if (distX < -50 && currentIndex < document.querySelectorAll('.carddd').length - 1) {
    currentIndex++;
  }
  carddd.style.transform = `translateX(-${currentIndex * 100}vw)`;
});

