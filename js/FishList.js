/**
 *  FishList renders individual fish objects as HTML
 */

// TODO: Import `getFish` from the data module
import { getFish } from "./FishData.js";
import { getUnworthyFish } from "./FishData.js";
import { getMostHolyFish } from "./FishData.js";
import { getSoldierFish } from "./FishData.js";
import { Fish } from "./Fish.js";

export const FishList = () => {
  const getFishes = getFish();
  addFishToDOM(getFishes);
  const holyFishes = getMostHolyFish();
  addFishToDOM(holyFishes);
  const soldierFish = getSoldierFish();
  addFishToDOM(soldierFish);
  const unworthyFish = getUnworthyFish();
  addFishToDOM(unworthyFish);
};

// This function adds fish to the DOM
export const addFishToDOM = (arrayOfFish) => {
  // Get a reference to the `<section class="fishList">` element
  const contentElement = document.querySelector(".fishList");

  // Add to the existing HTML in the content element contentElement
  let fishHTMLRepresentation = "";
  for (const onThingFromTheSea of arrayOfFish) {
    fishHTMLRepresentation += Fish(onThingFromTheSea);
  }

  // Add to the existing HTML in the content element
  contentElement.innerHTML += ` ${fishHTMLRepresentation}`;
};
