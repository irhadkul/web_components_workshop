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
        const shadowRoot = this.attachShadow({ mode: 'open' });


        shadowRoot.appendChild(style);
        shadowRoot.appendChild(imgElement);
        shadowRoot.appendChild(divHolder);
    }
}
window.customElements.define("dw-contact-card", DWContactCard);
