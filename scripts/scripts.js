
//Валидатор формы
const validation = new JustValidate('#about-us__form', {
    errorFieldCssClass: 'is-invalid',
    errorLabelCssClass: 'is-label-invalid',
    errorLabelStyle: {
    color: '#D52B1E',
    textDecoration: 'underlined',
    },
    focusInvalidField: true,
    lockForm: true,
    
    errorContainer: '.errors-container',
});

validation
.addField('#form__message', [
    {
    validator: (value) => {
        return value[0] !== undefined;
    },
    errorMessage: 'Оставьте сообщение',
    },
])
.addField('#form__name', [
    {
    rule: 'required',
    errorMessage: 'Ошибка',
    },
    {
    rule: 'minLength',
    value: 2,
    errorMessage: 'Ошибка',
    },
    {
    rule: 'maxLength',
    value: 30,
    errorMessage: 'Ошибка',
    },
    {
    rule: 'customRegexp',
    value: /^[а-яА-ЯёЁa-zA-Z ]+$/,
    errorMessage: 'Ошибка',
    },
])
.addField('#form__email', [
    {
    rule: 'required',
    errorMessage: 'Ошибка',
    },
    {
    rule: 'email',
    errorMessage: 'Ошибка',
    },
])

.addField('#form__data-processing', [
    {
    rule: 'required',
    errorMessage: 'Вы не дали своего согласия',
    },
])

.onSuccess((event) => {
    document.getElementById("about-us__form").submit();
});

      
/*Слайдер*/
const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    slidesPerView: 2,
    loop: true,
    spaceBetween: 20,
    breakpoints: {
        1301: {
            slidesPerView: 4,
        },

        1010:{
            slidesPerView: 2,
        },

        690: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


//Выпадающий список
const element = document.querySelector('#selectCustom');
const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: "",
    shouldSort: false, 
});

//Убирает повтор из вариантов селекта
document.querySelector('.choices__list--single').addEventListener('click', function() {
    document.querySelector('.choices__list--dropdown').querySelectorAll('.choices__item ').forEach(function(el) {
        if (document.querySelector('.choices__list--single').querySelector('.choices__item--selectable').textContent === el.textContent) {
            el.style.display = 'none';
        }
    })
})                                    

//Открытие строки поиска
document.querySelector('.header__search').addEventListener('click', function() {
    document.querySelector('.header__search-field').classList.toggle('hidden');
}) 

//Включение проигрывателя в header
document.querySelectorAll('.btn__live').forEach(function(el) {
    el.addEventListener('click', function() {
        this.querySelector('.btn-pause').classList.toggle('btn__live--active');
    })
})      

//Включение проигрывателя в podcasts
document.querySelectorAll('.btn__music-play').forEach(function(el) {
    el.addEventListener('click', function() {
        this.querySelector('.btn-pause').classList.toggle('btn__live--active');
        this.querySelector('.btn-play').classList.toggle('btn__live--active');
    })
})    

//Открытие еще подкастов по кнопке "Ещё подкасты"
document.querySelector('.btn__podcasts').addEventListener('click', function() {
    document.querySelectorAll('.podcasts__item').forEach(function(e) {
        e.classList.remove('podcasts--hidden');
    })
    this.classList.add('hidden');
})

//Изменение счётчиков лайков в записях
document.querySelectorAll('.btn__social').forEach(function(el) {
    el.addEventListener('click', function() {
        let count = this.querySelector('.social__attributes');
        if (this.classList.contains('increace') !== true) {
            count.textContent = parseInt(count.innerText, 10) + 1;
            this.classList.add('increace');
        } else {
            count.textContent = parseInt(count.innerText, 10) - 1;
            this.classList.remove('increace');
        }    
    })
})

//Карточки в разделе Гости
document.querySelectorAll('.btn__nav-item').forEach(function(el) {
    el.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.guests__path;
        document.querySelectorAll('.btn__nav-item').forEach(function(btn){
            btn.classList.remove('btn__nav-item--active');
        });
        e.currentTarget.classList.add('btn__nav-item--active'); 
        document.querySelectorAll('.accordion__content').forEach(function(element) {
            element.classList.remove("accordion__content--active");
        });
        document.querySelector(`[data-guests__content="${path}"]`).classList.add("accordion__content--active");
    })
})

//Работа бургер-меню
document.querySelector('.burger-menu__btn').addEventListener('click', function(){
    this.classList.toggle('burger-menu__btn--active');
    this.classList.toggle('burger-menu__btn--close');
    document.querySelector('.header__nav').classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll');
    if(window.innerWidth <= 690){
        document.querySelector('.sub__nav').classList.toggle('sub__nav--active');
    }
})

//Закрытие бургер-меню при переходе по ссылке
document.querySelectorAll('.nav__link').forEach(function(el){
    el.addEventListener('click', function(){
        document.querySelector('.burger-menu__btn').classList.remove('burger-menu__btn--active');
        document.querySelector('.burger-menu__btn').classList.add('burger-menu__btn--close');
        document.querySelector('.header__nav').classList.remove('header__nav--active');
        document.body.classList.remove('stop-scroll');
        if(window.innerWidth <= 690){
            document.querySelector('.sub__nav').classList.remove('sub__nav--active');
        }
    })
})

//Открытие еще подкастов по кнопке "Ещё подкасты" на мобильной версии
document.querySelector('.btn__live-mobile').addEventListener('click', function(){
    this.classList.toggle('btn__live-mobile--open');
    document.querySelectorAll('.btn__live').forEach(function(el){
        el.classList.toggle('btn__live--open');
    })
    document.querySelector('.header__sub').classList.toggle('header__sub--open');
    document.querySelector('.hero').classList.toggle('hero--open');
})