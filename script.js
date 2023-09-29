
// Hover_ainmation

const positioned_elements = document.querySelectorAll(".positioned_element");
const hover_elements = document.querySelectorAll("li");

hover_elements.forEach((li, index) => {
  li.addEventListener('mouseover', () => {
    positioned_elements[index].classList.add('visible');
  });

  li.addEventListener('mouseout', () => {
    positioned_elements[index].classList.remove('visible');
  });
});


// Hanberg_code

const Hanberg_Btn = document.querySelector('.manuBtn');


