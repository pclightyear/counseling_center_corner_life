$.when( $.ready ).then(function() {
    if(window.innerWidth <= 1200) {
        $('.mobile').removeClass( "mobile" );
    } else {
        $('.pc').removeClass( "pc" );
    }
});