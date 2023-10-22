"use strict";

$(document).ready(function () {
    $(".bars").click(function () {
        if ($(".fa-bars")) $(".fa-bars").toggleClass("fa-xmark");
        $(".fa-xmark").toggleClass("fa-bars");
        $(".navbar").toggleClass("nav-toggle");
    });

    $(".navbar ul li a").click(function () {
        $(".fa-xmark").toggleClass("fa-bars");
        $(".navbar").removeClass("nav-toggle");
    })

    $(window).on("scroll load", function () {
        if ($(window).scrollTop() > 30) {
            $("header").addClass("header-active");
        } else {
            $("header").removeClass("header-active")
        }
        $("section").each(function () {
            let id = $(this).attr("id");
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            if (top >= offset && top < height + offset) {
                $(".navbar ul li a").removeClass("active");
                $(".navbar").find(`[href="#${id}"]`).addClass("active");
            }
        })
    })

});