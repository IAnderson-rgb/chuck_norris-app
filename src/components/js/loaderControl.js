function showLoadingSpinner(loader, quoteContainer) {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function hideLoadingSpinner(loader,quoteContainer) {
  loader.hidden = true;
  quoteContainer.hidden = false;
}

export { showLoadingSpinner, hideLoadingSpinner }