window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    // Modal window

    class ModalWindow{
        constructor(className = 'overlay'){
            this._className = className;
            this._window = document.querySelector(`.${className}`);
            this._closeBtn = document.querySelector(".popup-close");
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

            this._closeBtn.addEventListener('click', this._closeModalWindow);
            this._window.addEventListener('click', this._closeFromAnywere);
        }
    }

    // let modalWindow = new ModalWindow('overlay');
    let modalWindow = new ModalWindow();
    modalWindow.apply('.more');
    modalWindow.apply('.description-btn');
});