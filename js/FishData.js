/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete this
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */

// This is new code. Add this.

const fishCollection = [
  {
    name: "Three-Eyed Fish",
    food: "worms",
    image: "fish-photo-3-eyed-fish.jpg",
    species: "Fictional",
    length: 5,
    waterType: "Salt-water",
    harvestLocation: "Ohio",
  },
  {
    name: "3-eyes",
    food: "string",
    image: "fish-photo_gold-2.jpg",
    species: "string",
    length: 17,
    waterType: "Salt",
    harvestLocation: "Ohio",
  },
  {
    name: "Robin Gilliams",
    food: "Bee Moths",
    image: "fish-photo_gold-3.jpg",
    species: "Clownfish",
    length: 2,
    waterType: "Salt",
    harvestLocation: "Mexico",
  },
  {
    name: "Mr Freeze",
    food: "Meal Worms",
    image: "fish-photo_gold.jpg",
    species: "Tang",
    length: 3,
    waterType: "Salt",
    harvestLocation: "Florida",
  },
  {
    name: "Nemo",
    food: "Goldfish",
    image: "fish-photo_grey-2.jpg",
    species: "Clown",
    length: 3,
    waterType: "Salt-water",
    harvestLocation: "Florida",
  },
  {
    name: "Don Julio",
    food: "snails",
    image: "fish-photo_grey-spotted-2.jpg",
    species: "Stingray",
    length: 9,
    waterType: "Salt",
    harvestLocation: "Dominican Republic",
  },
  {
    image: "fish-photo_orange-2.jpg",
    name: "Eleanor",
    species: "Angler",
    length: 5,
    harvestLocation: "North Carolina",
    waterType: "Fresh",
    diet: "everything",
  },
  {
    name: "Jeff",
    food: "Forage Fish",
    image: "fish-photo_red-3.jpg",
    species: "Bluefish",
    length: 3,
    waterType: "Salt",
    harvestLocation: "Australia",
  },
  {
    name: "Karen",
    food: "Algae",
    image: "fish-photo_yellow-2.jpg",
    species: "Siamese algae eater",
    length: 5,
    waterType: "salt",
    harvestLocation: "Puerto Rico",
  },
  {
    name: "doctor fish",
    diet: "biofilm ",
    image: "fish-photo_yellow-stripe-2.jpg",
    species: "Tinca tinca",
    length: 3.9,
    waterType: "Fresh Water",
    harvestLocation: "Massachusetts ",
  },
  {
    name: "Beast",
    food: "Shrimp",
    image: "fish-photo_orange-3.jpg",
    species: "Blobfish",
    length: 10,
    waterType: "salt",
    harvestLocation: "Florida",
  },
  {
    name: "Bruce",
    food: "not fish",
    image: "fish-photo_orange.jpg",
    species: "greatWhite",
    length: 130,
    waterType: "salt",
    harvestLocation: "Sydney",
  },
  {
    name: "Gordon",
    food: "Krill",
    image: "fish-photo_gold-3.jpg",
    species: "Blowfish",
    length: 3,
    waterType: "Salt",
    harvestLocation: "Asia",
  },
  {
    name: "Bloat",
    food: "shrimp",
    image: "fish-photo_orange.jpg",
    species: "Blow Fish",
    length: 5,
    waterType: "Salt",
    harvestLocation: "Mexico",
  },
  {
    name: "Marlin",
    food: "Mealworms",
    image: "fish-photo_grey-spotted-2.jpg",
    species: "clownfish",
    length: 4,
    waterType: "Saltwater",
    harvestLocation: "Bahamas",
  },
  {
    name: "Ted",
    food: "Perch",
    image: "fish-photo_gold-3.jpg",
    species: "Tiger Trout",
    length: 15,
    waterType: "Fresh",
    harvestLocation: "North America",
  },
  {
    name: "Blob Marley",
    food: "mollusks",
    image: "fish-photo_grey-spotted-2.jpg",
    species: "Blobfish",
    length: 8,
    waterType: "Salt",
    harvestLocation: "Australia",
  },
  {
    name: "nile tilapia",
    food: "krill",
    image: "fish-photo_orange.jpg",
    species: "tilapia",
    length: 8,
    watertype: "fresh",
    harvestLocation: "North Africa",
  },
];

export const getFish = () => {
  return fishCollection;
};

export const getUnworthyFish = () => {
  // get all fish with a length that isn't divisible by 3 or 5
  // and put them in an array called unworthyFish
  const unworthyFishArray = [];

  for (const throwAwayFish of fishCollection) {
    if (throwAwayFish.length % 3 !== 0 && throwAwayFish.length % 5 !== 0) {
      unworthyFishArray.push(throwAwayFish);
    }

  }
  return unworthyFishArray;

};

export const getMostHolyFish = () => {
  // 3, 6, 9, 12, etc... fish
  const holyFishArray = [];

  for (const fishtaco of fishCollection) {
    if (fishtaco.length % 3 === 0) {
      holyFishArray.push(fishtaco);
    }
  }
  return holyFishArray;
};

export const getSoldierFish = () => {
  //5,10,   20,
  const soldierFishArray = [];

  for (const fishObj of fishCollection) {
    if (fishObj.length % 5 === 0) {
      soldierFishArray.push(fishObj);
    }
  }

  return soldierFishArray;
};
