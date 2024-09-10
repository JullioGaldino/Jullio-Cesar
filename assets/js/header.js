const acordeonTriggers = document.querySelectorAll('.header .after');

headerafters.forEach((after) => {

    trigger.addEventListener('click', (e) => {
       const header = after.parentElement;
       const isOpen = header.classList.contains('open');
 
       if(isOpen) {
          acordeon.classList.remove('open');
       } else {
          acordeon.classList.add('open');
       }
    });
 });