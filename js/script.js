$(document).ready(function () {


    let $btns = $('.portfolio-area .button-group button');


    $btns.click(function (e) {

        $('.portfolio-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.portfolio-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.portfolio-area .button-group #btn').trigger('click');

    $('.portfolio-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });
});


    
    $("a").on("click", function(event) {
     
      if (this.hash !== "") {
      
        event.preventDefault();
  
      
        var hash = this.hash;
  
      
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top
          },
          800,
          function() {
         
            window.location.hash = hash;
          }
        );
      } 
    });

    $("img-fluid").ready(function() {
      var imgFluid = $(".img-fluid");
      var imgFluidPosition =imgFluid.offset().top;
      var windowHeight = $(window).height();
      var scrollPosition = $(this).scrollTop();
    
      if (scrollPosition >imgFluidPosition - windowHeight + 200) {
        imgFluid.addClass("fade-in");
      }
    });

