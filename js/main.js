//import the getFish function from FishData
import { getFish } from "./FishData.js";

// set a variable equal to the fish from FishData
const allTheFish = getFish();

console.log("the second to last item is ", allTheFish[allTheFish.length - 3]);
console.log("total fish right now: ", allTheFish.length);

// loop through allTheFish
for (const fish of allTheFish) {
  console.log(fish);
}

// Create a function that takes the value of fishCollection.harvestLocation and appends it to the array locationsList

let getLocations = function (fishArray) {
  // I need commands that iterate through the function argument and look for a value of harvestLocation

  // If harvestLocation has a value, then append that value to the array called locationsList

  // If harvestLocation is an empty String, then append string "No Location Given"

  // Basics:
  // I need an If statement
  // I need a For Loop

  for (let i = 0; i < fishArray.length; i++) {
    const element = fishArray[i];
  }
};

// Create a function that iterates through fishCollection array and returns each value into the data
