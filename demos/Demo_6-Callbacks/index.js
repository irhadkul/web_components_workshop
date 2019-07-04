
// #############  Start: Custom Elements Demo ################



class DWInput extends HTMLElement {
    constructor() {
        super();
        const template = document.querySelector('#dw-template');
        const templateContent = template.content;
        // Shadow DOM
        const shadowRoot = this.attachShadow({ mode: 'open' });
        // cloneNode is important because we want to make template reusable
        shadowRoot.appendChild(templateContent.cloneNode(true));
    }
}
window.customElements.define("dw-input", DWInput);


// #############  End: Custom Elements Demo ################



