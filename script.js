const close = document.querySelector(".close")
const open  = document.querySelector(".ham")
document.addEventListener("DOMContentLoaded", function() {
    // This code will run after the page has finished loading
    const button = document.querySelector("button");

    if (button) {
        button.addEventListener("click", function() {
            alert("Button clicked!");
        });
    }
});
