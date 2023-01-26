$(function() {
    var lists = $('.list li');
    $(document).on('change', '.serchBox .checkbox input[type=checkbox]:checked', function() {
        lists.show();
        for (var i = 0; i < $('.serchBox .checkbox input[type=checkbox]:checked').length; i++) {
            // 絞り込みの項目を取得
            var item = $('.serchBox .checkbox input[type=checkbox]:checked').eq(i).attr('name');
            // 絞り込みの対象を取得
            var target = $('.serchBox .checkbox input[type=checkbox]:checked').eq(i).val();
 
            if(target != '') {
                for (var j = 0; j < lists.length; j++) {
                    // 絞り込み対象でない場合は非表示
                    if(!lists.eq(j).find('.' + item).find('span').hasClass(target)) {
                        lists.eq(j).hide();
                    }
                };
            }
        };
    });
});