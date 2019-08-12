
class DWInput extends HTMLElement {
    constructor() {
        super();
        const pElement = document.createElement('p');
        pElement.textContent = "Hallo, ich bin ein Custom Element im Shadow DOM";
        // Style
        const style = document.createElement('style');
        style.textContent = `p { color: green; }`;
        // Shadow DOM
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(style);
        shadowRoot.appendChild(pElement);
    }
}
window.customElements.define("dw-input", DWInput);