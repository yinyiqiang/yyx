;(function($) {
    $.fn.extend({
        'nav': function(color) {
            $(this).find('.nav').css({
                'list-style':'none',
                'margin':0,
                'padding':0,
                'display':'none',
                'color': color
            });
//在插件里的this，经过了一些封装处理，this就是表示jquery对象
//而不需要再次使用$()封装。
            $(this).find('.nav').parent().hover(function(){
                $(this).find('.nav').stop().slideDown()
            }, function(){
                $(this).find('.nav').stop().slideUp()
            });
        }
    })
})(jQuery);
