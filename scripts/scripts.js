function initSelector(){
  const menu = document.querySelectorAll('.js-menu li');
  const links = document.querySelectorAll('.js-menu li a');
  links[0].classList.add('selected');

  function selector(index) {
    links.forEach((item) => {
      item.classList.remove('selected')
    })
    links[index].classList.add('selected');
  }

  menu.forEach((item, index) => {
    item.addEventListener('click', () => {
      selector(index);
    })
  });
}
initSelector();

function initScrollLink(){
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollViem(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const sections = document.querySelector(href);
    const topo = sections.offsetTop;

    window.scrollTo({
      top: topo,
      behavior: 'smooth',
    })
  }

  linksInternos.forEach((item) => {
    item.addEventListener('click', scrollViem)
  })
}
initScrollLink();

const section = document.querySelectorAll('.js-scroll');
const mid = window.innerHeight * 0.9;

function animaScroll(){
  section.forEach((item) => {
    const sectionTop = item.getBoundingClientRect().top - mid;
    if(sectionTop > 0){
      item.classList.remove('selected-ative')
    }else{
      item.classList.add('selected-ative');
    }
  })
}

window.addEventListener('scroll', animaScroll);
