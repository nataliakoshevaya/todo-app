import todoApi from '../api/TodoApi';

export default class TodoItem {
    constructor(item) {
        this.item = item;
    }

    createItemTodo() {
        const li = document.createElement('li');
        li.innerHTML = `<p>${this.item.title}</p>`
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        li.append(checkbox);
        checkbox.checked = this.item.isCompleted ? true : false;
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn--remove')
        removeBtn.innerText = 'x';
        li.append(removeBtn);
        this.delete(li, removeBtn);
        this.changeSatus(checkbox);

        return li;
    }

    changeSatus(checkbox) {
        checkbox.addEventListener('change', async () => {
           await todoApi.updateItemStatus({
                ...this.item,
                isCompleted: this.item.isCompleted ? false : true
            }, this.item.id);
        });
    }

    delete(removeBtn) {
        removeBtn.addEventListener('click', (e) => {
            if (e.target.className === 'btn--remove') {
                e.target.parentNode.remove()
                const response = todoApi.deleteItem(this.item.id);

                return response;
            }
        })
    }
}

