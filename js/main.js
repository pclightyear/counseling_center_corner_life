$('#main-img').css('margin-top', $('#top-navbar').outerHeight());

var intervaltimes = 1000;

$('#btn_dark').on({
    'click': function(){
        $(".current-img").fadeOut(intervaltimes);
        maskInterval = setInterval(() => {
            clearInterval(maskInterval); 
            $("#dark-img").fadeIn(intervaltimes);
            $(".current-img").removeClass( "current-img" );
            $('#dark-img').addClass( "current-img" );
            $("#dark-img").css("display", "block");
        }, intervaltimes);
    }
});

$('#btn_accomp').on({
    'click': function(){
        $(".current-img").fadeOut(intervaltimes);
        maskInterval = setInterval(() => {
            clearInterval(maskInterval); 
            $("#accomp-img").fadeIn(intervaltimes);
            $(".current-img").removeClass( "current-img" );
            $('#accomp-img').addClass( "current-img" );
            $("#accomp-img").css("display", "block");
        }, intervaltimes);
    }
});

$('#btn_conf').on({
    'click': function(){
        $(".current-img").fadeOut(intervaltimes);
        maskInterval = setInterval(() => {
            clearInterval(maskInterval); 
            $("#conf-img").fadeIn(intervaltimes);
            $(".current-img").removeClass( "current-img" );
            $('#conf-img').addClass( "current-img" );
            $("#conf-img").css("display", "block");
        }, intervaltimes);
    }
});

$('#btn_lookfor').on({
    'click': function(){
        $(".current-img").fadeOut(intervaltimes);
        maskInterval = setInterval(() => {
            clearInterval(maskInterval); 
            $("#lookfor-img").fadeIn(intervaltimes);
            $(".current-img").removeClass( "current-img" );
            $('#lookfor-img').addClass( "current-img" );
            $("#lookfor-img").css("display", "block");
        }, intervaltimes);
    }
});