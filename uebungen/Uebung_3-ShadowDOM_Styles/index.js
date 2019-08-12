/**
 * 01. TODO - Erstelle mit document.createElement() ein neues style-Element
 * 02. TODO - Setze auf dem neuen style-Element das CSS aus dem index.html
 * 03. TODO - Das style-Element an die shadowRoot anhängen
 */


class MyContactCard extends HTMLElement {
  constructor() {
    super();

    const containerElement = document.createElement("div");
    const imgElement = document.createElement('img');
    const contentElement = document.createElement('div');
    const nameElement = document.createElement("h1");
    const mailElement = document.createElement("p");
    const buttonElement = document.createElement("button");
    const detailsElement = document.createElement("div");
    
    containerElement.classList.add('contact-card');
    contentElement.classList.add('content');
    detailsElement.classList.add('details');

    imgElement.setAttribute('src', './images/img1.png');
    nameElement.textContent = 'Max Mustermann';
    mailElement.textContent = 'max.mustermann@example.com';
    buttonElement.textContent = 'Profilbeschreibung';
    detailsElement.innerHTML = '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>';

    containerElement.appendChild(imgElement);
    contentElement.appendChild(nameElement);
    contentElement.appendChild(mailElement);
    contentElement.appendChild(buttonElement);
    contentElement.appendChild(detailsElement);
    containerElement.appendChild(contentElement);

    // Shadow DOM
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(containerElement);

  }
}
customElements.define("my-contact-card", MyContactCard);
