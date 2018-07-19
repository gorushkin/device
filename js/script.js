var link = document.querySelector(".write-to-us-link");
var popUp = document.querySelector(".write-to-us");
var closeButton = document.querySelector(".write-to-us-close");

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