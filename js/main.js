$('#main-img').css('margin-top', $('#top-navbar').outerHeight());

$('#btn_dark').on({
    'click': function(){
        $('#room').attr('src', 'img/Dark.png');
        $('#room-url').attr('href', "./dark/黑暗.html");
    }
});

$('#btn_accomp').on({
    'click': function(){
        $('#room').attr('src', 'img/Accomp.png');
        $('#room-url').attr('href', "./accomp/陪伴.html");
    }
});

$('#btn_conf').on({
    'click': function(){
        $('#room').attr('src', 'img/conf.png');
        $('#room-url').attr('href', "./conf/自在.html");
    }
});

$('#btn_lookfor').on({
    'click': function(){
        $('#room').attr('src', 'img/lookfor.png');
        $('#room-url').attr('href', "./lookfor/期待.html");
    }
});