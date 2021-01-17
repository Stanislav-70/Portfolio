window.addEventListener('DOMContentLoaded', function () {

    const modalTrigger = document.querySelectorAll('.contacts__btn'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('.modal__close');



    // Открываем модальное окно при клике на любую из кнопок с классом '.contacts__btn'. Вместо add  можно использовать toggle. И запрещаем прокрутку.
    function openModal() {
        modal.classList.add('active');
        // modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        // clearInterval(modalTimerId);
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    // Закрываем модальное окно при клике на крестик или подложку. И возвращаем прокрутку.
    function closeModal() {
        // modal.classList.add('hide');
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });


    // Закрываем модальное окно клавишей Escape
    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('active')) {
            closeModal();
        }
    });
});

    // Появление мод.окна через 3 с
    // const modalTimerId = setTimeout(openModal, 3000);

    //Блокировка повторного появления мод.окна через 3 сек. 
    // clearInterval(modalTimerId);

    //Открытие мод.окна при прокручивание до конца страницы
//     function showModalByScroll() {
//         if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
//             openModal();
//             window.removeEventListener('scroll', showModalByScroll);
//         }
//     }
//     window.addEventListener('scroll', showModalByScroll);
// });



// Закрываем модальное окно при клике на крестик
// modalCloseBtn.addEventListener('click', () => {
//     modal.classList.remove('active');
//     document.body.style.overflow = '';  
// })

// Закрываем модальное окно при клике на подложку
// modal.addEventListener('click', (e) => {
//     if (e.target === modal) {
//     modal.classList.remove('active');
//     document.body.style.overflow = '';  
//     }
// });

    // Открываем модальное окно при клике на любую из кнопок. Вместо toggle можно использовать add
    // modalTrigger.forEach(btn => {
    //     btn.addEventListener('click', () => {
    //         modal.classList.toggle('active');
    //         document.body.style.overflow = 'hidden';
    //     });
    // });


// Закрываем модальное окно отдельной операцией (не функцией)
// modalTrigger.addEventListener('click', () => {
//     modal.classList.toggle('active');
//     document.body.style.overflow = 'hidden';
// })

// использование data атрибута
// const modalTrigger = document.querySelectorAll('[data-modal]'),


