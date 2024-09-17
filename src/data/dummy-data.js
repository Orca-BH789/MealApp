
const generateId = () => Math.random().toString(36).substr(2, 9);

export const CATEGORIES = [
  { id: generateId(), title: 'Main Dishes', img: 'https://www.southernliving.com/thmb/4aFHPcniwvkX0_7ANZQ5VqL3MCg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/27531_ST_TENDERLOINS_13-7442687e434e4c4c95609ff0262773a2.jpg' },
  { id: generateId(), title: 'Snacks', img: 'https://www.grandecig.com/hs-fs/hubfs/images/blog_images/2019-Blog-Images/Savory_Snacks.jpg?width=734&name=Savory_Snacks.jpg' },
  { id: generateId(), title: 'Breakfast', img: 'https://images.services.kitchenstories.io/PoWKyK2NRjcDzZsSkvnvgMS6N1M=/3840x0/filters:quality(80)/images.kitchenstories.io/communityImages/f4604e05f6a9eaca99afddd69e849005_c02485d4-0841-4de6-b152-69deb38693f2.jpg' },
  { id: generateId(), title: 'Asian', img: 'https://media.vneconomy.vn/w800/images/upload/2024/01/13/phos-1920x1280.jpg' },
  { id: generateId(), title: 'French', img: 'https://bizweb.dktcdn.net/100/438/465/files/banh-sung-trau-croissant-sapo-bakery.jpg?v=1659681401584' },
  { id: generateId(), title: 'Summer', img: 'https://realfood.tesco.com/media/images/1400x919-Smoky-Sausage-Skewers-8480ee3a-c02c-4ccc-b26a-4038a93a632f-0-1400x919.jpg' }
];


