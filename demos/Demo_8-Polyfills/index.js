
class DWInput extends HTMLElement {
    static get observedAttributes() {
        return ['text'];
    }
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
    attributeChangedCallback(attrName, oldVal, newVal) {
        console.log("################################")
        console.log("Attribute with name:", attrName, "changed");
        console.log("old value:", oldVal);
        console.log("new value:", newVal);
        console.log("################################")
        this.querySelector("[slot=text]").textContent = newVal;
    }
}
window.customElements.define("dw-input", DWInput);