// 1.自定义事件
// $(function() {
//     $('input').bind('myEvent', function() {
//         alert('自定义事件');
//     }).trigger('myEvent')
// });

// 2.命名空间

$(function() {
    $('.show').on('click', function() {
        $('.text').first().show('fast',function showSpan() {
            $(this).next().show('fast', showSpan);
        });
    });

    $('.hide').on('click')
});