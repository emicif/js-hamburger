console.log('JS Ok');


// menu display block
const hamburgerMenu = document.querySelector ('.hamburger-menu');




const headerRight = document.querySelector ('i');



headerRight.addEventListener('click', function{
    if (hamburgerMenu.style.display === "block") {
    } else {
        hamburgerMenu.style.display = "none";
    }
})


