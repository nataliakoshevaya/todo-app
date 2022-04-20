class Loader {
    constructor() {
        this.loaderWrapper = document.querySelector('.loader')
        this._classRemoveLoader = '';
        this._classAddLoader = '';
    }

    setClass(classRemoveLoader, classAddLoader) {
        this._classRemoveLoader = classRemoveLoader;
        this._classAddLoader = classAddLoader;
    }

    setLoader() {
        this.loaderWrapper.classList.remove(this._classRemoveLoader);
        this.loaderWrapper.classList.add(this._classAddLoader);
    }

    removeLoader() {
        this.loaderWrapper.classList.add(this._classRemoveLoader);
        this.loaderWrapper.classList.remove(this._classAddLoader);
    }
}

const loader = new Loader();
loader.setClass('hide', 'block');

export default loader;
