function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }

    $(document).ready(function(){

        var isOn=true;
        
        $("#small").click(function(event) {

            if(event.target.id == "extra1" && isOn == true  ){
              myfunc();
              $(".overlay").attr("src","/assets/GroceryCart.jpg");
              $("#overlayTitle").text("Grocery Cart");
              $("#overlayText").text("blah");
            }
            else if(event.target.id == "extra2"&& isOn == true  ){
              myfunc();
              $(".overlay").attr("src","/assets/IntervalUnion.jpg");
              $("#overlayTitle").text("Interval Union");
              $("#overlayText").text("blah");
            }
            else if(event.target.id == "extra3" && isOn == true ){
              myfunc();
              $(".overlay").attr("src","/assets/Hangman.jpg");
              $("#overlayTitle").text("Hangman Algorthim");
              $("#overlayText").text("blah");
            }
            else if(event.target.id == "extra4" && isOn == true){
              myfunc();
              $(".overlay").attr("src","/assets/bash.jpg");
              $("#overlayTitle").text("Fibonacci Dynamic Programing");
              $("#overlayText").text("blah");
            } 
            else if(event.target.id == "extra5" && isOn == true){
              myfunc();
              $(".overlay").attr("src","/assets/bash.jpg");
              $("#overlayTitle").text("Grocery Cart");
              $("#overlayText").text("blah");
            } 
            else if(event.target.id == "extra6" && isOn == true){
              myfunc();
              $(".overlay").attr("src","/assets/bash.jpg");
              $("#overlayTitle").text("Grocery Cart");
              $("#overlayText").text("blah");
            } 
            else if(event.target.id == "extra7" && isOn == true){
              myfunc();
              $(".overlay").attr("src","/assets/Tracktor.jpg");
              $("#overlayTitle").text("Tracktor");
              $("#overlayText").text("blah");
            } 
            else if(event.target.id == "extra8" && isOn == true){
              myfunc();
              $(".overlay").attr("src","/assets/food4kids.jpg");
              $("#overlayTitle").text("Food4Kids");
              $("#overlayText").text("blah");
            } 
        });
        $("#back").click(function(){
          $("#small").removeClass('big');
          $("#small").find('img, .extraText').not('.overlay').animate({opacity: 1}, 500);
          $(".overlay,#back, #overlaybox").animate({opacity: 0}, 500);
          $(".overlay,#back, #overlaybox").hide();
          isOn = true;
      });
    });

    function myfunc(){
      $("#small").addClass('big');
      $(".overlay,#back, #overlaybox").show();
      $("#overlaybox").css({
        'z-index' : '1'
    });
      $(".overlay,#back, #overlaybox").animate({opacity: 1}, 500);
      $("#small").find('img, .extraText').not('.overlay').animate({opacity: 0}, 500);
      isOn = false;
    }

    


  $(window).scroll(function() {
    var y = $(this).scrollTop();
    if (y >= 76) {  $('#myTopnav').addClass('bottomlipshadow'); }
    else { $('#myTopnav').removeClass('bottomlipshadow'); }
    clearTimeout($.data(this, 'scrollTimer'));
    $('#myTopnav').addClass('transparent');
    $('#myTopnav').removeClass('bottomlipshadow');
    $.data(this, 'scrollTimer', setTimeout(function() {
      $('#myTopnav').removeClass('transparent');
      $('#myTopnav').addClass('bottomlipshadow');
    }, 300));
});
  
$(document).ready(function(){$(".typerjs").hide().fadeIn(2000);});
$(document).ready(function(){
    var textWrapper = document.querySelector('.main .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    anime.timeline({loop: false})
  .add({
    targets: '.main .letter',
    scale: [0.3,1],
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.main .letter',
    rotate: {
    value: 30,
    duration: 1000,
    easing: 'easeInExpo'
    }
  }).add({
    targets: '.main .letter',
    rotate: {
    value: -30,
    duration: 1250,
    easing: 'easeInExpo'
    }
  }).add({
    targets: '.main .letter',
    rotate: {
    value: 0,
    duration: 1000,
    easing: 'easeInExpo'
    }
  }).add({
    targets: '.main .letter',
    opacity:0,
    duration: 1000,
    easing: 'linear'
  });
});

$(document).ready(function(){
  $('.next').on('click', function(){
   
    var currentImg=$('.active');
    var nextImg=currentImg.next();
    var firstImg=$('#first');
    

    if(nextImg.length){
      currentImg.removeClass('active').css('z-index',-10);
      nextImg.addClass('active').css('z-index',10);
    }else{
      currentImg.removeClass('active').css('z-index',-10);
      nextImg = firstImg.addClass('active').css('z-index',10);
    }
  });
  $('.prev').on('click', function(){
    var currentImg=$('.active');
    var prevImg=currentImg.prev();
    if(prevImg.length){
      currentImg.removeClass('active').css('z-index',-10);
      prevImg.addClass('active').css('z-index',10);
    }
  });
})


