window.onload = () => {

  var swiper1 = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 25,
    slidesPerGroup: 1,
    rewind: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    navigation: {
      prevEl: ".swiper-button-prev1",
      nextEl: ".swiper-button-next1",
    },
    breakpoints: {
      800: {
        slidesPerView: 4,
        spaceBetween: 20,
      }
    }
  });
  var swiper1 = new Swiper(".mySwiper-equipe", {
    slidesPerView: 1,
    spaceBetween: 25,
    slidesPerGroup: 1,
    rewind: false,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    navigation: {
      prevEl: ".swiper-button-prev-equipe",
      nextEl: ".swiper-button-next-equipe",
    },
    breakpoints: {
      800: {
        slidesPerView: 3,
        spaceBetween: 35,
      }
    }
  });
  var swiper1 = new Swiper(".mySwiper-differ", {
    slidesPerView: 1,
    spaceBetween: 25,
    slidesPerGroup: 1,
    rewind: false,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    navigation: {
      prevEl: ".swiper-button-prev-differ",
      nextEl: ".swiper-button-next-differ",
    },
    breakpoints: {
      800: {
        slidesPerView: 3,
        spaceBetween: 0,
      }
    }
  });
  var swiper1 = new Swiper(".mySwiper-result", {
    slidesPerView: 1,
    spaceBetween: 25,
    slidesPerGroup: 1,
    rewind: false,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    navigation: {
      prevEl: ".swiper-button-prev-result",
      nextEl: ".swiper-button-next-result",
    },
    breakpoints: {
      800: {
        slidesPerView: 3,
        spaceBetween: 0,
      }
    }
  });
  var swiper1 = new Swiper(".mySwiper-dep", {
    slidesPerView: 1,
    spaceBetween: 25,
    slidesPerGroup: 1,
    rewind: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    navigation: {
      prevEl: ".swiper-button-prev-dep",
      nextEl: ".swiper-button-next-dep",
    },
    breakpoints: {
      800: {
        slidesPerView: 4,
        spaceBetween: 25,
      }
    }
  });
  var swiper1 = new Swiper(".mySwiper-img", {
    effect: 'fade',
    slidesPerView: 1,
    spaceBetween: 25,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination-img",
      clickable: true,
    },
    navigation: {
      prevEl: ".swiper-button-prev-img",
      nextEl: ".swiper-button-next-img",
    },
    breakpoints: {
      800: {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
      }
    }
  });

}

/* 
  Importe este link no head no HTML:
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"/>

  Importe este link no footer:
  <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>


*/