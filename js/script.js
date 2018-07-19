var link = document.querySelector(".write-to-us-link");
var popUp = document.querySelector(".write-to-us");
var closeButton = document.querySelector(".write-to-us-close");
var map = document.querySelector(".map-fog");
var popUpMap = document.querySelector(".map-popUp");
var closeMap = document.querySelector(".map-close");


link.addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log("works");
    popUp.classList.add("modal-show");
}
)

closeButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log("closing");
    popUp.classList.remove("modal-show");
}
)

map.addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log('open map, please');
    popUpMap.classList.add("modal-show");
})

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("closing");
  popUpMap.classList.remove("modal-show");
}
)

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();

      if (popUp.classList.contains("modal-show")) {
        popUp.classList.remove("modal-show");
      }

      if (popUpMap.classList.contains("modal-show")) {
        popUpMap.classList.remove("modal-show");
      }
    }
  })