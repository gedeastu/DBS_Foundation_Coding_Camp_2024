
//for save the value from todoObject variable from addTodo() function
const todos = [];

//This custom event is used as a basic benchmark when there is a change in data in the todos variable
const RENDER_EVENT = 'render-todo';

document.addEventListener('DOMContentLoaded',function() {
    const submitForm = document.getElementById('form')
    submitForm.addEventListener('submit',function (event) {
        event.preventDefault();
        addTodo();
    });
});

function addTaskToCompleted(todoId){
    const todoTarget = findTodo(todoId);
    if (todoTarget == null) {
        return
    }
    todoTarget.isCompleted = true
    document.dispatchEvent(new Event(RENDER_EVENT));
}

function findTodo(todoId) {
    for (const todoItem of todos) {
        if (todoItem.id === todoId) {
          return todoItem;
        }
      }
    return null;
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

    if (todoObject.isCompleted) {
        const undoButton = document.createElement('button')
        undoButton.classList.add('undo-button');

        undoButton.addEventListener('click',function(){
            undoTaskFromCompleted(todoObject.id);
        });

        const trashButton = document.createElement('button')
        trashButton.classList.add('trash-button')

        trashButton.addEventListener('click', function() {
            removeTaskFromCompleted(todoObject.id)
        })

        container.append(undoButton,trashButton)
    } else {
        const checkButton = document.createElement('button')
        checkButton.classList.add('check-button')

        checkButton.addEventListener('click',function() {
            addTaskToCompleted(todoObject.id)
        })
        container.append(checkButton)
    }

    return container;
}

//this function for adding todo item from form
function addTodo() {
    const textTodo = document.getElementById('title').value;
    const timestamp = document.getElementById('date').value;

    //Generate unique id variable
    const generateID = generateId();
    //Generate todo item object
    const todoObject = generateTodoObject(generateID,textTodo,timestamp,false);

    //for push todos[] with todoObject variable
    todos.push(todoObject);

    document.dispatchEvent(new Event(RENDER_EVENT));

    document.addEventListener(RENDER_EVENT,function(){
        //console.log(todos)

        //variable to take element with todos ID 
        const uncompletedTODOList = document.getElementById('todos');
        //in void innnerHTML 
        uncompletedTODOList.innerHTML = "";

        //doing looping of todos as a loop range
        for(const todoItem of todos){
            //make todoElement variable with makeTodo() as a value with parameter is todoItem
            const todoElement = makeTodo(todoItem)
            
            if (!todoElement.isCompleted) {
             //use append() on uncompletedTODOList with value is todoElement
            uncompletedTODOList.append(todoElement)   
            }
        }
    })

}

//For unique todo item
function generateId() {
    return +new Date();
}

//This is modal for todos[] item value
function generateTodoObject(id, task, timestamp, isCompleted) {
    return {
      id,
      task,
      timestamp,
      isCompleted
    }
}