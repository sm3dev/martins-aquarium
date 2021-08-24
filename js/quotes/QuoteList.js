/**
 *  QuoteList renders individual fish harvest locatios as HTML
 */

import { getQuote } from "./QuoteData";
import { Quote } from "./Quote";

export const QuoteList = () => {
    
    const getQuotes = getQuote();
    addQuotesToDOM(getQuotes);
}

export const addQuotesToDOM = () => {

    // Get a reference to the element <ul class="location-list">
    const ListContentElement = document.querySelector(".location-list");
}
