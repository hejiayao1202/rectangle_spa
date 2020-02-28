// 解决浮点舍入误差的问题
function roundFractional(x, n) {
    console.log(x,n);
    //x 做近似处理的数
    //小数点后第 n 位
    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
     // round：取整（四舍五入） pow(x,n)：x的n次方
}
$(
    // $(function() {}) 是$(document).ready(function()的简写。
    // DOM加载完毕之后执行。
    function(){
        console.log("hello");
        var $width=$('#width'),
            $height=$('#height'),
            $btnCal=$('#calculate'),
            $perimeter=$('#perimeter'),
            $area=$('#area');

        // 提示信息
        $width.blur(function () {
            if($width.val()==""){
                $('#massage1').css("display","block");
            }else{
                $('#massage1').css("display","none");
            }
        })
        $height.blur(function () {
            if($height.val()==""){
                $('#massage2').css("display","block");
            }else{
                $('#massage2').css("display","none");
            }
        })

        $btnCal.click(function(){
            // console.log(1);
            var w=$width.val(),
                h=$height.val();
            
            //获取小数点的位置
            var iw = String(w).indexOf(".") + 1;
            var ih = String(h).indexOf(".") + 1;
            //获取小数点后的个数
            var nw = String(w).length - iw;
            var nh = String(h).length - ih;
            // 周长
            var per=2*(parseFloat(w)+parseFloat(h));
            var p=roundFractional(per, Math.max(nw,nh));
            // 面积
            var ar=w*h;
            var a=roundFractional(ar, nw+nh);

            $perimeter.val(p);
            $area.val(a);
        })
    }
)