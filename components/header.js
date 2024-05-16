class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header class="header_container">
      <h2 class="logo"><a href="./">tobilobasalawu</a></h2>
      <div class="hamburger-menu" onclick="toggleNavLinks()">
        <img src="image/hamburger.png">
      </div>
      <nav class="wrapper">
        <ul class="nav_link" id="navLinks">
          <li class="zoom"><a href="./" class="nav_link_li" id="home">Home</a></li>
          <li class="zoom"><a href="./about.html" class="nav_link_li" id="about">About</a></li>
          <li class="level2"><a href="./units.html">LEVEL 2 IT WORK</a></li>
          <div class="dropdown">
            <button class="dropbtn" style="font-family: Bai Jamjuree">Academics</button>
            <div class="dropdown-content">
              <p class="dropdown-submenu"><a href="./units.html">LEVEL 2 IT WORK</a></p>
                <div class="dropdown-contentz">
                  <a href="./unit1.html">Unit 1 - Online World</a>
                  <a href="./unit2.html">Unit 2 - Technology Systems</a>
                  <a href="./unit3.html">Unit 3 - Digital Portfolio</a>
                  <a href="./unit9.html">Unit 9 - Spreadsheet Development</a>
                  <a href="./unit10.html">Unit 10 - Database Development</a>
                  <a href="./unit11.html">Unit 11 - Computer Networks</a>
                  <a href="./unit12.html">Unit 12 - Software Development</a>
                  <a href="./unit13.html">Unit 13 - Website Development</a>
                </div>
            </div>
          </div>
          <li class="zoom"><a href="./projects.html" class="nav_link_li" id="project">Projects</a></li>

        </ul>
        <ul class="social_link">
          <li class="zoom">
            <a href="https://github.com/tobilobasalawu"><img src="./image/github.svg" alt="Twitter" width="{30}" height="{30}" /></a>
          </li>
          <li class="zoom">
            <a href="https://twitter.com/SalawuToby"><img src="./image/email.svg" alt="Email" width="{30}" height="{30}" /></a>
          </li>
          <li class="zoom">
            <a href="https://uk.linkedin.com/in/oluwatobi-s-637258246"><img src="./image/linkedin.svg" alt="LinkedIn" width="{30}" height="{30}" /></a>
          </li>
        </ul>
      </nav>
    </header>
    `;
  }
}

customElements.define("header-component", Header);

function toggleNavLinks() {
  var navLinks = document.getElementById("navLinks");
  console.log("Clicked!");
  navLinks.classList.toggle("slide-in"); // Toggle the slide-in class
}


