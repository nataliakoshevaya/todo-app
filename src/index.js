import "./styles/_style.scss";

import TodoList from './components/TodoList';

class App {
    constructor() {
        this.todoList = todoList;
    }

    addElement() {
        const todoInput = document.querySelector('#todos__input');
        const todoBtn = document.querySelector('#todos__btn');
        const todoList = new TodoList(this.todoList, todoInput, todoBtn);

        todoList.renderList();
        todoList.rerenderList();
    }
}

const todoList = document.querySelector('#todos_list');

const app = new App(todoList);
app.addElement();



