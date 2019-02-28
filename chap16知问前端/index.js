$(function(){
    $('.search_button').button();
    
    $('#reg').dialog({
        title:'知问注册',
        buttons:{
            '提交':function(){
                alert('正在Ajax提交中');
            },
            '取消':function(){
                $(this).dialog('close');
            },
          //  position:'left top',
          height:500,//默认是像素
          width:300,
          minWidth:300,
          maxWidth:300,
          maxWidth:800,
        }
    });
   
    
})