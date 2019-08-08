class DWInput extends HTMLElement {
    constructor() {
        super();
        const pElement = document.createElement('p');
        pElement.textContent = "Hallo, ich bin ein p-Element in einer Web Component";
        this.appendChild(pElement);
    }
}
customElements.define("dw-input", DWInput);