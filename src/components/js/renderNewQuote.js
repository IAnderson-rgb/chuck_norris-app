import { whenLoading, whenLoaded } from "./loaderControl.js"
import { loader, quoteContainer, quoteText, authorText} from "./DOMElements.js"
import {
  updateCacheIfStale,
  getCachedQuotes,
} from "./dataHandling.js"

async function renderQuote(quote) {
  console.log("Hitting renderQuote");
  if (!quote.author) {
    authorText.textContent = "Unknown"
  } else {
    authorText.textContent = quote.author
  }

  if (quote.text.length > 50) {
    quoteText.className = "long-quote"
  } else {
    quoteText.className = ""
  }
  quoteText.textContent = quote.text
}

export default async function renderNewQuote() {
  whenLoading({ showElement: loader, hideElement: quoteContainer })
  await updateCacheIfStale()
  const quote = getCachedQuotes().payload
  await renderQuote(quote)
  whenLoaded({ showElement: quoteContainer, hideElement: loader })
}