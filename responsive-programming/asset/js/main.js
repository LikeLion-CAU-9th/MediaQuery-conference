document.addEventListener('scroll', () => {
  let top = document.documentElement.scrollTop;
  if(top > 290) {
    document.querySelector('header div').style.opacity = 0;
  } else {
    document.querySelector('header div').style.opacity = 1;
  }
});