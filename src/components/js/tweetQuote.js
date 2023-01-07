import { quoteText, authorText } from "./DOMElements.js"

export default function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
  window.open(twitterUrl, "_blank")
}