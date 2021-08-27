/*------- Menu show Y hidden -------*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*------- Menu show -------*/
/*------- Validate if constant exists -------*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*------- Menu hidden-------*/
/*------- Validate if constant exists -------*/
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*------- Remove Menu Mobile -------*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))







/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
  const nav = document.getElementById('header')
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL up ====================*/ 
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*==================== SHOW SCROLL up ====================*/ 
// function scrollUp(){
//   const scrollUp = document.getElementById('scroll-up');
//   // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
//   if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
// }
// window.addEventListener('scroll', scrollUp)







/*---------work----------------*/
//selecting all required elements
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");
window.onload = ()=>{ //after window loaded
  filterItem.onclick = (selectedItem)=>{ //if user click on filterItem div
    if(selectedItem.target.classList.contains("item")){ //if user selected item has .item class
      filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
      selectedItem.target.classList.add("active"); //add that active class on user selected item
      let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name"); //getting image data-name value
        //if user selected item data-name value is equal to images data-name value
        //or user selected item data-name value is equal to "all"
        if((filterImges == filterName) || (filterName == "all")){
          image.classList.remove("hide"); //first remove the hide class from the image
          image.classList.add("show"); //add show class in image
        }else{
          image.classList.add("hide"); //add hide class in image
          image.classList.remove("show"); //remove show class from the image
        }
      });
    }
  }
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)"); //adding onclick attribute in all available images
  }
}







/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: false
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.home__subtitle',{});
sr.reveal('.home__description',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.home__social',{ interval: 200});
sr.reveal('.home__scroll',{ interval: 300}); 
// sr.reveal('.nav__menu',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__title',{delay: 500});
sr.reveal('.user',{delay: 500});
sr.reveal('.about__description',{delay: 400}); 
sr.reveal('.about__info',{delay: 500});
sr.reveal('.about__button',{delay: 500});

/*SCROLL services*/
sr.reveal('.service__subtitle',{delay: 400}); 
sr.reveal('.service__title',{delay: 500});
sr.reveal('.orb_1',{delay: 300});
// sr.reveal('.services__content',{delay: 400}); card-scroll
sr.reveal('.scroll__card',{delay: 400});
sr.reveal('.orb_2',{delay: 300}); 
/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work__subtitle',{interval: 400}); 
sr.reveal('.work__title',{interval: 500}); 
sr.reveal('.work__items',{interval: 200}); 
// sr.reveal('.image',{interval: 200}); 
sr.reveal('.work__gallery',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 



/*------- Testimonial swiper -------*/
// let swiperTestimonial = new Swiper('.testimonial__container', {
//     loop: true,
//     grabCursor: true,
//     spaceBetween: 48,

//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },

//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//       dynamicBullets: true,
//     },
//     breakpoints:{
//         568:{
//             slidesPerView: 1,
//         }
//     }
//   });

/*------- Portfolio swiper -------*/
// let swiperPortfolio = new Swiper('.testimonial__container', {
//     cssMode: true,
//     loop: true,

//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//   });





// var tl = new TimelineLite({paused:true});
// tl.to(".orb1", 0.3, {x:-50}, 0);

// $(".orb1").on("mouseenter", function(){
//   tl.play();
// });

// $(".orb1").on("mouseleave", function(){
//   tl.reverse();
// });


// $(document).ready(function(){
//     $(".about__info-title").counterUp({
//         delay:10,
//         time:1200
//     });
// });