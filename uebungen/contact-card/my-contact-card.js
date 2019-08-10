const template = document.createElement('template');
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
        <img src="./img2.png"/>
        <div class="content">
            <h1>Max Mustermann</h1>
            <p class="mail">max.mustermann@example.com</p>

            <button>Profilbeschreibung</button>
            <div class="details">
                <slot>
                    <p>Max Mustermann ist Software Engineer bei adesso AG 
                    und befasst sich seit über 15 Jahren mit Entwicklung von Webanwendungen.</p>
                </slot>
            </div>
        </div>
    </div>

`;

class MyContactCard extends HTMLElement {

    static get observedAttributes() {
        return ['full-name', 'mail'];
    }

    set fullName(value) {
        this._fullName = value;
        this.fullNameElement.innerText = this._fullName;
    }

    get fullName() {
        return this._fullName;
    }

    set mail(value) {
        this._mail = value;
        this.mailElement.innerText = this._mail;
    }

    get mail() {
        return this._mail;
    }

    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.fullNameElement = this.shadowRoot.querySelector('h1');
        this.mailElement = this.shadowRoot.querySelector('.mail');
        this.detailsElement = this.shadowRoot.querySelector('.details');
        this.buttonElement = this.shadowRoot.querySelector('button');
        
        this.buttonElement.addEventListener('click', () => this.toggleDetails());
    }

    toggleDetails() {
        const visible = this.detailsElement.style.display === 'block';
        this.detailsElement.style.display = visible ? 'none' : 'block';
        this.dispatchEvent(new CustomEvent('toggle', { detail: visible }));
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName === 'full-name') {
            this.fullName = newValue;
        } else if (attrName === 'mail') {
            this.mail = newValue;
        }
    }

}

customElements.define('my-contact-card', MyContactCard);

