// JS Goes here - ES6 supported

import "./css/main.css";

// Say hello
console.log("🦊 Hello! Edit me in src/index.js");

$(function() {
  $('.content-column-content blockquote').addClass('blockquote');
  $('.content-column-content table').addClass('table');
  $('.content-column-content table').wrap('<div class="table-responsive" />');
  $('.content-column-content table thead').addClass('thead-dark');
  $('.content-column-content pre').wrap('<figure class="highlight" />');
  $('.content-column-content figure > img').addClass('img-fluid');
});
