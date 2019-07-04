
// #############  Start: Custom Elements Demo ################



class DWInput extends HTMLElement {
    constructor() {
        super();
        console.log("Constructor started");
        const template = document.querySelector('#dw-template');
        const templateContent = template.content;
        // Shadow DOM
        const shadowRoot = this.attachShadow({ mode: 'open' });
        // cloneNode is important because we want to make template reusable
        shadowRoot.appendChild(templateContent.cloneNode(true));
    };
    connectedCallback() {
        console.log("It has connected");
    }

    disconnectedCallback() {
        console.log("It has disconnected");
    }
}
window.customElements.define("dw-input", DWInput);


// #############  End: Custom Elements Demo ################



