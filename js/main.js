function scroll_to(clicked_link, nav_height) {
    var element_class = clicked_link.attr('href').replace('#', '.');
    var scroll_to = 0;

    if (element_class != '.top') {
        element_class += '-container';
        scroll_to = $(element_class).offset().top - nav_height;
    }

    if ($(window).scrollTop() != scroll_to) {
        $('html, body').stop().animate({ scrollTop: scroll_to }, 1000);
    }
}

$(document).ready(function () {
    $('a.scroll-link').on('click', function (e) {
        e.preventDefault();
        scroll_to($(this), $('nav').outerHeight());
    });

    $('.top').backstretch("images/rsz_llama-bg.jpg");
    $('.facts-container').backstretch("images/llama-dusk.png");

    // carousel
    $('#myTab').tab('show');
    $('.nav-tabs a').click(function () {
        $('#myTab').tab('show');
    });

    $('a[data-toggle="tab"]').on('shown.bs.tab', function () {
        $('.facts-container').backstretch("resize");
    });

    // Initialise WoW
    new WOW().init();
});