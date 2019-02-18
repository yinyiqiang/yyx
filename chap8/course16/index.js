// $(document).ready(function() {
//     $("#button").bind("click", function() {
//         alert("点击了按钮！");
//     });    
// });

$(function() {
    $('#button').bind({
        mouseover: function() {
            $('div').html(function(index, value) {
                return value + '1';
            });
        },
        mouseout: function() {
            $('div').html(function(index, value) {
                return value + '2';
            });
        }
    });
})
