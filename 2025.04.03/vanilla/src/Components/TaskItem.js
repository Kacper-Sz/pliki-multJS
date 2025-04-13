
const taskItemTemplate = document.getElementById('taskTemplate');

class TaskItem extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ 'mode' : 'open' }); 
        // open bedzie pozwalal na dostanie sie do elementu z zewnątrz
        // closed dostanie tylko z poziomu kalsy  

        this._shadowRoot.appendChild(taskItemTemplate.content.cloneNode(true)); // mozemy tylko z kontetu korzystac 
        // clonde node - klonuje elementy z szablonu i dodaje do shadowRoot klonuje gleboko a shadow copy plytko

        this._ID = undefined;

    }

    onStatusChangeClick = () => {
        const found = tasks.find(x=> x.id === this._ID)
    
        if (found) {
            found.isDone = !found.isDone;
        }

        this._shadowRoot.querySelector('.taskItemStatus').innerText = found.isDone ? 'done' : 'pending';

    }

    // musi sie zadziac po konstruktorze
    connectedCallback() {
        this._shadowRoot.querySelector('.taskItemContent').innerHTML = this.getAttribute('task');

        this._ID = this.getAttribute('id');
        console.log(this._ID);

        this._shadowRoot.querySelector('.change_status_btn').onclick = () => {
            this.onStatusChangeClick();
        }

        this._shadowRoot.querySelector('.remove_task_btn').onclick = () => {
            // tu powinna byc inna funkcja tak jak powyzej ale robimy tutaj bo szybciej
            // slice() i splice()
            const index = tasks.findIndex(x=> x.id === this._ID);
            tasks.splice(index, 1);
            localStorage.setItem('mytasks', JSON.stringify(tasks))

            this.remove();
        }
    }

}

window.customElements.define('task-item', TaskItem);