class DWContactCard extends HTMLElement {
    static get observedAttributes() {
        return ['img-source', 'name', 'email']
    }
    constructor() {
        super();
        const template = document.getElementById("contact-card-template");
        const templateContent = template.content;
        // Shadow DOM
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(templateContent.cloneNode(true));

    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        switch (attrName) {
            case 'img-source':
                this.querySelector("img").src = newVal;
                return;
            case 'name':
                this.querySelector(".name").textContent = newVal;
                return;
            case 'email':
                this.querySelector(".email").textContent = newVal;
                return;
            default: return;
        }
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
