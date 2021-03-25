var content = document.getElementById("content");
var originalOffsetTop =
parseFloat(window.getComputedStyle(document.getElementById("content")).marginTop)
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
window.onscroll = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    content.style.marginTop = (originalOffsetTop+parseFloat(window.getComputedStyle(navbar).height))+"px";
  } else {
    navbar.classList.remove("sticky");
    content.style.marginTop = originalOffsetTop+"px";
  }
}
