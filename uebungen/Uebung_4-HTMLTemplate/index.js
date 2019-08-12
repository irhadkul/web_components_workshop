/**
 * 1. Lagert alle Kindelemente aus der MyContactCard in ein Template aus.
 * - Das Template soll als String in die JS-Variable implementiert und an die shadowRoot angehängt werden.
 * */

const styles = `
.contact-card {
    border: 2px solid var(--primary-color);
    display: flex;
    padding: 2rem;
    background: white;
    border-radius: 6px;
    margin-bottom: 1rem;
}

img {
    border-radius: 50%;
    width: auto;
    height: 100px;
    border: 3px solid var(--primary-color);
}

.content {
    flex-grow: 1;
    margin-left: 1rem;
}

h1 {
    font-size: 1em;
    font-weight: bold;
    margin: 0 0 0.5rem;
    color: var(--primary-color);
}

p, .details {
    font-size: 0.8em;
    color: gray;
    margin: 1rem 0;
}

.details {
    display: none;
}

button {
    font-size: 0.8em;
    text-transform: uppercase;
    padding: 0.5rem 0.75rem;
    background: white;
    border: 2px solid var(--primary-color);
    border-radius: 4px;
    color: var(--primary-color);
    transition: all 200ms ease-out;
    cursor: pointer;
}

button:hover {
    background: var(--primary-color);
    color: white;
}
`;
 class MyContactCard extends HTMLElement {
  constructor() {
    super();
    const pElement = document.createElement("p");
    const imgElement = document.createElement("img");
    const divHolder = document.createElement("div");
    // Style
    const style = document.createElement("style");
    style.textContent = styles;

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
