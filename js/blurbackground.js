    $(window).scroll(function(e) {
        
        var distanceScrolled = $(this).scrollTop();
    
        $('.backgroundblur').css('-webkit-filter', 'blur('+distanceScrolled/60+'px)',);
        
    });