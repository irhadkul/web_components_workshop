const template = document.createElement("template");

template.innerHTML = `
<style>
    p {
        color: green;
    }
</style>
<p>
<slot name="text">
   Platzhalter
</slot>
</p>
`;
class DWInput extends HTMLElement {
  constructor() {
    super();
    const templateContent = template.content;
    // Shadow DOM
    const shadowRoot = this.attachShadow({ mode: "open" });
    // cloneNode is important because we want to make template reusable
    shadowRoot.appendChild(templateContent.cloneNode(true));
  }
}
customElements.define("dw-input", DWInput);
