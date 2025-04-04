

const taskContent = document.getElementById('newTaskContent');
const appContent = document.getElementById('app_content');



document.getElementById('addNewTaskButton').onclick = () => {
    const content = taskContent.value;

    const task = {
        content: content,
        description: "",
        isDone: false
    };

    const taskItem = document.createElement('task-item');
    console.log(taskItem);

    console.log(taskItem._shadowRoot.querySelector('.taskItemContent'))//.innerHTML = content;

    appContent.appendChild(taskItem);

    taskContent.value = '';
}