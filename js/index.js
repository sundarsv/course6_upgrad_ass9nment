// Get the modal
var modal = document.getElementById('createPostModal');

// Get the button that opens the modal
var btn = document.getElementById("createPost");

// Get the <span> element that closes the modal
var spancreate = document.getElementById("closecreate");

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
    modalContent.style.width = "80%";
}

// When the user clicks on <span> (x), close the modal
spancreate.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
