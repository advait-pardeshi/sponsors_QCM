$(window).on('load', function () {
    initSmoothScrolling('#sponser .block', 'smoothscroll');
});

function initSmoothScrolling(container, animation) {

    var sliderWidth = 0;
    var animationWidth = 0;
    var sliderHeight = $('.first', container).outerHeight(false);

    $('.sponser-img', container).each(function () {
        animationWidth += $(this).outerWidth(false);
    });
    var slidesVisible = $(container).width() / $('.first', container).outerWidth(false);
    slidesVisible = Math.ceil(slidesVisible);

    var slidesNumber = $('.sponser-img', container).length;
    var speed = slidesNumber * 4;

    $('.sponser-img', container).slice(0, slidesVisible).clone().appendTo($('.animation', container));

    $('.sponser-img', container).each(function () {
        sliderWidth += $(this).outerWidth(false);
    });

    $('.animation', container).css({
        'width': sliderWidth,
        'height': sliderHeight
    });

    $("<style type='text/css'>@keyframes " + animation + " { 0% { margin-left: 0px; } 100% { margin-left: -" + animationWidth + "px; } } " + $('>div>div:first-of-type', container).selector + " { -webkit-animation: " + animation + " " + speed + "s linear infinite; -moz-animation: " + animation + " " + speed + "s linear infinite; -ms-animation: " + animation + " " + speed + "s linear infinite; -o-animation: " + animation + " " + speed + "s linear infinite; animation: " + animation + " " + speed + "s linear infinite; }</style>").appendTo("head");
    var cl = $(container).attr("class");
    $(container).removeClass(cl).animate({
        'nothing': null
    }, 1, function () {
        $(this).addClass(cl);
    });
}