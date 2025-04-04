class Clicker extends HTMLElement {
    constructor() {
        super();
        this.x = 0;
    }

    connectedCallback() {

        const start = this.getAttribute('startVal');

        console.log('startVal', start);

        if (start) {
            this.x = parseInt(start);
        }

        //const shadow = template.contentEditable({ mode: 'open' });

        console.log('ladowanie komponentu na strone');
        const shadow = this.attachShadow({ mode: 'open' });

        const elem = document.createElement('span');
        elem.innerHTML = "Counter value: " + this.x;
        elem.classList.add('number');
        

        const button = document.createElement('button');
        button.innerHTML = 'Click me!';

        button.onclick = () => {
            this.x = this.x + 1;
            console.log(this.x);
            elem.innerText = "Counter value: " + this.x;
        }


        const style = document.createElement('style');
        style.textContent = `
            .number {
                font-size: 2em;
                color: red;
            }
        `;
        
        shadow.appendChild(style); // Append the style to the shadow DOM
        shadow.appendChild(elem);
        shadow.appendChild(button);
    }

    disconnectedCallback() {
        console.log('usuniecie komponentu z strony');
    }

    adoptedCallback() {
        console.log('przeniesienie komponentu');
    }

    attributeChangedCallback(name, old, newVal) {
        console.log(`atrybut ${name} ulegl zmianie z ${old} na ${newVal}`);
    }
}

window.customElements.define('clicker-element', Clicker);