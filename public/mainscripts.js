function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
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

    var animation = anime.timeline({loop: false})
  .add({
    targets: '.main .letter',
    scale: [0.3,1],
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets:'.subLetters',
    opacity: [0,1],
    easing: 'easeOutExpo',
    duration:600
  }).add({
    targets: '.main .letter',
    rotate: {
    value: 30,
    duration: 800,
    easing: 'easeInExpo'
    }
  }).add({
    targets: '.main .letter',
    rotate: {
    value: -30,
    duration: 800,
    easing: 'easeInExpo'
    }
  }).add({
    targets: '.main .letter',
    rotate: {
    value: 0,
    duration: 800,
    easing: 'easeInExpo'
    }
  }).add({
    targets: ['.main .letter', '.subLetters'],
    delay:300,
    opacity:0,
    duration: 500,
    easing: 'linear'
  }).add({
    targets: '.polyMorph',
    points: [
      { value: '1920.5,1080 0.5,1080 0.5,0 373.4,0 523,774' },
      { value: '1920.5,1080 0.5,1080 0.5,0 0,1 523,774' }
    ],
    easing: 'easeOutQuad',
    duration: 1250,
    loop: false,
    delay:100,
  }).add({
    targets: [".bioBox", ".bitmoji" ],
    opacity: [0,1],
    duration: 500
  });
  document.querySelector('#restart').onclick = animation.restart;

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

$(document).ready(function(){
  let services = document.querySelectorAll('.projectbox');

  services.forEach((service) => {
    var counter = 0;
    service.addEventListener('click', (event) => {
      anime.remove(service.querySelector('.arrow'));
      if(counter ==0 ||counter%2 ==1){

        counter++;
        service.querySelector('i').style.display = 'none';

        anime({
          targets: service.querySelector('.arrow'),
          easing: 'easeOutExpo',
          scale: 50,
          duration: 2000,
       });
      }else{
        counter++;
        service.querySelector('i').style.display = 'inline';
        anime({
          targets: service.querySelector('.arrow'),
          easing: 'easeOutExpo',
          scale: 1,
          duration: 600,
       })
      }


    });

   
  });

    
})
