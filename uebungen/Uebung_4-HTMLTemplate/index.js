/**
 * 1. Lagert alle Kindelemente aus der MyContactCard in ein Template aus.
 * - Das Template soll als String in die JS-Variable implementiert und an die shadowRoot angehängt werden.
 * */
class MyContactCard extends HTMLElement {
  constructor() {
    super();
    const pElement = document.createElement("p");
    const imgElement = document.createElement("img");
    const divHolder = document.createElement("div");
    // Style
    const style = document.createElement("style");
    style.textContent = `img { max-width:200px; }`;

    imgElement.src = "./images/img1.png";
    pElement.textContent = "Name: Alex Müller";
    divHolder.appendChild(pElement);

    // Shadow DOM
    const shadowRoot = this.attachShadow({ mode: "open" });

    shadowRoot.appendChild(style);
    shadowRoot.appendChild(imgElement);
    shadowRoot.appendChild(divHolder);
  }
}
window.customElements.define("my-contact-card", MyContactCard);
