const template = document.createElement('template');
template.innerHTML = `<button>Klick mich</button>`;

class MyButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.buttonElement = this.shadowRoot.querySelector('button');
    }
    //attribute= label
}

customElements.define('my-button', MyButton);