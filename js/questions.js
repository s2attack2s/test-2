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

    let elPlus = el.find('.icon-plus');
    let elMinus = el.find('.icon-minus');

    if (elPlus.is(':visible')) {
        elPlus.hide();
        elMinus.show();
    } else if (elMinus.is(':visible')) {
        elMinus.hide();
        elPlus.show();
    }

    el.not(this).find('.view-less').hide();
    el.not(this).find('.view-more').show();
    el.toggleClass('d-block');
    el.next().slideToggle();
    el.not(this).removeClass('d-block');
    $('.question-box_content').not(el.next()).slideUp();
});
