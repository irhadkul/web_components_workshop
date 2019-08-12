/**
 * 01. TODO - mit Shadow DOM erweitern
 * 02. TODO - alle Kind-Elemente an shadowRoot anhängen
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

    this.append(containerElement);

  }
}
customElements.define("my-contact-card", MyContactCard);
