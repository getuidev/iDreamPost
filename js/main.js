$(document).ready(function () {
    $(window).scroll(function () {
        var sticky = $('.main-header'),
            scroll = $(window).scrollTop();
        if (scroll >= 100) {
            sticky.addClass('sticky');
        } else {
            sticky.removeClass('sticky');
        }
    });
    $("#toggleNav").click(function () {
        $("#megaMenu").slideToggle("slow", function () {
            if ($("#megaMenu").is(":visible")) {
                $("body").addClass("openMenu");
            } else {
                $("body").removeClass("openMenu");
            }
        });
    });
    if (screen.width <= 767) {
        $(".listItems li").click(function () {
            if ($(this).hasClass("active")) {
                $(".listItems li").removeClass("active")
            } else {
                $(".listItems li").removeClass("active");
                $(this).addClass("active");
            }
        });
    }
    setTimeout(function () {
        $(window).scroll(function () {
            $(this).scrollTop() > 100 ? $(".scrolltop").fadeIn() : $(".scrolltop")
                .fadeOut()
        }), $(".scrolltop").click(function () {
            return $("html, body").animate({
                scrollTop: 0
            }, 600), !1
        })
    }, 500)
});