import loader from '../components/Loader';

class TodoApi {
    constructor() {
        this.url = 'http://localhost:5000/posts';
    }

    async getList() {
        try {
            loader.setLoader();
            const response = await fetch(this.url);
            const data = await response.json();
            return data
            
        } catch (e) {
            console.error('Error: ', e);
        } finally {
            loader.removeLoader();
        }
    }

    async createItem(data) {
        try {
            loader.setLoader();
            const response = await fetch(this.url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            return response;
        } catch (e) {
            console.error('Error: ', e);
        } finally {
            loader.removeLoader();
        }
    }

    async deleteItem(id) {
        try {
            loader.setLoader();
            const response = await fetch(`${this.url}/${id}`, {
                method: 'DELETE'
            })

            return response 
        } catch (e) {
            console.error(e)
        } finally {
            loader.removeLoader();
        }
    }

    async updateItemStatus(data, id) {
        try {
            loader.setLoader();
            const response = await fetch(`${this.url}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            return response;
        } catch (e) {
            console.log(e)
        } finally {
            loader.removeLoader();
        }
    }
}

const todoApi = new TodoApi();

export default todoApi;
