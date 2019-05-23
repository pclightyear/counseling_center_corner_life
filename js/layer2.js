var intervaltimes = 300;
var fadeIntimes = 1000;
var random_order = [[1, 3, 5, 2, 4, 6], [1, 3, 5, 2, 6, 4], [1, 5, 3, 6, 2, 4], [1, 5, 3, 6, 4, 2], [3, 1, 5, 2, 4, 6], [3, 1, 5, 2, 6, 4], [3, 5, 1, 4, 2, 6], [3, 5, 1, 4, 6, 2], [3, 5, 1, 6, 2, 4], [3, 5, 1, 6, 4, 2], [5, 1, 3, 6, 2, 4], [5, 1, 3, 6, 4, 2], [5, 3, 1, 4, 2, 6], [5, 3, 1, 4, 6, 2], [5, 3, 1, 6, 2, 4], [5, 3, 1, 6, 4, 2], [5, 3, 6, 1, 4, 2]]
var dark_sentence = [
    {
        "sentence": "在這裡只有我的星球下著雪",
        "link": "./拋棄.html"
    }, {
        "sentence": "想起你的光曾經照亮我的那個季節",
        "link": "./拋棄.html"
    }, {
        "sentence": "度過每一天像是又仔細地在樹林裡挖了一個深深的黑洞",
        "link": "./失敗.html"
    }, {
        "sentence": "遺失了開啟明天的鑰匙",
        "link": "./失敗.html"
    }, {
        "sentence": "不打擾是我的溫柔",
        "link": "./邊緣.html"
    }, {
        "sentence": "在一片喧鬧的景色中卻覺得勉強",
        "link": "./邊緣.html"
    }
]

var accomp_sentence = [
    {
        "sentence": "有一種溫暖在心裡不會腐壞",
        "link": "./家.html"
    }, {
        "sentence": "黑夜公路上想到的那道光",
        "link": "./家.html"
    }, {
        "sentence": "時間是雪覆蓋了童年和我的小被被",
        "link": "./小物件.html"
    }, {
        "sentence": "陳舊的小熊和我的青春",
        "link": "./小物件.html"
    }, {
        "sentence": "獨一無二的秘密基地",
        "link": "./空間.html"
    }, {
        "sentence": "虛度時光是最美的流浪",
        "link": "./空間.html"
    }
]

var conf_sentence = [
    {
        "sentence": "在一片荒涼的景象之中我卻覺得晴朗",
        "link": "./幻想.html"
    }, {
        "sentence": "窗外消長的星光帶我到遙遠的地方",
        "link": "./幻想.html"
    }, {
        "sentence": "摳呢頹廢生存指南",
        "link": "./小趣味.html"
    }, {
        "sentence": "誰說這樣軟爛不可以呢",
        "link": "./小趣味.html"
    }, {
        "sentence": "不想去遠方只想停留在自己心上",
        "link": "./自省.html"
    }, {
        "sentence": "尋找一百種自我對話的方法",
        "link": "./自省.html"
    }
]

var lookfor_sentence = [
    {
        "sentence": "仔細思索只是為了如何讓他遇見我",
        "link": "./被發現.html"
    }, {
        "sentence": "玩一場希望快點被找到的躲貓貓",
        "link": "./被發現.html"
    }, {
        "sentence": "如何在你心裡找一個屬於我的位置",
        "link": "./等人.html"
    }, {
        "sentence": "散落在這裡的是錯過",
        "link": "./等人.html"
    }, {
        "sentence": "在轉瞬的花火裡看見所有可能",
        "link": "./有趣的事.html"
    }, {
        "sentence": "停下腳步漫遊生活",
        "link": "./有趣的事.html"
    }
]

function shuffle(array) {
    var idx = Math.floor(Math.random() * 17);
    for(var i=0; i<6; ++i) {
        array[i].order = random_order[idx][i];
    }
    array.sort((a, b) => {return a.order - b.order;});
}

$.when( $.ready ).then(function() {
    var hrefs = $( "a" );

    shuffle(dark_sentence);
    shuffle(accomp_sentence);
    shuffle(conf_sentence);
    shuffle(lookfor_sentence);

    $("#dark-list li").each(function(i) {
        $(this).find(hrefs).text( dark_sentence[i]["sentence"] );
        $(this).find(hrefs).attr( "href", dark_sentence[i]["link"] );
        $(this).delay(300 * i).fadeIn("slow");
    });

    $("#accomp-list li").each(function(i) {
        $(this).find(hrefs).text( accomp_sentence[i]["sentence"] );
        $(this).find(hrefs).attr( "href", accomp_sentence[i]["link"] );
        $(this).delay(300 * i).fadeIn("slow");
    });

    $("#conf-list li").each(function(i) {
        $(this).find(hrefs).text( conf_sentence[i]["sentence"] );
        $(this).find(hrefs).attr( "href", conf_sentence[i]["link"] );
        $(this).delay(300 * i).fadeIn("slow");
    });

    $("#lookfor-list li").each(function(i) {
        $(this).find(hrefs).text( lookfor_sentence[i]["sentence"] );
        $(this).find(hrefs).attr( "href", lookfor_sentence[i]["link"] );
        $(this).delay(300 * i).fadeIn("slow");
    });

});
