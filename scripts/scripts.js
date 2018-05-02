// 
// SCRIPTS FOR SALAD CLUB
// 


// Mix button -- on click, generates random numbers to select items from the salad object, displays them in the display boxes. displays nutrition information in nutrition table.


// IMAGE DISPLAY

// for salad item,  retrieve item.imageNumber to get number of times to clone image.
// position each iteration absolute, 
// top: random number between top of salad and bottom of salad
// left: random number between left of salad and right of salad.
// transform: rotate(Xdeg) - rotates image a random number between 180deg and -180deg.

// display dressing inside dressing container


// salad base selector toggles between image of kale, spring greens, soba noodles positioned inside flex container on bowl.


//checkboxes superimposed overtop of salad items to select which items get remixed

// FUNCTIONS

// retrives random item from an array
const getRandomItem = (array) => {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// DOCUMENT READY
$(function () {

    // SELECT SALAD BASE

    $('base-btn').on('click', function(e){
      e.preventDefault();
      $('.salad-base').removeClass('visible');
      $(this).toggleClass(visible);


    });


    // GENERATE SALAD BUTTON
    $('.generate').on('click', function(e){
      

      
    });









});