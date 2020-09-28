function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }

    $(document).ready(function(){
        var timesClicked = 0;
        var isOn=true;
        
        $("#small").click(function(event) {
            console.log(event.target.id);
            timesClicked++;
            if(event.target.id == "extra1" && isOn == true  ){
                $("#small").find('img, .extraText').not('.overlay').animate({opacity: 0}, 500);
                $("#small").addClass('big');
                $(".overlay, #back").animate({opacity: 1}, 600);
                $(".overlay,#back").show();
                isOn = false;
            }
            else if(event.target.id == "extra2"&& isOn == true  ){
                $("#small").find('img, .extraText').not('.overlay').animate({opacity: 0}, 500);
                $("#small").addClass('big');
                $(".overlay, #back").animate({opacity: 1}, 600);
                $(".overlay,#back").show();
                isOn = false;
            }
            else if(event.target.id == "extra3" && isOn == true ){
                $("#small").find('img, .extraText').not('.overlay').animate({opacity: 0}, 500);
                $("#small").addClass('big');
                $(".overlay, #back").animate({opacity: 1}, 600);
                $(".overlay,#back").show();
                isOn = false;
            }
            else if(event.target.id == "extra4" && isOn == true){
                $("#small").find('img, .extraText').not('.overlay').animate({opacity: 0}, 500);
                $("#small").addClass('big');
                $(".overlay, #back").animate({opacity: 1}, 600);
                $(".overlay,#back").show();
                isOn = false;
            }
            if(event.target.id == "back"){
                $("#small").find('img, .extraText').animate({opacity: 1}, 500);
                $(".overlay, #back").animate({opacity: 0}, 500);
                $("#small").removeClass('big');
                $(".overlay,#back").hide();
                isOn = true;
            }
            
        });
    });


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
    duration: 1250,
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
  });
});


