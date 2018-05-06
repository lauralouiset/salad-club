// 
// SCRIPTS FOR SALAD CLUB
// 


// display dressing inside dressing container


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
	// displays name
	$('.ingreds__info--name--protein').html(`${proteinReturned.item.name}`);
	//displays preview image
	$(`.ingreds__img--protein`).attr(`src`, `assets/ingredients/preview/${proteinReturned.item.image}`);
	// displays on salad
	salad.displayOnSalad(proteinReturned.item);
	salad.updateNutrition(proteinReturned.item);
} 

// get crunch
salad.getCrunch = () => {
  const crunchReturned = salad.getRandomItem(saladFixins.crunch);
	$('.ingreds__info--name--crunch').html(`${crunchReturned.item.name}`);
	$(`.ingreds__img--crunch`).attr(`src`, `assets/ingredients/preview/${crunchReturned.item.image}`);
	salad.displayOnSalad(crunchReturned.item);

	salad.updateNutrition(crunchReturned.item);

} 

// get dressing
salad.getDressing = () => {
  const dressingReturned = salad.getRandomItem(saladFixins.dressings);
	$('.ingreds__info--name--dressing').html(`${dressingReturned.item.name}`);

	$(`.ingreds__img--dressing`).attr(`src`, `assets/ingredients/preview/${dressingReturned.item.image}`);
	salad.updateNutrition(dressingReturned.item);
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
		salad.updateNutrition(vegReturned.item);

  }
}

// ON-SALAD IMAGE DISPLAYS

salad.displayOnSalad = (object) => {
	const randomX = () => {
		x = Math.floor((Math.random() * 50) + 25);
		return x;
	} 
	const randomY = () => {
		y = Math.floor((Math.random() * 50) + 25);
		return y;
	} 
	const randomRotate = () => {
		rotate = Math.floor((Math.random() - 0.5) * 2 * 90);
		return rotate;
	}

	for(i = 0; i < object.imageNumber; i++){

		$('.salad-ingredients').append(`<img class="displayOnSalad" src="assets/ingredients/${object.image}" alt="${object.name}" style="top:${randomY()}%; left: ${randomX()}%; transform:rotate(${randomRotate()}deg);">`);
	}
} 

// ADD UP NUTRITIONAL INFORMATION

salad.saladNutrition = {
calories: 0,
protein: 0,
carbs: 0,
fiber: 0,
fat: 0,
sugar: 0,
cholesterol: 0,
sodium: 0,
potassium: 0,
vitaminA: 0,
vitaminC: 0,
calcium: 0,
iron: 0
}

salad.resetSalad = () => {

	//reset graphics on salad display
	$('.salad-ingredients').html("");

	for(key in salad.saladNutrition){
		salad.saladNutrition[key] = 0;
		} 
}

// updates nutrition object and prints to page in table
salad.updateNutrition = (item) => {
	console.log(item);
	for (key in salad.saladNutrition){
		salad.saladNutrition[key] += item[key];
		$(`.input__${key}`).html(salad.saladNutrition[key]);
	}
} 

salad.init = () => {

	// SELECT SALAD BASE BUTTON

	$('.btn-base').on('click', function (e) {
		e.preventDefault();
		// Remove class of "visible" off all salad bases
		$('.img-salad-base').removeClass('visible');
		const base = $(this).data("base");
		$(`img[data-base="${base}"]`).addClass('visible');
	});

	// GENERATE SALAD BUTTON
	$('.generate').on('click', function (e) {
		e.preventDefault();

		//reset salad info & display
		salad.resetSalad();

		//generate new salad
		salad.getProtein();
		salad.getCrunch();
		salad.getDressing();
		salad.getVeg();


		
		// write function generating new array with current salad ingredients
	});

} 



// PREPOPULATED TWEET
//https://twitter.com/intent/tweet?text=I+made+a+to+make+a+prepopulate+Twitter+status+thanks+to+@younoodle+younoodle.com+%23fun


// DOCUMENT READY
$(function () {

	salad.init();

});