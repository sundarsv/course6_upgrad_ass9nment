

// Get the modal
var modalin = document.getElementById('signInModal');

// Get the button that opens the modal
var btnin = document.getElementById("signIn");

// Get the <span> element that closes the modal
var spanin = document.getElementById("closein");

// When the user clicks on the button, open the modal
btnin.onclick = function() {
    modalin.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanin.onclick = function() {
    modalin.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalin) {
        modalin.style.display = "none";
    }
} 





// Get the modal
var modalup = document.getElementById('signUpModal');

// Get the button that opens the modal
var btnup = document.getElementById("signUp");

// Get the <span> element that closes the modal
var spanup = document.getElementById("closeup");

// When the user clicks on the button, open the modal
btnup.onclick = function() {
    modalup.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanup.onclick = function() {
    modalup.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalup) {
        modalup.style.display = "none";
    }
} 


