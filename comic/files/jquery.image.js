/**
 * Created by Shen.L on 2016/2/14.
 */

(function ($) {
    //预加载图片
    $.preLoadImg = function (url, fn) {
        var img = new Image();
        fn || (fn=function(){});
        img.src = url;
        if (img.complete) {
            fn.call(img);
        } else {
            img.onload = function () {
                fn.call(img);
                img.onload = null;
            };
            img.onerror = function () {
                //alert(img.src);
                fn.call(img);
            };
        };
    };

    //图片自适应大小
    $.fn.imgAutoSize = function (maxWidth, padding, callback) {
        var maxWidth = maxWidth || (this.innerWidth() - (padding || 0) );
        return this.each(function (i, img) {
            $.preLoadImg(this.src, function () {
                callback || (callback=function(){});
                callback.call(this);
                if (this.width > maxWidth) {
                    var height = maxWidth / this.width * this.height,
                        width = maxWidth;

                    img.width = width;
                    img.height = height;
                };
            });
        });
    };

    //图片拖动
    $.fn.drag = function(){
        var comicPic = null;
        var isChrome = navigator.userAgent.toLowerCase().match(/chrome\/([\d.]+)/);
        var element = isChrome ? 'body' : 'documentElement';
        this.mousedown(function(evt) {
            comicPic = $(this)[0];
            evt = evt || window.event;
            if (document.all && evt.button != 1) {
                return false;
            }

            oX = 2 * document[element].scrollLeft;
            cX = document[element].scrollLeft - evt.screenX;
            oY = 2 * document[element].scrollTop;
            cY = document[element].scrollTop - evt.screenY;

            if (comicPic.addEventListener) {
                comicPic.addEventListener("mousemove", moveHandler, true);
                comicPic.addEventListener("mouseup", upHandler, true);
            } else if (comicPic.attachEvent) {
                comicPic.setCapture( );
                comicPic.attachEvent("onmousemove", moveHandler);
                comicPic.attachEvent("onmouseup", upHandler);
                comicPic.attachEvent("onlosecapture", upHandler);
            } else {
                var oldmovehandler = comicPic.onmousemove;
                var olduphandler = comicPic.onmouseup;
                comicPic.onmousemove = moveHandler;
                comicPic.onmouseup = upHandler;
            }

            if (evt.stopPropagation) evt.stopPropagation( );
            else evt.cancelBubble = true;

            if (evt.preventDefault) evt.preventDefault( );
            else evt.returnValue = false;

            if (evt.stopPropagation) evt.stopPropagation( );
            else evt.cancelBubble = true;

            comicPic.style.cursor = "move";

            function moveHandler(evt) {
                mX = evt.screenX + cX;
                mY = evt.screenY + cY;
                window.scrollTo(oX - mX, oY - mY);
                if (evt.stopPropagation) evt.stopPropagation( );
                else evt.cancelBubble = true;
            }

            function upHandler(evt) {
                comicPic.style.cursor = "auto";
                if (comicPic.removeEventListener) {
                    comicPic.removeEventListener("mouseup", upHandler, true);
                    comicPic.removeEventListener("mousemove", moveHandler, true);
                } else if (comicPic.detachEvent) {
                    comicPic.detachEvent("onlosecapture", upHandler);
                    comicPic.detachEvent("onmouseup", upHandler);
                    comicPic.detachEvent("onmousemove", moveHandler);
                    comicPic.releaseCapture( );
                } else {
                    comicPic.onmouseup = olduphandler;
                    comicPic.onmousemove = oldmovehandler;
                }
                if (evt.stopPropagation) evt.stopPropagation( );
                else evt.cancelBubble = true;
            }
        });
    };
})(jQuery);