var publicKey = "";
var sign = "";
var time = "";
var chapterImageHost = undefined;
var sinChapter = function SinChapter() {
    var mType = '';
    var mDate = 0;
    var mCount = 0;
    var mItems = [];

    function getNodeHost(path,sum=256){
        var a = path.match(/images\/\w\/(.{2})/i);
        var weight = 1;
        if (a!==null&&a[1]) {
            weight = parseInt('0x'+a[1],16);
        }
        var hosts = nodeHosts;
        //console.log(nodeHosts);
        var total = 0;
        hosts.forEach(function (item) {
            if (typeof item === "string") {
                item = {weight: 1, value: item};
            }
            if (!item.value) {
                return;
            }
            total += item.weight?item.weight:1;
        });
        total = total>0?total:1;
        var host = null;
        var w=0;
        hosts.forEach(function (item) {
            if (host!==null) {
                return;
            }
            if (typeof item === "string") {
                item = {weight: 1, value: item};
            }
            if (!item.value) {
                return;
            }
            w += (item.weight?item.weight:1)/total*sum;
            console.log(w);
            if (w>weight){
                host = item.value;
            }
        });
        return host;
    }

    function show(type,items) {
        if (typeof type !== 'undefined'){
            mType = type;
        }
        if (typeof items !== 'undefined'){
            mItems = items;
        }

        mDate = window.localStorage.getItem(mType+'_date');
        mCount = window.localStorage.getItem(mType+'_count');
        // 判断当前时间
        var today = new Date(new Date().setHours(0, 0, 0, 0)).getTime() / 1000;
        var isNewDay = typeof mDate === "undefined" || typeof mCount === "undefined" || today > mDate;
        if (isNewDay) {
            mDate = today;
            mCount = 0;
        }
        // 更新剩余显示次数
        // 总数
        var total = 0;
        // 剩余总数
        var rest = 0;
        for (var i in mItems) {
            if (!mItems.hasOwnProperty(i)) continue;
            var item = mItems[i];
            var key = mType+"_item_" + item.id;
            var itemCount = window.localStorage.getItem(key);
            if (isNewDay||typeof itemCount === "undefined") {
                itemCount = 0;
                window.localStorage.setItem(key,itemCount);
            }
            total += mItems[i].total;
            mItems[i].rest = mItems[i].total - itemCount;
            rest += mItems[i].rest;
        }
        if (mCount >= total||rest<=0) {
            return;
        }
        var rand = Math.random()*rest;
        var n = 0;
        for (var i in mItems) {
            if (!mItems.hasOwnProperty(i)) continue;
            var item = mItems[i];
            n += item.rest;
            if (item.rest>0&&(item.first||n>rand)){
                showItem(item);
                break;
            }
        }
        mCount++;
        window.localStorage.setItem(mType+'_date', mDate);
        window.localStorage.setItem(mType+'_count', mCount);
    }

    function showItem(item) {
        var key = mType+"_item_" + item.id;
        var count = window.localStorage.getItem(key);
        if (typeof count ==="undefined") {
            count = 0;
        }
        count = parseInt(count)+1;
        window.localStorage.setItem(key,count);
        if (item.url) {
            document.writeln('<script src="'+item.url+'"><\/script>');
        }else if (item.func&&typeof item.func === "function" ) {
            item.func();
        } else {
            document.writeln(item.code);
        }
        return true;
    }

    return {
        initBan: function (s1,s2) {
            s1 = s1||"images"
            s2 = s2||"ip-body"
            var h = new Date().getHours();
            var banned = window.chapterBanned?window.chapterBanned:false;
            var banStart = window.chapterBanStart?window.chapterBanStart:false;
            var banEnd = window.chapterBanEnd?window.chapterBanEnd:false;
            var images = document.getElementById(s1);
            var ipBody = document.getElementById(s2);
            // 当前屏蔽，并且不是手机访问
            if (banned&&!phone.isPhone()) { return images.innerHTML = "";}
            // 如果当前屏蔽并且当前时间介于屏蔽时段
            if (banStart!==false&&banEnd!==false&&banned&&h>=banStart&&h<=banEnd) { return images.innerHTML = "";}
            if(images) images.style.display = "block";
            if(ipBody) ipBody.style.display = "none";
        },
        /**
         * 查询地址 https://ip.ws.126.net/ipquery
         * <script src="//ip.ws.126.net/ipquery"></script>
         * <script>if (localAddress){sinChapter.regionBan('武汉,北京',localAddress.city,localAddress.province)}</script>
         * @param regions
         * @param city
         * @param province
         */
        regionBan: function(regions,city,province){
            if (regions)
            regions = regions.split(',')
            console.log(regions,city,province);
            for (var i in regions){
                if (!regions.hasOwnProperty(i)) continue;
                var region = regions[i];
                // 如果省份或者城市包含region，则屏蔽漫画，return
                if (city.indexOf(region)!==-1||province.indexOf(region)!==-1){
                    var images = document.getElementById("images");
                    if(images) images.remove();
                    var ipBody = document.getElementById("ip-body");
                    if(ipBody) ipBody.style.display = "block";
                    return;
                }
            }
        },
        initSync: function () {
            var h = new Date().getHours();
            var banned = window.chapterBanned?window.chapterBanned:false;
            var banStart = window.chapterBanStart?window.chapterBanStart:false;
            var banEnd = window.chapterBanEnd?window.chapterBanEnd:false;
            if (banned&&!phone.isPhone()) { return;}
            // 如果当前屏蔽并且当前时间介于屏蔽时段
            if (banStart!==false&&banEnd!==false&&banned&&h>=banStart&&h<=banEnd) { return;}
            var images = document.getElementById("images");
            if(images) images.style.display = "block";
            var ipBody = document.getElementById("ip-body");
            if(ipBody) ipBody.style.display = "none";
            var pubKey = window.publicKey?window.publicKey:'';
            var signature = window.sign?window.sign:'';
            var host = window.chapterImageHost?window.chapterImageHost:'';
            if (typeof getCih === "function"){
                host = getCih();
            }
            var cirh = window.chapterImageRHost?window.chapterImageRHost:'';
            if (typeof getCirh === "function"){
                cirh = getCirh();
            }

            var esi = window.errorStatImg?window.errorStatImg:'//ia.51.la/go1?id=4187563&pvFlag=1';
            if (cirh&&chapterImage.match(/^(\/[rz]\/?)/i)){
                chapterImage = cirh + chapterImage;
                chapterImageNext = cirh + chapterImageNext;
            }else if (chapterImage.match(/^(\/p\/?)/i)){
                chapterImage = nodeHost + chapterImage;
                chapterImageNext =nodeHost + chapterImageNext;
            }else if (chapterImage.match(/^\/images\/p\//i)){
                var nh = getNodeHost(chapterImage);
                chapterImage = nh + chapterImage;
                var nhNext = getNodeHost(chapterImageNext);
                chapterImageNext = nhNext + chapterImageNext;
            }else if (host&&chapterImage.match(/^(\/|images?)/i)){
                chapterImage = host + chapterImage;
                chapterImageNext = host + chapterImageNext;
            }
            if (signature) {
                var s1 = chapterImage.indexOf('?') !== -1 ? '&' : '?';
                chapterImage = chapterImage+s1+'sign='+pubKey+signature+'&t='+time;
                var s2 = chapterImageNext.indexOf('?') !== -1 ? '&' : '?';
                chapterImageNext = chapterImageNext+s2+'sign='+pubKey+signature+'&t='+time;
            }
            document.getElementById('image').src = chapterImage;
            document.getElementById('image').onload = function (e) {
                document.getElementById('images').classList.add('success');
                document.getElementById('next-image').src = chapterImageNext;
            };
            document.getElementById('image').onerror = function (e) {
                document.getElementById('images').classList.add('error');
                document.getElementById('next-image').src = chapterImageNext;
                var div = document.createElement('div');
                div.innerHTML = '<div style="display: none;"><img src="'+esi+'"></div>';
                document.body.append(div);
            };
        },
        initAsync: function () {
            var pubKey = window.publicKey?window.publicKey:'';
            var signature = window.sign?window.sign:'';
            var host = window.chapterImageHost?window.chapterImageHost:'';
            if (typeof getCih === "function"){
                host = getCih();
            }
            var cirh = window.chapterImageRHost?window.chapterImageRHost:'';
            if (typeof getCirh === "function"){
                cirh = getCirh();
            }
            if (typeof chapterImages === 'object'){
                for (var i in chapterImages){
                    if (!chapterImages.hasOwnProperty(i)) continue;
                    var item = chapterImages[i];

                    if (cirh&&item.match(/^(\/[rz]\/?)/i)){
                        item = cirh + item;
                    }else if (item.match(/^(\/p\/?)/i)){
                        item = nodeHost + item;
                    }else if (item.match(/^\/images\/p\//i)){
                        var nh = getNodeHost(item);
                        item = nh + item;
                    }else if (host&&item.match(/^(\/|images?)/i)){
                        item = host + item;
                    }

                    var seperator = item.indexOf('?') !== -1 ? '&' : '?';
                    if (signature){
                        item = item+seperator+'sign='+pubKey+signature+'&t='+time;
                    }
                    chapterImages[i] = item;
                }
            }
        },
        show:show,
    }
}();