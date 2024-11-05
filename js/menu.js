$('.menu-collapse-mobile').click(function () {
    let el = $(this).find('.menu-collapse-title');
    let elPlus = $(this).find('.icon-plus');
    let elMinus = $(this).find('.icon-minus');
    let currentDisplay = elPlus.css('display');
    elPlus.css('display', elMinus.css('display'));
    elMinus.css('display', currentDisplay);
    $('.menu-collapse-mobile').not(this).find('.icon-plus').css('display', 'block');
    $('.menu-collapse-mobile').not(this).find('.icon-minus').css('display', 'none');
    el.not(this).find('.view-less').hide();
    el.not(this).find('.view-more').show();
    el.toggleClass('d-block');
    el.next().slideToggle();
    el.not(this).removeClass('d-block');
    el.next()
        .find('.menu-collapse-item')
        .click(function (e) {
            e.stopPropagation();
        });
});
$('.menu-toggle').click(function () {
    $('.menu-collapse-mobile .menu-collapse-title').removeClass('d-block');
    $('.menu-collapse-mobile .menu-collapse-title').next().slideUp();
    $('.menu-collapse-mobile .icon-plus').css('display', 'block');
    $('.menu-collapse-mobile .icon-minus').css('display', 'none');
});
