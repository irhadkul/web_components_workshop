class DWContactCard extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementById("contact-card-template");
        const templateContent = template.content;
        // Shadow DOM
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(templateContent.cloneNode(true));

    }
}
window.customElements.define("dw-contact-card", DWContactCard);
