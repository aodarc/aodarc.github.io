$('.dropdown_open').click(function (e) {
    e.preventDefault();
    $(this).closest('ul').find('.dropdown_product').slideToggle('fast');
    var arrow = $(this).closest('ul').find('.arrow');

    if ($(arrow).hasClass('glyphicon-chevron-up')) {
        $(arrow).removeClass('glyphicon-chevron-up');
        $(arrow).addClass('glyphicon-chevron-down');
    } else {
        $(arrow).addClass('glyphicon-chevron-up');
        $(arrow).removeClass('glyphicon-chevron-down');
    }
});