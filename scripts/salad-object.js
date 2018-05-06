// 
// THE SALAD OBJECT
// 



const saladFixins = {
	
	// GREENS
	saladBase: [
							{
								name: "Spring Greens",
								image: `assets/ingredients/base/greens`,
								imageNumber: 1,
								servingSize: "1 1/2 cups",
								calories: 8,
								protein: 0,
								carbs: 1,
								fiber: 1,
								fat: 0,
								cholesterol: 0,
								sodium: 10,
								potassium: 0,
								sugar: 1,
								vitaminA: 65,
								vitaminC: 25,
								calcium: 3,
								iron: 8,
								link: "https://www.myfitnesspal.com/food/calories/667635279"
							},
							{
								name: "Baby Kale",
								imageNumber: 1,
								servingSize: "1 1/2 cups",
								calories: 45,
								protein: 1,
								carbs: 1,
								fiber: 1,
								fat: 0,
								cholesterol: 0,
								sodium: 0,
								potassium: 0,
								sugar: 0,
								vitaminA: 206,
								vitaminC: 134,
								calcium: 9,
								iron: 6,
								link: "https://www.myfitnesspal.com/food/calories/654272933"
							},
							{
								name: "Soba Noodles",
								imageNumber: 1,
								servingSize: "1 cup",
								calories: 113,
								protein: 6,
								carbs: 24,
								fiber: 0,
								fat: 0,
								cholesterol: 0,
								sodium: 68,
								potassium: 40,
								sugar: 0,
								vitaminA: 0,
								vitaminC: 0,
								calcium: 0,
								iron: 3,
								link: "https://www.myfitnesspal.com/food/calories/445764677"
							}
	],

	// PROTEINS
	proteins: [

							{
								name: "Black Beans",
								imageNumber: 1,
								servingSize: "1/4 cup",
								calories: 57,
								protein: 4,
								carbs: 10,
								fiber: 3.5,
								fat: 0,
								cholesterol: 0,
								sodium: 102,
								potassium: 152,
								sugar: 0,
								vitaminA: 0,
								vitaminC: 0,
								calcium: 1,
								iron: 5,
								link: "https://www.myfitnesspal.com/food/calories/410855347"
							},

							{
								name: "Brown Lentils",
								imageNumber: 4,
								image: "lentils.png",
								servingSize: "1/4 cup",
								calories: 80,
								protein: 10,
								carbs: 20,
								fiber: 9,
								fat: 0,
								cholesterol: 0,
								sodium: 0,
								potassium: 320,
								sugar: 2,
								vitaminA: 0,
								vitaminC: 4,
								calcium: 2,
								iron: 20,
								link: "https://www.myfitnesspal.com/food/calories/614695651"
							},

							{
								name: "Grilled Shrimp",
								imageNumber: 6,
								servingSize: "5 shrimp / 2 oz",
								calories: 56,
								protein: 12,
								carbs: 0,
								fiber: 0,
								fat: 1,
								cholesterol: 10,
								sodium: 0,
								potassium: 130,
								sugar: 0,
								vitaminA: 0,
								vitaminC: 0,
								calcium: 4,
								iron: 1,
								link: "https://www.myfitnesspal.com/food/calories/614695651"
							},

							{
								name: "Hard-boiled Egg",
								imageNumber: 2,
								servingSize: "1 large",
								calories: 78,
								protein: 6,
								carbs: 1,
								fiber: 0,
								fat: 5,
								cholesterol: 187,
								sodium: 62,
								potassium: 63,
								sugar: 1,
								vitaminA: 5,
								vitaminC: 0,
								calcium: 3,
								iron: 3,
								link: "https://www.myfitnesspal.com/food/calories/562875691"
							},

							{
								name: "Grilled Salmon",
								imageNumber: 1,
								servingSize: "3 oz",
								calories: 134,
								protein: 11,
								carbs: 12,
								fiber: 2,
								fat: 8,
								cholesterol: 15,
								sodium: 225,
								potassium: 108,
								sugar: 2,
								vitaminA: 2,
								vitaminC: 0,
								calcium: 8,
								iron: 4,
								link: "https://www.myfitnesspal.com/food/calories/463997954"
							},

							{
								name: "Feta Cheese",
								imageNumber: 8,
								servingSize: "1/4 cup, crumbled",
								calories: 99,
								protein: 5,
								carbs: 2,
								fiber: 0,
								fat: 8,
								cholesterol: 33,
								sodium: 344,
								potassium: 23,
								sugar: 2,
								vitaminA: 3,
								vitaminC: 0,
								calcium: 18,
								iron: 1,
								link: "https://www.myfitnesspal.com/food/calories/349505072"
							},

	],


	// VEGGIES
	veggies: [
							{
								name: "Sweet Potato",
								imageNumber: 7,
								servingSize: "1/3 cup cubed",
								calories: 54,
								protein: 1,
								carbs: 12,
								fiber: 2,
								fat: 0,
								cholesterol: 0,
								sodium: 22,
								potassium: 285,
								sugar: 4,
								vitaminA: 231,
								vitaminC: 20,
								calcium: 2,
								iron: 2,
								link: "https://www.myfitnesspal.com/food/calories/639215901"
							},

							{
								name: "Mushrooms",
								imageNumber: 6,
								image: "mushroom.png",
								servingSize: "4 large",
								calories: 20,
								protein: 3,
								carbs: 3,
								fiber: 1,
								fat: 0,
								cholesterol: 0,
								sodium: 4,
								potassium: 80,
								sugar: 0,
								vitaminA: 0,
								vitaminC: 8,
								calcium: 0,
								iron: 8,
								link: "https://www.myfitnesspal.com/food/calories/651425247"
							},

							{
								name: "Green Olives",
								imageNumber: 6,
								servingSize: "8 large",
								calories: 60,
								protein: 0,
								carbs: 0,
								fiber: 0,
								fat: 6,
								cholesterol: 0,
								sodium: 1120,
								potassium: 0,
								sugar: 0,
								vitaminA: 0,
								vitaminC: 0,
								calcium: 0,
								iron: 0,
								link: "https://www.myfitnesspal.com/food/calories/6456559"
							},

							{
								name: "Tomato Slices",
								imageNumber: 5,
								servingSize: "6 slices",
								calories: 18,
								protein: 1,
								carbs: 4,
								fiber: 1,
								fat: 0,
								cholesterol: 0,
								sodium: 5,
								potassium: 237,
								sugar: 3,
								vitaminA: 16,
								vitaminC: 22,
								calcium: 1,
								iron: 1,
								link: "https://www.myfitnesspal.com/food/calories/600632804"
							},

							{
								name: "Strawberry Slices",
								imageNumber: 6,
								servingSize: "5 berries",
								calories: 29,
								protein: 1,
								carbs: 7,
								fiber: 2,
								fat: 0,
								cholesterol: 0,
								sodium: 2,
								potassium: 138,
								sugar: 4,
								vitaminA: 0,
								vitaminC: 88,
								calcium: 1,
								iron: 2,
								link: "https://www.myfitnesspal.com/food/calories/626167339"
							},

							{
								name: "Apple Cubes",
								imageNumber: 5,
								servingSize: "1/2 apple, cubed",
								calories: 40,
								protein: 0,
								carbs: 15,
								fiber: 2,
								fat: 0,
								cholesterol: 0,
								sodium: 0,
								potassium: 0,
								sugar: 0,
								vitaminA: 0,
								vitaminC: 5,
								calcium: 0,
								iron: 1,
								link: "https://www.myfitnesspal.com/food/calories/547373036"
							},

							{
								name: "Red Onion",
								imageNumber: 4,
								servingSize: "5 rings / 1/4 cup chopped",
								calories: 12,
								protein: 0,
								carbs: 3,
								fiber: 0,
								fat: 0,
								cholesterol: 0,
								sodium: 2,
								potassium: 40,
								sugar: 1,
								vitaminA: 0,
								vitaminC: 4,
								calcium: 0,
								iron: 0,
								link: "https://www.myfitnesspal.com/food/calories/557689324"
							},

							{
								name: "Cucumber",
								imageNumber: 4,
								servingSize: "1/2 cup chopped",
								calories: 6,
								protein: 0,
								carbs: 2,
								fiber: 0,
								fat: 0,
								cholesterol: 0,
								sodium: 1,
								potassium: 61,
								sugar: 1,
								vitaminA: 1,
								vitaminC: 2,
								calcium: 1,
								iron: 1,
								link: "https://www.myfitnesspal.com/food/calories/319708504"
							},

							{
								name: "Carrot",
								imageNumber: 5,
								image: "carrot.png",
								servingSize: "1/4 cup",
								calories: 13,
								protein: 0,
								carbs: 3,
								fiber: 1,
								fat: 0,
								cholesterol: 0,
								sodium: 22,
								potassium: 102,
								sugar: 2,
								vitaminA: 107,
								vitaminC: 3,
								calcium: 1,
								iron: 1,
								link: "https://www.myfitnesspal.com/food/calories/652050451"
							},

							{
								name: "Black Olives",
								imageNumber: 7,
								servingSize: "2 tbsp / 15 g",
								calories: 25,
								protein: 0,
								carbs: 1,
								fiber: 1,
								fat: 2,
								cholesterol: 0,
								sodium: 126,
								potassium: 0,
								sugar: 0,
								vitaminA: 0,
								vitaminC: 0,
								calcium: 2,
								iron: 7,
								link: "https://www.myfitnesspal.com/food/calories/672006926"
							},

							{
								name: "Green Pepper",
								imageNumber: 4,
								servingSize: "4 rings / 1/4 cup",
								calories: 7,
								protein: 0,
								carbs: 2,
								fiber: 1,
								fat: 0,
								cholesterol: 0,
								sodium: 1,
								potassium: 65,
								sugar: 1,
								vitaminA: 3,
								vitaminC: 50,
								calcium: 0,
								iron: 1,
								link: "https://www.myfitnesspal.com/food/calories/515420949"
							},

							{
								name: "Red Pepper",
								imageNumber: 4,
								servingSize: "4 rings / 1/4 cup",
								calories: 12,
								protein: 0,
								carbs: 2,
								fiber: 1,
								fat: 0,
								cholesterol: 0,
								sodium: 1,
								potassium: 79,
								sugar: 2,
								vitaminA: 23,
								vitaminC: 79,
								calcium: 0,
								iron: 1,
								link: "https://www.myfitnesspal.com/food/calories/481998623"
							},

							{
								name: "Avocado",
								imageNumber: 5,
								servingSize: "1/2 avocado",
								calories: 161,
								protein: 2,
								carbs: 1,
								fiber: 7,
								fat: 15,
								cholesterol:0,
								sodium: 7,
								potassium: 488,
								sugar: 1,
								vitaminA: 3,
								vitaminC: 17,
								calcium: 1,
								iron: 3,
								link: "https://www.myfitnesspal.com/food/calories/524509412"
							},

							{
								name: "Corn Kernels",
								imageNumber: 12,
								servingSize: "1/3 cup",
								calories: 63,
								protein: 2,
								carbs: 14,
								fiber: 1,
								fat: 0,
								cholesterol: 0,
								sodium: 75,
								potassium: 0,
								sugar: 5,
								vitaminA: 0,
								vitaminC: 4,
								calcium: 0,
								iron: 0,
								link: "https://www.myfitnesspal.com/food/calories/513664080"
							},

							{
								name: "Broccoli Florets",
								imageNumber: 6,
								servingSize: "1/3 cup, chopped",
								calories: 10,
								protein: 1,
								carbs: 2,
								fiber: 1,
								fat: 0,
								cholesterol: 0,
								sodium: 10,
								potassium: 95,
								sugar: 1,
								vitaminA: 4,
								vitaminC: 45,
								calcium: 1,
								iron: 1,
								link: "https://www.myfitnesspal.com/food/calories/425578799"
							},

							{
								name: "Fresh Peas",
								image: `pea.png`,
								imageNumber: 12,
								servingSize: "1/3 cup",
								calories: 118,
								protein: 8,
								carbs: 21,
								fiber: 7,
								fat: 1,
								cholesterol: 0,
								sodium: 7,
								potassium: 354,
								sugar: 8,
								vitaminA: 22,
								vitaminC: 97,
								calcium: 3,
								iron: 1,
								link: "https://www.myfitnesspal.com/food/calories/660612472"
							}
	],

	// CRUNCH
	crunch: [
							{
								name: "Pumpkin Seeds",
								imageNumber : 12,
								servingSize : "2 tbsp",
								calories : 145 ,
								protein : 18,
								carbs: 4,
								fiber: 2,
								fat : 12,
								cholesterol : 0,
								sodium : 5,
								potassium : 0,
								sugar : 0,
								vitaminA : 0,
								vitaminC : 0,
								calcium: 0,
								iron : 15,
								link: "https://www.myfitnesspal.com/food/calories/445764677"
							},

							{
								name: "Croutons",
								imageNumber: 7,
								servingSize: "1/3 cup",
								calories: 56,
								protein: 1,
								carbs: 8,
								fiber: 1,
								fat: 2,
								cholesterol: 1,
								sodium: 131,
								potassium: 22,
								sugar: 1,
								vitaminA: 0,
								vitaminC: 0,
								calcium: 1,
								iron: 2,
								link: "https://www.myfitnesspal.com/food/calories/533686293"
							},

							{
								name: "Sunflower Seeds",
								imageNumber: 12,
								servingSize: "2 tbsp",
								calories: 130,
								protein: 6,
								carbs: 15,
								fiber: 1,
								fat: 5,
								cholesterol: 15,
								sodium: 940,
								potassium: 0,
								sugar: 2,
								vitaminA: 30,
								vitaminC: 0,
								calcium: 4,
								iron: 6,
								link: "https://www.myfitnesspal.com/food/calories/593784139"
							},

							{
								name: "Pomegranate Seeds",
								imageNumber: 10,
								servingSize: "1/4 cup",
								calories: 36,
								protein: 1,
								carbs: 8,
								fiber: 2,
								fat: 1,
								cholesterol: 0,
								sodium: 1,
								potassium: 103,
								sugar: 6,
								vitaminA: 0,
								vitaminC: 7,
								calcium: 0,
								iron: 1,
								link: "https://www.myfitnesspal.com/food/calories/551527485"
							},

							{
								name: "Almonds",
								imageNumber: 7,
								servingSize: "12 almonds / 1/4 cup",
								calories: 82,
								protein: 3,
								carbs: 3,
								fiber: 2,
								fat: 7,
								cholesterol: 0,
								sodium: 0,
								potassium: 104,
								sugar: 1,
								vitaminA: 0,
								vitaminC: 0,
								calcium: 4,
								iron: 3,
								link: "https://www.myfitnesspal.com/food/calories/551527485"
							},

							{
								name: "Flamin' Hot Cheetos",
								imageNumber: 7,
								servingSize: "12 pieces",
								calories: 85,
								protein: 0.5,
								carbs: 7.5,
								fiber: 0.5,
								fat: 6,
								cholesterol: 0,
								sodium: 125,
								potassium: 18,
								sugar: 0,
								vitaminA: 0,
								vitaminC: 0,
								calcium: 0,
								iron: 1,
								link: "https://www.fritolay.com/snacks/product-page/cheetos/cheetos-crunchy-flamin-hot-cheese-flavored-snacks"
							}

	],

		// DRESSINGS
	dressings: [
								{
									name: "Balsamic Vinaigrette",
									imageNumber: 1,
									servingSize: "3 tbsp",
									calories: 134,
									protein: 0,
									carbs: 3,
									fiber: 0,
									fat: 14,
									cholesterol: 0,
									sodium: 336,
									potassium: 0,
									sugar: 2,
									vitaminA: 0,
									vitaminC: 0,
									calcium: 0,
									iron: 0,
									link: "http://www.geniuskitchen.com/recipe/sheilas-best-balsamic-dressing-176016"
								},

								{
									name: "Ranch",
									imageNumber: 1,
									servingSize: "3 tbsp",
									calories: 91,
									protein: 1,
									carbs: 2,
									fiber: 0,
									fat: 9,
									cholesterol: 7.4,
									sodium: 70.2,
									potassium: 19.9,
									sugar: 1,
									vitaminA: 2,
									vitaminC: 0,
									calcium: 3,
									iron: 0,
									link: "https://recipes.sparkpeople.com/recipe-calories.asp?recipe=3026336"
								},


								{
									name: "Raspberry Vinaigrette",
									imageNumber: 1,
									servingSize: "3 tbsp",
									calories: 90,
									protein: 0,
									carbs: 10.5,
									fiber: 0,
									fat: 6,
									cholesterol: 0,
									sodium: 390,
									potassium: 30,
									sugar: 9,
									vitaminA: 0,
									vitaminC: 0,
									calcium: 0,
									iron: 0,
									link: "https://www.eatthismuch.com/food/view/raspberry-vinaigrette-dressing,100943/"
								},


								{
									name: "Green Goddess",
									imageNumber: 1,
									servingSize: "2 tbsp",
									calories: 96,
									protein: 6,
									carbs: 4,
									fiber: 1,
									fat: 8,
									cholesterol: 0,
									sodium: 205,
									potassium: 162.5,
									sugar: 1,
									vitaminA: 10,
									vitaminC: 23,
									calcium: 10,
									iron: 8,
									link: "https://recipes.sparkpeople.com/recipe-calories.asp?recipe=3253970"
								},

								{
									name: "Lemon Tahini",
									imageNumber: 1,
									servingSize: "3 tbsp",
									calories: 75,
									protein: 2,
									carbs: 4,
									fiber: 1,
									fat: 6.5,
									cholesterol: 0,
									sodium: 18,
									potassium: 75,
									sugar: 1,
									vitaminA: 3,
									vitaminC: 13,
									calcium: 5,
									iron: 6,
									link: "https://recipes.sparkpeople.com/recipe-calories.asp?recipe=1383969"
								}
]

}