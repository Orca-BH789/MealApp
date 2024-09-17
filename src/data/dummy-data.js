
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
  
];