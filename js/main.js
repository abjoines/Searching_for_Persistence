$(function() {
    $("a").click(function() {
      // remove classes from all
      $("a").removeClass("active");
      // add class to the one we clicked
      $(this).addClass("active");
   });
});

$(document).ready(function() {
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.slide').each( function(i){
            
            var left_of_object = $(this).offset().left + $(this).outerHeight();
            var right_of_window = $(window).scrollLeft() + $(window).width();
            
            /* If the object is completely visible in the window, fade it it */
            if( right_of_window - 300 > left_of_object ){
                
                $(this).animate({'opacity':'1'},1000);
                
            } 

        });
    });
});