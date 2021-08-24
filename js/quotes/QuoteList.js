/**
 *  QuoteList renders individual fish harvest locatios as HTML
 */

import { getQuote } from "./QuoteData.js";
import { Quote } from "./Quote.js";

export const QuoteList = () => {
  const getQuotes = getQuote();
  addQuotesToDOM(getQuotes);
};

export const addQuotesToDOM = (arrayOfQuotes) => {
  // Get a reference to the element <ul class="location-list">
  const ListContentElement = document.querySelector(".martin-tip__block");

  // add to the exisintg HTML in the content element ListContentElement
  let quoteHTMLRepresentation = "";
  for (const onePerfectQuote of arrayOfQuotes) {
    quoteHTMLRepresentation += Quote(onePerfectQuote);
  }

  // add to the existing HTML in the content element
  ListContentElement.innerHTML += ` ${quoteHTMLRepresentation}`;
};
