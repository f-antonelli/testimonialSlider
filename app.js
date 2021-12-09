const d = document;

const person = d.querySelectorAll('.slider__person');
const btnPrev = d.getElementById('prev');
const btnNext = d.getElementById('next');
let i = 0;

d.addEventListener('click', e => {

   if (e.target === btnPrev) {
      person[i].classList.remove('active');
      i--;
      
      if (i < 0) {
         i = person.length - 1;
      } 

      person[i].classList.add('active');
   }

   if (e.target === btnNext) {
      person[i].classList.remove('active');
      i++;
      
      if (i > person.length - 1) {
         i = 0;
      } 

      person[i].classList.add('active');
   }
})