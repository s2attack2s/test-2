$('.collapse-item').click(function () {
    let el = $(this).find('.question-item_title');
    var viewMore = el.find('.view-more');
    var viewLess = el.find('.view-less');

    if (viewMore.is(':visible')) {
        viewMore.hide();
        viewLess.show();
    } else if (viewLess.is(':visible')) {
        viewLess.hide();
        viewMore.show();
    }

    let elPlus = $(this).find('.icon-plus');
    let elMinus = $(this).find('.icon-minus');

    let currentDisplay = elPlus.css('display');
    elPlus.css('display', elMinus.css('display'));
    elMinus.css('display', currentDisplay);

    $('.collapse-item').not(this).find('.icon-plus').css('display', 'block');
    $('.collapse-item').not(this).find('.icon-minus').css('display', 'none');

    el.not(this).find('.view-less').hide();
    el.not(this).find('.view-more').show();
    el.toggleClass('d-block');
    el.next().slideToggle();
    el.not(this).removeClass('d-block');
    $('.question-box_content').not(el.next()).slideUp();
});
