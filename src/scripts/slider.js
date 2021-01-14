window.addEventListener('load', function(e){
    e.preventDefault();
    new Glider(document.querySelector('.glider'), {
      slidesToScroll: 1,
  slidesToShow: 2,
  draggable: false,
  dots: 'false',
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
      // screens greater than >= 775px
      breakpoint: 1440,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: '4',
        slidesToScroll: '1',
        
        
      }
      
    },
    
    // destroy(),
  ]
})

// document.querySelector('.glider').addEventListener('glider-destroy', function(event){
//   // after destroy
// });
  
  })


  new Glider(document.querySelector('.glider'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: false,
    dots: '#resp-dots',
    arrows: {
      prev: '.arrow__prev',
      next: '.arrow__next'
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 775,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: '2',
          slidesToScroll: '1',
          itemWidth: 5000,
          duration: 0.25
        }
      }
    ]
  });