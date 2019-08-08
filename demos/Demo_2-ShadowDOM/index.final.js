class DWInput extends HTMLElement {
    constructor() {
        super();
        const pElement = document.createElement('p');
        pElement.textContent = "Hallo, ich bin ein p-Element im Shadow DOM";
        // Shadow DOM
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(pElement);
    }
}
customElements.define("dw-input", DWInput);