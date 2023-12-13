// console.log("initSwiper.js loaded");
// window.initSwiper = function(element) {
//     console.log("initSwiper called", element);
//     element.classList.remove('hidden');
//     const swiperContainer = element.querySelector('.mySwiper');
//     console.log("swiperContainer", swiperContainer);
//
//     if (swiperContainer) {
//         const uniqueId = 'swiper-' + Date.now();
//         swiperContainer.id = uniqueId;
//         console.log("Initializing Swiper for", uniqueId);
//
//         new Swiper('#' + uniqueId, {
//             loop: true,
//             pagination: {
//                 el: '#' + uniqueId + ' .swiper-pagination',
//             },
//             navigation: {
//                 nextEl: '#' + uniqueId + ' .swiper-button-next',
//                 prevEl: '#' + uniqueId + ' .swiper-button-prev',
//             },
//         });
//     } else {
//         console.error("Swiper container not found");
//     }
// };
