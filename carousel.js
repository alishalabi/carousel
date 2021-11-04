!(function(d)){

  var itemClassName = "carousel_photo";
      items = d.getElementsByClassName(itemClassName),
      totalItems = items.length,
      slide = 0,
      moving = true;

  function setInitialClasses() {
    items[totalItems - 1].classList.add("prev");
    items[0].classList.add("active");
    items[1].classList.add("next");
  }

  function setEventListeners() {
    var next = d.getElementsByClassName("carousel_button--next")[0];
        prev = d.getElementsByClassName("carousel_button--prev")[0];


    next.addEventListener("click", moveNext);
    prev.addEventListener("click", movePrev);

  }

}(document);
