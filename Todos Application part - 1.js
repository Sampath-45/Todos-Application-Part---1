let todoList = [{
        text: "Learn HTML"
    },
    {
        text: "Learn CSS"
    },
    {
        text: "Learn JavaScript"
    }
];

let todoItemsContainerEl = document.getElementById("todoItemsContainer");

function createAndAddTodo(todo) {

    let todoEl = document.createElement("li");
    todoEl.classList.add("todo-item-container", "d-flex", "flex-row");
    todoItemsContainerEl.appendChild(todoEl);

    let InputEl = document.getElementById("todoUserInput");

    let inputTypeEl = document.createElement("input");
    inputTypeEl.type = "checkbox";
    inputTypeEl.id = "checkboxInput";
    inputTypeEl.classList.add("checkbox-input");
    todoEl.appendChild(inputTypeEl);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoEl.appendChild(labelContainer);


    let labelEl = document.createElement("label");
    labelEl.setAttribute("for", "checkbox");
    labelEl.classList.add("checkbox-label");
    labelEl.textContent = todo.text;
    labelContainer.appendChild(labelEl);

    let delContainer = document.createElement("div");
    delContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(delContainer);

    let delIcon = document.createElement("i");
    delIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    delContainer.appendChild(delIcon);

}

for (let eachTodo of todoList) {
    createAndAddTodo(eachTodo);
}