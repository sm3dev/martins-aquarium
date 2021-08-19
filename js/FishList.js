/**
 *  FishList renders individual fish objects as HTML
 */

// TODO: Import `getFish` from the data module
import { getFish } from "./FishData.js";

export const FishList = () => {

    // Get a reference to the `<section class="fishList">` element
    const contentElement = document.querySelector("insert selector here")
    const fishes = getFish()

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        All the fish go here!
    `
}