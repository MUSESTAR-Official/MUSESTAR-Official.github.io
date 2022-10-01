/**
 * Created by Shen.L on 2016/1/28.
 */

var SinTheme = function () {

    var chapter = {
        images: [],
        path: '',
        imageList: null,
        currentIndex: -1,
        preloadIndex: 1,
        busy: true
    };

    function getPage() {
        if (chapter.currentIndex > -1) return chapter.currentIndex;
        var hash = window.location.hash.substr(1);
        var temp = hash.split('&');
        var i = 0;
        while (temp[i]) {
            temp[i] = temp[i].split('=');
            if (temp[i][0] == 'p') {
                return parseInt(temp[i][1]);
            }
            i++;
        }
        return 1;
    }

    function getPreloadIndex() {
        chapter.preloadIndex = chapter.preloadIndex > chapter.currentIndex ? chapter.preloadIndex : chapter.currentIndex;
        return chapter.preloadIndex;
    }

    function getChapterScroll() {
        var chapterScroll = store.get('chapterScroll');
        if (chapterScroll) return chapterScroll == 'scroll';
        return SinConf.desktop.chapter.mode;
    }

    function setChapterScroll(mod) {
        store.set('chapterScroll', mod ? 'scroll' : 'pagination');
        window.location.reload();
    }

    function getChapterAutoSize() {
        var chapterAutoSize = store.get('chapterAutoSize');
        if (chapterAutoSize) return chapterAutoSize == 'autoSize';
        return SinConf.chapterAutoSize;
    }

    function setChapterAutoSize(autoSize) {
        store.set('chapterAutoSize', autoSize ? 'autoSize' : 'original');
        window.location.reload();
    }

    /**
     * 获取当前图片页码
     * @returns {*}
     */
    function getImageIndex() {
        var images_height = chapter.imageList.offset().top;
        var c = document.documentElement.clientHeight || document.body.clientHeight, t = $document.scrollTop();
        var scroll_height = t + c;
        var images = chapter.imageList.find('img');
        var imageIndex = images.length;
        images.each(function (i) {
            images_height += $(this).height();
            if (images_height > scroll_height) {
                imageIndex = $(this).data('index') || 1;
                return false;
            }
        });
        return chapter.currentIndex = imageIndex;
    }


    function handleScrollTop() {
        var offset = 300;
        var duration = 500;
        var fn = function (e) {
            if ($window.scrollTop() > offset) {
                $('.scroll-top').fadeIn(duration);
            } else {
                $('.scroll-top').fadeOut(duration);
            }
        };
        if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {  // ios supported
            $window.bind("touchend touchcancel touchleave", fn);
        } else {  // general
            console.log('general');
            $window.scroll(fn);
        }
    }

    function handleSearch() {
        // 绑定搜索按钮绑定事件和关键字变化时间
        var keywords = $('#keywords'), keywordsValue, timeout = 0, suggest = -1, resultCount = 0, resultItems,
            searchResult = $('#search-results'),
            renderResult = function (data, selector, template) {
                var render = baidu.template('search-template');
                searchResult.html(render(data));
                searchResult.fadeIn();
                resultItems = searchResult.find('li');
                resultItems.mouseover(function () {
                    suggest = resultItems.index(this);
                    selectSuggest();
                });
                resultCount = data.items.length;
            },
            submitSearch = function () {
                if (suggest > -1) {
                    window.location.href = searchResult.find("li").eq(suggest).data("url");
                } else {
                    keywordsValue = keywords.val();
                    if (keywordsValue == '' || keywordsValue == undefined || keywordsValue == null) {
                        keywords.focus();
                        return alert('请输入关键字');
                    }
                    window.location.href = '/search/?keywords=' + keywords.val();
                }
            },
            ajaxSearch = function (e) {
                timeout && clearTimeout(timeout);
                timeout = setTimeout(function () {
                    keywordsValue = keywords.val();
                    if (keywordsValue == '') {
                        searchResult.fadeOut();
                        return;
                    }
                    SinMH.search(keywordsValue, function (res) {
                        renderResult(res);
                    });
                }, 500);
            },
            selectSuggest = function () {
                if (suggest = suggest < -1 ? resultCount - 1 : suggest >= resultCount ? -1 : suggest, suggest == -1)keywords.val(keywordsValue);
                else {
                    var selected = resultItems.removeClass("selected").eq(suggest);
                    selected.addClass("selected");
                    keywords.val(selected.attr("title"));
                }
                console.log(suggest, resultCount);
            };
        $('#btnSearch').click(submitSearch);
        $window.click(function () {
            searchResult.fadeOut();
        });
        keywords.focus(ajaxSearch).blur(function (e) {
            setTimeout(function () {
                searchResult.fadeOut();
            }, 300);
        }).keyup(function (e) {
            if (e.stopPropagation(), e.keyCode == 13)submitSearch();
            else {
                if (searchResult[0].style.display != "none")switch (e.keyCode) {
                    case 13:
                        submitSearch();
                        break;
                    case 27:
                        console.log('esc');
                        suggest != -1 ? (suggest = -1, selectSuggest()) : searchResult.fadeOut();
                        break;
                    case 38:
                        suggest--;
                        selectSuggest();
                        break;
                    case 40:
                        suggest++;
                        selectSuggest();
                        break;
                    default:
                        ajaxSearch();
                } else switch (e.keyCode) {
                    case 27:
                        break;
                    case 38:
                    case 40:
                        resultCount > 0 && searchResult.fadeIn();
                        break;
                    default:
                        ajaxSearch();
                }
            }
        });
    }

    function chapterSort() {
        $('.chapter-sort').click(function () {
            var order = $(this).data('order');
            var key = $(this).parent().data('key');
            var obj = $('#chapter-list-' + key);
            var sort = obj.data('sort') || 'asc';
            order = order || 'asc';
            if (sort == order) return;
            var chapters = obj.children('li');
            chapters = $.makeArray(chapters);
            chapters.reverse();
            obj.html(chapters);
            obj.data('sort', order);
            $(this).addClass('active').siblings().removeClass('active');
        });
    }

    function chapterCollapse() {
        $('.action-collapse').click(function (e) {
            console.log('章节折叠');
            var collapse = $(this).data('collapse');
            var key = $(this).parent().data('key');
            var obj = $('#chapter-list-' + key);
            console.log(collapse, key, obj);

            if (collapse == 1) {
                obj.removeClass('chapter-collapse');
                $(this).data('collapse', 0);
                $(this).text('折叠→');
            } else {
                obj.addClass('chapter-collapse');
                $(this).data('collapse', 1);
                $(this).text('展开↓');
            }
        });
    }

    function comicSubscribe(comic_id) {
        var updateSubscribe = function () {
            var subscribe = store.getSubscribe(comic_id);
            if (subscribe != null) {
                var readTo = subscribe.read_chapter == null ? '尚未阅读' : '<a href="' + subscribe.read_chapter_url + '">' + subscribe.read_chapter + '</a>';
                $("#div-subscribe").hide();
                $("#div-subscribed").show();
                $("#read-to").html(readTo);
            } else {
                $("#div-subscribed").hide();
                $("#div-subscribe").show();
            }
        };
        $('#subscribe').click(function () {
            SinMH.subscribe(comic_id, function (res) {
                if (res.status == 0) {
                    alertModal('订阅成功');
                    updateSubscribe();
                } else alertModal(res.data);
            });
        });
        $('#remove-subscribe').click(function () {
            SinMH.subscribe(comic_id, 'delete', function (res) {
                if (res.status == 0) {
                    alertModal('取消订阅成功');
                    updateSubscribe();
                } else alertModal(res.data);
            });
        });
        updateSubscribe();
    }

    function comicOpinion(comic_id) {
        $('.vote .item').click(function () {
            var that = $(this);
            var option = that.data('option');
            SinMH.comicOpinion(comic_id, option, function (res) {
                if (res.status == 0) {
                    var optionCount = that.find('p').first();
                    optionCount.text(parseInt(optionCount.text()) + 1);
                    alertModal('投票成功');
                } else {
                    alertModal(res.data);
                }
            })
        });
    }

    function comicScore(comic_id) {
        var starTips = ["请投票","差劲", "无聊", "一般", "好看", "力荐"],
            voteTip = $("#voteTip"),
            rating = $('#voteBox'),
            setScore = function (score) {
                voteTip.text(starTips[score]);
                rating.find('#v'+score).addClass('active').attr('title', '您已经评过分了，您的评分为' + score + '分。');
                rating.find('a').off("mouseenter mouseleave");
            };
        rating.find('a').hover(function (event) {
            voteTip.text(starTips[$(this).data('stars')]);
        },function (event) {
            voteTip.text(starTips[0]);
        }).click(function () {
            var star = $(this).data('stars');
            SinMH.comicScore(comic_id, star, function (res) {
                if (res.status == 0) {
                    var scoreCount = $('#scoreCount');
                    scoreCount.text(parseInt(scoreCount.text()) + 1);
                    alertModal('评分成功');
                    setScore(star);
                } else {
                    alertModal(res.data);
                }
            });
        });
        if ($.cookie('score-' + comic_id) != undefined) {
            setScore($.cookie('score-' + comic_id));
        }
    }

    function comicDescription(){
        $("#intro-act").click(function () {
            $this = $(this);
            console.log($this.data('expand'));
            if($this.data('expand')){
                $this.data('expand',0).removeClass("intro-up");
                $("#intro-cut").show();
                $("#intro-all").hide();
            }else{
                $this.data('expand',1).addClass("intro-up");
                $("#intro-cut").hide();
                $("#intro-all").show();
            }
        });
    }

    function prevPage() {
        if (chapter.currentIndex <= 1) {
            alert('已经是第一页');
            return true;
        }
        jumpPage(--chapter.currentIndex);
        /*showImage(--chapter.currentIndex);
        window.location.hash = 'p=' + chapter.currentIndex;
        return false;*/
    }

    function nextPage() {
        if (chapter.currentIndex >= SinMH.getChapterImageCount()) {
            alert('已经是最后一页');
            return true;
        }
        jumpPage(++chapter.currentIndex);
        /*showImage(++chapter.currentIndex);
        chapter.currentIndex > chapter.historyIndex && (chapter.historyIndex = chapter.currentIndex) && SinMH.addHistory();
        window.location.hash = 'p=' + chapter.currentIndex;*/
    }

    function renderPageSelect(pageCount, current, selector) {
        // TODO 渲染翻页选择组件
        var select_str = '';
        for (var i = 1; i <= pageCount; i++) {
            if (current == i) {
                select_str += '<option value=' + i + ' selected="selected">第' + i + '页</option>';
            } else {
                select_str += '<option value=' + i + '>第' + i + '页</option>';
            }
        }
        $(selector).html(select_str);
    }

    function jumpPage(page){
        chapter.currentIndex=page;
        showImage(chapter.currentIndex);
        chapter.currentIndex > chapter.historyIndex && (chapter.historyIndex = chapter.currentIndex) && SinMH.addHistory();
        window.location.hash = 'p=' + chapter.currentIndex;
    }

    function prevChapter() {
        if (prevChapterData.id && prevChapterData.id > 0) {
            window.location.href = comicUrl + prevChapterData.id + '.html';
            return;
        }
        alert('已经是第一章了');
    }

    function nextChapter() {
        if (nextChapterData.id && nextChapterData.id > 0) {
            window.location.href = comicUrl + nextChapterData.id + '.html';
            return;
        }
        alert('已经是最后一章了');
    }

    /**
     * 预加载图片
     */
    function preloadImage() {
        // 若是滚动则直接显示并继续加载，否则加载仅加载图片
        var page = getPreloadIndex() + 1;
        if (page > SinMH.getChapterImageCount() || page - chapter.currentIndex > SinConf.desktop.chapter.maxPreload) return;
        chapter.preloadIndex++;
        console.log('预加载' + chapter.preloadIndex);
        if (getChapterScroll()) {
            showImage(page);
        } else {
            $.preLoadImg(SinMH.getChapterImage(page));
        }
    }

    function showImage(page) {
        //根据page获取图片地址
        if (page == undefined && getChapterScroll()) {
            chapter.scrollStart = getPage();
        }
        page = page || getPage();
        var imgUrl = SinMH.getChapterImage(page);
        var imgStr = '<img src="' + imgUrl + '" data-index="' + page + '"/>';
        var imgInfo = '<p class="img_info">(' + page + '/' + SinMH.getChapterImageCount() + ')</p>';
        var loading = $('#imgLoading');
        loading.show();
        if (getChapterScroll()) {
            chapter.imageList.append(imgStr);
        } else {
            $("#page").text(page);
            chapter.imageList.html(imgStr);
        }
        var lastObj = chapter.imageList.find('img').last();
        lastObj.hide();
        var showAndPreload = function () {
            lastObj.show();
            loading.hide();
            if (chapter.scrollStart > 1) {
                chapter.imageList.prepend('<p><a href="javascript:SinMH.chapterReload()" >查看完整章节</a></p>');
                chapter.scrollStart = 0;
            }
            SinMH.getChapterImageCount() > 0 && chapter.imageList.append(imgInfo);
            renderPageSelect(SinMH.getChapterImageCount(),chapter.currentIndex,'.pageSelect');
            preloadImage();
        };
        if (getChapterAutoSize()) {
            lastObj.imgAutoSize(chapter.imageList.width(), 0, function () {
                showAndPreload();
            });
        } else {
            $.preLoadImg(imgUrl, function () {
                showAndPreload();
            });
        }

    }

    function chapterScroll() {
        if (!getChapterScroll()) {
            $('#chapter-pagination').addClass('active');
            return;
        }
        $('#chapter-scroll').addClass('active');
        $('.nav-pagination').hide();
        var sTimer = null;
        $window.scroll(function chapterScrollHandler() {
            getImageIndex() > chapter.historyIndex && (chapter.historyIndex = chapter.currentIndex) && SinMH.addHistory();
            clearTimeout(sTimer);
            sTimer = setTimeout(function () {
                    if (window.loaded == 1) {
                        $window.unbind("scroll", chapterScrollHandler);
                    }
                    preloadImage();
                    return;
                    /*var c = document.documentElement.clientHeight || document.body.clientHeight, t = $document.scrollTop();
                     if (t + c >= chapter.imageList.offset().top + chapter.imageList.height() - 600) {
                     preloadImage();
                     }*/
                },
                500
            );
        });
    }

    /**
     * 绑定章节详情热键
     */
    function chapterHotKeys() {
        var hotKeys = SinMH.getHotKeys();
        if (!getChapterScroll()) {
            $document.bind('keyup', hotKeys.prev, prevPage);
            $document.bind('keyup', hotKeys.next, nextPage);
        }
        $document.bind('keyup', hotKeys.prevChapter, prevChapter);
        $document.bind('keyup', hotKeys.nextChapter, nextChapter);
        $document.bind('keyup', hotKeys.back, function () {
            window.location.href = comicUrl;
        });
        $(".prevPage").text(hotKeys.prev);
        $(".nextPage").text(hotKeys.next);
        $(".prevChapter").text(hotKeys.prevChapter);
        $(".nextChapter").text(hotKeys.nextChapter);
        $(".back").text(hotKeys.back);
    }

    function comicHotKeys() {
        var hotKeys = SinMH.getHotKeys();
        // TODO 绑定漫画详情页快捷键
        $document.bind('keyup', hotKeys.read, read);
    }

    function renderResServer(selector, template) {
        var data = {list: SinConf.resHost};
        var render = baidu.template(template);
        $(selector).html(render(data));
    }

    function renderHistory(selector, template, lenght) {
        var data = {list: store.get('history')};
        lenght && data.list.length > lenght && data.list.splice(lenght, data.list.length - lenght);
        var render = baidu.template(template);
        $(selector).html(render(data));
        $window.one('sinHistoryUpdated', function () {
            renderHistory(selector, template, lenght);
        });
        $("#history").hover(function () {
            $(this).addClass("over");
        }, function () {
            $(this).removeClass("over");
        });
    }

    function alertModal(msg) {
        var $modal = $('#alert-modal');
        if (typeof msg == 'string') msg = {title: '提示信息', body: msg};
        $modal.find('.modal-title').text(msg.title);
        $modal.find('.modal-body').text(msg.body);
        $modal.modal('show');
    }

    function confirmModal(msg, fn) {
        var $modal = $('#confirm-modal');
        if (typeof msg == 'string') msg = {title: '提示信息', body: msg};
        $modal.find('.modal-title').text(msg.title);
        $modal.find('.modal-body').text(msg.body);
        $modal.modal('show');
        typeof fn != 'function' && (fn = function () {
            alert(22)
        });
        var btn = $modal.find('.btn-confirm');
        btn.click(fn);
        $modal.on('hidden.bs.modal', function () {
            btn.unbind();
        });
    }

    function toastModal(msg, fn) {
        var $modal = $('#toast-modal');
        if (typeof msg == 'string') msg = {title: '提示信息', body: msg};
        $modal.find('.modal-title').text(msg.title);
        $modal.find('.modal-body').text(msg.body);
        $modal.modal('show');
        typeof fn != 'function' && (fn = function () {
            alert(22)
        });
        var btn = $modal.find('.btn-confirm');
        btn.click(fn);
        $modal.on('hidden.bs.modal', function () {
            btn.unbind();
        });
    }

    function switchStyle(style){
        if(style !== undefined){
            store.set('style',parseInt(style));
        }else {
            style = parseInt(store.get('style')||0);
        }
        var styleCtrl = $("#skin");
        styleCtrl.find('li').removeClass('active').eq(style).addClass('active');
        var $body = $('body');
        for (var i=0;i<7;i++){
            $body.removeClass('style-'+i);
        }
        $body.addClass('style-'+style);
    }

    // 动态搜索

    function initUser() {

        if (null != SinMH.getToken()) {
            var identity = SinMH.getIdentity();
            $(".user-login").hide();
            $(".user-action").show();
            $("#username").html(identity['username']);
            $("#avatar").attr("src", identity['avatar']);

            //更新通知
            updateNotice();
            $window.on('sinSubscribeUpdated', function () {
                updateNotice();
            });
        } else {
            $(".user-login").show();
            $(".user-action").hide();
        }
    }

    function updateNotice(){
        var update_count = SinMH.countUnreadSubscribe();
        if (update_count > 0) {
            $("#update_notice").show();
            $("#update_count").html(update_count);
        } else {
            $("#update_notice").hide();
        }
    }

    return {
        init: function () {
            initUser();
            handleScrollTop();
            handleSearch();
            renderHistory('#hList', 'history-template');
            //chapterSort('.chapter-list-1',1);
        },
        initIndex: function () {

        },
        /**
         * 初始化漫画详情页
         * @param comic_id
         */
        initComic: function (comic_id) {
            // 漫画详情页初始化，章节排序/绑定订阅事件、投票、评分
            chapterSort();
            comicSubscribe(comic_id);
            comicOpinion(comic_id);
            comicScore(comic_id);
            comicDescription();
        },
        /**
         * 初始化章节阅读页
         * @param id
         * @param name
         * @param comic_id
         * @param comic_name
         * @returns {boolean}
         */
        initChapter: function (id, name, comic_id, comic_name) {
            //在此添加需要在阅读页初始化/绑定的事件
            //加载下一页、跳转上/下一页、跳转上/下一章，页面预加载
            chapter.imageList = $("#images");
            chapter.historyIndex = chapter.currentIndex = getPage();
            chapter.imageList.drag();
            switchStyle();
            showImage();
            chapterScroll();
            chapterSort();
            chapterCollapse();
            chapterHotKeys();
            renderResServer('#res-server', 'res-template');
            return true;
        },
        getPage: getPage,
        jumpPage:jumpPage,
        prevPage: prevPage,
        nextPage: nextPage,
        prevChapter: prevChapter,
        nextChapter: nextChapter,
        setChapterScroll: setChapterScroll,
        switchStyle:switchStyle,
        alert: alertModal,
        confirm: confirmModal,
        toast: toastModal,

    };
}();