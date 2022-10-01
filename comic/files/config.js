var SinConf = function () {
    return {
        edition: 15,
        mainHost: {"desktop":"https://www.imitui.com","phone":"https://m.imitui.com"},
        apiHost: 'https://api.imitui.com',
        resHost: [{"name":"自动选择","domain":["https://res.imitui.com"]},{"name":"电信线路","domain":["https://res.imitui.com"]}],
        scheduler: "off",
        theme: {"basic":"dmzj","dmzj":{"background":{"mode":"rand","images":["01.png","02.png"]}}},
        common: [],
        desktop: {"chapter":{"mode":"scroll","reload":true,"maxPreload":1,"imageWidth":"auto"}},
        phone: {"chapter":{"mode":"pagination","reload":true,"maxPreload":1,"imageWidth":"auto"}},
        hotKeys: {"back":"backspace","read":"r","next":"right","prev":"left","nextChapter":"x","prevChapter":"z"},
        comicDiscuss: {"maxContentLent":1000,"minContentLent":3,"censor":false},
        toastPosition: 'toast-top-center',
        toastClose: true,
        init: function () {
        }
    };
}();

//toastr.options.positionClass = SinConf.toastPosition;
//toastr.options.closeButton = SinConf.toastClose;

var browser = navigator.userAgent.toLowerCase();
if(browser.indexOf('UBrowser') != -1||browser.indexOf('ucbrowser') != -1||browser.indexOf('quark') != -1){
    
$('.chapter-body').find('a').each(function(index,item){
var $item = $(item);
var src = $item.attr('href');
if(src){
    $item.attr('href',src.replace(".html",'.html?_t=3'));
}
});
$('#chapters').find('a').each(function(index,item){
var $item = $(item);
var src = $item.attr('href');
if(src){
    $item.attr('href',src.replace(".html",'.html?_t=3'));
}
});
$('#chapter-view').find('a').each(function(index,item){
var $item = $(item);
var src = $item.attr('href');
if(src){
    $item.attr('href',src.replace(".html",'.html?_t=3'));
}
});
}