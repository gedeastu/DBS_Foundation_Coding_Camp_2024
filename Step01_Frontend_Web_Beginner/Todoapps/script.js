const todos = [];
const RENDER_EVENT = 'render-todo';

document.addEventListener('DOMContentLoaded',function() {
    const submitForm = document.getElementById('form')
    submitForm.addEventListener('submit',function (event) {
        event.preventDefault();
        addTodo();
    });
});

function addTodo() {
    const textTodo = document.getElementById('title').value;
    const timestamp = document.getElementById('date').value;

    const generateID = generateId();
    const todoObject = generateTodoObject(generateID,textTodo,timestamp,false);

    todos.push(todoObject);

    document.dispatchEvent(new Event(RENDER_EVENT));

    document.addEventListener(RENDER_EVENT,function(){
        console.log(todos)
    })

}

function makeTodo(todoObject){
    const textTitle = document.createElement('h2');
    textTitle.innerText = todoObject.task;

    const textTimestamp = document.createElement('p');
    textTimestamp.innerText = todoObject.timestamp;

    const textContainer = document.createElement('div');
    textContainer.classList.add('inner');
    textContainer.append(textTitle,textTimestamp)

    const container = document.createElement('div');
    container.classList.add('item','shadow');
    container.append(textContainer);
    container.setAttribute('id',`todo-${todoObject.id}`);
    return container;
}

function generateId() {
    return +new Date();
}

function generateTodoObject(id, task, timestamp, isCompleted) {
    return {
      id,
      task,
      timestamp,
      isCompleted
    }
}