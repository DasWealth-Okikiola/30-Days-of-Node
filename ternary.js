var eatsPlants = true;
var eatsAnimals = true;

// 1. Start by assuming we don't know what it is (undefined)
var category = undefined;

// 2. Is it an omnivore? (Check both)
category = (eatsPlants && eatsAnimals) ? "omnivore" : category;

// 3. Is it a herbivore? (Only plants, NOT animals)
category = (eatsPlants && !eatsAnimals) ? "herbivore" : category;

// 4. Is it a carnivore? (Only animals, NOT plants)
category = (!eatsPlants && eatsAnimals) ? "carnivore" : category;

console.log(category);