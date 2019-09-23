window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    // Modal window

    let moreBtn = document.querySelector(".more"), // кнопка вызова
        closeBtn = document.querySelector(".popup-close"), // кнопка закрытия
        overlay = document.querySelector(".overlay"); // форма модального окна

    /**
     * Открытие модального окна
     */
    function openModalWindow(){
        overlay.style.display = "block"; // показываем окно
        document.body.style.overflow = "hidden"; // убераем прокрутку сайта
    }

    /**
     * Закрытие модального окна
     * Возвращаем все значение в прежнее состояние
     */
    function closeModalWindow(){
        overlay.style.display = "none";
        document.body.style.overflow = "";
    }

    // вызов модального окна
    moreBtn.addEventListener('click', openModalWindow);
    // закрытие окна через кнопку "крестик"
    closeBtn.addEventListener('click', closeModalWindow);
    // закрытие окна через клик за пределами окна
    overlay.addEventListener('click', function(event){
        if(this == event.target){
            closeModalWindow();
        }
    });
});