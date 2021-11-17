
// Появление/Исчезание кнопки удаления ".productCard--delete" при наведении на карточку товара
    $('.productCard--item').mouseenter(function() {
        $('.item__img').eq($(this).append('<span class="productCard--delete"></span>'));
});
    $('.productCard--item').mouseleave(function() {
        $('.productCard--delete').remove();
});
// -------------------------------------------------------------------

// Активация кнопки после введения в инпут данных
$("input").keyup(function(){
        if ($('input').val() != '') {
        $('.form__button').removeAttr('disabled');
        } else {
            $('.form__button').attr('disabled','disable');
        }
    });
// -------------------------------------------------------------------
function checkForm(el) {

    var formArr = {
        name: el.card__name.value,
        descr: el.card__descriprion.value,
        linnkImg: el.card__img.value,
        price: el.card__price.value
    }
    
    $('.block__productCard_items').append(`<div class="productCard--item" data-price="${formArr.price}"><div class="item__img"><img src="${formArr.linnkImg}" alt=""></div><div class="item__text"><h1>${formArr.name}</h1><p>${formArr.descr}</p><span>${formArr.price} руб.</span></div></div>`);

    console.log(formArr.name);
};



// -------------------------------------------------------------------

// Валидация Формы
// $('#form__button').on("click",function(e) {
//     e.preventDefault();
//     var card__name = $('#card__name').val();
//     var card__descriprion = $('#card__descriprion').val();
//     var card__img = $('#card__img').val();
//     var card__price = $('#card__price').val();
//     var border__clear = [card__name,card__descriprion,card__img,card__price];


//     // Регулярное выражения для проверки ссылок
//     var regEx = /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/;
//     var validLink = regEx.test(card__img);

//     $(".error").remove(); // Удаление всех элементов с классом "error"

//     // Обнуление красной рамки;
//     for(var border = 0; border <= border__clear.length; border++) {
//         if(border == 0) {
//             $('.card__name').css('border', "none"); 
//         }
//         if(border == 1) {
//             $('.card__descriprion').css('border', "none"); 
//         }
//         if(border == 2) {
//             $('.card__img').css('border', "none");
//         }
//         if(border == 3) {
//             $('.card__price').css('border', "none");
//         }
//     }

//     // Проверка Названия
//     if (card__name.length< 6) {
//         $('#card__name').after('<span class="error" style="top: 30px; left: 120px; width: 4px; height: 4px; border-radius: 4px; background-color: #FF8484;"></span>');
//         $('#card__name').after('<span class="error" style="top: 88px; left: 24px; color: #FF8484;">Не менее 6 символов</span>');
//         $('.card__name').css('border', "1px solid #FF8484");  
//     }
//     // Проверка Описания
//     if (card__descriprion.length< 20) {
//         $('#card__descriprion').after('<span class="error" style="top: 100px; left: 98px; width: 4px; height: 4px; border-radius: 4px; background-color: #FF8484;"></span>');
//         $('#card__name').after('<span class="error" style="top: 227px; left: 24px; color: #FF8484;">Не менее 20 символов</span>');
//         $('.card__descriprion').css('border', "1px solid #FF8484");  
//     }
//     // Проверка ссылки
//     if (card__img.length< 1) {
//         $('#card__img').after('<span class="error" style="top: 241px; left: 158px; width: 4px; height: 4px; border-radius: 4px; background-color: #FF8484;"></span>');
//     } 
//     // Валидация ссылки
//     if (!validLink) {
//         $('#card__img').after('<span class="error" style="top: 298px; left: 24px;">Поле является обязательным</span>');
//         $('.card__img').css('border', "1px solid #FF8484");   
//         }
//     // Проверка цены 
//     if (card__price.length< 1) {
//         $('#card__price').after('<span class="error" style="top: 310px; left: 77px; width: 4px; height: 4px; border-radius: 4px; background-color: #FF8484;"></span>');
//         $('#card__name').after('<span class="error" style="top: 364px; left: 24px; color: #FF8484;">Укажите цену товара</span>');
//         $('.card__price').css('border', "1px solid #FF8484");  
//     }
// });
// -------------------------------------------------------------------



    
// СОРТИРОВКА КАРТОЧЕК ПО ЦЕНЕ

    // родительскому эленту пропиши в дата-атрибут data-price='10000'
    // собери все элементы в массив и отсортируй по data-price (через жс)


 


    var defaults = $('.productCard--item');
$('#productCard__sort').on('change', function(){

    if(this.options[this.selectedIndex].value == '0'){
        return defaults.appendTo($('.block__productCard_items'));
    }
    if(this.options[this.selectedIndex].value == '1') {
       $('.productCard--item').sort(function (a, b) {

            var contentA =parseInt( $(a).data('price'));
            var contentB =parseInt( $(b).data('price'));
            return (contentA < contentB) ? -1 : (contentA > contentB) ? 1 : 0;
         }).appendTo($('.block__productCard_items'));
    }
    if(this.options[this.selectedIndex].value == '2') {
        $('.productCard--item').sort(function (a, b) {

            var contentA =parseInt( $(a).data('price'));
            var contentB =parseInt( $(b).data('price'));
            return (contentA > contentB) ? -1 : (contentA < contentB) ? 1 : 0;
        
        }).appendTo($('.block__productCard_items'));
    }

});
// $(function(){
// console.log('Jquery work');
// });
