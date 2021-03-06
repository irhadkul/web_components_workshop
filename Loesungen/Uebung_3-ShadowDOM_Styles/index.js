class DWContactCard extends HTMLElement {
    constructor() {
        super();
        const pElement = document.createElement('p');
        const imgElement = document.createElement('img');
        const divHolder = document.createElement('div');
        // Style
        const style = document.createElement('style');
        style.textContent = `img { max-width:200px; }`;

        imgElement.src = '../global/images/img1.png';
        pElement.textContent = "Name: Alex Müller";
        divHolder.appendChild(pElement);

        // Shadow DOM
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(imgElement);
        this.shadowRoot.appendChild(divHolder);
    }
}
window.customElements.define("dw-contact-card", DWContactCard);
