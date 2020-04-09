
$(window).on('load', function() {
    $('.jumbotron .display-4').addClass('muncul');
    $('.jumbotron p').addClass('muncul');
});

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    
    if (wScroll > 80) {
        $('.navbar').css('padding', '0');
    } else {
        $('.navbar').css('padding', '8px 24px');
    }

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, ' + wScroll/2 +'%)'
    });
    $('.jumbotron p').css({
        'transform' : 'translate(0px, ' + wScroll/1.2 +'%)'
    });

    if (wScroll > $('.about-us').offset().top - 250) {
        $('.about-us p').addClass('showbox');
        $('.about-us .box').each(function(i) {
            setTimeout(function() {
                $('.about-us .box').eq(i).addClass('muncul');
            }, 400 * (i+1));
        });
    } else {
        $('.about-us .box').removeClass('muncul');
        $('.about-us p').removeClass('showbox');
    }

    if(wScroll > $('.services').offset().top - 370) {
        $('.services .thumbnail').each(function(i) {
            setTimeout(function() {
                $('.services .thumbnail').eq(i).addClass('muncul'); 
            }, 400 * (i+1));
        });
    } else {
        $('.services .thumbnail').removeClass('muncul');
    }

    // if (wScroll > $('.excellence').offset().top - 300) {
    //     setTimeout(function() {
    //         $('.box-left').addClass('box-muncul');
    //         $('.box-right').addClass('box-muncul');
    //     }, 300);
        
    // } else {
    //     $('.box-left').removeClass('box-muncul');
    //     $('.box-right').removeClass('box-muncul')
    // }

    if (wScroll > $('.excellence').offset().top - 300) {
        $('.excellence .box').each(function (i) {
            setTimeout(function() {
                if (i % 2 != 0) {
                    $('.box-right').addClass('box-muncul');
                } else {
                    $('.box-left').addClass('box-muncul');
                }
            }, 300 * (i+1));
        });
        // setTimeout(function () {
        //     $('.box-left').addClass('box-muncul');
        //     $('.box-right').addClass('box-muncul');
        // }, 300);

    } else {
        $('.box-left').removeClass('box-muncul');
        $('.box-right').removeClass('box-muncul')
    }
});

$('.customer-logos').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 3
        }
    }, {
        breakpoint: 520,
        settings: {
            slidesToShow: 2
        }
    }]
});

$('.page-scroll').on('click', function(e) {
    $(this).addClass('active').siblings().removeClass('active');

    var tujuan = $(this).attr('href');
    var elemenTujuan = $(tujuan);

    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 75
    }, 1250, 'easeInOutExpo');

    e.preventDefault();
});