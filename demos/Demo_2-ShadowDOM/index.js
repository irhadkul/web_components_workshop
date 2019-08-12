class MyComponent extends HTMLElement {

    constructor() {
        super();
        
        const pElement = document.createElement('p');
        pElement.textContent = "Ein p-Element in einer Web Component";

        this.appendChild(pElement);
    }
}

customElements.define("my-component", MyComponent);