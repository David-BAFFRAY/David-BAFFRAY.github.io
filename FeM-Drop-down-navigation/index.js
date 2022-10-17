// Switch sub menu, click on arrow

let arrow = document.querySelectorAll('.arrow');

for (let i = 0; i < arrow.length; i++) {

  arrow[i].addEventListener('click', (e) => {

    let arrowParent = e.target.parentElement.parentElement;
    arrowParent.classList.toggle('showMenu');
  });
}

//  Slide a slidebar menu mobile version

let sidebar = document.querySelector('.sidebar');
let sidebarBtn = document.querySelector('.btn__burger');
let bodyShadow = document.querySelector('.shadow');

sidebarBtn.addEventListener('click', () => {
  sidebar.classList.toggle('close');
  bodyShadow.classList.toggle('on');
});

// Switch icon menu mobile version

let icon = document.querySelector('#icon');

icon.addEventListener('click', (e) => {
  let iconEl = e.currentTarget.children[0].children[0];

  iconEl.getAttribute('href') === '#burger' 
  ? iconEl.setAttribute('href', '#cross') 
  : iconEl.setAttribute('href', '#burger');
})