
class DWInput extends HTMLElement {
    constructor() {
        super()
        this.style.color = 'red';
        this.style.width = '400px';
        this.style.fontSize = '40px';
        this.style.border = '1px black solid';
        this.textContent = "Hallo, ich bin ein Custom Element";
    }
}
window.customElements.define("dw-input", DWInput);