/**
 *  FishList renders individual fish objects as HTML
 */

// TODO: Import `getFish` from the data module
import { getFish } from "./FishData.js";
import { Fish } from "./Fish.js";

export const FishList = () => {

    // Get a reference to the `<section class="fishList">` element
    const contentElement = document.querySelector(".fishList")    
    
    const allFishes = getFish();

    let fishHTMLRepresentation = "";
    for (const onThingFromTheSea of allFishes) {

        fishHTMLRepresentation += Fish(onThingFromTheSea);
        
    }

    console.log("what does fishHTMLRepresentation look like?", fishHTMLRepresentation);

    // Add to the existing HTML in the content element
    contentElement.innerHTML += ` ${fishHTMLRepresentation}`;

}