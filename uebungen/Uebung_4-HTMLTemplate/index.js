/**
 * 01. TODO - Lagert alle Kindelemente aus der MyContactCard in ein Template aus.
 * 02. TODO - Das Template soll als HTML-String in eine Konstante ausgelagert und an die shadowRoot angehängt werden.
 **/

const styleContent = `
:host {
    --primary-color: #5965BF;
    font-family: sans-serif;
    font-size: 20px;
}

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

    const styles = document.createElement('style');
    styles.textContent = styleContent;

    // Shadow DOM
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(styles);
    this.shadowRoot.appendChild(containerElement);
  }
}
window.customElements.define("my-contact-card", MyContactCard);
