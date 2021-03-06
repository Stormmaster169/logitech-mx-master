window.onload = function() {
  // Adaptive Navbar
  addCollapsedNavbarClickHandler();

  // Navbar
  addNavbarClickHandler();
}

const addCollapsedNavbarClickHandler = () => {
  document.querySelector("#navbarNav > ul.navbar-nav__adaptive").addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-link__adaptive')) {
      let clickedLink = e.target;
      removeSelectedLink();
      selectClickedLink(clickedLink);
      closeCollapsedNavbar();
    }
  })
}

const removeSelectedLink = () => {
  let links = document.querySelectorAll('.navbar-nav__adaptive .nav-item__adaptive .nav-link__adaptive');
  links.forEach(link => {
    link.classList.remove('active__adaptive');
  })
}

const selectClickedLink = (clickedLink) => {
  clickedLink.classList.add('active__adaptive');
}

const closeCollapsedNavbar = () => {
  let collapseNavbar = document.querySelector('.navbar-collapse');
  let collapseNavbarToggler = document.querySelector('.navbar-toggler');
  collapseNavbar.classList.remove('show');
  collapseNavbarToggler.setAttribute('aria-expanded', 'false');
}

const addNavbarClickHandler = () => {
  document.querySelector("#navbarNav > ul.navbar-nav").addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-link')) {
      let clickedPosition = e.target;
      removeSelectedPosition();
      selectClickedPosition(clickedPosition);
    }
  })
}

const removeSelectedPosition = () => {
  let positions = document.querySelectorAll('.navbar-nav .nav-item .nav-link');
  positions.forEach(position => {
    position.classList.remove('active');
  })
}

const selectClickedPosition = (clickedPosition) => {
  clickedPosition.classList.add('active');
}