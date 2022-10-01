/**
 * Created by Shen.L on 2016/1/28.
 */
try{
    var topHost = top.location.hostname;
    if (top.location.hostname !== window.location.hostname) {
        top.location.href =window.location.href;
    }
}catch(e){
    top.location.href = window.location.href;
}
var store = function () {
    return {
        get: function (key) {
            if (window.localStorage.getItem(key)) {
                return JSON.parse(window.localStorage.getItem(key));
            }
            return false;
        },
        set: function (key, value) {
            if (value === undefined) {
                window.localStorage.removeItem(key);
            } else {
                window.localStorage.setItem(key, JSON.stringify(value));
            }
            return window.localStorage.getItem(key);
        },
        setSubscribe: function (item) {
            this.removeSubscribe(item.comic_id);
            var subscribes = this.get('subscribe');
            if (subscribes === false) subscribes = [];
            subscribes.unshift(item);
            this.set('subscribe', subscribes);
        },
        /**
         * 获取指定订阅
         * @param id
         * @returns {Object}
         */
        getSubscribe: function (id) {
            var subscribes = this.get('subscribe');
            if (subscribes === false) return null;
            var l = subscribes.length;
            for (var i = 0; i < l; i++) {
                if (subscribes[i].comic_id == id) {
                    return subscribes[i];
                }
            }
            return null;
        },
        removeSubscribe: function (id) {
            var subscribes = this.get('subscribe');
            if (subscribes === false) return true;
            var l = subscribes.length;
            for (var i = 0; i < l; i++) {
                if (subscribes[i].comic_id == id) {
                    subscribes.splice(i, 1);
                    this.set('subscribe', subscribes);
                    return true;
                }
            }
        },
        setHistory: function (item) {
            this.removeHistory(item.comic_id);
            var histories = this.get('history');
            if (histories === false) histories = [];
            histories.unshift(item);
            this.set('history', histories);
        },
        getHistory: function (id) {
            var histories = this.get('history');
            if (histories === false) return null;
            var l = histories.length;
            for (var i = 0; i < l; i++) {
                if (histories[i].comic_id == id) {
                    return histories[i];
                }
            }
            return null;
        },
        removeHistory: function (id) {
            var histories = this.get('history');
            if (histories === false) return true;
            var l = histories.length;
            for (var i = 0; i < l; i++) {
                if (histories[i].comic_id == id) {
                    histories.splice(i, 1);
                    this.set('history', histories);
                    return true;
                }
            }
        },
        clearHistory: function () {
            return this.set('history', []);
        },
    }
}();
Date.prototype.datetime = function() {return this.getFullYear() + '-' +('0' + (this.getMonth()+1)).slice(-2)+ '-' +  this.getDate() + ' '+this.getHours()+ ':'+('0' + (this.getMinutes())).slice(-2)+ ':'+this.getSeconds(); };
Date.prototype.date = function() {return this.getFullYear() + '-' +('0' + (this.getMonth()+1)).slice(-2)+ '-' +  this.getDate(); };
Date.prototype.time = function() {return this.getHours()+ ':'+('0' + (this.getMinutes())).slice(-2)+ ':'+this.getSeconds(); };
var filter = function () {
    return {
        asDuration: function (timestamp) {
            if (timestamp < 2147483647) timestamp *= 1000;
            var str = "";
            var minute = Math.round((new Date().getTime() - parseInt(timestamp) ) / (1000 * 60));
            if (minute < 60) {
                str = (minute ? minute : 1) + '分钟前';
            } else if (minute < (60 * 24)) {
                str = Math.round(minute / 60) + '小时前';
            } else {
                str = Math.round(minute / (60 * 24)) + '天前';
            }
            return str;
        },
        asDate: function (timestamp) {
            if (timestamp < 2147483647) timestamp *= 1000;
            var date = new Date(timestamp);
            return date.toLocaleDateString();
        },
        asTime: function (timestamp) {
            if (timestamp < 2147483647) timestamp *= 1000;
            var date = new Date(timestamp);
            return date.toLocaleTimeString();
        },
        asDateTime: function (timestamp) {
            if (timestamp < 2147483647) timestamp *= 1000;
            var date = new Date(timestamp);
            return date.toLocaleString();
        }
    }
}();
var trim = function (str, charlist) {
    charlist = charlist || ' \t\n\r\x0B';
    return str.replace(new RegExp('(^[' + charlist + ']+)|([' + charlist + ']+$)', 'g'), '');
};
String.prototype.trim = function (charlist) {
    charlist = charlist || ' \t\n\r\x0B';
    return this.replace(new RegExp('(^[' + charlist + ']+)|([' + charlist + ']+$)', 'g'), '');
};
String.prototype.ltrim = function (charlist) {
    charlist = charlist || ' \t\n\r\x0B';
    return this.replace(new RegExp('^[' + charlist + ']+', 'g'), '');
};
String.prototype.rtrim = function (charlist) {
    charlist = charlist || ' \t\n\r\x0B';
    return this.replace(new RegExp('[' + charlist + ']+$', 'g'), '');
};
var $document, $window, $body;
var SinMH = function ($) {
    var chapter = {};
    var resHost = false;

    function getToken() {
        return $.cookie('access_token');
    }

    function logout() {
        console.log('退出登录');
        $.cookie('access_token', null, {expires: -1,path:'/'});
        return true;
    }

    function getIdentity() {
        return JSON.parse($.cookie('identity'));
    }

    function getUrl(uri) {
        var url = SinConf.apiHost + uri;
        var accessToken = getToken();
        if (accessToken) {
            var seperator = url.indexOf('?') !== -1 ? '&' : '?';
            accessToken = 'access-token=' + accessToken;
            return url + seperator + accessToken;
        }
        return url;
    }

    function getResHost() {
        if (resHost !== false) return resHost;
        var index = store.get('resHostIndex');
        index = index && SinConf.resHost[index] ? index : 0;
        var hosts = SinConf.resHost[index];
        var domain;
        if (typeof hosts.domain === 'string') {
            domain = hosts.domain;
        } else {
            var l = hosts.domain.length;
            var r = Math.floor(Math.random() * l);
            domain = hosts.domain[r];
        }
        return resHost = {
            index: index,
            name: hosts.name,
            domain: domain
        };
    }

    function getResHostIndex() {
        var host = getResHost();
        return host.index;
    }

    function getResHostDomain() {
        var host = getResHost();
        return host.domain;
    }

    function getResHostName() {
        var host = getResHost();
        return host.name;
    }

    function setResHost(index) {
        store.set('resHostIndex', index);
        window.location.reload();
    }

    /**
     * 检查是否包含版本功能
     * @param edition
     * @returns {boolean}
     */
    function hasEdition(edition) {
        return (SinConf.edition&edition)>0;
    }

    function getHotKeys() {
        return SinConf.hotKeys
    }

    /**
     * 获取章节图片
     * @param page
     * @returns {string}
     */
    function getChapterImage(page) {
        var filename = chapter.images[page - 1];
        var host;
        if (typeof chapterImageHost !== "undefined"){
            host = chapterImageHost;
        }else {
            host = getResHostDomain().trim('/');
        }
        if (typeof getCih === "function"){
            host = getCih();
        }
        if (filename === undefined) return host + '/images/default/common.png';
        if (filename.match(/^https?:\/\/(images.dmzj.com|imgsmall.dmzj.com)/i)) return host+'/showImage.php?url='+encodeURI(filename);
        if (filename.match(/^[a-z]\//i)) return host+'/showImage.php?url='+encodeURI("https://images.dmzj.com/"+filename);
        if (filename.match(/^(http:|https:|ftp:|^)\/\//i)) return filename;
        if (filename.match(/^(\/|images?)/i)) return host + '/' + filename.ltrim('/');
        filename = chapter.path.trim('/') + '/' + filename.ltrim('/');
        return host + '/' + filename.ltrim('/');
    }
    function setChapterImages(images) {
        chapter.images = images;
    }


    /**
     * 漫画点击
     * @param comic_id 漫画ID
     */
    function comicClick(comic_id) {
        if ($.cookie('click-' + comic_id) !== undefined) return false;
        $.post(getUrl('/comic/click'), {comic_id: comic_id})
            .done(function () {
                $.cookie('click-' + comic_id, 1, {expires: 1, path: '/'});
            });
    }

    /**
     * 漫画人气
     * @param comic_id 漫画ID
     */
    function comicPopularity(comic_id) {
        if ($.cookie('popularity-' + comic_id) !== undefined) return false;
        $.post(getUrl('/comic/popularity'), {comic_id: comic_id}, function () {
            $.cookie('popularity-' + comic_id, 1, {expires: 1, path: '/'});
        }, 'json');
    }

    /**
     * 漫画投票，赞/反对
     * @param comic_id
     * @param option
     * @param fn
     */
    function comicOpinion(comic_id, option, fn) {
        if ($.cookie('option-' + comic_id) !== undefined) return fn({status: 1, data: '你已经投票过了！'});
        $.post(getUrl('/comic/option'), {comic_id: comic_id, option: option})
            .done(function (res) {
                $.cookie('option-' + comic_id, option, {expires: 1, path: '/'});
                typeof fn === 'function' && fn(res);
            })
            .fail(function (xhr, statusText) {
                var msg = '登录后才能投票';
                if (xhr.status == 401) {
                    msg = '登录已过期';
                    logout();
                }
                typeof fn === 'function' && fn({status: -1, data: msg});
            });
    }

    /**
     * 分享，1-5
     * @param comic_id
     * @param score
     * @param fn
     */
    function comicScore(comic_id, score, fn) {
        if ($.cookie('score-' + comic_id) !== undefined) return fn({status: 1, data: '你已经评分过了！'});
        $.post(getUrl('/comic/score'), {comic_id: comic_id, score: score})
            .done(function (res) {
                $.cookie('score-' + comic_id, score, {expires: 1, path: '/'});
                typeof fn === 'function' && fn(res);
            })
            .fail(function (xhr, statusText) {
                var msg = '登录后才能评分！';
                if (xhr.status == 401) {
                    msg = '登录已过期';
                    logout();
                }
                typeof fn === 'function' && fn({status: -1, data: msg});
            });
    }
    function doneShare(comic_id, chapter_id, fn) {
        $.post(getUrl('/user/quest/share'), {comic_id: comic_id, chapter_id: chapter_id})
            .done(function (res) {
                typeof fn === 'function' && fn(res);
            })
            .fail(function (xhr, statusText) {
                var msg = '登录后才能完成分享任务！';
                if (xhr.status == 401) {
                    msg = '登录已过期';
                    logout();
                }
                typeof fn === 'function' && fn({status: -1, data: msg});
            });
    }
    function getWeixinJsSdkConfig(app_id, fn) {
        if(typeof app_id === 'function'){
            fn = app_id;
            app_id = '';
        }
        $.get(getUrl('/weixinmp/jssdk-config'), {app_id: app_id})
            .done(function (res) {
                typeof fn === 'function' && fn(res);
            })
            .fail(function (xhr, statusText) {
                var msg = '请求JSSDK配置失败！';
                typeof fn === 'function' && fn({status: -1, data: msg});
            });
    }

    function gifts(fn) {
        //if ($.cookie('score-' + comic_id) !== undefined) return fn({status: 1, data: '你已经评分过了！'});
        $.post(getUrl('/vip/gift'))
            .done(function (res) {
                typeof fn === 'function' && fn(res);
            })
            .fail(function (xhr, statusText) {
                return;
                /*var msg = '登录后才能打赏！';
                if (xhr.status == 401) {
                    msg = '登录已过期';
                    logout();
                }
                typeof fn === 'function' && fn({status: -1, data: msg});*/
            });
    }
    function giftSend(option, fn) {
        //if ($.cookie('score-' + comic_id) !== undefined) return fn({status: 1, data: '你已经评分过了！'});
        $.post(getUrl('/vip/gift/send'), option)
            .done(function (res) {
                //$.cookie('score-' + comic_id, score, {expires: 1, path: '/'});
                typeof fn === 'function' && fn(res);
            })
            .fail(function (xhr, statusText) {
                var msg = '登录后才能打赏！';
                if (xhr.status == 401) {
                    msg = '登录已过期';
                    logout();
                }
                typeof fn === 'function' && fn({status: -1, data: msg});
            });
    }
    function vipTicket(comic_id, fn) {
        //if ($.cookie('score-' + comic_id) !== undefined) return fn({status: 1, data: '你已经评分过了！'});
        // 赠送月票
        $.post(getUrl('/vip/ticket'), {comic_id:comic_id})
            .done(function (res) {
                typeof fn === 'function' && fn(res);
            })
            .fail(function (xhr, statusText) {
                var msg = '登录后才能赠送月票！';
                if (xhr.status == 401) {
                    msg = '登录已过期';
                    logout();
                }
                typeof fn === 'function' && fn({status: -1, data: msg});
            });
    }

    /**
     * 漫画订阅，成功后更新漫画订阅列表，并且回调方法
     * @param comic_id
     * @param type
     * @param fn
     */
    function subscribe(comic_id, type, fn) {
        if (typeof type === 'function') {
            fn = type;
            type = 'post';
        }
        if (!getToken()) {
            typeof fn === 'function' && fn({status: -1, data: '您没有登录！'});
            return;
        }
        // 提交数据
        $.ajax({
            url: getUrl('/user/subscribe'),
            type: type,
            data: {comic_id: comic_id},
            dataType: 'json'
        })
            .done(function (res) {
                if (res.status == 0) {
                    if (type === 'post') {
                        store.setSubscribe(res.data);
                    } else if (type === 'delete') {
                        store.setSubscribe(res.data);
                    }
                }
                typeof fn === 'function' && fn(res);
                return $.event.trigger('sinSubscribeUpdated');
            })
            .fail(function (xhr, statusText) {
                var msg = '更新失败';
                if (xhr.status == 401) {
                    msg = '登录已过期';
                    logout();
                }
                typeof fn === 'function' && fn({status: -1, data: msg});
            });
    }
    
    function subscribeNotify(comic_id,notify,fn) {

        if (typeof notify === 'function') {
            fn = notify;
            notify = 1;
        }
        if (!getToken()) {
            typeof fn === 'function' && fn({status: -1, data: '您没有登录！'});
            return;
        }
        // 提交数据
        $.ajax({
            url: getUrl('/user/subscribe'),
            type: 'PUT',
            data: {comic_id: comic_id,notify_status:1},
            dataType: 'json'
        })
            .done(function (res) {
                if (res.status == 0) {
                    store.setSubscribe(res.data);
                }
                typeof fn === 'function' && fn(res);
                return $.event.trigger('sinSubscribeUpdated');
            })
            .fail(function (xhr, statusText) {
                var msg = '更新失败';
                if (xhr.status == 401) {
                    msg = '登录已过期';
                    logout();
                }
                typeof fn === 'function' && fn({status: -1, data: msg});
            });
    }

    /**
     * 更新全部订阅信息
     * @param fn
     */
    function updateSubscribes(fn) {
        if (!getToken()) {
            typeof fn === 'function' && fn({status: 0});
            return;
        }
        $.get(getUrl('/user/subscribe'))
            .done(function (res) {
                store.set('subscribe', res.items);
                typeof fn === 'function' && fn(res);
                return $.event.trigger('sinSubscribeUpdated');
            })
            .fail(function (xhr, statusText) {
                var msg = '更新失败';
                if (xhr.status == 401) {
                    msg = '登录已过期';
                    logout();
                }
                typeof fn === 'function' && fn({status: -1, data: msg});
            });
    }

    /**
     * 添加漫画阅读记录，此方法只能在漫画阅读页调用
     * @param fn
     */
    function addHistory(fn) {
        var history = store.getHistory(chapter.comic_id);
        var page = SinTheme.getPage();
        if (history !== null) {
            history.read_at = parseInt((new Date()).getTime() / 1000);
            history.read_chapter = chapter.name;
            history.read_chapter_id = chapter.id;
            history.read_chapter_url = window.location.pathname;
            history.read_page = page;
            store.setHistory(history);
            $.event.trigger('sinHistoryUpdated');
        }
        var subscribe = store.getSubscribe(chapter.comic_id);
        if (subscribe && subscribe.status == 0 && subscribe.update_chapter_id == chapter.id) {
            subscribe.status = 1;
            store.setSubscribe(subscribe);
            $.event.trigger('sinSubscribeUpdated');
        }
        if (!getToken()) {
            history = {
                comic_id: chapter.comic_id,
                comic_name:chapter.comic_name,
                comic_url: window.location.pathname.substring(0,window.location.pathname.lastIndexOf("/")+1),
                comic_cover:''
            };
            history.read_at = parseInt((new Date()).getTime() / 1000);
            history.read_chapter = chapter.name;
            history.read_chapter_id = chapter.id;
            history.read_chapter_url = window.location.pathname;
            history.read_page = page;
            store.setHistory(history);
            $.event.trigger('sinHistoryUpdated');
            typeof fn === 'function' && fn({status: 0});
            return;
        }
        $.post(getUrl('/history'), {
            comic_id: chapter.comic_id,
            read_chapter_id: chapter.id,
            read_chapter: chapter.name,
            read_page: page
        })
            .done(function (res) {
                store.setHistory(res.data);
                var subscribe = store.getSubscribe(chapter.comic_id);
                if (subscribe !== null) {
                    subscribe.read_at = res.data.read_at;
                    subscribe.read_chapter = res.data.read_chapter;
                    subscribe.read_chapter_id = res.data.read_chapter_id;
                    subscribe.read_chapter_url = res.data.read_chapter_url;
                    store.setSubscribe(subscribe);
                }
                $.event.trigger('sinHistoryUpdated');
                typeof fn === 'function' && fn(res);
            })
            .fail(function (xhr, statusText) {
                var msg = '登陆后才能同步浏览记录';
                if (xhr.status == 401) {
                    msg = '登录已过期';
                    logout();
                }
                typeof fn === 'function' && fn({status: -1, data: msg});
            });
    }

    /**
     * 删除历史记录
     * @param comic_id
     * @param fn
     * @returns {*}
     */
    function removeHistory(comic_id, fn) {
        if (!getToken()) {
            store.removeHistory(comic_id);
            if (typeof fn === 'function') fn({status: 0});
            return $.event.trigger('sinHistoryUpdated');
        }
        $.ajax({
            url: getUrl('/history'),
            type: 'delete',
            data: {comic_id: comic_id},
            dataType: 'json'
        })
            .done(function (res) {
                store.removeHistory(comic_id);
                typeof fn === 'function' && fn(res);
                return $.event.trigger('sinHistoryUpdated');
            })
            .fail(function (xhr, statusText) {
                var msg = '操作失败';
                if (xhr.status == 401) {
                    msg = '登录已过期';
                    logout();
                }
                typeof fn === 'function' && fn({status: -1, data: msg});
            });
    }

    /**
     * 清空历史记录
     * @param fn
     * @returns {*}
     */
    function clearHistory(fn) {
        if (!getToken()) {
            store.clearHistory();
            if (typeof fn === 'function') fn({status: 0});
            return $.event.trigger('sinHistoryUpdated');
        }
        $.ajax({
            url: getUrl('/history/clear'),
            type: 'post',
            data: {},
            dataType: 'json'
        })
            .done(function (res) {
                store.clearHistory();
                typeof fn === 'function' && fn(res);
                return $.event.trigger('sinHistoryUpdated');
            })
            .fail(function (xhr, statusText) {
                var msg = '操作失败';
                if (xhr.status == 401) {
                    msg = '登录已过期';
                    logout();
                }
                typeof fn === 'function' && fn({status: -1, data: msg});
            });
        ;
    }

    /**
     * 更新全部历史纪录信息
     */
    function updateHistories() {
        $.get(getUrl('/history'))
            .done(function (res) {
                var l = res.items.length;
                if (l <= 0) return;
                for (var i = 0; i < l; i++) {
                    store.setHistory(res.items[i]);
                }
                //排序
                var histories = store.get('history') || [];
                histories.sort(function (a, b) {
                    return b.read_at - a.read_at;
                });
                store.set('history', histories);
                return $.event.trigger('sinHistoryUpdated');
            })
            .fail(function (xhr, statusText) {
                var msg = '更新失败';
                if (xhr.status == 401) {
                    msg = '登录已过期';
                    logout();
                }
                typeof fn === 'function' && fn({status: -1, data: msg});
            });
    }

    /**
     * 更新本地数据，每间隔3600s执行一次
     */
    function updateLocalData() {
        var now = new Date().getTime();
        var lastUpdateLocalDataAt = store.get('updateLocalDataAt');
        if (undefined !== getToken() && (null === lastUpdateLocalDataAt || now - lastUpdateLocalDataAt > 3600 * 1000)) {
            updateHistories();
            updateSubscribes();
            store.set('updateLocalDataAt', now);
        }
        if (undefined === getToken()) {
            store.set('updateLocalDataAt');
        }
    }

    /**
     * 购买章节
     * @param id
     * @param renew 是否自动购买下一章
     * @param fn
     */
    function buyChapter(id,renew,fn) {
        if (!getToken()) { // 若未登录
            typeof fn === 'function' && fn({status: -1, data: '您没有登录！'});
            return;
        }
        if(typeof renew !== 'boolean'){
            fn = renew;
            renew = false;
        }
        $.ajax({
            type:"POST",
            url:getUrl('/vip/buy/one'),
            data:{id:id,renew:renew?1:0},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
        }).done(function (res) {
            if (res.status == 0) {
                typeof fn === 'function' && fn(res);
                return;
            }
            typeof fn === 'function' && fn({status: -1, data: res.data});
        }).fail(function (xhr,statusText) {
            typeof fn === 'function' && fn({status: -1, data: statusText});
        });
    }

    /**
     * 批量购买章节
     * @param ids
     * @param renew
     * @param fn
     */
    function buyChapters(ids,renew,fn) {
        if (!getToken()) { // 若未登录
            typeof fn === 'function' && fn({status: -1, data: '您没有登录！'});
            return;
        }

        if(typeof renew !== 'boolean'){
            fn = renew;
            renew = false;
        }
        $.ajax({
            type:"POST",
            url:getUrl('/vip/buy/all'),
            data:{ids:ids,renew:renew?1:0},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
        }).done(function (res) {
            if (res.status == 0) {
                typeof fn === 'function' && fn(res);
                return;
            }
            typeof fn === 'function' && fn({status: -1, data: res.data});
        }).fail(function (xhr,statusText) {
            typeof fn === 'function' && fn({status: -1, data: statusText});
        });
    }

    /**
     * 动态搜索
     * @param keywords
     * @param fn
     */
    function search(keywords, fn) {
        $.post(getUrl('/comic/search'), {keywords: keywords}, function (res) {
            typeof fn === 'function' && fn(res);
            return true;
        }, 'json');
    }

    /**
     * 重新加载章节页
     */
    function chapterReload() {
        window.location.hash = 'p=1';
        window.location.reload();
    }

    function launchScheduler() {
        if (SinConf.scheduler === 'on' || SinConf.scheduler === 'yes' || SinConf.scheduler == '1' || SinConf.scheduler === true) {
            // 判断当前是否整点
            var hour = Math.floor(new Date().getTime() / 3600 / 1000);
            if (hour == store.get('lastLaunchSchedulerHour')) return;
            $.get(getUrl('/scheduler/launch'), function (res) {
                store.set('lastLaunchSchedulerHour', hour);
            });
        }
    }

    function countUnreadSubscribe() {
        var subscribes = store.get('subscribe');
        var count = 0;
        $.each(subscribes, function (index, subscribe) {
            subscribe.status == 0 && count++;
        });
        return count;
    }

    function getComicDiscussCount(comic_id) {
        return $.get(getUrl('/comic/discuss/count'),{comic_id:comic_id})
    }
    function getComicDiscusses(comic_id,sort,page) {
        return $.get(getUrl('/comic/discuss/index'),{comic_id:comic_id,sort:sort,page:page})
    }
    function postComicDiscuss(param,fn) {
        $.post(getUrl('/comic/discuss/create'),param)
            .done(function (res) {
            if (res.status == 0) {
                typeof fn === 'function' && fn(res);
                return;
            }
            typeof fn === 'function' && fn({status: res.status, data: res.data});
        }).fail(function (xhr,statusText) {
            typeof fn === 'function' && fn({status: -1, data: statusText});
        });
    }
    function comicDiscussOpinion(param,fn) {
        var key = 'comic-discuss-opinion-' + param.id;
        if ($.cookie(key) !== undefined) return fn({status: 1, data: '你已经投票过了！'});

        $.post(getUrl('/comic/discuss/opinion'),param)
            .done(function (res) {
            if (res.status == 0) {
                $.cookie(key, param.opinion, {expires: 1, path: '/'});
                typeof fn === 'function' && fn(res);
                return;
            }
            typeof fn === 'function' && fn({status: -1, data: res.data});
        }).fail(function (xhr,statusText) {
            typeof fn === 'function' && fn({status: -1, data: statusText});
        });
    }

    function feedback(param,fn) {
        $.post(getUrl('/feedback/create/'),param)
            .done(function (res) {
                if (res.status == 0) {
                    typeof fn === 'function' && fn(res);
                    return;
                }
                typeof fn === 'function' && fn({status: -1, data: res.data});
            }).fail(function (xhr,statusText) {
                typeof fn === 'function' && fn({status: -1, data: statusText});
            });
    }

    return {
        edition:{
            basic:1,
            collect:2,
            vip:4,
            app:8,
        },
        init: function () {
            if (!window.localStorage || !window.JSON) {
                alert('您还在使用低版本的浏览器，请升级浏览器！');
            }
            updateLocalData();
            launchScheduler();
        },
        initIndex: function () {
        },
        /**
         * 初始化漫画详情
         * @param id
         */
        initComic: function (id) {
            comicClick(id);
        },
        /**
         * 初始化漫画章节
         * @param id
         * @param name
         * @param comic_id
         * @param comic_name
         */
        initChapter: function (id, name, comic_id, comic_name) {
            chapter = {id: id, name: name, comic_id: comic_id, comic_name: comic_name};
            chapter.images = chapterImages;
            chapter.path = chapterPath;
            comicPopularity(comic_id);
            addHistory(function (res) {
            });
        },
        subscribe: subscribe,
        subscribeNotify:subscribeNotify,
        vipTicket:vipTicket,
        gifts:gifts,
        giftSend:giftSend,
        getToken: getToken,
        getIdentity: getIdentity,
        hasEdition:hasEdition,
        updateSubscribes: updateSubscribes,
        comicOpinion: comicOpinion,
        comicScore: comicScore,
        addHistory: addHistory,
        removeHistory: removeHistory,
        clearHistory: clearHistory,
        updateHistories: updateHistories,
        setChapterImages: setChapterImages,
        getChapterImage: getChapterImage,
        chapterReload: chapterReload,
        buyChapter: buyChapter,
        buyChapters: buyChapters,
        search: search,
        getHotKeys: getHotKeys,
        getResHostIndex: getResHostIndex,
        getResHostName: getResHostName,
        getResHostDomain: getResHostDomain,
        setResHost: setResHost,
        countUnreadSubscribe: countUnreadSubscribe,
        doneShare:doneShare,
        getWeixinJsSdkConfig:getWeixinJsSdkConfig,
        getComicDiscusses:getComicDiscusses,
        getComicDiscussCount:getComicDiscussCount,
        postComicDiscuss:postComicDiscuss,
        comicDiscussOpinion:comicDiscussOpinion,
        feedback:feedback,
        getChapterImageCount: function () {
            return chapter.images.length;
        },
        addFavorite: function (url, name) {
            //url = url || "http://42.121.131.165:81/", name = name || "圣樱漫画，属于你的漫画乐园！";
            var ctrl = navigator.userAgent.toLowerCase().indexOf("mac") !== -1 ? "Command/Cmd" : "CTRL";
            try {
                document.all ? window.external.addFavorite(url, name) : window.sidebar ? window.sidebar.addPanel(name, url, "") : alert("您可以尝试通过快捷键" + ctrl + " + D 加入到收藏夹!")
            } catch (e) {
                alert("您可以尝试通过快捷键" + ctrl + " + D 加入到收藏夹!")
            }
        },
        scrollTo: function (selector, duration) {
            var height = typeof selector === 'number' ? selector : $(selector).offset().top;
            $('html,body').animate({scrollTop: height}, duration === undefined ? 300 : duration);
            //$document.scrollTop(300);
        },
        goBack: function (url) {
            if (document.referrer === '' || document.referrer.indexOf(window.location.host) === -1) {
                window.location.href = url?url:'/'
            } else {
                window.history.back();
                //console.log(window.history.go(-1));
                /*if (!window.history.go(-1)) {
                    window.location.href = document.referrer;
                }*/
            }
        },

    };
}(jQuery);
$(function () {
    $('.modal').on('show.bs.modal', function () {
        var $this = $(this);
        var $modal_dialog = $this.find('.modal-dialog');
        // 关键代码，如没将modal设置为 block，则$modala_dialog.height() 为零
        $this.css('display', 'block');
        $modal_dialog.css({'margin-top': Math.max(0, ($(window).height() - $modal_dialog.height()) / 2)});
    });
    toastr = window.toastr?window.toastr:{};
    toastr.options = {
        "closeButton": SinConf.toastClose,
        "debug": false,
        "positionClass": SinConf.toastPosition,
        "onclick": null,
        "showDuration": "1000",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };
    $document = $(document);
    $window = $(window);
    $body = $('body');
    yii.initModule(SinMH);
});