export const MEALS = [
  {
    id: generateId(),
    categoryIds: [CATEGORIES[0].id, CATEGORIES[2].id],
    title: 'Spaghetti with Tomato Sauce',
    affordability: 'affordable',
    complexity: 'simple',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    duration: 20,
    ingredients: [
      '4 Tomatoes',
      '1 Tablespoon of Olive Oil',
      '1 Onion',
      '250g Spaghetti',
      'Spices',
      'Cheese (optional)'
    ],
    steps: [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ],
    isGlutenFree: false,
    isVegan: true,
    isVegetarian: true,
    isLactoseFree: true,
  },
  {
    id: generateId(),
    categoryIds: [CATEGORIES[0].id],
    title: 'Grilled Salmon with Asparagus',
    affordability: 'pricey',
    complexity: 'simple',
    imageUrl: 'https://assets.surlatable.com/m/44350397b5ed6d76/72_dpi_webp-REC_301896_Salmon_Asparagus.jpg',
    duration: 30,
    ingredients: [
      '4 salmon fillets',
      '1 bunch asparagus',
      '2 tbsp olive oil',
      'Salt and pepper to taste',
      '1 lemon'
    ],
    steps: [
      'Preheat grill to medium-high heat.',
      'Season salmon and asparagus with olive oil, salt, and pepper.',
      'Grill salmon for 4-5 minutes per side.',
      'Grill asparagus for 5-7 minutes, turning occasionally.',
      'Serve with lemon wedges.'
    ],
    isGlutenFree: true,
    isVegan: false,
    isVegetarian: false,
    isLactoseFree: true,
  },
  {
    id: generateId(),
    categoryIds: [CATEGORIES[0].id],
    title: 'Beef Stroganoff',
    affordability: 'moderate',
    complexity: 'medium',
    imageUrl: 'https://saltedmint.com/wp-content/uploads/2024/01/Beef-stroganoff-with-rice-2.jpg',
    duration: 45,
    ingredients: [
      '500g beef strips',
      '1 onion',
      '250g mushrooms',
      '1 cup sour cream',
      '2 tbsp flour',
      'Salt and pepper to taste'
    ],
    steps: [
      'Sauté onions and mushrooms in a large pan.',
      'Add beef strips and cook until browned.',
      'Stir in flour and cook for 1 minute.',
      'Add beef broth and simmer for 15 minutes.',
      'Stir in sour cream and serve over egg noodles.'
    ],
    isGlutenFree: false,
    isVegan: false,
    isVegetarian: false,
    isLactoseFree: false,
  },


  {
    id: generateId(),
    categoryIds: [CATEGORIES[1].id],
    title: 'Homemade Hummus',
    affordability: 'affordable',
    complexity: 'simple',
    imageUrl: 'https://littlekitchenvibes.com/wp-content/uploads/2021/09/hummus-1-of-1-scaled.jpg',
    duration: 15,
    ingredients: [
      '1 can chickpeas',
      '2 tbsp tahini',
      '2 cloves garlic',
      'Juice of 1 lemon',
      '2 tbsp olive oil',
      'Salt to taste'
    ],
    steps: [
      'Drain and rinse chickpeas.',
      'Blend all ingredients in a food processor.',
      'Add water if needed to reach desired consistency.',
      'Serve with pita chips or vegetable sticks.'
    ],
    isGlutenFree: true,
    isVegan: true,
    isVegetarian: true,
    isLactoseFree: true,
  },
  {
    id: generateId(),
    categoryIds: [CATEGORIES[1].id],
    title: 'Cheese and Crackers Platter',
    affordability: 'moderate',
    complexity: 'simple',
    imageUrl: 'https://www.tremari.ca/cdn/shop/files/IMG_5899.jpg?v=1685022487&width=1946',
    duration: 10,
    ingredients: [
      'Assorted cheeses',
      'Variety of crackers',
      'Grapes',
      'Nuts',
      'Honey'
    ],
    steps: [
      'Arrange cheeses on a platter.',
      'Add crackers, grapes, and nuts.',
      'Serve with honey on the side.'
    ],
    isGlutenFree: false,
    isVegan: false,
    isVegetarian: true,
    isLactoseFree: false,
  },

  // Breakfast
  {
    id: generateId(),
    categoryIds: [CATEGORIES[2].id],
    title: 'Avocado Toast with Poached Egg',
    affordability: 'affordable',
    complexity: 'simple',
    imageUrl: 'https://www.mashed.com/img/gallery/simple-poached-egg-and-avocado-toast-recipe/l-intro-1625074064.jpg',
    duration: 15,
    ingredients: [
      '2 slices whole grain bread',
      '1 ripe avocado',
      '2 eggs',
      'Salt and pepper to taste',
      'Red pepper flakes (optional)'
    ],
    steps: [
      'Toast the bread.',
      'Mash avocado and spread on toast.',
      'Poach eggs in simmering water for 3 minutes.',
      'Top toast with poached eggs.',
      'Season with salt, pepper, and red pepper flakes if desired.'
    ],
    isGlutenFree: false,
    isVegan: false,
    isVegetarian: true,
    isLactoseFree: true,
  },
  {
    id: generateId(),
    categoryIds: [CATEGORIES[2].id],
    title: 'Blueberry Pancakes',
    affordability: 'affordable',
    complexity: 'simple',
    imageUrl: 'https://www.spendwithpennies.com/wp-content/uploads/2023/06/1200-Blueberry-Pancakes-3-SpendWithPennies.jpg',
    duration: 20,
    ingredients: [
      '1 1/2 cups all-purpose flour',
      '3 1/2 tsp baking powder',
      '1/4 tsp salt',
      '1 tbsp sugar',
      '1 1/4 cups milk',
      '1 egg',
      '3 tbsp melted butter',
      '1 cup fresh blueberries'
    ],
    steps: [
      'Mix dry ingredients in a bowl.',
      'In another bowl, whisk milk, egg, and melted butter.',
      'Combine wet and dry ingredients.',
      'Fold in blueberries.',
      'Cook pancakes on a griddle until golden brown.'
    ],
    isGlutenFree: false,
    isVegan: false,
    isVegetarian: true,
    isLactoseFree: false,
  },

  // Asian
  {
    id: generateId(),
    categoryIds: [CATEGORIES[3].id],
    title: 'Pho Bo (Vietnamese Beef Noodle Soup)',
    affordability: 'moderate',
    complexity: 'hard',
    imageUrl: 'https://cdn.hita.com.vn/storage/blog/am-thuc-doi-song/cach-nau-pho-3.jpeg',
    duration: 180,
    ingredients: [
      '2 kg beef bones',
      '1 kg beef brisket',
      '2 onions',
      '4 inch piece of ginger',
      'Spices (cinnamon, star anise, cloves)',
      'Rice noodles',
      'Bean sprouts, basil, lime for serving'
    ],
    steps: [
      'Simmer beef bones and brisket with spices for 3 hours.',
      'Cook rice noodles according to package instructions.',
      'Slice cooked brisket thinly.',
      'Assemble bowls with noodles, beef, and hot broth.',
      'Serve with bean sprouts, basil, and lime wedges.'
    ],
    isGlutenFree: true,
    isVegan: false,
    isVegetarian: false,
    isLactoseFree: true,
  },
  {
    id: generateId(),
    categoryIds: [CATEGORIES[3].id],
    title: 'Sushi Rolls',
    affordability: 'pricey',
    complexity: 'hard',
    imageUrl: 'https://www.allrecipes.com/thmb/XT7-9MROYJZvNyQR4J40HGOVDmQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/19511smoked-salmon-sushi-rollfabeveryday4x3-159a22b4d3ac49fe9a146db94b53c930.jpg',
    duration: 60,
    ingredients: [
      'Sushi rice',
      'Nori sheets',
      'Sushi-grade fish (salmon, tuna)',
      'Cucumber',
      'Avocado',
      'Soy sauce',
      'Wasabi',
      'Pickled ginger'
    ],
    steps: [
      'Prepare sushi rice and let it cool.',
      'Place nori sheet on bamboo mat.',
      'Spread rice on nori, leaving a strip at the top.',
      'Add fish and vegetables in a line.',
      'Roll tightly using the mat.',
      'Slice roll into 6-8 pieces.',
      'Serve with soy sauce, wasabi, and pickled ginger.'
    ],
    isGlutenFree: true,
    isVegan: false,
    isVegetarian: false,
    isLactoseFree: true,
  },

  // French
  {
    id: generateId(),
    categoryIds: [CATEGORIES[4].id],
    title: 'Coq au Vin',
    affordability: 'pricey',
    complexity: 'hard',
    imageUrl: 'https://images.services.kitchenstories.io/9GIeqQwpeGj8Te6zRGt07XzEETo=/3840x0/filters:quality(80)/images.kitchenstories.io/wagtailOriginalImages/R23-final-photo-4.jpg',
    duration: 120,
    ingredients: [
      '1 whole chicken, cut into pieces',
      '200g bacon lardons',
      '20 pearl onions',
      '250g mushrooms',
      '2 cloves garlic',
      '1 bottle red wine',
      'Thyme, bay leaf',
      'Butter and flour for roux'
    ],
    steps: [
      'Brown chicken pieces in a large pot.',
      'Add bacon, onions, and mushrooms, cook until golden.',
      'Add garlic, wine, and herbs. Simmer for 1 hour.',
      'Make a roux and add to thicken sauce.',
      'Serve hot with crusty bread.'
    ],
    isGlutenFree: false,
    isVegan: false,
    isVegetarian: false,
    isLactoseFree: true,
  },
  {
    id: generateId(),
    categoryIds: [CATEGORIES[4].id],
    title: 'Croque Monsieur',
    affordability: 'moderate',
    complexity: 'medium',
    imageUrl: 'https://i0.wp.com/www.pardonyourfrench.com/wp-content/uploads/2021/02/croque-monsieur-19.jpg?fit=1200%2C1798&ssl=1',
    duration: 30,
    ingredients: [
      '4 slices white bread',
      '2 slices ham',
      '100g Gruyère cheese',
      '2 tbsp butter',
      '2 tbsp flour',
      '1 cup milk',
      'Nutmeg',
      'Salt and pepper'
    ],
    steps: [
      'Make a béchamel sauce with butter, flour, and milk.',
      'Toast bread slices.',
      'Assemble sandwiches with ham and cheese.',
      'Top with béchamel and extra cheese.',
      'Broil until golden and bubbly.'
    ],
    isGlutenFree: false,
    isVegan: false,
    isVegetarian: false,
    isLactoseFree: false,
  },

  // Summer
  {
    id: generateId(),
    categoryIds: [CATEGORIES[5].id],
    title: 'Grilled Vegetable Skewers',
    affordability: 'affordable',
    complexity: 'simple',
    imageUrl: 'https://thissillygirlskitchen.com/wp-content/uploads/2022/03/Grilled-Vegetable-Kabobs-7.jpg',
    duration: 30,
    ingredients: [
      'Bell peppers',
      'Zucchini',
      'Cherry tomatoes',
      'Red onion',
      'Mushrooms',
      'Olive oil',
      'Herbs de Provence',
      'Salt and pepper'
    ],
    steps: [
      'Cut vegetables into chunks.',
      'Thread onto skewers.',
      'Brush with olive oil and season.',
      'Grill for 10-15 minutes, turning occasionally.',
      'Serve hot as a side dish or over rice.'
    ],
    isGlutenFree: true,
    isVegan: true,
    isVegetarian: true,
    isLactoseFree: true,
  },
  {
    id: generateId(),
    categoryIds: [CATEGORIES[5].id],
    title: 'Watermelon Feta Salad',
    affordability: 'affordable',
    complexity: 'simple',
    imageUrl: 'https://www.3yummytummies.com/wp-content/uploads/2020/06/Watermelon-Salad-with-Feta-and-Mint.jpg',
    duration: 15,
    ingredients: [
      '4 cups cubed watermelon',
      '200g feta cheese',
      '1/2 red onion, thinly sliced',
      'Fresh mint leaves',
      '2 tbsp olive oil',
      '1 tbsp balsamic vinegar',
      'Salt and pepper to taste'
    ],
    steps: [
      'Combine watermelon, crumbled feta, and red onion in a bowl.',
      'Tear mint leaves and add to the salad.',
      'Whisk olive oil and balsamic vinegar.',
      'Drizzle dressing over the salad.',
      'Toss gently and serve immediately.'
    ],
    isGlutenFree: true,
    isVegan: false,
    isVegetarian: true,
    isLactoseFree: false,
  },
];