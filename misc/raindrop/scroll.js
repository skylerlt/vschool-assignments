/*FRACKING JS - Linda Dong */

$(document).ready(function () {

    /*Icon Collection*/

    $(window).scroll(function () {

        /*Droplet*/
        if ($(this).scrollTop() > 7500) {
            $("#toxin").css({
                "position": "fixed",
                "top": "460px"
            });
        } else {
            $("#toxin").css({
                "position": "absolute",
                "top": "7500px"
            });
        }
        if ($(this).scrollTop() > 15200) {
            $("#gas").css({
                "position": "fixed",
                "top": "335px"
            });
        } else {
            $("#gas").css({
                "position": "absolute",
                "top": "15180px"
            });
        }

        /* Tokens */
        if ($(this).scrollTop() > 3850) {
            $("#icontruck").css({
                "position": "fixed",
                "top": "0px",
                "opacity": "1"
            });
        } else {
            $("#icontruck").css({
                "position": "absolute",
                "top": "3850px",
                "opacity": ".4"
            });
        }
        if ($(this).scrollTop() > 4720) {
            $("#iconwater").css({
                "position": "fixed",
                "top": "0px",
                "opacity": "1"
            });
        } else {
            $("#iconwater").css({
                "position": "absolute",
                "top": "4720px",
                "opacity": ".4"
            });
        }
        if ($(this).scrollTop() > 7610) {
            $("#icontoxic").css({
                "position": "fixed",
                "top": "0px",
                "opacity": "1"
            });
        } else {
            $("#icontoxic").css({
                "position": "absolute",
                "top": "7610px",
                "opacity": ".4"
            });
        }
        if ($(this).scrollTop() > 6250) {
            $("#iconfluid2").css({
                "position": "fixed",
                "top": "0px",
                "opacity": "1"
            });
        } else {
            $("#iconfluid2").css({
                "position": "absolute",
                "top": "6250px",
                "opacity": ".4"
            });
        }
        if ($(this).scrollTop() > 17100) {
            $("#iconmethane").css({
                "position": "fixed",
                "top": "0px",
                "opacity": "1"
            });
        } else {
            $("#iconmethane").css({
                "position": "absolute",
                "top": "17100px",
                "opacity": ".4"
            });
        }
        if ($(this).scrollTop() > 18640) {
            $("#iconnowater").css({
                "position": "fixed",
                "top": "0px",
                "opacity": "1"
            });
        } else {
            $("#iconnowater").css({
                "position": "absolute",
                "top": "18640px",
                "opacity": ".4"
            });
        }
        if ($(this).scrollTop() > 18640) {
            $("#iconhealth").css({
                "position": "fixed",
                "top": "0px",
                "opacity": "1"
            });
        } else {
            $("#iconhealth").css({
                "position": "absolute",
                "top": "18640px",
                "opacity": ".4"
            });
        }
        if ($(this).scrollTop() > 20600) {
            $("#iconfluid").css({
                "position": "fixed",
                "top": "0px",
                "opacity": "1"
            });
        } else {
            $("#iconfluid").css({
                "position": "absolute",
                "top": "20600px",
                "opacity": ".4"
            });
        }
        if ($(this).scrollTop() > 21600) {
            $("#iconair").css({
                "position": "fixed",
                "top": "0px",
                "opacity": "1"
            });
        } else {
            $("#iconair").css({
                "position": "absolute",
                "top": "21600px",
                "opacity": ".4"
            });
        }
        if ($(this).scrollTop() > 22320) {
            $("#icongas").css({
                "position": "fixed",
                "top": "0px",
                "opacity": "1"
            });
        } else {
            $("#icongas").css({
                "position": "absolute",
                "top": "22320px",
                "opacity": "1"
            });
        }

    });


    /* Parallax*/

    $(window).scroll(function () {

        /*Clouds*/
        $("#cloud1").css({
            top: function (index, value) {
                return 350 - $(window).scrollTop() * 1.3;
            }
        });
        $("#cloud2").css({
            top: function (index, value) {
                return 500 - $(window).scrollTop() * 1.5;
            }
        });
        $("#cloud3").css({
            top: function (index, value) {
                return 590 - $(window).scrollTop() * .2;
            }
        });
        $("#cloud4").css({
            top: function (index, value) {
                return 420 - $(window).scrollTop() * .5;
            }
        });
        $("#cloud5").css({
            top: function (index, value) {
                return 775 - $(window).scrollTop() * 1.7;
            }
        });
        $("#cloud6").css({
            top: function (index, value) {
                return 1550 - $(window).scrollTop() * .6;
            }
        });
        $("#cloud7").css({
            top: function (index, value) {
                return 1050 - $(window).scrollTop() * .4;
            }
        });
        $("#cloud8").css({
            top: function (index, value) {
                return 1800 - $(window).scrollTop() * 1.3;
            }
        });
        $("#cloud9").css({
            top: function (index, value) {
                return 2500 - $(window).scrollTop() * 1.1;
            }
        });

        /*Road*/
        $("#house").css({
            top: function (index, value) {
                return 4500 - $(window).scrollTop() * 1.1;
            }
        });
        $("#house2").css({
            top: function (index, value) {
                return 7000 - $(window).scrollTop() * 1.1;
            }
        });
        $("#house3").css({
            top: function (index, value) {
                return 8600 - $(window).scrollTop() * 1.1;
            }
        });

        /*Rig*/
        $("#clouda").css({
            top: function (index, value) {
                return 3400 - $(window).scrollTop() * .4;
            }
        });
        $("#cloudb").css({
            top: function (index, value) {
                return 9400 - $(window).scrollTop() * 1.3;
            }
        });
        $("#cloudc").css({
            top: function (index, value) {
                return 2500 - $(window).scrollTop() * .3;
            }
        });
        $("#cloudc2").css({
            top: function (index, value) {
                return 10500 - $(window).scrollTop() * 1.3;
            }
        });

        /*Aquifer*/
        $("#bubbles").css({
            top: function (index, value) {
                return 10400 - $(window).scrollTop() * .6;
            }
        });
        $("#bubbles2").css({
            top: function (index, value) {
                return 5200 - $(window).scrollTop() * .3;
            }
        });
        $("#bubbles3").css({
            top: function (index, value) {
                return 6100 - $(window).scrollTop() * .3;
            }
        });
        $("#bubbles4").css({
            top: function (index, value) {
                return 15900 - $(window).scrollTop() * .9;
            }
        })
        $("#cloudd").css({
            top: function (index, value) {
                return 7200 - $(window).scrollTop() * .3;
            }
        });
        $("#cloude").css({
            top: function (index, value) {
                return 22200 - $(window).scrollTop() * 1.0;
            }
        });
        $("#cloudf").css({
            top: function (index, value) {
                return 17400 - $(window).scrollTop() * .8;
            }
        });

    });


    /*Disappear*/

    $(window).scroll(function () {
        if (isScrolledIntoView('#road')) {
            $("#drop").css({
                "display": "none"
            });
        } else {
            $("#drop").css({
                "display": ""
            });
        }

        if (isScrolledIntoView('#pipe')) {
            $("#mrtruck").css({
                "display": "none"
            });
        } else {
            $("#mrtruck").css({
                "display": ""
            });
        }

        if (isScrolledIntoView('#pipe')) {
            $("#meter").css({
                "-webkit-transform": "rotate(0deg)"
            });
        } else {
            $("#meter").css({
                "-webkit-transform": "rotate(-180deg)"
            });
        }
    });


    /*Articles*/

    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom));
    }

    var myelement = $('#cloud6');
    var mymessage = $('#description');
    $(window).scroll(function () {
        if (isScrolledIntoView(myelement)) {
            mymessage.fadeIn('500');
        } else {
            mymessage.fadeOut('200')
        }

        var myelement1 = $('#hill');
        var mymessage1 = $('#red');
        if (isScrolledIntoView(myelement1)) {
            mymessage1.fadeIn('500');
        } else {
            mymessage1.fadeOut('200')
        }

        var myelement2 = $('#targettruck');
        var mymessage2 = $('#texttrucks');
        if (isScrolledIntoView(myelement2)) {
            mymessage2.fadeIn('500');
        } else {
            mymessage2.fadeOut('200')
        }

        var myelement3 = $('#targettruck2');
        var mymessage3 = $('#texttrucks2');
        if (isScrolledIntoView(myelement3)) {
            mymessage3.fadeIn('500');
        } else {
            mymessage3.fadeOut('200')
        }

        var myelement5 = $('#targetchemical');
        var mymessage5 = $('#chemicals');
        if (isScrolledIntoView(myelement5)) {
            mymessage5.fadeIn('500');
        } else {
            mymessage5.fadeOut('200')
        }

        var myelement7 = $('#chemicaltrigger');
        var mymessage7 = $('#chemicals2');
        if (isScrolledIntoView(myelement7)) {
            mymessage7.fadeIn('500');
        } else {
            mymessage7.fadeOut('200')
        }

        var myelement4 = $('#pipe');
        var mymessage4 = $('#chemicals2wrapper');
        if (isScrolledIntoView(myelement4)) {
            mymessage4.fadeIn('500');
        } else {
            mymessage4.fadeOut('200')
        }

        var myelement8 = $('#ground3');
        var mymessage8 = $('#chemicals3');
        if (isScrolledIntoView(myelement8)) {
            mymessage8.fadeIn('500');
        } else {
            mymessage8.fadeOut('200')
        }

        var myelement9 = $('#trigger1');
        var mymessage9 = $('#chemicals4');
        if (isScrolledIntoView(myelement9)) {
            mymessage9.fadeIn('500');
        } else {
            mymessage9.fadeOut('200')
        }

        var myelement10 = $('#trigger2');
        var mymessage10 = $('#math');
        if (isScrolledIntoView(myelement10)) {
            mymessage10.fadeIn('500');
        } else {
            mymessage10.fadeOut('200')
        }
        var myelement11 = $('#pipecurve');
        var mymessage11 = $('#methane');
        if (isScrolledIntoView(myelement11)) {
            mymessage11.fadeIn('500');
        } else {
            mymessage11.fadeOut('200')
        }

        var myelement12 = $('#meter');
        var mymessage12 = $('#cracks');
        if (isScrolledIntoView(myelement12)) {
            mymessage12.fadeIn('500');
        } else {
            mymessage12.fadeOut('200')
        }

        var myelement13 = $('#trigger3');
        var mymessage13 = $('#cracks3');
        if (isScrolledIntoView(myelement13)) {
            mymessage13.fadeIn('500');
        } else {
            mymessage13.fadeOut('200')
        }

        var myelement14 = $('#tox2');
        var mymessage14 = $('#methane2');
        if (isScrolledIntoView(myelement14)) {
            mymessage14.fadeIn('500');
        } else {
            mymessage14.fadeOut('200')
        }

        var myelement15 = $('#citypipe');
        var mymessage15 = $('#citywater');
        if (isScrolledIntoView(myelement15)) {
            mymessage15.fadeIn('500');
        } else {
            mymessage15.fadeOut('200')
        }

        var myelement16 = $('#pit1');
        var mymessage16 = $('#recovered');
        if (isScrolledIntoView(myelement16)) {
            mymessage16.fadeIn('500');
        } else {
            mymessage16.fadeOut('200')
        }
        var myelement17 = $('#cloudf');
        var mymessage17 = $('#voc');
        if (isScrolledIntoView(myelement17)) {
            mymessage17.fadeIn('500');
        } else {
            mymessage17.fadeOut('200')
        }
    });




});
