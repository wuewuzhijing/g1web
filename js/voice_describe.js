// $(function () {
//     $(".btn_normal").each(function () {
//         var self = this;
//         $(this).show();
//         $(this).click(function () {
//         $(self).parent(".group_fun").find(".img_normal").show();
//         $(self).hide();
//     });
//
//     $(".img_normal").each(function () {
//         var self = this;
//         $(this).click(function () {
//             $(self).parent(".group_fun").find(".btn_normal").show();
//             $(self).hide();
//         });
//     });
//
// });
//
// /**
//  * 截取url
//  * */
// function GetQueryString(name)
// {
//     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
//     var r = window.location.search.substr(1).match(reg);
//     if(r!=null)return  unescape(r[2]); return null;
// }
$(function () {

    $(".btn_normal").each(function () {
        var self = this;
        $(this).show();
        $(this).click(function () {
            $(self).parent(".group_fun").find(".img_normal").show();
            $(self).hide();
        });
    })

    $(".img_normal").each(function () {
        var self = this;
        $(this).click(function () {
            $(self).parent(".group_fun").find(".btn_normal").show();
            $(self).hide();
        });
    });

});