window.addEventListener("load", function () {


    var nav_icon = document.querySelector(".nav__icon__cnt");
    var nav__menu = document.querySelector(".nav__menu").classList;
    var nav_breadcr = document.querySelector(".nav__icon__breadcr h2");
    var spans = document.querySelectorAll(".nav__icon__cnt span");
    var menu_exit = document.querySelector(".nav__menu__exit");
    var nav_logo = document.querySelector(".nav__logo");

    var nav_menu_items = document.querySelectorAll(".nav__menu__list__item");
    var fade_nav_items = document.querySelectorAll(".fadeNav");


    function svgIn() {
        TweenMax.to(document.querySelector("#deck_menu"), 0.3, {
            attr: {viewBox: "0 0 182.01 100.65"},
            ease: Expo.easeOut
        })

        var menu_svg_points = nav_icon.querySelectorAll("#deck_menu .deck_menu_points");


        TweenMax.to(menu_svg_points[0], 0.5, {
            attr: {points: "0 3.58 91.11 3.45 182 3.58 91.11 3.5 0 3.58"},
            ease: Expo.easeOut
        })
        TweenMax.to(menu_svg_points[1], 0.5, {
            attr: {points: "182 56.34 182 56.34 91.11 56.34 0 56.34 0 56.34"},
            ease: Expo.easeOut
        })
        TweenMax.to(menu_svg_points[2], 0.5, {
            attr: {points: "182 110.15 182 110.15 88.77 110.08 0 110.08 0 110.08"},
            ease: Expo.easeOut
        });
    };

    var categ_items = document.querySelectorAll(".content__categ__item");

    /*
        categ_items.forEach(function (t) {


            var waypoint = new Waypoint({
                element: t,
                handler: function (direction) {

                    var prev = this.previous();
                    var next = this.next();
                    var that = this;
                    var el = that.options.element.id.split("_");
                    var curr_id = parseInt(el[1]);

                    console.log(curr_id);


                },
                group: "items"

            })
        });*/


    function svgOut() {
        TweenMax.to(document.querySelector("#deck_menu"), 0.3, {
            attr: {viewBox: "0 0 197.92 160.32"},
            ease: Expo.easeOut
        })


        var menu_svg_points = nav_icon.querySelectorAll("#deck_menu .deck_menu_points");

        TweenMax.to(menu_svg_points[0], 0.5, {
            attr: {points: "8.03 44.27 100.03 0 190.03 44.27 100.03 92.99 8.03 44.27"},
            ease: Expo.easeOut
        })
        TweenMax.to(menu_svg_points[1], 0.5, {
            attr: {points: "164.79 67.28 190.03 82.02 100.03 133.75 8.03 82.02 33.28 67.28"},
            ease: Expo.easeOut
        })
        TweenMax.to(menu_svg_points[2], 0.5, {
            attr: {points: "164.75 105.83 190.03 120.84 97.25 172.29 8.03 120.76 30.5 105.83"},
            ease: Expo.easeOut
        })

    }

    nav_icon.addEventListener("mouseover", function () {

        /*var fin_points = [
            "0 3.58 91.11 3.5 182 3.58 91.11 3.5 0 3.58",
            "182 56.34 182 56.34 91.11 56.34 0 56.34 0 56.34",
            "182 110.15 182 110.15 88.77 110.08 0 110.08 0 110.08"
        ];*/

        if (document.querySelector(".showMenu")) {

        } else {
            svgIn();
        }

    });

    nav_icon.addEventListener("mouseleave", function () {

        if (document.querySelector(".showMenu")) {

        } else {
            svgOut();
        }

    });

    nav_breadcr.addEventListener("mouseover", function () {
        if (document.querySelector(".showMenu")) {

        } else {
            svgIn();
        }

    });
    nav_breadcr.addEventListener("mouseleave", function () {
        if (document.querySelector(".showMenu")) {

        } else {
            svgOut();
        }

    });


    var showMenu = function (e) {


        console.log(e.target);

        var check_target = e.target.classList;


        if (check_target.contains("nav__menu__exit")) {
            svgOut();
        }

        spans.forEach(function (solo_span) {
            var solo_span_CL = solo_span.classList;
            solo_span_CL.toggle("open");
        });
        nav__menu.toggle("showMenu");


        var menu_item_tl = new TimelineMax();

        if (document.querySelector(".showMenu")) {
            menu_item_tl.staggerFrom(nav_menu_items, 0.75, {
                opacity: 0,
                y: -15,
                /*scaleX: 0.9,
                scaleY: 0.9,*/
                ease: Expo.easeOut
            }, 0.1)
                .from(document.querySelector(".nav__menu__exit"), 0.35, {
                    opacity: 0,
                    y: -5,
                    ease: Expo.easeOut
                }, "-=0.85")
        } else {

            menu_item_tl.reverse();
        }
    };

    document.addEventListener("keydown", function (k) {

        if (k.keyCode == 27) {
            svgOut();
            nav__menu.remove("showMenu");
        }

    });


    nav_icon.addEventListener("click", showMenu);
    nav_icon.addEventListener("keydown", function (ev) {
        if (ev.keyCode == 13) {
            showMenu(ev);
        }
    });
    nav_breadcr.addEventListener("click", showMenu);
    nav_breadcr.addEventListener("keydown", function (ev) {
        if (ev.keyCode == 13) {
            showMenu(ev);
        }
    });
    menu_exit.addEventListener("click", showMenu);
    menu_exit.addEventListener("keydown", function (ev) {
        if (ev.keyCode == 13) {
            showMenu(ev);
        }
    });

    var work_scroll = document.querySelector(".content__head__scroll");
    var work_content = document.querySelector(".content__categ");
    if (work_scroll) {
        work_scroll.querySelector(".link").addEventListener("click", function (e) {
            e.preventDefault();
            window.scroll({
                top: work_content.offsetTop,
                left: 0,
                behavior: 'smooth'
            });
        })
    }


    if (document.querySelector(".content__head__title")) {

        
        var x = document.querySelector(".content__head__title");
        var x_rect = x.getBoundingClientRect();

        var x_h2 = x.querySelector("h2 span");
        var x_h2_rect = x_h2.getBoundingClientRect();

        var count = 0;
        for (var i = x_h2_rect.width; i < x_rect.width; i++) {
            count++;

            if (count > 99 && window.innerWidth <= 575) {

                var str = count.toString();
                $(".content__head__title h2 span").css({fontSize: "calc(9vw + " + str.slice(0, 2) + "px)"});

            }
        }


    }

})