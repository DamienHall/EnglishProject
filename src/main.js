var content = document.getElementById("content");
var originalMarginTop = content.style.marginTop;
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

window.onscroll = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    content.style.marginTop = (content.style.marginTop+(navbar.clientHeight*2))+"px";
  } else {
    navbar.classList.remove("sticky");
    content.style.marginTop = originalMarginTop;
  }
}
