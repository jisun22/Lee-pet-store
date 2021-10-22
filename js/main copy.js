const ToggleBtn = document.querySelector('.header_ToggleBtn');
const menu = document.querySelector('.header_menu');
const icons = document.querySelector('.header_icons');

ToggleBtn.addEventListener('click',() =>{
    menu.classList.ToggleBtn('active');
    icons.classList.ToggleBtn('active');
});

$(function() {
    var lnb = $("#header").offset().top;
    $(window).scroll(function() {
        var window = $(this).scrollTop();

        if(lnb <= window) {
            $("#header").addClass("fixed");
        } else {
            $("#header").removeClass("fixed");
        }
    })
});




//best slide
var slides =  document.querySelector('.slides')
    slides = document.querySelectorAll('.slides li'),
    currentIdx = 0,
    slideCount = slide.length,
    slideWidth = 1000,
    slideMargin = 30,
    prevBtn = document.querySelector('.prev')
    nextBtn = document.querySelector('.next')

    makeClone();

    function makeClone(){
        for(var i =0; i < slideCount; i++){
            
            var cloneSlide= slide[i].cloneNode(true);
            cloneSlide.classList.add('clone')
            slides.appendChild(clonesSlide);
        }
        for(var i = slideCount -1; i >=0; i--){
            var cloneSlide = slide[i].cloneNode(true);
            cloneSlide.classList.add('clone');
            slides.prepend(cloneSlide);
        } 
        updateWidth();
        setInitialPos();
        setTimeout(function(){
            slides.classList.add('animated')
        },100)
    }
    function updateWidth(){
        var currentSlides = document.querySelectorAll('.slides li')
        var newSlideCount = currrentSlides.length;

        var newWidth= (slideWidth + slideMargin)*newSlideCount-slideMargin + 'px';
        slides.getElementsByClassName.width=newWidth;
    }
    function setInitialPos(){
        var initialTranslateValue = -(slideWidth + slideMargin)*slideCount;
        slides.style.transform='translateX('+ initialTranslateValue+'px)';
    }
    nextBtn .addEventListener('click',function(){
        moveSlide(currnetIdx + 1);
    });

    nextBtn .addEventListener('click',function(){
        moveSlide(currnetIdx - 1);
    });

    function moveSlide(num){
        slides.style.left = -num * (slideWidth + slideMargin) + 'px';
        currentIndx = num;
        console.log(currentIdx, slideCount);
        if(currentIdx == slideCount || currentIdx == -slideCount){
            setTimeout(function(){
            slides.classList.remove('animated');
            slides.style.left = '0px';
            currentIdx= 0;
            },500);
            setTimeout(function(){
                slides.classList.add('animated');
            },600);
        }
    }    