// window.addEventListener('load', function(e){
//     e.preventDefault();
//     new Glider(document.querySelector('.glider'), {
//       // Mobile-first defaults
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       scrollLock: false,
//       rewind: 'true',
//       dots: '#resp-dots',
//       arrows: {
//         prev: '.arrow__prev',
//         next: '.arrow__next'
//       },
//       responsive: [
//         {
//           // screens greater than >= 775px
//           breakpoint: 775,
//           settings: {
//             // Set to `auto` and provide item width to adjust to viewport
//             slidesToShow: 'auto',
//             slidesToScroll: 'auto',
//             // itemWidth: 150,
//             // duration: 0.25
//           }
//         },{
//           // screens greater than >= 1024px
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1,
//             // itemWidth: 150,
//             // duration: 0.25
//           }
//         }
//       ]
//     });
//   });


window.addEventListener('load', function(e){
  e.preventDefault();
  new Glider(document.querySelector('.glider'), {
    slidesToScroll: 1,
  slidesToShow: 1,
  draggable: false,
  dots: '.dots__container',
rewind: 'true',
arrows: {
  prev: '.glider-prev',
  next: '.glider-next'
},
responsive: [
  {
     // screens greater than >= 775px
     breakpoint: 768,
     settings: {
       // Set to `auto` and provide item width to adjust to viewport
       slidesToShow: '2',
       slidesToScroll: '1',
       dots:'false'
      
    }
  },
  {
    // screens greater than >= 775px
    breakpoint: 1024,
    settings: {
      // Set to `auto` and provide item width to adjust to viewport
      slidesToShow: '2',
      slidesToScroll: '1',
      
    }
  },
  {
    
    
  },
  
 
]
})

})