export class ModalWindow {
    constructor(classWindow = 'overlay', classClose = 'overlay-close'){
        this._className = className;
        this._window = document.querySelector(`.${className}`);
        this._closeBtn = document.querySelector(`.${classClose}`);
        this._openModalWindow = this._openModalWindow.bind(this);
        this._closeModalWindow = this._closeModalWindow.bind(this);
        this._closeFromAnywere = this._closeFromAnywere.bind(this);
    }

    _openModalWindow(){
        this._window.style.display = "block";
        document.body.style.overflow = "hidden";
    }
    
    _closeModalWindow(){
        this._window.style.display = "none";
        document.body.style.overflow = "";
    }
    
    _closeFromAnywere(event){
        if(event.target.classList.contains(this._className)){
            this._closeModalWindow();
        }
    }

    apply(selector){
        let btns = document.querySelectorAll(selector);

        for(let i = 0; i < btns.length; i++){
            btns[i].addEventListener('click', this._openModalWindow);
        }
        
        if(this._closeBtn != null){
            this._closeBtn.addEventListener('click', this._closeModalWindow);
        }
        this._window.addEventListener('click', this._closeFromAnywere);
    }
}
