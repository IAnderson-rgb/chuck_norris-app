import { whenLoading, whenLoaded } from "./loaderControl.js"
import { loader, quoteContainer, quoteText} from "./DOMElements.js"
import {
  updateCacheIfStale,
  getCachedQuotes,
} from "./dataHandling.js"



function renderQuote(quote) {
  // if (!quote.author) {
  //   console.log('Log 1', quote);
  //   authorText.textContent = "Unknown"
  // } else {
  //   console.log('Log 2');
  //   authorText.textContent = quote.author
  // }

  if (quote) {
    const  quoteText = document.getElementById("quote")
    quoteText.textContent = "quote.toString()";
    console.log('Log 3', quoteText);
  } 
 
}
async function renderNewQuote() {
  console.log("Pre whenLoading", { loader, quoteContainer });
  whenLoading({ showElement: loader, hideElement: quoteContainer })
  await updateCacheIfStale()
  const quote = getCachedQuotes().payload
  await renderQuote(quote)
  console.log(quote);
  whenLoaded({ showElement: quoteContainer, hideElement: loader })
}

export {renderNewQuote, renderQuote}