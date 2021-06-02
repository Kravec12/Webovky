/*Scroll Up Icon*/
var scrollToTopBtn = document.getElementById("scrollToTopBtn")
var rootElement = document.documentElement

function scrollToTop() {
  // Scroll to top
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

scrollToTopBtn.addEventListener("click", scrollToTop)


/*Zmena obrazku*/
function change() {
  var div1 = document.getElementById("back");
  var div2 = document.getElementById("front");
  if (div1.style.zIndex == 0 && div2.style.zIndex == 1) {
    div1.style.zIndex = 1;
    div2.style.zIndex = 0;
  } else {
    div1.style.zIndex = 0;
    div2.style.zIndex = 1;
  }
}



/*Galerie*/
function gallery(item) {

  var itemToShow = document.getElementById(item);
  var items = ["university", "group", "awards", "students", "teachers", "campus"];
  var selectedItem;

  for (var i = 0; i < items.length; i++) {

    selectedItem = document.getElementById(items[i]);

    if(item == "all"){
      selectedItem.style.display = "inline-block";
    }
    else if (itemToShow != selectedItem) {
      itemToShow.style.display = "inline-block";
      selectedItem.style.display = "none";
    }
  }
}


/*Galerie kurzy*/
function gallery_courses(item) {

  var itemToShow = document.getElementById(item);
  var items = ["design", "computer", "development", "medical", "photography", "marketing", "driving", "business"];
  var selectedItem;

  for (var i = 0; i < items.length; i++) {

    selectedItem = document.getElementById(items[i]);

    if(item == "all"){
      selectedItem.style.display = "inline-block";
    }
    else if (itemToShow != selectedItem) {
      itemToShow.style.display = "inline-block";
      selectedItem.style.display = "none";
    }
  }
}


/*Oteviraci menu*/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var next = this.nextElementSibling;
    var panel = next.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


var acc = document.getElementsByClassName("details__acc");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var next = this.nextElementSibling;
    var panel = next.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
      next.style.display = "block"
    } else {
      panel.style.display = "block";
      next.style.display = "none"
    }
  });
}
