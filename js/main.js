$('#main-img').css('margin-top', $('#top-navbar').outerHeight());

$('#btn_dark').on({
    'click': function(){
        console.log($(".current-img").length);
        $(".current-img").removeClass( "current-img" ).addClass( "hidden" );
        $('#dark-img').removeClass( "hidden" ).addClass( "current-img" );
    }
});

$('#btn_accomp').on({
    'click': function(){
        $('.current-img').removeClass( "current-img" ).addClass( "hidden" );
        $('#accomp-img').removeClass( "hidden" ).addClass( "current-img" );
    }
});

$('#btn_conf').on({
    'click': function(){
        $('.current-img').removeClass( "current-img" ).addClass( "hidden" );
        $('#conf-img').removeClass( "hidden" ).addClass( "current-img" );
    }
});

$('#btn_lookfor').on({
    'click': function(){
        $('.current-img').removeClass( "current-img" ).addClass( "hidden" );
        $('#lookfor-img').removeClass( "hidden" ).addClass( "current-img" );
    }
});