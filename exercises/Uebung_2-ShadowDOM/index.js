/**
 * 01. TODO - mit Shadow DOM erweitern
 * 02. TODO - alle Kind-Elemente an shadowRoot anhängen
 */

class MyContactCard extends HTMLElement {
  constructor() {
    super();
    const pElement = document.createElement("p");
    const imgElement = document.createElement("img");
    const divHolder = document.createElement("div");

    imgElement.src = "../global/images/img1.png";
    pElement.textContent = "Name: Alex Müller";

    divHolder.appendChild(pElement);
    this.appendChild(imgElement);
    this.appendChild(divHolder);
  }
}
customElements.define("my-contact-card", MyContactCard);
