
const taskItemTemplate = document.getElementById('taskTemplate');

class TaskItem extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ 'mode' : 'open' }); 
        // open bedzie pozwalal na dostanie sie do elementu z zewnątrz
        // closed dostanie tylko z poziomu kalsy  

        this._shadowRoot.appendChild(taskItemTemplate.content.cloneNode(true)); // mozemy tylko z kontetu korzystac 
        // clonde node - klonuje elementy z szablonu i dodaje do shadowRoot klonuje gleboko a shadow copy plytko


    }


    // musi sie zadziac po konstruktorze
    connectedCallback() {
        const field = this.getAttribute('task');
    }



}

window.customElements.define('task-item', TaskItem);