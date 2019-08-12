/**
 * 01. TODO - Ein Klassenobjekt mit dem Namen MyContactCard definieren.
 * Im constructor des Elements die folgende HTML-Struktur nachbilden:
 * 
 * <div class="contact-card">
 *       <img src="./img2.png"/>
 *       <div class="content">
 *         <h1>Max Mustermann</h1>
 *         <p class="mail">max.mustermann@example.com</p>
 *         <button>Profilbeschreibung</button>
 *         <div class="details">             
 *             <p>Max Mustermann ist Software Engineer ... </p>
 *         </div>
 *     </div>
 * </div>
 * 
 * HINWEISE:
 * const h1El = document.createElement('h1') - erzeugt ein h1-Element
 * this.appendChild(h1El) - fügt das h1-Element als Kind-Element hinzu
 * 
 * h1Element.textContent = 'Inhalt'; - Text hinzufügen
 * divElement.classList.add('my-css-class'); - CSS-Klasse hinzufügen
 *
 * 02. TODO - customElements.define() nutzen, um das neue Element zu registrieren
 * 03. TODO - Das JavaScript des Custom Elements in die index.html als ES-Module einbinden und den neuen HTML-Tag verwenden
 */
