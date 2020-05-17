$(function (){
    //全选和取消全选

    //自定义标签属性
    var isChecked = false; //标记全选元素状态
    $(".checkAll").click(function (){
        isChecked=!isChecked;
        if(isChecked){
            $(this).attr("src","../images/cart/product_true.png")
            $(".checkItem").attr("src","../images/cart/product_true.png").attr("checked",true)
        }else{
            $(this).attr("src","../images/cart/product_normal.png")
            $(".checkItem").attr("src","../images/cart/product_normal.png").attr("checked",false)
        }

    })

    //反选
    $(".checkItem").click(function (){
        //2.1按钮自身状态及样式的修改
        if($(this).attr("checked")){
        //移除标记
            $(this).attr("checked",false).attr("src","../images/cart/product_normal.png")
        }else{
            $(this).attr("checked",true).attr("src","../images/cart/product_true.png")
        }
    })









})