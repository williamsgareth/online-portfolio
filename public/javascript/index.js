$(document).ready(function(){
    $(".nav-toggle").on('click', function(){
        $('.main-navigation').toggleClass('open');
  });
});
$(document).ready( function (){
    $('.main-navigation').mouseleave( function(){
       $('.main-navigation').toggleClass('open');
    })
});
    
$(document).ready( function (){
   $('.banner').hide();
});
    
$(document).ready( function() {
    $('.banner').slideDown('slow');
})

$(document).ready( function() {
    $('#github').mouseover( function() {
        $('#github').addClass('move');
    })
})

$(document).ready( function() {
    $('#github').mouseleave( function() {
        $('#github').removeClass('move');
    })  
});

$(document).ready( function() {
    $('#facebook').mouseover( function() {
        $('#facebook').addClass('move');
    })
})
    
$(document).ready( function() {
    $('#facebook').mouseleave( function() {
        $('#facebook').removeClass('move');
    })
});

    $(document).ready( function() {
    $('#twitter').mouseover( function() {
        $('#twitter').addClass('move');
    })
})
    
$(document).ready( function() {
    $('#twitter').mouseleave( function() {
        $('#twitter').removeClass('move');
    })
});
    
$(document).ready( function() {
    $('#google').mouseover( function() {
        $('#google').addClass('move');
    })
})
    
$(document).ready( function() {
    $('#google').mouseleave( function() {
        $('#google').removeClass('move');
    })
});
