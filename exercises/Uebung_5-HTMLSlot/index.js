/**
 * TODO 1. In index.html in my-contact-card slots definieren die die definierte Plathalter in Template befülen
 * - In template sind die Slots als <slot name="test"></slot> zu schreiben
 * - In dem COntent von my-contact-card sid das Elemente die slot asl Attribut haben
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
            display: block;
        }

    </style>

    <div class="contact-card">
        <img src="./images/img2.png"/>
        <div class="content">
            <h1>Max Mustermann</h1>
            <p class="mail">max.mustermann@example.com</p>
            <div class="details">
                <p>Max Mustermann ist Software Engineer bei adesso AG 
                und befasst sich seit über 15 Jahren mit Entwicklung von Webanwendungen.</p>
            </div>
        </div>
    </div>

`;
/**
 * 1. Das Template Element mit Slots Erweitern
 */

class MyContactCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("my-contact-card", MyContactCard);
