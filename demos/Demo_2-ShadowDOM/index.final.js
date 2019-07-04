class DWInput extends HTMLElement {
    constructor() {
        super();
        const pElement = document.createElement('p');
        pElement.textContent = "Hallo, ich bin ein Custom Element in shadow DOM";
        // Shadow DOM
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(pElement);
    }
}
window.customElements.define("dw-input", DWInput);