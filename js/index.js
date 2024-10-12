// BURGER
// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.querySelector(".mobule_header").classList.remove("mobule_header_active")
        document.querySelector(".btn_burger_wrapp").classList.remove("burger_active")
        document.querySelector('.mob_big').classList.remove('mob_big_active');
    }
});

// // Закрыть модальное окно при клике вне его
// document.querySelector("#mobule_header, .mobule_header").addEventListener('click', event => {
//     event._isClickWithInModal = true;
// });
// document.getElementById("mobule_header").addEventListener('click', event => {
//     if (event._isClickWithInModal) return;
//     event.currentTarget.classList.remove('mobule_header_active');
// });

// var burger = document.querySelector('.mobule_header_active');
// document.addEventListener('mousedown', function(e){
//     if(e.target.closest('.mobule_header') == null){
//         document.getElementById("mobule_header").classList.remove("mobule_header_active")
//         document.querySelector('.mob_big').classList.remove('mob_big_active');
//         document.querySelector('.btn_burger_wrapp').classList.remove('burger_active');
//     }
// });

document.querySelector('.btn_burger_wrapp').onclick = function () {
    document.querySelector('.btn_burger_wrapp').classList.toggle('burger_active');
    document.querySelector('.mobule_header').classList.toggle('mobule_header_active');
    document.querySelector('.mob_big').classList.toggle('mob_big_active');
}
document.querySelector('.btn_head_mod').onclick = function () {
    document.querySelector('.form_work').classList.add('form_work_active');
    document.querySelector('.popup_wrapp_work').classList.add('popup_wrapp_work_active');
}
document.querySelector('.btn_head_bur').onclick = function () {
    document.querySelector('.form_work').classList.add('form_work_active');
    document.querySelector('.popup_wrapp_work').classList.add('popup_wrapp_work_active');
}
document.querySelector('.btn_head').onclick = function () {
    document.querySelector('.form_work').classList.add('form_work_active');
    document.querySelector('.popup_wrapp_work').classList.add('popup_wrapp_work_active');
}
// document.querySelector('.btn_footer').onclick = function () {
//     document.querySelector('.form_work').classList.add('form_work_active');
//     document.querySelector('.popup_wrapp_work').classList.add('popup_wrapp_work_active');
// }
document.querySelector('.btn_work').onclick = function () {
    document.querySelector('.form_work').classList.add('form_work_active');
    document.querySelector('.popup_wrapp_work').classList.add('popup_wrapp_work_active');
}
document.querySelector('.btn_close_popup').onclick = function () {
    document.querySelector('.form_work').classList.remove('form_work_active');
    document.querySelector('.popup_wrapp_work').classList.remove('popup_wrapp_work_active');
}
document.querySelector('.btn_procent').onclick = function () {
    document.querySelector('.form_work2').classList.add('form_work_active');
    document.querySelector('.popup_wrapp_work2').classList.add('popup_wrapp_work_active');
}
document.querySelector('.btn_close_popup2').onclick = function () {
    document.querySelector('.form_work2').classList.remove('form_work_active');
    document.querySelector('.popup_wrapp_work2').classList.remove('popup_wrapp_work_active');
}

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("form_work1").classList.remove("form_work_active")
        document.getElementById("popup_wrapp_work").classList.remove("popup_wrapp_work_active")
    }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#form_work1, .form_work").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("form_work1").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('form_work_active');
});

var popup = document.querySelector('.form_work_active');
document.addEventListener('mousedown', function(e){
    if(e.target.closest('.form_work') === null){
        document.getElementById("form_work1").classList.remove("form_work_active")
        document.querySelector('.popup_wrapp_work').classList.remove('popup_wrapp_work_active');
    }
});

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("form_work2").classList.remove("form_work_active")
        document.getElementById("popup_wrapp_work2").classList.remove("popup_wrapp_work_active")
    }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#form_work2, .form_work2").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("form_work2").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('form_work_active');
});

var popup = document.querySelector('.form_work_active');
document.addEventListener('mousedown', function(e){
    if(e.target.closest('.form_work2') === null){
        document.getElementById("form_work2").classList.remove("form_work_active")
        document.querySelector('.popup_wrapp_work2').classList.remove('popup_wrapp_work_active');
    }
});


jQuery(document).ready(function () {

    $(".phone_pop").mask("+7 (999) 999-99-99"); 
    

    jQuery('.popup_btn_sent').click( function() {
    	var form = jQuery(this).closest('form');
    	
    	if ( form.valid() ) {
    		// form.css('opacity','.5');
    		var actUrl = form.attr('action');

    		jQuery.ajax({
    			url: actUrl,
    			type: 'post',
    			dataType: 'html',
    			data: form.serialize(),
    			success: function(data) {
    				form.html(data);
                    form.css('padding', '20px');
                    form.css('border-radius', '5px');
                    form.css('width', '65%');
                    form.css('background-color', '#0c3245');
                    form.find('.popup_status_good').html('Форма отправлена успешно');
                    //$('#myModal').modal('show') // для бутстрапа
    			},
    			error:	 function() {
    			    form.find('.popup_status').html('Серверная ошибка');
    			}
    		});
    	}
    });


});


