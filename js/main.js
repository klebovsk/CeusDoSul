AOS.init({
    duration: 800,
    easing: 'slide'
});

(function ($) {

    "use strict";

    $(window).stellar({
        responsive: true,
        parallaxBackgrounds: true,
        parallaxElements: true,
        horizontalScrolling: false,
        hideDistantElements: false,
        scrollProperty: 'scroll'
    });


    var fullHeight = function () {
        var _height_bg = 0

        if (window.innerHeight > 500) {
            _height_bg = window.innerHeight;
        } else {
            _height_bg = window.innerHeight + (screen.height - window.innerHeight);
        }

        /* $('.js-fullheight').css('height', $(window).height()); */
        $('.js-fullheight').css('height', _height_bg);
        /* $(window).resize(function () {
            $('.js-fullheight').css('height', $(window).height());
        }); */

    };
    fullHeight();

    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#ftco-loader').length > 0) {
                $('#ftco-loader').removeClass('show');
            }
        }, 1);
    };
    loader();

    // Scrollax
    $.Scrollax();



    // Burger Menu
    var burgerMenu = function () {

        $('body').on('click', '.js-fh5co-nav-toggle', function (event) {

            event.preventDefault();

            if ($('#ftco-nav').is(':visible')) {
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
            }



        });

    };
    burgerMenu();


    var onePageClick = function () {


        $(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
            event.preventDefault();

            var href = $.attr(this, 'href');

            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top - 70
            }, 500, function () {
                // window.location.hash = href;
            });
        });

    };

    onePageClick();


    var goDivisoria = function () {


        $(document).on('click', '.divisoria a[href^="#"], .divisoriaBranca a[href^="#"]', function (event) {
            event.preventDefault();

            var href = $.attr(this, 'href');

            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top - 70
            }, 500, function () {
                // window.location.hash = href;
            });
        });

    };

    goDivisoria();


    /* var carousel = function() {
        $('.home-slider').owlCarousel({
        loop:true,
        autoplay: true,
        margin:0,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        nav:false,
        autoplayHoverPause: false,
        items: 1,
        navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
        responsive:{
          0:{
            items:1
          },
          600:{
            items:1
          },
          1000:{
            items:1
          }
        }
        });
    };
    carousel(); */

    $('nav .dropdown').hover(function () {
        var $this = $(this);
        // 	 timer;
        // clearTimeout(timer);
        $this.addClass('show');
        $this.find('> a').attr('aria-expanded', true);
        // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
        $this.find('.dropdown-menu').addClass('show');
    }, function () {
        var $this = $(this);
        // timer;
        // timer = setTimeout(function(){
        $this.removeClass('show');
        $this.find('> a').attr('aria-expanded', false);
        // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
        $this.find('.dropdown-menu').removeClass('show');
        // }, 100);
    });


    $('#dropdown04').on('show.bs.dropdown', function () {
        console.log('show');
    });

    // scroll
    var scrollWindow = function () {
        $(window).scroll(function () {
            var $w = $(this),
                st = $w.scrollTop(),
                navbar = $('.ftco_navbar'),
                sd = $('.js-scroll-wrap');

            if (st > 150) {
                if (!navbar.hasClass('scrolled')) {
                    navbar.addClass('scrolled');
                }
            }
            if (st < 150) {
                if (navbar.hasClass('scrolled')) {
                    navbar.removeClass('scrolled sleep');
                }
            }
            if (st > 350) {
                if (!navbar.hasClass('awake')) {
                    navbar.addClass('awake');
                }

                if (sd.length > 0) {
                    sd.addClass('sleep');
                }
            }
            if (st < 350) {
                if (navbar.hasClass('awake')) {
                    navbar.removeClass('awake');
                    navbar.addClass('sleep');
                }
                if (sd.length > 0) {
                    sd.removeClass('sleep');
                }
            }
        });
    };
    scrollWindow();



    var counter = function () {

        $('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint(function (direction) {

            if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

                var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
                $('.number').each(function () {
                    var $this = $(this),
                        num = $this.data('number');
                    console.log(num);
                    $this.animateNumber(
                        {
                            number: num,
                            numberStep: comma_separator_number_step
                        }, 7000
                    );
                });

            }

        }, { offset: '95%' });

    }
    counter();


    var contentWayPoint = function () {
        var i = 0;
        $('.ftco-animate').waypoint(function (direction) {

            if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function () {

                    $('body .ftco-animate.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn ftco-animated');
                            } else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft ftco-animated');
                            } else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight ftco-animated');
                            } else {
                                el.addClass('fadeInUp ftco-animated');
                            }
                            el.removeClass('item-animate');
                        }, k * 50, 'easeInOutExpo');
                    });

                }, 100);

            }

        }, { offset: '95%' });
    };
    contentWayPoint();

    // magnific popup
    $('.image-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
        }
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });

    const listaLinhaTempo = [
        { foto: './imagens_page/calendario_cosmico/card1-expo.png', descricao: '01/01 <br> Big Bang <br /> (Há 13.8 bilhões de anos)' },
        { foto: './imagens_page/calendario_cosmico/card2-expo.png', descricao: '07/01 <br> Nascimento das Primeiras Estrelas  <br /> (Há 13.6 bilhões de anos)' },
        { foto: './imagens_page/calendario_cosmico/card3-expo.png', descricao: '09/01 <br> Surgimento da Via Láctea e outras galáxias <br /> (Há 13.5 bilhões de anos)' },
        { foto: './imagens_page/calendario_cosmico/card4-expo.png', descricao: '21/08 <br> Origem e Formação do Sistema Solar  <br /> (Há 5 bilhões de anos)' },
        { foto: './imagens_page/calendario_cosmico/card5-expo.png', descricao: '02/09 <br> Origem da Terra <br /> (Há 4,6 bilhões de anos)' },
        { foto: './imagens_page/calendario_cosmico/card6-expo.png', descricao: '30/09 <br> Atmosfera Primitiva e Primeiras formas de vida <br /> (Há 3.5 bilhões de anos)' },
        { foto: './imagens_page/calendario_cosmico/card7-expo.png', descricao: '17/12 <br> Explosão da Vida no Cambriano  <br /> (Há 539 milhões de anos) ' },
        { foto: './imagens_page/calendario_cosmico/card8-expo.png', descricao: '19/12 <br> Primeiros Vertebrados <br /> (Há 485 milhões de anos)' },
        { foto: './imagens_page/calendario_cosmico/card9-expo.png', descricao: '20/12 <br> Extinção do Ordoviciano <br /> (Há 444 milhões de anos)' },
        { foto: './imagens_page/calendario_cosmico/card10-expo.png', descricao: '20/12 <br> Surgimento das Plantas Terrestres <br /> (Há 443 milhões de anos)' },
        { foto: './imagens_page/calendario_cosmico/card11-expo.png', descricao: '21/12 <br> Vertebrados terrestres <br /> (Há 416 milhões de anos)' },
        { foto: './imagens_page/calendario_cosmico/card12-expo.png', descricao: '22/12 <br> Florestas e insetos gigantes <br /> (Há 359 milhões de anos)' },
        { foto: './imagens_page/calendario_cosmico/card13-expo.png', descricao: '25/12 <br> Extinção do Permiano <br /> (Há 252 milhões de anos)' },
        { foto: './imagens_page/calendario_cosmico/card14-expo.png', descricao: '25/12 <br> Dinossauros e mamíferos  <br /> (Há 230 milhões de anos)' },
        { foto: './imagens_page/calendario_cosmico/card15-expo.png', descricao: '29/12 (01:004:00) <br> Aves (Jurássico) <br /> (Há 150 milhões de anos)' },
        { foto: './imagens_page/calendario_cosmico/card16-expo.png', descricao: '30/12(08:00:00) <br> Extinção dos dinossauros <br /> (Há 65 milhões de anos)' },
        { foto: './imagens_page/calendario_cosmico/card17-expo.png', descricao: '31/12 (20:52:50) <br> Megafauna e hominídeos <br /> (Há 5 milhões de anos)' },
        { foto: './imagens_page/calendario_cosmico/card18-expo.png', descricao: '31/12 (23:22:05) <br> Domínio do fogo <br /> (Há 1 milhão de anos)' },
        { foto: './imagens_page/calendario_cosmico/card19-expo.png', descricao: '1ª onda migratória (Há 12 mil anos) e 2ª onda migratória no Rio-Grande do Sul (há 4 mil anos) <br> Caçadores-coletores e ceramistas-horticultores.' },
        { foto: './imagens_page/calendario_cosmico/card20-expo.png', descricao: '31/12 (23:59:59,1) <br>  Início da 3ª onda migratória do RS, séc XVII: Reduções Jesuíticas em 1626, Negros e negras Africanos e seus descentes 1737, Açorianos em 1752, imigrantes alemães e italianos a partir de 1820.' },
        { foto: './imagens_page/calendario_cosmico/card21-expo.png', descricao: '31/12 (23:59:59,4) <br> 1ª revolução industrial, 1760. (Há 263 anos)' },
        { foto: './imagens_page/calendario_cosmico/card22-expo.png', descricao: '31/12 (23:59:59.59) <br> Dias Atuais' },
    ]


    const gerarLinhaDoTempo = () => {
        let render = listaLinhaTempo.length > 0 && listaLinhaTempo.map((item, indice) => {
            if (indice % 2 === 0) {
                return `
                    <div class="row itemLinhaTempo direita">
                        <div class="col-md-4">
                            <div class="foto_destaque">
                                <img class="img-fluid" src="${item.foto}"
                                    alt="">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="titulo">${item.descricao}</div>
                        </div>
                        <div class="col-md-4"></div>
                    </div>`;
            } else {
                return `
                    <div class="row itemLinhaTempo esquerda">
                        <div class="col-md-4"></div>
                        <div class="col-md-4">
                            <div class="titulo">${item.descricao}</div>
                        </div>

                        <div class="col-md-4">
                        <div class="foto_destaque">
                            <img class="img-fluid" src="${item.foto}"
                                alt="">
                        </div>
                        </div>
                    </div>`;
            }
        })

        $('#listaLinhaTempo').html(render)
    }


    gerarLinhaDoTempo()
})(jQuery);

