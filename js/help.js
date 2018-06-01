$(function () {
    // $("#title").click(function () {
    //     window.opener = null;
    //     window.open("", "_self");
    //     window.close();
    // });

    var txt = [];
    var icon = [];
    var img_subhead = "";
    var txt_subhead = "";

    // var item = GetQueryString("item");
    var item = 1;
    if(item == null || item == undefined){
        alert("item参数异常");
        return;
    }else if (item == 1){
        img_subhead = "../img/help_icon_number1.png";
        icon = ["../img/help_img_question1_1.png","../img/help_img_question1_2.png","../img/help_img_question1_3.png"];
        txt_subhead = "场景控A1的使用操作流程";
        txt = [" 1、下载“艾韵智能”App，完成注册并登陆；</br> 2、场景控A1接通电源，指示灯进入红绿快闪状态；</br>" ,
            "3、通过App提示扫描场景控A1底部的二维码或者手动输入二维码下方的ID进行设备添加；</br>",
            "4、根据App上的用户提示引导场景控A1进行配网；</br>5、场景控A1添加成功后可通过三种匹配方式进行遥控器添加从而控制各类红外电器设备。</br>" ];
    }else if (item == 2){
        img_subhead = "../img/help_icon_number2.png";
        icon = ["../img/help_img_question2_1.png","../img/help_img_question2_2.png","../img/help_img_question2_3.png"];
        txt_subhead = "不同状态的指示灯说明";
        txt = ["1、红灯常亮：场景控A1发生故障或者网络发生故障（该指示灯状态下绝大多数为网络故障），需复位；</br>",
            "2、红绿快闪：场景控A1进入待引导连接状态，可连接当前WiFi；</br>3、红绿慢闪：场景控A1正在连接WiFi；</br>4、红绿慢闪变为绿灯常亮：场景控A1成功连接WiFi；</br>5、红绿灯一直慢闪：连接WiFi失败，将场景控A1复位后指示灯恢复红绿快闪状态，重新连网；</br>",
            "6、绿灯常亮：场景控A1成功连接WiFi进入正常工作状态，可添加遥控器并控制红外电器；</br>",
            "7、绿灯常亮红灯闪一下：场景控A1设备成功发射红外指令一次；</br>"];
    }else if (item == 3){
        img_subhead = "../img/help_icon_number3.png";
        icon = ["../img/help_img_question3_1.png","../img/help_img_question3_2.png"];
        txt_subhead = "如何进入学习模式并学习红外指令？";
        txt = ["1、打开App→点击需要学习的遥控器→长按需要学习的按键→App页面出现遥控器学习提示弹窗→根据App页面提示按下被学习的实体遥控按键→场景控A1成功接收到红外码值并学习；</br>",
            "2、红外指令学习成功或失败，App上都会有对应的提示；</br>" +
            "3、红外指令学习成功后，系统自动保存数据，继续学习需要学习的按键即可；</br>" +
            "4、如若红外指令学习失败，可能是场景控A1学习到了空数据或者脏数据，因为红外学习极易受到干扰，重新学习一次即可；</br>" +
            "5、如若一直学习不成功，请拨打客服热线咨询解决方案。</br>"];
    }else if (item == 4){
        img_subhead = "../img/help_icon_number4.png";
        icon = ["../img/help_img_question4_1.png","../img/help_img_question4_2.png"];
        txt_subhead = "影响场景控A1功能的原因";
        txt = ["1、红外不能穿墙且障碍物容易阻挡红外，为了不影响红外发射，使用时请将场景控A1置于房间空阔地带，避免遮挡;</br>" +
        "2、场景控A1使用环境周边的障碍物太多太密集会影响红外的使用效果；</br>" +
        "3、未选择配件清单中DC 5V/1A规格的电源适配器与场景控A1配套使用容易造成设备失灵；</br>" +
        "4、电器设备的红外接收面板区域是否尽量朝向场景控A1；</br>",
        "5、场景控A1使用环境周边的障碍物太多太密集会影响红外的使用效果；</br>" ];
    }else if (item == 5){
        img_subhead = "../img/help_icon_number5.png";
        txt_subhead = "场景控A1红外辐射的范围";
        txt = ["1、场景控A1自带七个红外发射管，每个红外发射管的红外辐射角度都达到120°，红外信号覆盖率达到360°无死角；</br>" +
        "2、场景控A1采用特殊的红外透光材料，透光率达到了95%，红外信号进一步加强；</br>" +
        "3、场景控A1具有超大功率红外发射器，红外发射距离至少可达10M。</br>"];
    }else if (item == 6){
        img_subhead = "../img/help_icon_number6.png";
        icon = ["../img/help_img_question6.png"];
        txt_subhead = "扫描场景控A1底部二维码或输入设备ID无法进入配网页面?";
        txt = ["1、检查场景控A1底部的二维码是否刮花或者手动输入的设备ID是否有误。</br>" ];
    }else if (item == 7){
        img_subhead = "../img/help_icon_number7.png";
        txt_subhead = "场景控A1配不了网?";
        txt = ["1、根据场景控A1的指示灯状态检查场景控A1处于（指示灯红绿快闪）配网状态；</br>" +
        "2、检查无线路由器是否通讯正常；</br>" +
        "3、检查WiFi密码是否输入错误；</br>" +
        "4、根据App页面提示检查是否因为操作有误导致的场景控A1配网失败。</br>" ];
    }else if (item == 8){
        img_subhead = "../img/help_icon_number8.png";
        icon = ["../img/help_img_question8.png"];
        txt_subhead = "为什么遥控器控制电器设备没反应？";
        txt = ["1、场景控A1放置的位置影响到红外的发射，可更换场景控A1的摆放位置，建议将场景控A1放置在空阔地带，避免遮挡；</br>2、场景控A1的红外发射管没有对准电器设备的红外接收，对准红外接收即可；</br>",
            "3、检查场景控A1的指示灯是否处于正常工作状态，如若指示灯显示异常，根据指示灯状态说明完成相应操作；</br>4、检查手机连接的网络是否正常。</br>" ];
    }else if (item == 9){
        img_subhead = "../img/help_icon_number9.png";
        txt_subhead = "软件遥控器页面提示“遥控器指令发送失败，请重试”？";
        txt = ["1、场景控A1断电；</br>" +
        "解决方法：场景控A1重新上电。</br>" +
        "2、场景控A1断网或者是WiFi信号强度不佳导致延时；</br>" +
        "解决方法：检查家里的网络是否正常，如果更换了路由器或者修改了WiFi密码导致场景控A1没有连接网络，需要重新配网。</br>" +
        "3、场景控A1被复位；</br>" +
        "解决方案：重新配网，配网方式与场景控A1使用方式一致。</br>" ];
    }else if (item == 10){
        img_subhead = "../img/help_icon_number10.png";
        icon = ["../img/help_img_question10_1.png","../img/help_img_question10_2.png"];
        txt_subhead = "无法找到合适的遥控器码库？";
        txt = ["方法一：通过自定义功能DIY遥控器并完成自定义按键码值学习；</br>" +
        "操作步骤：点击“添加遥控”→在选择遥控器品类页面点击“自定义”→输入遥控器名称并点击“下一步”→点击“添加按钮”选择按钮类型并完成按钮添加→长按添加好的按钮可以进行拖动，点击添加好的按钮进行码值学习→完成后点击“保存”。</br>",
        "方法二：在对应品类遥控器码库中任意选择一个型号并逐个学习无效按键</br>" +
        "操作步骤：点击“添加遥控”→在选择遥控器品类页面点击对应的遥控器类型→选择“型号匹配”→任意选择一个型号→点击添加好的遥控器，长按需要学习的按键→App页面出现遥控器学习提示弹窗→根据App页面提示按下被学习的实体遥控按键→听到场景控A1”滴”的一声→代表设备场景控A1成功接收到红外码值。</br>"];
    }else if (item == 11){
        img_subhead = "../img/help_icon_number11.png";
        icon = ["../img/help_img_question11_1.png","../img/help_img_question11_2.png"];
        txt_subhead = "遥控器无法点击控制？";
        txt = ["1、场景控A1不在线，不在线的原因三种：①场景控A1断电；②场景控A1断网；③场景控A1被复位；</br>" +
        "解决方法：①场景控A1重新上电；②检查家里的网络是否正常，如果更换了路由器或者修改了WiFi密码导致场景控A1没有连接网络，需要重新配网；③重新配网，配网方式与场景控A1使用方式一致。</br>",
            "2、场景控A1所属区域发生改变，举例说明:比如一开始场景控A1是属于卧室区域，用户在房间模块操作编辑设备或删除房间导致该场景控A1所属区域发生改变，那与该场景控A1相关联的所有遥控器都将变成不可控制状态；（备注：删除房间后该房间的所有设备都将放入默认房间）</br>",
            "3、场景控A1被删除，用户删除场景控A1后，与该场景控A1相关联的所有遥控器都将变成不可控制状态。</br>解决方法：重新添加设备，添加设备方式即场景控A1使用方式，添加成功后该场景控的所属区域必须与原来相同。</br>" ];
    }else if (item == 12){
        img_subhead = "../img/help_icon_number12.png";
        txt_subhead = "联系方式";
        txt = ["艾韵智能(深圳)有限公司" + "</br>" +
        "地址：深圳市南山区桃园街道塘兴路集悦城•桃园智谷A21栋" +  "</br>" +
        "客服电话：4008625288</br>" ];
    }

    $("#img_subhead").attr("src",img_subhead);
    $("#txt_subhead").text(txt_subhead);

    $(".btn_normal").each(function (index,element) {
        var self = this;
        $(self).parent(".group_fun").find(".content_txt").html(txt[index]);
        $(self).parent(".group_fun").find(".img_normal").attr("src",icon[index]);
        if(icon[index] == undefined){
            $(this).hide();
        }else{
            $(this).show();
            $(this).click(function () {
                $(self).parent(".group_fun").find(".img_normal").show();
                $(self).hide();
            });
        }

    });

    $(".img_normal").each(function () {
        var self = this;
        $(this).click(function () {
            $(self).parent(".group_fun").find(".btn_normal").show();
            $(self).hide();
        });
    });


});

/**
 * 截取url
 * */
function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}
