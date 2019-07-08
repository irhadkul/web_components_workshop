class DWContactCard extends HTMLElement {
    constructor() {
        super();
        const pElement = document.createElement('p');
        const imgElement = document.createElement('img');
        const divHolder = document.createElement('div');

        imgElement.src = '../global/images/img1.png';
        pElement.textContent = "Name: Alex Müller";

        divHolder.appendChild(pElement);

        // Shadow DOM
        const shadowRoot = this.attachShadow({ mode: 'open' });


        shadowRoot.appendChild(imgElement);
        shadowRoot.appendChild(divHolder);
    }
}
window.customElements.define("dw-contact-card", DWContactCard);