jQuery(document).ready(function () {

    $(".popup_num2").mask("+7 (999) 999-99-99"); 
    

    jQuery('.popup_btn_sent2').click( function() {
    	var form = jQuery(this).closest('form');
    	
    	if ( form.valid() ) {
    		// form.css('opacity','.5');
    		var actUrl = form.attr('action');

    		jQuery.ajax({
    			url: actUrl,
    			type: 'post',
    			dataType: 'html',
    			data: form.serialize(),
    			success: function(data) {
    				form.html(data);
                    form.css('padding', '20px');
                    form.css('border-radius', '5px');
                    form.css('width', '65%');
                    form.css('background-color', '#0c3245');
                    form.find('.popup_status_good').html('Форма отправлена успешно');
                    //$('#myModal').modal('show') // для бутстрапа
    			},
    			error:	 function() {
    			    form.find('.popup_status').html('Серверная ошибка');
    			}
    		});
    	}
    });


});


let jin = document.getElementById("popup_name");
let jnum = document.getElementById("popup_num");
let jout = document.getElementById("out");
let btn = document.getElementById("btn");


jin.addEventListener('keydown', function(e){
    if (e.key.match(/[0-9]/))
        return e.preventDefault();
  }); // Будет перехватывать все числа при ручном вводе. 
  // Тажке нужна, чтобы replace не сбрасывал каретку, срабатывая каждый раз.

jin.addEventListener('input', function(e){
    // На случай, если умудрились ввести через копипаст или авто-дополнение.
    jin.value = jin.value.replace(/[0-9]/g, "");
});

// btn.addEventListener('click', function(){
//     let val = jin.value;
//     let val1 = jnum.value;
//     if ( val + val1) {
//     jout.textContent = `Мы с вами свяжимся ${val} !`;
//     } else {
//     alert("Введите имя");
//     }
// });


$("body").on("submit", "#skidka", function (event) {
    event.preventDefault();
    var form = $(this);
    $.ajax({
        type: 'POST',
        data: form.serialize() + "&skidka_r=1",
        success: function (data) {
            // $("body").find("input[type='tel']").mask("+7(999)999-99-99");
            $('input[type="tel"]').mask("+7 (X99) 999-99-99", {
                translation: {
                    'X': {
                        pattern: /9/, optional: false
                    }
                }
            });
        }
    })
})






document.querySelector('.name_popup').onclick = function () {
    document.querySelector('.popup_input_text').classList.add('popup_input_text_active');
}
document.querySelector('.phone_pop').onclick = function () {
    document.querySelector('.popup_input_text_sec').classList.add('popup_input_text_active');
}

document.querySelector('.name_popup_1').onclick = function () {
    document.querySelector('.popup_input_text_1').classList.add('popup_input_text_active');
}
document.querySelector('.phone_pop_1').onclick = function () {
    document.querySelector('.popup_input_text_sec_1').classList.add('popup_input_text_active');
}




// // Получаем элементы слайдера
// const slider = document.querySelector('.slider');
// const prevButton = document.querySelector('.prev-button');
// const nextButton = document.querySelector('.next-button');
// const slides = Array.from(slider.querySelectorAll('img'));
// const slideCount = slides.length;
// let slideIndex = 0;

// // Устанавливаем обработчики событий для кнопок
// prevButton.addEventListener('click', showPreviousSlide);
// nextButton.addEventListener('click', showNextSlide);

// // Функция для показа предыдущего слайда
// function showPreviousSlide() {
// slideIndex = (slideIndex - 1 + slideCount) % slideCount;
// updateSlider();
// }

// // Функция для показа следующего слайда
// function showNextSlide() {
// slideIndex = (slideIndex + 1) % slideCount;
// updateSlider();
// }

// Функция для обновления отображения слайдера
// function updateSlider() {
// slides.forEach((slide, index) => {
//     if (index === slideIndex) {
//     slide.style.display = 'block';
//     } else {
//     slide.style.display = 'none';
//     }
// });
// }

// function updateSlider() {
// slides.forEach((slide, index) => {
//     if (index === slideIndex) {
//     slide.classList.remove('slider_img_hidden');
//     } else {
//         slide.classList.add('slider_img_hidden');
//     }
// });
// }

// // Инициализация слайдера
// updateSlider();


// document.addEventListener("DOMContentLoaded", function () {
//     const backToTop = document.getElementById("back-to-top");

//     // Показать/скрыть кнопку при прокрутке страницы
//     window.addEventListener("scroll", function () {
//     if (window.pageYOffset &gt, 300) {
//         backToTop.style.display = "block";
//     } else {
//         backToTop.style.display = "none";
//     }
//     });

//     // Плавная прокрутка при клике на кнопку
//     backToTop.addEventListener("click", function (event) {
//     event.preventDefault();
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     });
// });





