$.when( $.ready ).then(function() {
    var ran_idx = Math.floor(Math.random() * 4);
    $("#url" + ran_idx).addClass('active');
    if(window.innerWidth <= 1200) {
        alert("請將畫面橫擺以獲得較佳的觀看體驗");
    }
});