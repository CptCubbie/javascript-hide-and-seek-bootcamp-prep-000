function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  document.querySelector('main #app div #nested div.target')
}