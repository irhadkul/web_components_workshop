const template = document.createElement('template');
template.innerHTML = `<button>Klick mich</button>`;

class MyButton extends HTMLElement {

    static get observedAttributes() {
        return ['label'];
    }

    set label(value) {
        this._label = value;
        this.buttonElement.innerText = this._label;
    }

    get label() {
        return this._label;
    }

    constructor() {
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        
        this.buttonElement = this.shadowRoot.querySelector('button');
        this.buttonElement.addEventListener('click', () => this.handleClick());
    }

    handleClick() {
        this.dispatchEvent(new CustomEvent('my-click', { detail: 'Ich wurde geklickt!'} ));
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName === 'label') {
            this.label = newValue;
        }
    }

}

customElements.define('my-button', MyButton);