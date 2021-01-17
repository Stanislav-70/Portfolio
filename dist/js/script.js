const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
	menu.classList.add('show');
});

closeElem.addEventListener('click', () => {
	menu.classList.remove('show');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
	lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
	lines[i].style.width = item.innerHTML;

    const modalTrigger = document.querySelector/* All */('.contacts__btn'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('.modal__close');



    // Открываем модальное окно при клике на любую из кнопок с классом '.contacts__btn'. Вместо add  можно использовать toggle. И запрещаем прокрутку.
function openModal() {
	modal.classList.add('show');
	modal.classList.remove('hide');
	document.body.style.overflow = 'hidden';
	// clearInterval(modalTimerId);
}

modalTrigger/* .forEach(btn => {
	btn */.addEventListener('click', openModal);
/* }); */

// Закрываем модальное окно при клике на крестик или подложку. И возвращаем прокрутку.
function closeModal() {
	modal.classList.add('hide');
	modal.classList.remove('show');
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
	if (e.code === "Escape" && modal.classList.contains('show')) {
		closeModal();
	}
});

});