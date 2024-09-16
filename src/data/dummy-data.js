
const generateId = () => Math.random().toString(36).substr(2, 9);

export const CATEGORIES = [
  { id: generateId(), title: 'Italian', color: '#f5428d' },
  { id: generateId(), title: 'Quick & Easy', color: '#f54242' },
  { id: generateId(), title: 'Hamburgers', color: '#f5a442' },
  { id: generateId(), title: 'German', color: '#f5d142' },
  { id: generateId(), title: 'Light & Lovely', color: '#368dff' },
  { id: generateId(), title: 'Exotic', color: '#41d95d' },
  { id: generateId(), title: 'Breakfast', color: '#9eecff' },
  { id: generateId(), title: 'Asian', color: '#b9ffb0' },
  { id: generateId(), title: 'French', color: '#ffc7ff' },
  { id: generateId(), title: 'Summer', color: '#47fced' }
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
  // Thêm các món ăn khác tương tự
];