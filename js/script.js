/*The title wording and color change when we hover over it. Got to refresh the page to go to the original title. */

var title = document.querySelector("h1");
title.addEventListener("mouseover", function () {
  title.innerText = "Let's PARTY!";
  title.style.color = "maroon";
});
