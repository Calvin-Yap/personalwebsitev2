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
$(document).ready(function(){
  /*var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);*/
  if ($(window).width() < 1201) {
  jQuery(".extraproj .projectbox .overlay1").fitText(1.5,{ minFontSize: '0px', maxFontSize: '150px' });

}
else{
  jQuery(".extraproj .projectbox .overlay1").fitText(1.8,{ minFontSize: '0px', maxFontSize: '200px' });
}
$("#projects").click(function() {
  $('html, body').animate({
      scrollTop: $("#projectscroll").offset().top - $('.topnav').outerHeight(true)
  }, 1000);
});
$("#home").click(function() {
  $('html, body').animate({
      scrollTop:0}, 1000);
});
$("#about").click(function() {
  $('html, body').animate({
      scrollTop: $("#aboutscroll").offset().top - $('.topnav').outerHeight(true)
  }, 1000);
});
const buffer = 800;
const projectsCheckPoint = $("#projectscroll").offset().top - $('.topnav').outerHeight(true) - buffer;
const extraProjectsCheckPoint = $("#extraProjects").offset().top - $('.topnav').outerHeight(true) - buffer;
const aboutMeCheckPoint =$('#aboutscroll').offset().top - $('.topnav').outerHeight(true) - buffer;
document.querySelector("#mainprojects").style.opacity = 0;
document.querySelector(".extraproj").style.opacity = 0;
document.querySelector(".aboutsection").style.opacity = 0;

$(window).scroll(function(){
  if ($(this).scrollTop() >= projectsCheckPoint ) {
    $('#mainprojects').animate({opacity: 1}, 1000);
    if ($(this).scrollTop() >= extraProjectsCheckPoint ) {
      $('.extraproj').animate({opacity: 1}, 1500);
    } 
    if ($(this).scrollTop() >= aboutMeCheckPoint ) {
      $('.aboutsection').animate({opacity: 1}, 1500);
    } 
  } 
});
  

  
  var textWrapper = document.querySelector('.main .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    var animation = anime.timeline({loop: false})
  .add({
    begin: function(){
      document.querySelector('#bigText').style.display = 'block';
    },
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
    begin: function(){
      document.querySelector('#bigText').style.display = 'none';
      if($(window).width() > 1202){
        document.querySelector('#biomove').style.marginTop = "25vh";
      }
      else if($(window).width() <1201 && $(window).width() >994){
        document.querySelector('#biomove').style.marginTop = "25vh";
      }
      else if($(window).width() <923 && $(window).width() >770){
        document.querySelector('#biomove').style.marginTop = "25vh";
       }
      else if($(window).width() <769 && $(window).width() >578){
        document.querySelector('#biomove').style.marginTop = "25vh";
      }
      else{
        document.querySelector('#biomove').style.marginTop = "30vh";

      }
    },
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
      if(nextImg.attr("id") == "second"){
        $('#aboutImageHeading').text("10 Year Plaque in Karate");
      }else if(nextImg.attr("id") == "thrid"){
        $('#aboutImageHeading').text("At the Museum of Illusions");
      }else if(nextImg.attr("id") == "last"){
        $('#aboutImageHeading').text("Photo with the RAM");
      }

      currentImg.removeClass('active').css('z-index',-10);
      nextImg.addClass('active').css('z-index',10);
    }else{
      $('#aboutImageHeading').text("My Trip to LA");
      currentImg.removeClass('active').css('z-index',-10);
      nextImg = firstImg.addClass('active').css('z-index',10);
    }
  });
  $('.prev').on('click', function(){
    var currentImg=$('.active');
    var prevImg=currentImg.prev();
    if(prevImg.length){
      if(prevImg.attr("id") == "first"){
        $('#aboutImageHeading').text("My Trip to LA");
      }else if(prevImg.attr("id") == "second"){
        $('#aboutImageHeading').text("10 Year Plaque in Karate");
      }else if(prevImg.attr("id") == "thrid"){
        $('#aboutImageHeading').text("At the Museum of Illusions");
      }else if(prevImg.attr("id") == "last"){
        $('#aboutImageHeading').text("Photo with the RAM");
      }
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
        service.querySelector('.overlay1').style.display='inline';

        anime({
          targets: service.querySelector('.arrow'),
          easing: 'easeOutExpo',
          scale: 50,
          duration: 2000,
       });
      }else{
        counter++;
        service.querySelector('i').style.display = 'inline';
        service.querySelector('.overlay1').style.display='none';
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
