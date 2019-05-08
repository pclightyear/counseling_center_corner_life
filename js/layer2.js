$('.badge').each(function(index) {
    $( this ).on({
        'mouseenter': function(){
            $( this ).parent().removeClass( "option" ).addClass( "option-hover" );
        },
        'mouseleave': function(){
            $( this ).parent().removeClass( "option-hover" ).addClass( "option" );
        }
    });
})
