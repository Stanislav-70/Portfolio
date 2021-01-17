$(document).ready(function () {

	$('[data-modal=consultation]').on('click', function () {
		$('.modal, #consultation').fadeIn('slow');
	});
	$('.modal__close').on('click', function () {
		$('.modal, #consultation').fadeOut('slow');
	});

	function validateForms(form) {
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				email: {
					required: true,
					email: true
				},
				text: {
					required: true,
					minlength: 5
				},
				check: {
					required: true
				}
			},
			messages: {
				name: {
					required: "Пожалуйста, введите свое имя",
					minlength: jQuery.validator.format("Введите не менее {0} символов!")
				},
				email: {
					required: "Пожалуйста, введите свою почту",
					email: "Неправильно введен адрес почты"
				},
				text: {
					required: "Пожалуйста, введите сообщение",
					minlength: jQuery.validator.format("Введите не менее {0} символов!")
				},
				check: {
					required: "Пожалуйста, поставьте галочку"
				}
			}
		});
	}

	validateForms('#consultation-form');


	$('form').submit(function (e) {
		e.preventDefault();

		if (!$(this).valid()) {
			return;
		}

		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function () {
			$(this).find("input").val("");
			$('#consultation').fadeOut();
			$('.modal, #consultation-form').fadeIn('slow');

			$('form').trigger('reset');
		});
		return false;
	});
});
