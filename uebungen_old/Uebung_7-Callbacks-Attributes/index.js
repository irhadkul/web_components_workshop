class DWContactCard extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementById("contact-card-template");
        const templateContent = template.content;
        // Shadow DOM
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(templateContent.cloneNode(true));

    }

    connectedCallback() {
        const img = this.querySelector("img");
        this.clickListener = this.addEventListener("click", () => {
            img.title = img.src;
        });
    }

    disconnectedCallback() {
        const img = this.querySelector("img");
        img.title = "";
    }
}
window.customElements.define("dw-contact-card", DWContactCard);
