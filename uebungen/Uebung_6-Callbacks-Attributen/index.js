/**
 * TODO 1. statische get Methode observedAttributes definieren und als return-Wert 'full-name' und 'mail' definieren
 * - Returnwerte sind als strings in einem Array zu definieren
 * TODO 2. get und set Methoden für 'full-name' und 'mail' definieren
 * - In den setter und getter Methoden soll mit internen Properties zu arbeiten, somit es zu kein infinite-loop kommt.
 * - Die Internen Properties sind nach Konvention mit "_" zu schreiben. Zum Beispiel get something()=> this._something
 * TODO 3. attributeChangedCallback Methode implementieren. Die soll auf Attributenänderungen reagieren und die *entsprechende Properties für "full-name" und mail setzen
 * - attributeChangedCallback(attributeName, oldValue, newValue). attributeName ist Name der Attribut die sich geändert hat, z.B. email. oldValue und newValue sind die Werte.
 * TODO 4. In constructor einen "click" Event Listener fürs button Element setzen und interne methode toggleDetails aufrufen
 * TODO 5. Interne Methode toggleDetails implementieren. Die Methode soll sichtbarkeit von dem "details" Absnicht wechseln.
 * - In Styles ist das Element mit der "details" Klasse initial auf display: none gesetzt. Wechsel der Sichtbarkeit soll mit JS passieren.
 * TODO 6. In der methode toggleDetails einen customEvent dispatchen und dabei das Status der Sichtbarkeit der Details Element auch mitsenden.
 * - Dispatchen der Event erfolgt mit dem Aufruf: this.dispatchEvent(new CustomEvent('eventName', { data: yourData }));
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
  }
}

customElements.define("my-contact-card", MyContactCard);
