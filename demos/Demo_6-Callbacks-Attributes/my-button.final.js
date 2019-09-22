const template = document.createElement("template");
template.innerHTML = `<button>Klick mich</button>`;

class MyButton extends HTMLElement {
  static get observedAttributes() {
    return ["label"];
  }


  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.buttonElement = this.shadowRoot.querySelector("button");
  }



  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === "label") {
      this.buttonElement.innerText = newValue;
    }
  }
  connectedCallback() {
    console.log("Element is connected to the DOM");
  }
  disconnectedCallback() {
    console.log("Element is disconnected from the DOM");
  }
}

customElements.define("my-button", MyButton);
