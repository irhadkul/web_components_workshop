/**
 * 01. TODO - Erstelle mit document.createElement() ein neues style-Element
 * 02. TODO - Setze auf dem neuen style-Element die Formtatierung für das img-Element: img { max-width: 200px; }
 * 03. TODO - Das style-Element an die shadowRoot anhängen
 */

class MyContactCard extends HTMLElement {
  constructor() {
    super();
    const pElement = document.createElement("p");
    const imgElement = document.createElement("img");
    const divHolder = document.createElement("div");

    imgElement.src = "./images/img1.png";
    pElement.textContent = "Name: Alex Müller";

    divHolder.appendChild(pElement);

    // Shadow DOM
    this.attachShadow({ mode: "open" });

    this.shadowRoot.appendChild(imgElement);
    this.shadowRoot.appendChild(divHolder);
  }
}
customElements.define("my-contact-card", MyContactCard);
