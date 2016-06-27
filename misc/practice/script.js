 $(window).scroll(function () {
             if (isScrolledIntoView('#pipe')) {
                 $("#bike").css({
                     "display": "none"
                 });
             } else {
                 $("#bike").css({
                     "display": ""
                 });
             }
         };

         function isScrolledIntoView(elem) {
             var docViewTop = $(window).scrollTop();
             var docViewBottom = docViewTop + $(window).height();

             var elemTop = $(elem).offset().top;
             var elemBottom = elemTop + $(elem).height();

             return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom));
         }
