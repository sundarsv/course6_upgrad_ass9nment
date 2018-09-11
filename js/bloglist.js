var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

/**
 * function to toggle visibility of modal
 */
function toggleModal() {
    modal.classList.toggle("show-modal");
}

/**
 * function to handle window click
 */
function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

/**
 * This will call toggleModal function when trigger class is clicked
 */
$(".trigger").on("click", function (event) {
  toggleModal();
});


closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);