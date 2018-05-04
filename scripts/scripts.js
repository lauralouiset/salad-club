// 
// SCRIPTS FOR SALAD CLUB
// 

// IMAGE DISPLAY

// for salad item,  retrieve item.imageNumber to get number of times to clone image.
// position each iteration absolute, 
// top: random number between top of salad and bottom of salad
// left: random number between left of salad and right of salad.
// transform: rotate(Xdeg) - rotates image a random number between 180deg and -180deg.

// display dressing inside dressing container


//checkboxes superimposed overtop of salad items to select which items get remixed

// FUNCTIONS
salad = {}

// retrives random item from an array
salad.getRandomItem = (array) => {
  const random = Math.floor(Math.random() * array.length);
  return {
		item: array[random],
		index: random
	};
}
// get random protein
salad.getProtein = () => {
  const proteinReturned = salad.getRandomItem(saladFixins.proteins);
	$('.ingreds__info--name--protein').html(`${proteinReturned.item.name}`);
	salad.displayOnSalad(proteinReturned.item);
} 

// get crunch
salad.getCrunch = () => {
  const crunchReturned = salad.getRandomItem(saladFixins.crunch);
  $('.ingreds__info--name--crunch').html(`${crunchReturned.item.name}`);
} 

// get dressing
salad.getDressing = () => {
  const dressingReturned = salad.getRandomItem(saladFixins.dressings);
	$('.ingreds__info--name--dressing').html(`${dressingReturned.item.name}`);
} 

// get veggies
salad.getVeg = () => {
	let availableVeg = Array.from(saladFixins.veggies);
  for( let i = 1; i <= 3; i++){
    const vegReturned = salad.getRandomItem(availableVeg);
		$(`.ingreds__info--name--veg${i}`).html(`${vegReturned.item.name}`);
		$(`.ingreds__img--veg${i}`).attr(`src`, `assets/ingredients/preview/${vegReturned.item.image}` );
		availableVeg.splice(vegReturned.index, 1);

		salad.displayOnSalad(vegReturned.item);
  }
}

// ROTATE AND DISPLAY PHOTO

salad.displayOnSalad = (object) => {
	const randomX = () => {
		x = Math.floor((Math.random() * 600) + 150);
		return x;
	} 2
	const randomY = () => {
		y = Math.floor((Math.random() * 600) + 150);
		return y;
	} 
	const randomRotate = () => {
		rotate = Math.floor((Math.random() - 0.5) * 2 * 90);
		return rotate;
	}

	for(i = 0; i < object.imageNumber; i++){
		$('.salad-bowl').append(`<img class="displayOnSalad" src="assets/ingredients/${object.image}" alt="${object.name}" style="top:${randomY()}px; left: ${randomX()}px; transform:rotate(${randomRotate()}deg);">`);
	}

} 


// DOCUMENT READY
$(function () {

    // SELECT SALAD BASE BUTTON

    $('.btn-base').on('click', function(e){
			e.preventDefault();
			// Remove class of "visible" off all salad bases
			$('.img-salad-base').removeClass('visible');
			const base = $(this).data("base");
			$(`img[data-base="${base}"]`).addClass('visible');
    });



    // GENERATE SALAD BUTTON
    $('.generate').on('click', function(e){
      e.preventDefault();

      salad.getProtein();
      salad.getCrunch();
      salad.getDressing();
      salad.getVeg();


			// TOGGLE SALAD ITEM IMAGES

			

			// CHECKBOXES


    });
// END OF GENERATE BUTTON




});