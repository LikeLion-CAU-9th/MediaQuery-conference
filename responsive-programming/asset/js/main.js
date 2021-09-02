document.addEventListener('scroll', () => {
  let top = document.documentElement.scrollTop;
  if(top > 290) {
    document.querySelector('header div').style.display = "none";
  }
});