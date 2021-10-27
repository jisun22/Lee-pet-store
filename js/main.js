// 헤더 색상 변하기

$(function(){
  var $header = $('header'); //헤더를 변수에 넣기
  var $page = $('.main_container'); //색상이 변할 부분
  var $window = $(window);
  var pageOffsetTop = $page.offset().top;//색상 변할 부분의 top값 구하기
  
  $window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
    pageOffsetTop = $page.offset().top;
  });
  
  $window.on('scroll', function(){ //스크롤시
    var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
    $header.toggleClass('down', scrolled); //클래스 토글
  });
});

// search 배경 슬라이드 

var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.search-pagination'
  },
  mousewheel: true,
  centeredSlides : true,
  keyboard: true,
  slidesPerView: 1,
  autoplay: {
      delay: 2000,
  },
  speed: 1000
});



// 섹션 슬라이드
var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    slidesPerView: 3,
    autoplay: {
        delay: 2000,
    },
    speed: 1000
  });


  // 이벤트 슬라이드
  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    slidesPerView: 1,
    autoplay: {
        delay: 2000,
    },
    speed: 1000
  });




//  비디오 타이핑 효과

var typingBool = false; 
  var typingIdx=0; 
  var typingTxt = $(".typing-txt").text(); // 타이핑될 텍스트를 가져온다 
  typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
  if(typingBool==false){ // 타이핑이 진행되지 않았다면 
      typingBool=true; 
      
      var tyInt = setInterval(typing,100); // 반복동작 
    } 
    
    function typing(){ 
      if(typingIdx<typingTxt.length){  
        $(".typing-text").append(typingTxt[typingIdx]); 
        typingIdx++; 
      } else{ 
        clearInterval(tyInt);
      } 
    }  

const toggleBtn = document.querySelector(".toggle_btn");
const menu = document.querySelector(".header_menu1");
const icons = document.querySelector(".navbar_icons");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});