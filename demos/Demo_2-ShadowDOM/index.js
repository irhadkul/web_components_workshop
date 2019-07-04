
// #############  Start: Custom Elements Demo ################

class DWInput extends HTMLElement {
    constructor() {
        super();
        const pElement = document.createElement('p');
        pElement.textContent = "Hallo, ich bin ein Custom Element";
        this.appendChild(pElement);
    }
}
window.customElements.define("dw-input", DWInput);



// #############  End: Custom Elements Demo ################



