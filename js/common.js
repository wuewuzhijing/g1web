window.onload=function(){
    rootsize(); 
};
//当浏览器窗口大小改变时，设置根字号  
window.onresize=function(){  
     rootsize();  
};  
//cal兼容Google浏览器的写法
function rootsize(){
    var deviceWidth = document.documentElement.clientWidth;//获取页面可见宽度
    if(deviceWidth > 750) deviceWidth = 750;
//    document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';

    var htmlFs=getHtmlFs();
    var mediaFs=100/750*deviceWidth;
    if(htmlFs!==mediaFs && (htmlFs>mediaFs+1 || htmlFs<mediaFs-1)){
        document.documentElement.style.fontSize='100px';
        document.documentElement.style.fontSize=100/getHtmlFs()*mediaFs+'px';
    }
}
    function getHtmlFs(){
        return parseFloat(window.getComputedStyle(document.documentElement, null)['font-size']);
    }

function Toast(msg,duration){
        duration=isNaN(duration)?2000:duration;
        var m = document.createElement('div');
        m.innerHTML = msg;
        m.style.cssText="width:40%; padding:0 10px; background:#666666; height:30px; color:#fff; line-height:30px; text-align:center; border-radius:5px; font-size:14px; position:fixed; top:60%; left:30%; z-index:999999;";
        document.body.appendChild(m);
        setTimeout(function() {
            var d = 0.5;
            m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
            m.style.opacity = '0';
            setTimeout(function() { document.body.removeChild(m) }, d * 1000);
        }, duration);
    }


/**
 * 验证是否为电话号码（座机）
 */
function checkMobile(mobile){
      var myreg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
      if (!myreg.test(mobile)) {
          return false;
      } else {
          return true;
      }
}

/**
 * 判断字符串是否为空，若为空则返回true否则返回false
 */
function isEmpty(source){
    var str = source.replace(/(^\s*)|(\s*$)/g,"");
    if(str=="" || str.toLowerCase()=="null" || str.length<=0){
        return true;
    }else{
        return false;
    }
}

