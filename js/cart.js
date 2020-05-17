$(function (){
    //全选和取消全选

    //自定义标签属性
    var isChecked = false; //标记全选元素状态
    $(".checkAll").click(function (){
        isChecked=!isChecked;
        if(isChecked){
            $(".checkAll").attr("src","../images/cart/product_true.png")
            $(".checkItem").attr("src","../images/cart/product_true.png").attr("checked",true)
        }else{
            $(".checkAll").attr("src","../images/cart/product_normal.png")
            $(".checkItem").attr("src","../images/cart/product_normal.png").attr("checked",false)
        }
        sum()
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

        //2.2反选

        if($(".checkItem[checked=checked]").length == $(".checkItem").length){
            $(".checkAll").attr("src","../images/cart/product_true.png")
            isChecked = true;
        }else{
            $(".checkAll").attr("src","../images/cart/product_normal.png")
            isChecked = false;
        }

        sum()
    })


    //数量增减
    $(".add").click(function (){
        //获取输入框中的值
        var value = $(this).prev().val();
        value++;
        $(this).prev().val(value);

        //价格联动
        //获取单价
        changSum($(this),value)

        sum()
    })

    $(".minus").click(function (){
        var value = $(this).next().val();
        if(value > 1){
            value--;
        }
        $(this).next().val(value);
        changSum($(this),value)

        sum()
    })

    //价格联动
    function changSum(that,n){
        var s1 = that.parent().prev().find("p").html();//$299.00
        //or
        var s2 = that.parents(".item").find(".price p").html();
        var price = s1.substring(1)//299.00
        var toPrice = price*n;
        toPrice = toPrice.toFixed(2);
        //显示总金额
        that.parents(".item").find(".sum").html("￥"+toPrice)

    }

    //移除操作
    $(".item .action").click(function (){
        $(this).parent().remove()



    })


    //获取总数量和总价格
    function sum(){
        var num=0;//总数量
        var price=0;//总价格
        //被选中商品的总数量和总金额进行累加
        $(".checkItem[checked=checked]").each(function (){
            num += Number($(this).parents(".item").find(".count input").val());
            var str = $(this).parents(".item").find(".sum").html();
            var s = Number(str.substring(1));
            price += s;
        })

        //修改显示
        $(".total_count").html(num);
        price=price.toFixed(2)
        $(".total_price").html(price+"元")
    }



})


