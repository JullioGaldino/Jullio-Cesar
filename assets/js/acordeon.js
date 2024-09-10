const acordeonTriggers = document.querySelectorAll('.acordeon .trigger');

acordeonTriggers.forEach((trigger) => {

   trigger.addEventListener('click', (e) => {
      const acordeon = trigger.parentElement;
      const isOpen = acordeon.classList.contains('open');

      if(isOpen) {
         acordeon.classList.remove('open');
      } else {
         acordeon.classList.add('open');
      }
   });
});
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