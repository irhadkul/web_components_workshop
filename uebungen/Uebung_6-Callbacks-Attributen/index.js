/**
 * 01. TODO - static get observedAttributes implementieren und als Rückgabewert ein Array mit den Strings 'full-name' und 'mail' zurückgeben.
 * 02. TODO - get und set Methoden für 'full-name' und 'mail' definieren
 *     In den setter und getter Methoden mit internen Properties arbeiten, um infinite-Loops zu vermeiden
 *     Die Internen Properties beginnen nach Konvention mit einem "_". Zum Beispiel get something() { return this._something; }
 * 03. TODO - attributeChangedCallback Methode implementieren. Sie soll auf Attributenänderungen reagieren und entsprechend die Properties "full-name" und "mail" setzen
 *     attributeChangedCallback(attributeName, oldValue, newValue)
 * 04. TODO - In der methode toggleDetails() ein CustomEvent dispatchen und dabei den Status der Sichtbarkeit als detail mitsenden.
 *     this.dispatchEvent(new CustomEvent('eventName', { data: yourData }));
 * */

const template = document.createElement("template");
template.innerHTML = `

<style>
:host {
    --primary-color: #5965BF;
    font-family: sans-serif;
    font-size: 20px;
}

.contact-card {
    border: 2px solid var(--primary-color);
    display: flex;
    padding: 2rem;
    background: white;
    border-radius: 6px;
    margin-bottom: 1rem;
}

img {
    border-radius: 50%;
    width: auto;
    height: 100px;
    border: 3px solid var(--primary-color);
}

.content {
    flex-grow: 1;
    margin-left: 1rem;
}

h1 {
    font-size: 1em;
    font-weight: bold;
    margin: 0 0 0.5rem;
    color: var(--primary-color);
}

p, .details {
    font-size: 0.8em;
    color: gray;
    margin: 1rem 0;
}

.details {
    display: none;
}

button {
    font-size: 0.8em;
    text-transform: uppercase;
    padding: 0.5rem 0.75rem;
    background: white;
    border: 2px solid var(--primary-color);
    border-radius: 4px;
    color: var(--primary-color);
    transition: all 200ms ease-out;
    cursor: pointer;
}

button:hover {
    background: var(--primary-color);
    color: white;
}

</style>

    <div class="contact-card">
        <img src="./images/img2.png"/>
        <div class="content">
            <h1>Max Mustermann</h1>
            <p class="mail">max.mustermann@example.com</p>
            <button>Profilbeschreibung</button>
            <div class="details">
                <slot name="details">
                    <p>Max Mustermann ist Software Engineer bei adesso AG 
                    und befasst sich seit über 15 Jahren mit Entwicklung von Webanwendungen.</p>
                </slot>
            </div>
        </div>
    </div>

`;

class MyContactCard extends HTMLElement {
    
    constructor() {
        super();
        
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
       
        this.detailsElement = this.shadowRoot.querySelector('.details');
        this.buttonElement = this.shadowRoot.querySelector('button');
        this.buttonElement.addEventListener('click', () => this.toggleDetails());
    }

    toggleDetails() {
        const visible = this.detailsElement.style.display === 'block';
        this.detailsElement.style.display = visible ? 'none' : 'block';
    }
}

customElements.define("my-contact-card", MyContactCard);
