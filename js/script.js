$(function() {

    // Добавление контейнеров в DOM
    var $calculator = $('<div/>', { id: 'calculator' }).appendTo('body');
    var $input = $('<input/>', { id: 'input' }).appendTo($calculator);
    var $buttons = $('<div/>', { id: 'buttons' }).appendTo($calculator);

    // Добавить кнопки в DOM
    $.each('1234567890.=+-*/←C'.split(''), function() {
        var $button = $('<button/>', {
            text: this.toString(),
            click: function() {
                // Щелчки на кнопках 
                switch ($(this).text()) {
                    //  '=' будет извлекать текущую строку выражения, оценивать ее,
                    // а также запишет результат обратно в поле ввода / вывода.
                    // Вот где происходит фактический расчет и магия 
                    case '=':
                        try { $input.val(eval($input.val())); } catch (e) { $input.val('ERROR'); }
                        // 'C' очистит поле ввода / вывода
                        break;
                    case 'C':
                        return $input.val('');
                        // 'CE' удалит последний символ из поля ввода / вывода
                        break;
                    case '←':
                        return $input.val($input.val().replace(/.$/, ''));
                        // Все остальные кнопки добавят символ в поле ввода / вывода
                        break;
                    default:
                        $input.val($input.val() + $(this).text());
                }
            }
        }).appendTo($buttons);
    });
});
