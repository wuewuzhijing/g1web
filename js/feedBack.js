var cameraData = "";
var type = 0;

var mBridge = {};

$(function () {
    $(".picArea .picItem").each(function () {
        $(this).height($(this).width());//高度与宽度相等
    });

    $(".classFyList span").each(function (e,cb) {
        var self = this;
        $(self).click(function () {
            $(".classFyList span").removeClass("active");
            $(self).addClass("active");
            type = e ;
        })
    });

    $(".addPic").click(function () {
        $(".mask").show();
        $(".fixedUploadWrap").show().addClass("animated slideInUp")
    });
    $(".cancle").click(function () {
        $(".mask").hide();
        $(".fixedUploadWrap").removeClass("animated slideInUp").hide();
    });
    $(".fromAlbum").click(function () {
        onOpen("openFile");
        $(".mask").hide();
        $(".fixedUploadWrap").removeClass("animated slideInUp").hide();
    });
    $(".takePhoto").click(function () {
        onOpen("openCamera");
        $(".mask").hide();
        $(".fixedUploadWrap").removeClass("animated slideInUp").hide();
    });
    $(".deletePic").click(function () {
         $(".picItemOne").hide();
    });

    $(".mask").click(function () {
        $(this).hide();
        $(".fixedUploadWrap").removeClass("animated slideInUp").hide();
    });

    $('input[type="text"],textarea').on('click', function () {

            var target = this;
            setTimeout(function(){
                target.scrollIntoViewIfNeeded();
                //target.scrollIntoView(true);
                console.log('scrollIntoViewIfNeeded');
            },200);
        });

    $('#note').keyup(function(e,val2) {
        var len=this.value.length;
        $('#text-count').text(len);
    });
    $(".fixedSubmit").click(function(e,val2) {
        var content =  $('#note').val();
        var phone =  $('#call_num').val();
        if(isEmpty(phone)){
           Toast("手机号为空" , 2000);
        }else if(!checkMobile(phone)){
           Toast("手机号格式不正确" , 2000);
        }else{
            submitFromWeb(cameraData , type , content , phone );
        }
    });
    init();
});

  function connectWebViewJavascriptBridge(callback) {
             var bridge = window.WebViewJavascriptBridge || window.WKWebViewJavascriptBridge;
              if (bridge) { return callback(bridge); }
              var callbacks = window.WVJBCallbacks || window.WKWVJBCallbacks;
              if (callbacks) { return callbacks.push(callback); }
              window.WVJBCallbacks = window.WKWVJBCallbacks = [callback];
              if (window.WKWebViewJavascriptBridge) {
                //for https://github.com/Lision/WKWebViewJavascriptBridge
                window.webkit.messageHandlers.iOS_Native_InjectJavascript.postMessage(null);
              } else {
                //for https://github.com/marcuswestin/WebViewJavascriptBridge
                var WVJBIframe = document.createElement('iframe');
                WVJBIframe.style.display = 'none';
                WVJBIframe.src = 'https://__bridge_loaded__';
                document.documentElement.appendChild(WVJBIframe);
                setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0);
            	}
        }

       // 第一连接时初始化bridage
    function init(){
        connectWebViewJavascriptBridge(function(bridge) {
        mBridge = bridge;
//                bridge.init(function(message, responseCallback) {
//                    cameraData = message;
//                    $(".picItemOne").show();
//                    $(".camera").attr("src", "data:image/jpeg;base64," + message)
//                });
//
//                 // 注册一个"fileResult",
//                bridge.registerHandler("fileResult", function(data, responseCallback) {
//                    cameraData = data;
//                    $(".picItemOne").show();
//                    $(".camera").attr("src", "data:image/jpeg;base64," + data)
//                });
//
//                 // 注册一个"cameraResult",
//                bridge.registerHandler("cameraResult", function(data, responseCallback) {
//                    cameraData = data;
//                    $(".picItemOne").show();
//                    $(".camera").attr("src", "data:image/jpeg;base64," + data)
//                });

                bridge.registerHandler('fileResult', function(data, responseCallback) {
                    cameraData = data;
                    $(".picItemOne").show();
                    $(".camera").attr("src", "data:image/jpeg;base64," + data)
                });
                bridge.registerHandler('cameraResult', function(data, responseCallback) {
                    cameraData = data;
                    $(".picItemOne").show();
                    $(".camera").attr("src", "data:image/jpeg;base64," + data)
                });
            })
    }

    function onOpen(data) {
//        window.WebViewJavascriptBridge.callHandler(
//            'functionOpen'
//            , {'param': data }
//            , function(responseData) {
//               console.log("onOpen:responseData", responseData);
//            }
//        );

        mBridge.callHandler(
        'functionOpen'
        , {'param': data}
        , function(response) {
            console.log("onOpen:responseData");
        })
    }

    function submitFromWeb(cameraData , type , content , phone ) {
      console.log("submitFromWeb");
//         var data = {"cameraData": cameraData, "type": type,"content":content,"phone":phone};
         var data = {"img": cameraData ,'type': type,'text': content,'tel': phone};
//         window.WebViewJavascriptBridge.callHandler(
//            'submitFromWeb'
//            , data
//            , function(responseData) {
//               console.log("onOpen:responseData", responseData);
//            }
//         );

          mBridge.callHandler(
                 'submitFromWeb'
                 , data
                 , function(response) {
                     console.log("onOpen:responseData");
                 })
    }

