console.log('JS OK!');


// menu display block - a figli diretti di header-right
const hamburgerIcon = document.querySelector('.header-right > a');

// entro nel close
const closeIcon = document.querySelector('.close');

// entro nell'hamburger menu
const hamburgerMenu = document.querySelector ('.hamburger-menu');


// aggiungo l'evento - commenti ci sono le opzioni possibili
hamburgerIcon.addEventListener('click',
    function () {
      // hamburgerMenu.style.display = 'block';
      const classesInElement = hamburgerMenu.className;
      hamburgerMenu.className = classesInElement + ' active';
      // hamburgerMenu.className = hamburgerMenu.className + ' active'; // alternativa
      // hamburgerMenu.className += ' active'; // alternativa
      //
    }
)


/* Alternativa consigliata per aggiungere l'evento 
    
    hamburgerIcon.addEventListener('click',
    function () {
        hamburgerMenu.classList.add('active');
        
        }
) */



// Close icone

closeIcon.addEventListener('click',
    function() {
        hamburgerMenu.classList.remove('active');
    }
)