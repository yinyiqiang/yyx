// 1.自定义事件
// $(function() {
//     $('input').bind('myEvent', function() {
//         alert('自定义事件');
//     }).trigger('myEvent')
// });

// 2.命名空间

$(function() {
    $('input').bind('click.abc', function() {
        alert('abc');
    });

    $('input').bind('click.xyz', function() {
        alert('xyz');
    })

    $('input').bind('mouseenter.abc', function() {
        alert('mouseover abc');
    });
    

    $('input').unbind('.abc')
});