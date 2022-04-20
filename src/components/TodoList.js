import TodoItem from './TodoItem';
import todoApi from '../api/TodoApi';
import { todoForm } from './TodoForm';

export default class TodoList {
    constructor(todoWrapper, todoInput, todoBtn) {
        this.todoWrapper = todoWrapper;
        this.todoInput = todoInput;
        this.todoBtn = todoBtn;
    }

    async renderList() {
        const todoList = await todoApi.getList()
        const item = await todoList.forEach(item => {
            const li = new TodoItem(item).createItemTodo();
            this.todoWrapper.appendChild(li);
        })
        return item
    }

    async addNewItems(e) {
        e.preventDefault(); 
        this.todoWrapper.innerHTML = '';
        
        await todoForm.createItemList();
    
        this.renderList();
    }

    rerenderList() {
        this.todoBtn.addEventListener('click', this.addNewItems.bind(this));
    }
}