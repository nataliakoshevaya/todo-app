import todoApi from '../api/TodoApi';

export default class TodoForm {
    constructor(todoInput) {
        this.todoInput = todoInput;
    }
    
    async createItemList() {
        if (this.todoInput.value === "") {
            return
        };
    
        await todoApi.createItem({
            title: this.todoInput.value,
            isCompleted: false
        });

        this.todoInput.value = "";
    }
}

const todoInput = document.querySelector('#todos__input');

export const todoForm =  new TodoForm(todoInput);