document.addEventListener('scroll', () => {
  let top = document.documentElement.scrollTop;
  if(top > 290) {
    document.querySelector('header div').style.opacity = 0;
    document.querySelector('nav').style.backgroundColor = 'rgba(0, 0, 0, .7)';
    document.querySelector('nav').style.color = 'white';
  } else {
    document.querySelector('header div').style.opacity = 1;
    document.querySelector('nav').style.backgroundColor = 'rgba(255, 255, 255, .4)';
    document.querySelector('nav').style.color = 'black';
  }
});