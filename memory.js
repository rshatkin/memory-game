$(document).ready(function() {
  var score = 0;
  var cardOne = 0;
  var cardTwo = 0;
  //var cardNum = $(".card").attr("class");
  var a, b;

  function assignColors() {
    var allColors = ['red', 'yellow', 'green', 'blue', 'purple', 'pink', 'orange', 'turquoise', 'red', 'yellow', 'green', 'blue', 'purple', 'pink', 'orange', 'turquoise'];
    var randColor = Math.floor(Math.random() * allColors.length);
    //var cards = document.getElementsByClassName("card");

    $('.card').each(function() {
      $(this).addClass(randColor);
    });
    
  };

  $('.card').on('click', function flip() {

    if(cardOne === 0) {
      $(this).addClass('flipped');
      cardOne ++;
      score ++;
      $('.score').html('' + score);
      a = $(this).attr("class");
      //aText = $(this).text();

      //cardOneIClicked = $(this);
    } 
    else if ((cardOne === 1) && (cardTwo === 0)) {
      $(this).addClass('flipped');
      cardTwo ++;
      score ++;
      $('.score').html('' + score);
      b = $(this).attr("class");
      //bText = $(this).text();

      if((a === b) /*&& (aText === bText)*/) { //if both have class flipped     
        setTimeout(function () {
          score -=2;
          $('.score').html('' + score);
          $('.flipped').addClass('matched');
          $('.matched').removeClass('flipped');
          cardOne = 0;
          cardTwo = 0;
        }, 1000);
      } 
      else {
        setTimeout(function(){
          $('.flipped').removeClass('flipped');
          cardOne = 0;
          cardTwo = 0;
        }, 1500);
      }
    }
  });

  $('.reset-button').on('click', function() {
    score = 0;
    cardOne = 0;
    cardTwo = 0;
    $('.score').html('' + score);
    $('.card').removeClass('flipped');
    $('.card').removeClass('matched');

  });
});

