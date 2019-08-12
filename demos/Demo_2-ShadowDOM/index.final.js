class MyComponent extends HTMLElement {

    constructor() {
        super();
        const pElement = document.createElement('p');
        pElement.textContent = "p-Element im Shadow DOM";
        // Shadow DOM
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(pElement);
    }
}

customElements.define("my-component", MyComponent);