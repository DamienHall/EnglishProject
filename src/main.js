// all code here is for the "sticky" navigation bar
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

// all code here is for custom elements
// copyright-text element
class CopyrightText extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<h6 class="w3-center w3-bottom behind-all">This website and its code are public domain. Styled with w3css and developed by Damien Hall. 9/21/2021</h6>';
  }
}

// card-container element
class CardContainer extends HTMLElement {
  connectedCallback() {
    this.className = "w3-card w3-white card";
  }
}

// center-container element
class CenterContainer extends HTMLElement {
  connectedCallback() {
    this.className = "w3-center";
  }
}

customElements.define("copyright-text", CopyrightText);
customElements.define("card-container", CardContainer);
customElements.define("center-container", CenterContainer);
