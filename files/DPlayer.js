!function (n, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("DPlayer", [], e) : "object" == typeof exports ? exports.DPlayer = e() : n.DPlayer = e()
}(self, (() => (() => {
    var n = {
        1916: (n, e, t) => {
            var a = t(6877);
            n.exports = function (n) {
                "use strict";
                var e, o = "", r = (n = n || {}).video, i = n.options, l = a.$escape, s = n.tran, p = n.icons,
                    d = n.index, A = a.$each;
                return n.$value, n.$index, o += '<div class="dplayer-mask"></div>\n<div class="dplayer-video-wrap">\n    ', e = t(1568)(r), o += e, o += "\n    ", i.logo && (o += '\n    <div class="dplayer-logo">\n        <img src="', o += l(i.logo), o += '">\n    </div>\n    '), o += '\n    <div class="dplayer-danmaku"', i.danmaku && i.danmaku.bottm && (o += ' style="margin-bottom:', o += l(i.danmaku.bottm), o += '"'), o += '>\n        <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>\n    </div>\n    <div class="dplayer-subtitle"></div>\n    <div class="dplayer-bezel">\n        <span class="dplayer-bezel-icon"></span>\n        ', i.danmaku && (o += '\n        <span class="dplayer-danloading">', o += l(s("danmaku-loading")), o += "</span>\n        "), o += '\n        <span class="diplayer-loading-icon">', o += p.loading, o += '</span>\n    </div>\n</div>\n<div class="dplayer-controller-mask"></div>\n<div class="dplayer-controller">\n    <div class="dplayer-icons dplayer-comment-box">\n        <button class="dplayer-icon dplayer-comment-setting-icon" data-balloon="', o += l(s("setting")), o += '" data-balloon-pos="up">\n            <span class="dplayer-icon-content">', o += p.pallette, o += '</span>\n        </button>\n        <div class="dplayer-comment-setting-box">\n            <div class="dplayer-comment-setting-color">\n                <div class="dplayer-comment-setting-title">', o += l(s("set-danmaku-color")), o += '</div>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-', o += l(d), o += '" value="#fff" checked>\n                    <span style="background: #fff;"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-', o += l(d), o += '" value="#e54256">\n                    <span style="background: #e54256"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-', o += l(d), o += '" value="#ffe133">\n                    <span style="background: #ffe133"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-', o += l(d), o += '" value="#64DD17">\n                    <span style="background: #64DD17"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-', o += l(d), o += '" value="#39ccff">\n                    <span style="background: #39ccff"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-', o += l(d), o += '" value="#D500F9">\n                    <span style="background: #D500F9"></span>\n                </label>\n            </div>\n            <div class="dplayer-comment-setting-type">\n                <div class="dplayer-comment-setting-title">', o += l(s("set-danmaku-type")), o += '</div>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-type-', o += l(d), o += '" value="1">\n                    <span>', o += l(s("top")), o += '</span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-type-', o += l(d), o += '" value="0" checked>\n                    <span>', o += l(s("rolling")), o += '</span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-type-', o += l(d), o += '" value="2">\n                    <span>', o += l(s("bottom")), o += '</span>\n                </label>\n            </div>\n        </div>\n        <input class="dplayer-comment-input" type="text" placeholder="', o += l(s("input-danmaku-enter")), o += '" maxlength="30">\n        <button class="dplayer-icon dplayer-send-icon" data-balloon="', o += l(s("send")), o += '" data-balloon-pos="up">\n            <span class="dplayer-icon-content">', o += p.send, o += '</span>\n        </button>\n    </div>\n    <div class="dplayer-icons dplayer-icons-left">\n        <button class="dplayer-icon dplayer-play-icon">\n            <span class="dplayer-icon-content">', o += p.play, o += '</span>\n        </button>\n        <div class="dplayer-volume">\n            <button class="dplayer-icon dplayer-volume-icon">\n                <span class="dplayer-icon-content">', o += p.volumeDown, o += '</span>\n            </button>\n            <div class="dplayer-volume-bar-wrap" data-balloon-pos="up">\n                <div class="dplayer-volume-bar">\n                    <div class="dplayer-volume-bar-inner" style="background: ', o += l(i.theme), o += ';">\n                        <span class="dplayer-thumb" style="background: ', o += l(i.theme), o += '"></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <span class="dplayer-time">\n            <span class="dplayer-ptime">0:00</span> /\n            <span class="dplayer-dtime">0:00</span>\n        </span>\n        ', i.live && (o += '\n        <span class="dplayer-live-badge"><span class="dplayer-live-dot" style="background: ', o += l(i.theme), o += ';"></span>', o += l(s("live")), o += "</span>\n        "), o += '\n    </div>\n    <div class="dplayer-icons dplayer-icons-right">\n        ', i.video.quality && (o += '\n        <div class="dplayer-quality">\n            <button class="dplayer-icon dplayer-quality-icon">', o += l(i.video.quality[i.video.defaultQuality].name), o += '</button>\n            <div class="dplayer-quality-mask">\n                <div class="dplayer-quality-list">\n                ', A(i.video.quality, (function (n, e) {
                    o += '\n                    <div class="dplayer-quality-item" data-index="', o += l(e), o += '">', o += l(n.name), o += "</div>\n                "
                })), o += "\n                </div>\n            </div>\n        </div>\n        "), o += "\n        ", i.screenshot && (o += '\n        <div class="dplayer-icon dplayer-camera-icon" data-balloon="', o += l(s("screenshot")), o += '" data-balloon-pos="up">\n            <span class="dplayer-icon-content">', o += p.camera, o += "</span>\n        </div>\n        "), o += "\n        ", i.airplay && (o += '\n        <div class="dplayer-icon dplayer-airplay-icon" data-balloon="', o += l(s("airplay")), o += '" data-balloon-pos="up">\n            <span class="dplayer-icon-content">', o += p.airplay, o += "</span>\n        </div>\n        "), o += "\n        ", i.chromecast && (o += '\n        <div class="dplayer-icon dplayer-chromecast-icon" data-balloon="', o += l(s("chromecast")), o += '" data-balloon-pos="up">\n            <span class="dplayer-icon-content">', o += p.chromecast, o += "</span>\n        </div>\n        "), o += '\n        <div class="dplayer-comment">\n            <button class="dplayer-icon dplayer-comment-icon" data-balloon="', o += l(s("send-danmaku")), o += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">', o += p.comment, o += "</span>\n            </button>\n        </div>\n        ", i.subtitle && (o += "\n        ", "string" == typeof i.subtitle.url ? (o += '\n        <div class="dplayer-subtitle-btn">\n            <button class="dplayer-icon dplayer-subtitle-icon" data-balloon="', o += l(s("hide-subs")), o += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">', o += p.subtitle, o += "</span>\n            </button>\n        </div>\n        ") : (o += '\n        <div class="dplayer-subtitles">\n            <button class="dplayer-icon dplayer-subtitles-icon" data-balloon="', o += l(s("subtitle")), o += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">', o += p.subtitle, o += '</span>\n            </button>\n            <div class="dplayer-subtitles-box">\n                <div class="dplayer-subtitles-panel">\n                    ', A(i.subtitle.url, (function (n, e) {
                    o += '\n                        <div class="dplayer-subtitles-item" data-subtitle="', o += l(n.url), o += '">\n                            \x3c!-- if lang, show tran(lang). if lang and name, show name + (tran(lang)). if name, show name. off option use lang for translation. --\x3e\n                            <span class="dplayer-label">', o += l(n.lang ? n.name ? n.name + " (" + s(n.lang) + ")" : s(n.lang) : n.name), o += "</span>\n                        </div>\n                    "
                })), o += "\n                </div>\n            </div>\n        </div>\n        "), o += "\n        "), o += '\n        <div class="dplayer-setting">\n            <button class="dplayer-icon dplayer-setting-icon" data-balloon="', o += l(s("setting")), o += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">', o += p.setting, o += '</span>\n            </button>\n            <div class="dplayer-setting-box">\n                <div class="dplayer-setting-origin-panel">\n                    <div class="dplayer-setting-item dplayer-setting-speed">\n                        <span class="dplayer-label">', o += l(s("speed")), o += '</span>\n                        <div class="dplayer-toggle">', o += p.right, o += '</div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-loop">\n                        <span class="dplayer-label">', o += l(s("loop")), o += '</span>\n                        <div class="dplayer-toggle">\n                            <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle">\n                            <label for="dplayer-toggle"></label>\n                        </div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-showdan">\n                        <span class="dplayer-label">', o += l(s("show-danmaku")), o += '</span>\n                        <div class="dplayer-toggle">\n                            <input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan">\n                            <label for="dplayer-toggle-dan"></label>\n                        </div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-danunlimit">\n                        <span class="dplayer-label">', o += l(s("unlimited-danmaku")), o += '</span>\n                        <div class="dplayer-toggle">\n                            <input class="dplayer-danunlimit-setting-input" type="checkbox" name="dplayer-toggle-danunlimit">\n                            <label for="dplayer-toggle-danunlimit"></label>\n                        </div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-danmaku">\n                        <span class="dplayer-label">', o += l(s("opacity-danmaku")), o += '</span>\n                        <div class="dplayer-danmaku-bar-wrap">\n                            <div class="dplayer-danmaku-bar">\n                                <div class="dplayer-danmaku-bar-inner">\n                                    <span class="dplayer-thumb"></span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class="dplayer-setting-speed-panel">\n                    ', A(i.playbackSpeed, (function (n, e) {
                    o += '\n                        <div class="dplayer-setting-speed-item" data-speed="', o += l(n), o += '">\n                            <span class="dplayer-label">', o += l(1 === n ? s("normal") : n), o += "</span>\n                        </div>\n                    "
                })), o += '\n                </div>\n            </div>\n        </div>\n        <div class="dplayer-full">\n            <button class="dplayer-icon dplayer-full-in-icon" data-balloon="', o += l(s("web-fullscreen")), o += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">', o += p.fullWeb, o += '</span>\n            </button>\n            <button class="dplayer-icon dplayer-full-icon" data-balloon="', o += l(s("fullscreen")), o += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">', o += p.full,o += '</span>\n            </button>\n        </div>\n    </div>\n    <div class="dplayer-bar-wrap">\n        <div class="dplayer-bar-time hidden">00:00</div>\n        <div class="dplayer-bar-preview"></div>\n        <div class="dplayer-bar">\n            <div class="dplayer-loaded" style="width: 0;"></div>\n            <div class="dplayer-played" style="width: 0; background: ',o += l(i.theme),o += '">\n                <span class="dplayer-thumb" style="background: ',o += l(i.theme),o += '"></span>\n            </div>\n        </div>\n    </div>\n</div>\n<div class="dplayer-info-panel dplayer-info-panel-hide">\n    <div class="dplayer-info-panel-close">[x]</div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-version">\n        <span class="dplayer-info-panel-item-title">Player version</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-fps">\n        <span class="dplayer-info-panel-item-title">Player FPS</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-type">\n        <span class="dplayer-info-panel-item-title">Video type</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-url">\n        <span class="dplayer-info-panel-item-title">Video url</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-resolution">\n        <span class="dplayer-info-panel-item-title">Video resolution</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-duration">\n        <span class="dplayer-info-panel-item-title">Video duration</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    ',i.danmaku && (o += '\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-id">\n        <span class="dplayer-info-panel-item-title">Danmaku id</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-api">\n        <span class="dplayer-info-panel-item-title">Danmaku api</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-amount">\n        <span class="dplayer-info-panel-item-title">Danmaku amount</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    '),o += '\n</div>\n<div class="dplayer-menu">\n    ',A(i.contextmenu, (function (n, e) {
                    o += '\n        <div class="dplayer-menu-item">\n            <a', n.link && (o += ' target="_blank"'), o += ' href="', o += l(n.link || "javascript:void(0);"), o += '">', n.key && (o += " ", o += l(s(n.key))), n.text && (o += " ", o += l(n.text)), o += "</a>\n        </div>\n    "
                })),o += '\n</div>\n<div class="dplayer-notice-list"></div>\n<button class="dplayer-mobile-play">\n    ',o += p.play,o += "\n</button>"
            }
        }, 1568: (n, e, t) => {
            var a = t(6877);
            n.exports = function (n) {
                "use strict";
                var e = "", t = (n = n || {}).enableSubtitle, o = n.subtitle, r = n.current, i = n.airplay, l = n.pic,
                    s = a.$escape, p = n.screenshot, d = n.preload, A = n.url;
                return t = o && "webvtt" === o.type, e += '\n<video\n    class="dplayer-video ', r && (e += "dplayer-video-current"), e += '"\n    webkit-playsinline\n    ', i && (e += ' x-webkit-airplay="allow" '), e += "\n    playsinline\n    ", l && (e += 'poster="', e += s(l), e += '"'), e += "\n    ", (p || t) && (e += 'crossorigin="anonymous"'), e += "\n    ", d && (e += 'preload="', e += s(d), e += '"'), e += "\n    ", i ? e += "\n    nosrc\n    " : A && (e += '\n    src="', e += s(A), e += '"\n    '), e += "\n    >\n    ", i && (e += '\n    <source src="', e += s(A), e += '">\n    '), e += "\n    ", t && (e += '\n    <track class="dplayer-subtrack" kind="metadata" default src="', e += s("string" == typeof o.url ? o.url : o.url[o.index].url), e += '"></track>\n    '), e + "\n</video>"
            }
        }, 3399: (n, e, t) => {
            "use strict";
            t.d(e, {Z: () => l});
            var a = t(8955), o = t.n(a), r = t(8160), i = t.n(r)()(o());
            i.push([n.id, ':root {\n  --balloon-border-radius: 2px;\n  --balloon-color: rgba(16, 16, 16, 0.95);\n  --balloon-text-color: #fff;\n  --balloon-font-size: 12px;\n  --balloon-move: 4px; }\n\nbutton[aria-label][data-balloon-pos] {\n  overflow: visible; }\n\n[aria-label][data-balloon-pos] {\n  position: relative;\n  cursor: pointer; }\n  [aria-label][data-balloon-pos]:after {\n    opacity: 0;\n    pointer-events: none;\n    transition: all 0.18s ease-out 0.18s;\n    text-indent: 0;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\n    font-weight: normal;\n    font-style: normal;\n    text-shadow: none;\n    font-size: 12px;\n    font-size: var(--balloon-font-size);\n    background: rgba(16, 16, 16, 0.95);\n    background: var(--balloon-color);\n    border-radius: 2px;\n    color: #fff;\n    color: var(--balloon-text-color);\n    border-radius: 2px;\n    border-radius: var(--balloon-border-radius);\n    content: attr(aria-label);\n    padding: .5em 1em;\n    position: absolute;\n    white-space: nowrap;\n    z-index: 10; }\n  [aria-label][data-balloon-pos]:before {\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border-top-color: rgba(16, 16, 16, 0.95);\n    border-top-color: var(--balloon-color);\n    opacity: 0;\n    pointer-events: none;\n    transition: all 0.18s ease-out 0.18s;\n    content: "";\n    position: absolute;\n    z-index: 10; }\n  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {\n    opacity: 1;\n    pointer-events: none; }\n  [aria-label][data-balloon-pos].font-awesome:after {\n    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif; }\n  [aria-label][data-balloon-pos][data-balloon-break]:after {\n    white-space: pre; }\n  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {\n    white-space: pre-line;\n    word-break: break-word; }\n  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {\n    transition: none; }\n  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {\n    transform: translate(-50%, 0); }\n  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {\n    transform: translate(-50%, 0); }\n  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {\n    left: 0; }\n  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {\n    left: 5px; }\n  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {\n    right: 0; }\n  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {\n    right: 5px; }\n  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {\n    transform: translate(0, 0); }\n  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {\n    transform: translate(0, 0); }\n  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {\n    bottom: 100%;\n    transform-origin: top;\n    transform: translate(0, 4px);\n    transform: translate(0, var(--balloon-move)); }\n  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {\n    margin-bottom: 10px; }\n  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {\n    left: 50%;\n    transform: translate(-50%, 4px);\n    transform: translate(-50%, var(--balloon-move)); }\n  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {\n    top: 100%;\n    transform: translate(0, calc(4px * -1));\n    transform: translate(0, calc(var(--balloon-move) * -1)); }\n  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {\n    margin-top: 10px; }\n  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border-bottom-color: rgba(16, 16, 16, 0.95);\n    border-bottom-color: var(--balloon-color); }\n  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {\n    left: 50%;\n    transform: translate(-50%, calc(4px * -1));\n    transform: translate(-50%, calc(var(--balloon-move) * -1)); }\n  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {\n    transform: translate(0, -50%); }\n  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {\n    transform: translate(0, -50%); }\n  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {\n    right: 100%;\n    top: 50%;\n    transform: translate(4px, -50%);\n    transform: translate(var(--balloon-move), -50%); }\n  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {\n    margin-right: 10px; }\n  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border-left-color: rgba(16, 16, 16, 0.95);\n    border-left-color: var(--balloon-color); }\n  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {\n    left: 100%;\n    top: 50%;\n    transform: translate(calc(4px * -1), -50%);\n    transform: translate(calc(var(--balloon-move) * -1), -50%); }\n  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {\n    margin-left: 10px; }\n  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border-right-color: rgba(16, 16, 16, 0.95);\n    border-right-color: var(--balloon-color); }\n  [aria-label][data-balloon-pos][data-balloon-length]:after {\n    white-space: normal; }\n  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {\n    width: 80px; }\n  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {\n    width: 150px; }\n  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {\n    width: 260px; }\n  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {\n    width: 380px; }\n    @media screen and (max-width: 768px) {\n      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {\n        width: 90vw; } }\n  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {\n    width: 100%; }\n', "", {
                version: 3,
                sources: ["webpack://./node_modules/.pnpm/balloon-css@1.2.0/node_modules/balloon-css/balloon.css"],
                names: [],
                mappings: "AAAA;EACE,4BAA4B;EAC5B,uCAAuC;EACvC,0BAA0B;EAC1B,yBAAyB;EACzB,mBAAmB,EAAE;;AAEvB;EACE,iBAAiB,EAAE;;AAErB;EACE,kBAAkB;EAClB,eAAe,EAAE;EACjB;IACE,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,cAAc;IACd,wIAAwI;IACxI,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,eAAmC;IAAnC,mCAAmC;IACnC,kCAAgC;IAAhC,gCAAgC;IAChC,kBAAkB;IAClB,WAAgC;IAAhC,gCAAgC;IAChC,kBAA2C;IAA3C,2CAA2C;IAC3C,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,WAAW,EAAE;EACf;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,wCAAsC;IAAtC,sCAAsC;IACtC,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,WAAW;IACX,kBAAkB;IAClB,WAAW,EAAE;EACf;IACE,UAAU;IACV,oBAAoB,EAAE;EACxB;IACE,qJAAqJ,EAAE;EACzJ;IACE,gBAAgB,EAAE;EACpB;IACE,qBAAqB;IACrB,sBAAsB,EAAE;EAC1B;IACE,gBAAgB,EAAE;EACpB;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,OAAO,EAAE;EACX;IACE,SAAS,EAAE;EACb;IACE,QAAQ,EAAE;EACZ;IACE,UAAU,EAAE;EACd;IACE,0BAA0B,EAAE;EAC9B;IACE,0BAA0B,EAAE;EAC9B;IACE,YAAY;IACZ,qBAAqB;IACrB,4BAA4C;IAA5C,4CAA4C,EAAE;EAChD;IACE,mBAAmB,EAAE;EACvB;IACE,SAAS;IACT,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,SAAS;IACT,uCAAuD;IAAvD,uDAAuD,EAAE;EAC3D;IACE,gBAAgB,EAAE;EACpB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,2CAAyC;IAAzC,yCAAyC,EAAE;EAC7C;IACE,SAAS;IACT,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,WAAW;IACX,QAAQ;IACR,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,kBAAkB,EAAE;EACtB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,yCAAuC;IAAvC,uCAAuC,EAAE;EAC3C;IACE,UAAU;IACV,QAAQ;IACR,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,iBAAiB,EAAE;EACrB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,0CAAwC;IAAxC,wCAAwC,EAAE;EAC5C;IACE,mBAAmB,EAAE;EACvB;IACE,WAAW,EAAE;EACf;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;IACd;MACE;QACE,WAAW,EAAE,EAAE;EACrB;IACE,WAAW,EAAE",
                sourcesContent: [':root {\n  --balloon-border-radius: 2px;\n  --balloon-color: rgba(16, 16, 16, 0.95);\n  --balloon-text-color: #fff;\n  --balloon-font-size: 12px;\n  --balloon-move: 4px; }\n\nbutton[aria-label][data-balloon-pos] {\n  overflow: visible; }\n\n[aria-label][data-balloon-pos] {\n  position: relative;\n  cursor: pointer; }\n  [aria-label][data-balloon-pos]:after {\n    opacity: 0;\n    pointer-events: none;\n    transition: all 0.18s ease-out 0.18s;\n    text-indent: 0;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\n    font-weight: normal;\n    font-style: normal;\n    text-shadow: none;\n    font-size: var(--balloon-font-size);\n    background: var(--balloon-color);\n    border-radius: 2px;\n    color: var(--balloon-text-color);\n    border-radius: var(--balloon-border-radius);\n    content: attr(aria-label);\n    padding: .5em 1em;\n    position: absolute;\n    white-space: nowrap;\n    z-index: 10; }\n  [aria-label][data-balloon-pos]:before {\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border-top-color: var(--balloon-color);\n    opacity: 0;\n    pointer-events: none;\n    transition: all 0.18s ease-out 0.18s;\n    content: "";\n    position: absolute;\n    z-index: 10; }\n  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {\n    opacity: 1;\n    pointer-events: none; }\n  [aria-label][data-balloon-pos].font-awesome:after {\n    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif; }\n  [aria-label][data-balloon-pos][data-balloon-break]:after {\n    white-space: pre; }\n  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {\n    white-space: pre-line;\n    word-break: break-word; }\n  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {\n    transition: none; }\n  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {\n    transform: translate(-50%, 0); }\n  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {\n    transform: translate(-50%, 0); }\n  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {\n    left: 0; }\n  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {\n    left: 5px; }\n  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {\n    right: 0; }\n  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {\n    right: 5px; }\n  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {\n    transform: translate(0, 0); }\n  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {\n    transform: translate(0, 0); }\n  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {\n    bottom: 100%;\n    transform-origin: top;\n    transform: translate(0, var(--balloon-move)); }\n  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {\n    margin-bottom: 10px; }\n  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {\n    left: 50%;\n    transform: translate(-50%, var(--balloon-move)); }\n  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {\n    top: 100%;\n    transform: translate(0, calc(var(--balloon-move) * -1)); }\n  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {\n    margin-top: 10px; }\n  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border-bottom-color: var(--balloon-color); }\n  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {\n    left: 50%;\n    transform: translate(-50%, calc(var(--balloon-move) * -1)); }\n  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {\n    transform: translate(0, -50%); }\n  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {\n    transform: translate(0, -50%); }\n  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {\n    right: 100%;\n    top: 50%;\n    transform: translate(var(--balloon-move), -50%); }\n  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {\n    margin-right: 10px; }\n  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border-left-color: var(--balloon-color); }\n  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {\n    left: 100%;\n    top: 50%;\n    transform: translate(calc(var(--balloon-move) * -1), -50%); }\n  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {\n    margin-left: 10px; }\n  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border-right-color: var(--balloon-color); }\n  [aria-label][data-balloon-pos][data-balloon-length]:after {\n    white-space: normal; }\n  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {\n    width: 80px; }\n  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {\n    width: 150px; }\n  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {\n    width: 260px; }\n  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {\n    width: 380px; }\n    @media screen and (max-width: 768px) {\n      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {\n        width: 90vw; } }\n  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {\n    width: 100%; }\n'],
                sourceRoot: ""
            }]);
            const l = i
        }, 3150: (n, e, t) => {
            "use strict";
            t.d(e, {Z: () => u});
            var a = t(8955), o = t.n(a), r = t(8160), i = t.n(r), l = t(3399), s = t(8431), p = t.n(s),
                d = new URL(t(7831), t.b), A = i()(o());
            A.i(l.Z);
            var c = p()(d);
            A.push([n.id, '@-webkit-keyframes my-face {\n  2% {\n    transform: translate(0, 1.5px) rotate(1.5deg);\n  }\n  4% {\n    transform: translate(0, -1.5px) rotate(-0.5deg);\n  }\n  6% {\n    transform: translate(0, 1.5px) rotate(-1.5deg);\n  }\n  8% {\n    transform: translate(0, -1.5px) rotate(-1.5deg);\n  }\n  10% {\n    transform: translate(0, 2.5px) rotate(1.5deg);\n  }\n  12% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  14% {\n    transform: translate(0, -1.5px) rotate(1.5deg);\n  }\n  16% {\n    transform: translate(0, -0.5px) rotate(-1.5deg);\n  }\n  18% {\n    transform: translate(0, 0.5px) rotate(-1.5deg);\n  }\n  20% {\n    transform: translate(0, -1.5px) rotate(2.5deg);\n  }\n  22% {\n    transform: translate(0, 0.5px) rotate(-1.5deg);\n  }\n  24% {\n    transform: translate(0, 1.5px) rotate(1.5deg);\n  }\n  26% {\n    transform: translate(0, 0.5px) rotate(0.5deg);\n  }\n  28% {\n    transform: translate(0, 0.5px) rotate(1.5deg);\n  }\n  30% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  32% {\n    transform: translate(0, 1.5px) rotate(-0.5deg);\n  }\n  34% {\n    transform: translate(0, 1.5px) rotate(-0.5deg);\n  }\n  36% {\n    transform: translate(0, -1.5px) rotate(2.5deg);\n  }\n  38% {\n    transform: translate(0, 1.5px) rotate(-1.5deg);\n  }\n  40% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  42% {\n    transform: translate(0, 2.5px) rotate(-1.5deg);\n  }\n  44% {\n    transform: translate(0, 1.5px) rotate(0.5deg);\n  }\n  46% {\n    transform: translate(0, -1.5px) rotate(2.5deg);\n  }\n  48% {\n    transform: translate(0, -0.5px) rotate(0.5deg);\n  }\n  50% {\n    transform: translate(0, 0.5px) rotate(0.5deg);\n  }\n  52% {\n    transform: translate(0, 2.5px) rotate(2.5deg);\n  }\n  54% {\n    transform: translate(0, -1.5px) rotate(1.5deg);\n  }\n  56% {\n    transform: translate(0, 2.5px) rotate(2.5deg);\n  }\n  58% {\n    transform: translate(0, 0.5px) rotate(2.5deg);\n  }\n  60% {\n    transform: translate(0, 2.5px) rotate(2.5deg);\n  }\n  62% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  64% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  66% {\n    transform: translate(0, 1.5px) rotate(-0.5deg);\n  }\n  68% {\n    transform: translate(0, -1.5px) rotate(-0.5deg);\n  }\n  70% {\n    transform: translate(0, 1.5px) rotate(0.5deg);\n  }\n  72% {\n    transform: translate(0, 2.5px) rotate(1.5deg);\n  }\n  74% {\n    transform: translate(0, -0.5px) rotate(0.5deg);\n  }\n  76% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  78% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  80% {\n    transform: translate(0, 1.5px) rotate(1.5deg);\n  }\n  82% {\n    transform: translate(0, -0.5px) rotate(0.5deg);\n  }\n  84% {\n    transform: translate(0, 1.5px) rotate(2.5deg);\n  }\n  86% {\n    transform: translate(0, -1.5px) rotate(-1.5deg);\n  }\n  88% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  90% {\n    transform: translate(0, 2.5px) rotate(-0.5deg);\n  }\n  92% {\n    transform: translate(0, 0.5px) rotate(-0.5deg);\n  }\n  94% {\n    transform: translate(0, 2.5px) rotate(0.5deg);\n  }\n  96% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  98% {\n    transform: translate(0, -1.5px) rotate(-0.5deg);\n  }\n  0%,\n  100% {\n    transform: translate(0, 0) rotate(0deg);\n  }\n}\n@keyframes my-face {\n  2% {\n    transform: translate(0, 1.5px) rotate(1.5deg);\n  }\n  4% {\n    transform: translate(0, -1.5px) rotate(-0.5deg);\n  }\n  6% {\n    transform: translate(0, 1.5px) rotate(-1.5deg);\n  }\n  8% {\n    transform: translate(0, -1.5px) rotate(-1.5deg);\n  }\n  10% {\n    transform: translate(0, 2.5px) rotate(1.5deg);\n  }\n  12% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  14% {\n    transform: translate(0, -1.5px) rotate(1.5deg);\n  }\n  16% {\n    transform: translate(0, -0.5px) rotate(-1.5deg);\n  }\n  18% {\n    transform: translate(0, 0.5px) rotate(-1.5deg);\n  }\n  20% {\n    transform: translate(0, -1.5px) rotate(2.5deg);\n  }\n  22% {\n    transform: translate(0, 0.5px) rotate(-1.5deg);\n  }\n  24% {\n    transform: translate(0, 1.5px) rotate(1.5deg);\n  }\n  26% {\n    transform: translate(0, 0.5px) rotate(0.5deg);\n  }\n  28% {\n    transform: translate(0, 0.5px) rotate(1.5deg);\n  }\n  30% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  32% {\n    transform: translate(0, 1.5px) rotate(-0.5deg);\n  }\n  34% {\n    transform: translate(0, 1.5px) rotate(-0.5deg);\n  }\n  36% {\n    transform: translate(0, -1.5px) rotate(2.5deg);\n  }\n  38% {\n    transform: translate(0, 1.5px) rotate(-1.5deg);\n  }\n  40% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  42% {\n    transform: translate(0, 2.5px) rotate(-1.5deg);\n  }\n  44% {\n    transform: translate(0, 1.5px) rotate(0.5deg);\n  }\n  46% {\n    transform: translate(0, -1.5px) rotate(2.5deg);\n  }\n  48% {\n    transform: translate(0, -0.5px) rotate(0.5deg);\n  }\n  50% {\n    transform: translate(0, 0.5px) rotate(0.5deg);\n  }\n  52% {\n    transform: translate(0, 2.5px) rotate(2.5deg);\n  }\n  54% {\n    transform: translate(0, -1.5px) rotate(1.5deg);\n  }\n  56% {\n    transform: translate(0, 2.5px) rotate(2.5deg);\n  }\n  58% {\n    transform: translate(0, 0.5px) rotate(2.5deg);\n  }\n  60% {\n    transform: translate(0, 2.5px) rotate(2.5deg);\n  }\n  62% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  64% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  66% {\n    transform: translate(0, 1.5px) rotate(-0.5deg);\n  }\n  68% {\n    transform: translate(0, -1.5px) rotate(-0.5deg);\n  }\n  70% {\n    transform: translate(0, 1.5px) rotate(0.5deg);\n  }\n  72% {\n    transform: translate(0, 2.5px) rotate(1.5deg);\n  }\n  74% {\n    transform: translate(0, -0.5px) rotate(0.5deg);\n  }\n  76% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  78% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  80% {\n    transform: translate(0, 1.5px) rotate(1.5deg);\n  }\n  82% {\n    transform: translate(0, -0.5px) rotate(0.5deg);\n  }\n  84% {\n    transform: translate(0, 1.5px) rotate(2.5deg);\n  }\n  86% {\n    transform: translate(0, -1.5px) rotate(-1.5deg);\n  }\n  88% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  90% {\n    transform: translate(0, 2.5px) rotate(-0.5deg);\n  }\n  92% {\n    transform: translate(0, 0.5px) rotate(-0.5deg);\n  }\n  94% {\n    transform: translate(0, 2.5px) rotate(0.5deg);\n  }\n  96% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  98% {\n    transform: translate(0, -1.5px) rotate(-0.5deg);\n  }\n  0%,\n  100% {\n    transform: translate(0, 0) rotate(0deg);\n  }\n}\n.dplayer {\n  position: relative;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  line-height: 1;\n}\n.dplayer * {\n  box-sizing: content-box;\n}\n.dplayer svg {\n  width: 100%;\n  height: 100%;\n}\n.dplayer svg path,\n.dplayer svg circle {\n  fill: #fff;\n}\n.dplayer:-webkit-full-screen {\n  width: 100%;\n  height: 100%;\n  background: #000;\n  position: fixed;\n  z-index: 100000;\n  left: 0;\n  top: 0;\n  margin: 0;\n  padding: 0;\n  transform: translate(0, 0);\n}\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {\n  display: none;\n}\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {\n  display: none;\n}\n.dplayer.dplayer-no-danmaku .dplayer-danmaku {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-time {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-bar-wrap {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-setting-speed {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-setting-loop {\n  display: none;\n}\n.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {\n  display: none;\n}\n.dplayer.dplayer-arrow .dplayer-danmaku {\n  font-size: 18px;\n}\n.dplayer.dplayer-arrow .dplayer-icon {\n  margin: 0 -3px;\n}\n.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n@media (min-width: 900px) {\n  .dplayer.dplayer-playing .dplayer-controller-mask {\n    opacity: 0;\n  }\n  .dplayer.dplayer-playing .dplayer-controller {\n    opacity: 0;\n  }\n  .dplayer.dplayer-playing:hover .dplayer-controller-mask {\n    opacity: 1;\n  }\n  .dplayer.dplayer-playing:hover .dplayer-controller {\n    opacity: 1;\n  }\n}\n.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {\n  display: block;\n}\n.dplayer.dplayer-loading .dplayer-danmaku,\n.dplayer.dplayer-paused .dplayer-danmaku,\n.dplayer.dplayer-loading .dplayer-danmaku-move,\n.dplayer.dplayer-paused .dplayer-danmaku-move {\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.dplayer.dplayer-hide-controller {\n  cursor: none;\n}\n.dplayer.dplayer-hide-controller .dplayer-controller-mask {\n  opacity: 0;\n  transform: translateY(100%);\n}\n.dplayer.dplayer-hide-controller .dplayer-controller {\n  opacity: 0;\n  transform: translateY(100%);\n}\n.dplayer.dplayer-show-controller .dplayer-controller-mask {\n  opacity: 1;\n}\n.dplayer.dplayer-show-controller .dplayer-controller {\n  opacity: 1;\n}\n.dplayer.dplayer-fulled {\n  width: 100% !important;\n  height: 100% !important;\n}\n.dplayer.dplayer-fulled {\n  position: fixed;\n  z-index: 100000;\n  left: 0;\n  top: 0;\n}\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {\n  display: none;\n}\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {\n  position: static;\n  display: inline-block;\n}\n.dplayer.dplayer-mobile .dplayer-bar-time {\n  display: none;\n}\n.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {\n  display: none;\n}\n.dplayer.dplayer-mobile .dplayer-mobile-play {\n  display: block;\n}\n.dplayer-web-fullscreen-fix {\n  position: fixed;\n  top: 0;\n  left: 0;\n  margin: 0;\n  padding: 0;\n}\n[data-balloon]:before {\n  display: none;\n}\n[data-balloon]:after {\n  padding: 0.3em 0.7em;\n  background: rgba(17, 17, 17, 0.7);\n}\n[data-balloon][data-balloon-pos="up"]:after {\n  margin-bottom: 0;\n}\n.dplayer-bezel {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  font-size: 22px;\n  color: #fff;\n  pointer-events: none;\n}\n.dplayer-bezel .dplayer-bezel-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -26px 0 0 -26px;\n  height: 52px;\n  width: 52px;\n  padding: 12px;\n  box-sizing: border-box;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n}\n.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {\n  -webkit-animation: bezel-hide 0.5s linear;\n          animation: bezel-hide 0.5s linear;\n}\n@-webkit-keyframes bezel-hide {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n  to {\n    opacity: 0;\n    transform: scale(2);\n  }\n}\n@keyframes bezel-hide {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n  to {\n    opacity: 0;\n    transform: scale(2);\n  }\n}\n.dplayer-bezel .dplayer-danloading {\n  position: absolute;\n  top: 50%;\n  margin-top: -7px;\n  width: 100%;\n  text-align: center;\n  font-size: 14px;\n  line-height: 14px;\n  -webkit-animation: my-face 5s infinite ease-in-out;\n          animation: my-face 5s infinite ease-in-out;\n}\n.dplayer-bezel .diplayer-loading-icon {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -18px 0 0 -18px;\n  height: 36px;\n  width: 36px;\n  pointer-events: none;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {\n  display: none;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {\n  -webkit-animation: diplayer-loading-dot-fade 0.8s ease infinite;\n          animation: diplayer-loading-dot-fade 0.8s ease infinite;\n  opacity: 0;\n  transform-origin: 4px 4px;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {\n  -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {\n  -webkit-animation-delay: 0.6s;\n          animation-delay: 0.6s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {\n  -webkit-animation-delay: 0.7s;\n          animation-delay: 0.7s;\n}\n@-webkit-keyframes diplayer-loading-dot-fade {\n  0% {\n    opacity: 0.7;\n    transform: scale(1.2, 1.2);\n  }\n  50% {\n    opacity: 0.25;\n    transform: scale(0.9, 0.9);\n  }\n  to {\n    opacity: 0.25;\n    transform: scale(0.85, 0.85);\n  }\n}\n@keyframes diplayer-loading-dot-fade {\n  0% {\n    opacity: 0.7;\n    transform: scale(1.2, 1.2);\n  }\n  50% {\n    opacity: 0.25;\n    transform: scale(0.9, 0.9);\n  }\n  to {\n    opacity: 0.25;\n    transform: scale(0.85, 0.85);\n  }\n}\n.dplayer-controller-mask {\n  background: url(' + c + ") repeat-x bottom;\n  height: 98px;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  transition: all 0.3s ease;\n}\n.dplayer-controller {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 41px;\n  padding: 0 20px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  transition: all 0.3s ease;\n}\n.dplayer-controller.dplayer-controller-comment .dplayer-icons {\n  display: none;\n}\n.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {\n  display: block;\n}\n.dplayer-controller .dplayer-bar-wrap {\n  padding: 5px 0;\n  cursor: pointer;\n  position: absolute;\n  bottom: 33px;\n  width: calc(100% - 40px);\n  height: 3px;\n}\n.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {\n  display: block;\n  width: 8px;\n  transform: translateX(-4px);\n  top: 4px;\n  height: 40%;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {\n  z-index: 12;\n  position: absolute;\n  top: 5px;\n  width: 6px;\n  height: 20%;\n  border-radius: 6px;\n  background-color: #fff;\n  text-align: center;\n  transform: translateX(-3px);\n  transition: all 0.2s ease-in-out;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {\n  display: block;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {\n  opacity: 0;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {\n  opacity: 0;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {\n  display: none;\n  position: absolute;\n  left: 50%;\n  top: -24px;\n  padding: 5px 8px;\n  background-color: rgba(0, 0, 0, 0.62);\n  color: #fff;\n  border-radius: 4px;\n  font-size: 12px;\n  white-space: nowrap;\n  transform: translateX(-50%);\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {\n  position: absolute;\n  background: #fff;\n  pointer-events: none;\n  display: none;\n  background-size: 16000px 100%;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  pointer-events: none;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {\n  position: absolute;\n  left: 0px;\n  top: -20px;\n  border-radius: 4px;\n  padding: 5px 7px;\n  background-color: rgba(0, 0, 0, 0.62);\n  color: #fff;\n  font-size: 12px;\n  text-align: center;\n  opacity: 1;\n  transition: opacity 0.1s ease-in-out;\n  word-wrap: normal;\n  word-break: normal;\n  z-index: 2;\n  pointer-events: none;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {\n  opacity: 0;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar {\n  position: relative;\n  height: 3px;\n  width: 100%;\n  background: rgba(255, 255, 255, 0.2);\n  cursor: pointer;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.4);\n  height: 3px;\n  transition: all 0.5s ease;\n  will-change: width;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  height: 3px;\n  will-change: width;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {\n  position: absolute;\n  top: 0;\n  right: 5px;\n  margin-top: -4px;\n  margin-right: -10px;\n  height: 11px;\n  width: 11px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  transform: scale(0);\n}\n.dplayer-controller .dplayer-icons {\n  height: 38px;\n  position: absolute;\n  bottom: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box {\n  display: none;\n  position: absolute;\n  transition: all 0.3s ease-in-out;\n  z-index: 2;\n  height: 38px;\n  bottom: 0;\n  left: 20px;\n  right: 20px;\n  color: #fff;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {\n  padding: 7px;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {\n  position: absolute;\n  background: rgba(28, 28, 28, 0.9);\n  bottom: 41px;\n  left: 0;\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);\n  border-radius: 4px;\n  padding: 10px 10px 16px;\n  font-size: 14px;\n  width: 204px;\n  transition: all 0.3s ease-in-out;\n  transform: scale(0);\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {\n  display: none;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {\n  cursor: pointer;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {\n  font-size: 13px;\n  color: #fff;\n  line-height: 30px;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {\n  font-size: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {\n  margin-bottom: 6px;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {\n  border-radius: 4px 0 0 4px;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {\n  border-radius: 0 4px 4px 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {\n  width: 33%;\n  padding: 4px 6px;\n  line-height: 16px;\n  display: inline-block;\n  font-size: 12px;\n  color: #fff;\n  border: 1px solid #fff;\n  margin-right: -1px;\n  box-sizing: border-box;\n  text-align: center;\n  cursor: pointer;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {\n  background: #E4E4E6;\n  color: #1c1c1c;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {\n  font-size: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {\n  font-size: 0;\n  padding: 6px;\n  display: inline-block;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {\n  width: 22px;\n  height: 22px;\n  display: inline-block;\n  border-radius: 50%;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {\n  -webkit-animation: my-face 5s infinite ease-in-out;\n          animation: my-face 5s infinite ease-in-out;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {\n  outline: none;\n  border: none;\n  padding: 8px 31px;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  border-radius: 4px;\n  background: none;\n  margin: 0;\n  height: 100%;\n  box-sizing: border-box;\n  width: 100%;\n  color: #fff;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-moz-placeholder {\n  color: #fff;\n  opacity: 0.8;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {\n  color: #fff;\n  opacity: 0.8;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {\n  display: none;\n}\n.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {\n  padding: 7px;\n}\n.dplayer-controller .dplayer-icons.dplayer-icons-right {\n  right: 20px;\n}\n.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {\n  padding: 8px;\n}\n.dplayer-controller .dplayer-icons .dplayer-time,\n.dplayer-controller .dplayer-icons .dplayer-live-badge {\n  line-height: 38px;\n  color: #eee;\n  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);\n  vertical-align: middle;\n  font-size: 13px;\n  cursor: default;\n}\n.dplayer-controller .dplayer-icons .dplayer-live-dot {\n  display: inline-block;\n  width: 6px;\n  height: 6px;\n  vertical-align: 4%;\n  margin-right: 5px;\n  content: '';\n  border-radius: 6px;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon {\n  width: 40px;\n  height: 100%;\n  border: none;\n  background-color: transparent;\n  outline: none;\n  cursor: pointer;\n  vertical-align: middle;\n  box-sizing: border-box;\n  display: inline-block;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {\n  transition: all 0.2s ease-in-out;\n  opacity: 0.8;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {\n  opacity: 1;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {\n  color: #fff;\n  width: auto;\n  line-height: 22px;\n  font-size: 14px;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {\n  padding: 10px 9px 9px;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {\n  padding-top: 8.5px;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {\n  width: 43px;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {\n  width: 45px;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {\n  width: 45px;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {\n  display: inline-block;\n  margin: 0 10px 0 -5px;\n  vertical-align: middle;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {\n  position: relative;\n  top: 17px;\n  width: 0;\n  height: 3px;\n  background: #aaa;\n  transition: all 0.3s ease-in-out;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  transition: all 0.1s ease;\n  will-change: width;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {\n  position: absolute;\n  top: 0;\n  right: 5px;\n  margin-top: -4px;\n  margin-right: -10px;\n  height: 11px;\n  width: 11px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  transform: scale(0);\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {\n  display: inline-block;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles {\n  display: inline-block;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {\n  position: absolute;\n  right: 0;\n  bottom: 50px;\n  transform: scale(0);\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: 240px;\n  min-width: 120px;\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.9);\n  padding: 7px 0;\n  transition: all 0.3s ease-in-out;\n  overflow: auto;\n  z-index: 2;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {\n  height: 30px;\n  padding: 5px 10px;\n  box-sizing: border-box;\n  cursor: pointer;\n  position: relative;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.dplayer-controller .dplayer-icons .dplayer-setting {\n  display: inline-block;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {\n  position: absolute;\n  right: 0;\n  bottom: 50px;\n  transform: scale(0);\n  width: 150px;\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.9);\n  padding: 7px 0;\n  transition: all 0.3s ease-in-out;\n  overflow: hidden;\n  z-index: 2;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {\n  width: 70px;\n  text-align: center;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {\n  height: 30px;\n  padding: 5px 10px;\n  box-sizing: border-box;\n  cursor: pointer;\n  position: relative;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {\n  padding: 5px 0;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {\n  padding: 0 10px;\n  display: inline;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {\n  display: inline-block;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {\n  display: inline-block;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {\n  padding: 0 10px;\n  box-sizing: border-box;\n  display: none;\n  vertical-align: middle;\n  height: 100%;\n  width: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {\n  position: relative;\n  top: 8.5px;\n  width: 100%;\n  height: 3px;\n  background: #fff;\n  transition: all 0.3s ease-in-out;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  transition: all 0.1s ease;\n  background: #aaa;\n  will-change: width;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {\n  position: absolute;\n  top: 0;\n  right: 5px;\n  margin-top: -4px;\n  margin-right: -10px;\n  height: 11px;\n  width: 11px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  background: #aaa;\n}\n.dplayer-controller .dplayer-icons .dplayer-full {\n  display: inline-block;\n  height: 100%;\n  position: relative;\n}\n.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {\n  position: absolute;\n  top: -30px;\n  z-index: 1;\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality {\n  position: relative;\n  display: inline-block;\n  height: 100%;\n  z-index: 2;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {\n  display: none;\n  position: absolute;\n  bottom: 38px;\n  left: -18px;\n  width: 80px;\n  padding-bottom: 12px;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {\n  display: none;\n  font-size: 12px;\n  width: 80px;\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.9);\n  padding: 5px 0;\n  transition: all 0.3s ease-in-out;\n  overflow: hidden;\n  color: #fff;\n  text-align: center;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {\n  height: 25px;\n  box-sizing: border-box;\n  cursor: pointer;\n  line-height: 25px;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.dplayer-controller .dplayer-icons .dplayer-comment {\n  display: inline-block;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-label {\n  color: #eee;\n  font-size: 13px;\n  display: inline-block;\n  vertical-align: middle;\n  white-space: nowrap;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle {\n  width: 32px;\n  height: 20px;\n  text-align: center;\n  font-size: 0;\n  vertical-align: middle;\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input {\n  max-height: 0;\n  max-width: 0;\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input + label {\n  display: inline-block;\n  position: relative;\n  box-shadow: #dfdfdf 0 0 0 0 inset;\n  border: 1px solid #dfdfdf;\n  height: 20px;\n  width: 32px;\n  border-radius: 10px;\n  box-sizing: border-box;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  height: 18px;\n  width: 18px;\n  top: 0;\n  left: 0;\n  border-radius: 15px;\n  transition: 0.2s ease-in-out;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  left: 0;\n  top: 0;\n  border-radius: 15px;\n  background: #fff;\n  transition: 0.2s ease-in-out;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n  height: 18px;\n  width: 18px;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {\n  border-color: rgba(255, 255, 255, 0.5);\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {\n  width: 30px;\n  background: rgba(255, 255, 255, 0.5);\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {\n  left: 12px;\n}\n.dplayer-mobile-play {\n  display: none;\n  width: 50px;\n  height: 50px;\n  border: none;\n  background-color: transparent;\n  outline: none;\n  cursor: pointer;\n  box-sizing: border-box;\n  bottom: 0;\n  opacity: 0.8;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.dplayer-danmaku {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  font-size: 22px;\n  color: #fff;\n}\n.dplayer-danmaku .dplayer-danmaku-item {\n  display: inline-block;\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  cursor: default;\n  white-space: nowrap;\n  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);\n}\n.dplayer-danmaku .dplayer-danmaku-item--demo {\n  position: absolute;\n  visibility: hidden;\n}\n.dplayer-danmaku .dplayer-danmaku-right {\n  position: absolute;\n  right: 0;\n  transform: translateX(100%);\n}\n.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {\n  will-change: transform;\n  -webkit-animation-name: 'danmaku';\n          animation-name: 'danmaku';\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n@-webkit-keyframes danmaku {\n  from {\n    transform: translateX(100%);\n  }\n}\n@keyframes danmaku {\n  from {\n    transform: translateX(100%);\n  }\n}\n.dplayer-danmaku .dplayer-danmaku-top,\n.dplayer-danmaku .dplayer-danmaku-bottom {\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  visibility: hidden;\n}\n.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,\n.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {\n  will-change: visibility;\n  -webkit-animation-name: 'danmaku-center';\n          animation-name: 'danmaku-center';\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n@-webkit-keyframes danmaku-center {\n  from {\n    visibility: visible;\n  }\n  to {\n    visibility: visible;\n  }\n}\n@keyframes danmaku-center {\n  from {\n    visibility: visible;\n  }\n  to {\n    visibility: visible;\n  }\n}\n.dplayer-logo {\n  pointer-events: none;\n  position: absolute;\n  left: 20px;\n  top: 20px;\n  max-width: 50px;\n  max-height: 50px;\n}\n.dplayer-logo img {\n  max-width: 100%;\n  max-height: 100%;\n  background: none;\n}\n.dplayer-menu {\n  position: absolute;\n  width: 170px;\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.85);\n  padding: 5px 0;\n  overflow: hidden;\n  z-index: 3;\n  display: none;\n}\n.dplayer-menu.dplayer-menu-show {\n  display: block;\n}\n.dplayer-menu .dplayer-menu-item {\n  height: 30px;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n.dplayer-menu .dplayer-menu-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.dplayer-menu .dplayer-menu-item a {\n  padding: 0 10px;\n  line-height: 30px;\n  color: #eee;\n  font-size: 13px;\n  display: inline-block;\n  vertical-align: middle;\n  width: 100%;\n  box-sizing: border-box;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.dplayer-menu .dplayer-menu-item a:hover {\n  text-decoration: none;\n}\n.dplayer-notice-list {\n  position: absolute;\n  bottom: 60px;\n  left: 20px;\n}\n.dplayer-notice-list .dplayer-notice {\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.9);\n  transition: all 0.3s ease-in-out;\n  overflow: hidden;\n  color: #fff;\n  display: table;\n  pointer-events: none;\n  -webkit-animation: showNotice 0.3s ease 1 forwards;\n          animation: showNotice 0.3s ease 1 forwards;\n}\n.dplayer-notice-list .remove-notice {\n  -webkit-animation: removeNotice 0.3s ease 1 forwards;\n          animation: removeNotice 0.3s ease 1 forwards;\n}\n@-webkit-keyframes showNotice {\n  from {\n    padding: 0;\n    font-size: 0;\n    margin-top: 0;\n  }\n  to {\n    padding: 7px 20px;\n    font-size: 14px;\n    margin-top: 5px;\n  }\n}\n@keyframes showNotice {\n  from {\n    padding: 0;\n    font-size: 0;\n    margin-top: 0;\n  }\n  to {\n    padding: 7px 20px;\n    font-size: 14px;\n    margin-top: 5px;\n  }\n}\n@-webkit-keyframes removeNotice {\n  0% {\n    padding: 7px 20px;\n    font-size: 14px;\n    margin-top: 5px;\n  }\n  20% {\n    font-size: 12px;\n  }\n  21% {\n    font-size: 0;\n    padding: 7px 10px;\n  }\n  100% {\n    padding: 0;\n    margin-top: 0;\n    font-size: 0;\n  }\n}\n@keyframes removeNotice {\n  0% {\n    padding: 7px 20px;\n    font-size: 14px;\n    margin-top: 5px;\n  }\n  20% {\n    font-size: 12px;\n  }\n  21% {\n    font-size: 0;\n    padding: 7px 10px;\n  }\n  100% {\n    padding: 0;\n    margin-top: 0;\n    font-size: 0;\n  }\n}\n.dplayer-subtitle {\n  position: absolute;\n  bottom: 40px;\n  width: 90%;\n  left: 5%;\n  text-align: center;\n  color: #fff;\n  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);\n  font-size: 20px;\n}\n.dplayer-subtitle.dplayer-subtitle-hide {\n  display: none;\n}\n.dplayer-mask {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  display: none;\n}\n.dplayer-mask.dplayer-mask-show {\n  display: block;\n}\n.dplayer-video-wrap {\n  position: relative;\n  background: #000;\n  font-size: 0;\n  width: 100%;\n  height: 100%;\n}\n.dplayer-video-wrap .dplayer-video {\n  width: 100%;\n  height: 100%;\n  display: none;\n}\n.dplayer-video-wrap .dplayer-video-current {\n  display: block;\n}\n.dplayer-video-wrap .dplayer-video-prepare {\n  display: none;\n}\n.dplayer-info-panel {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  width: 400px;\n  background: rgba(28, 28, 28, 0.8);\n  padding: 10px;\n  color: #fff;\n  font-size: 12px;\n  border-radius: 2px;\n}\n.dplayer-info-panel-hide {\n  display: none;\n}\n.dplayer-info-panel .dplayer-info-panel-close {\n  cursor: pointer;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n.dplayer-info-panel .dplayer-info-panel-item > span {\n  display: inline-block;\n  vertical-align: middle;\n  line-height: 15px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.dplayer-info-panel .dplayer-info-panel-item-title {\n  width: 100px;\n  text-align: right;\n  margin-right: 10px;\n}\n.dplayer-info-panel .dplayer-info-panel-item-data {\n  width: 260px;\n}\n", "", {
                version: 3,
                sources: ["webpack://./src/css/global.less", "webpack://./src/css/index.less", "webpack://./src/css/player.less", "webpack://./src/css/balloon.less", "webpack://./src/css/bezel.less", "webpack://./src/css/video.less", "webpack://./src/css/controller.less", "webpack://./src/css/danmaku.less", "webpack://./src/css/logo.less", "webpack://./src/css/menu.less", "webpack://./src/css/notice.less", "webpack://./src/css/subtitle.less", "webpack://./src/css/info-panel.less"],
                names: [],
                mappings: "AAAA;EACI;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;;IAEI,uCAAA;ECEN;AACF;ADzJA;EACI;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;;IAEI,uCAAA;ECEN;AACF;ACzJA;EACI,kBAAA;EACA,gBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,cAAA;AD2JJ;AC/JA;EAOQ,uBAAA;AD2JR;AClKA;EAWQ,WAAA;EACA,YAAA;AD0JR;ACtKA;;EAgBY,UAAA;AD0JZ;ACtJI;EACI,WAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,UAAA;EACA,0BAAA;ADwJR;ACpJI;;;EAKY,aAAA;ADoJhB;ACzJI;EAUQ,aAAA;ADkJZ;AC5JI;EAcQ,aAAA;ADiJZ;AC7II;EAEQ,aAAA;AD8IZ;AChJI;EAKQ,aAAA;AD8IZ;ACnJI;EAQQ,aAAA;AD8IZ;ACtJI;EAWQ,aAAA;AD8IZ;AC3IQ;EAEQ,aAAA;AD4IhB;ACvII;EAEQ,eAAA;ADwIZ;AC1II;EAKQ,cAAA;ADwIZ;ACpII;EAEQ,qCAAA;UAAA,6BAAA;ADqIZ;AClIQ;EAAA;IAEQ,UAAA;EDoId;ECtIM;IAKQ,UAAA;EDoId;ECjIU;IAEQ,UAAA;EDkIlB;ECpIU;IAKQ,UAAA;EDkIlB;AACF;AC7HI;EAEQ,cAAA;AD8HZ;AC1HI;;;;EAIQ,oCAAA;UAAA,4BAAA;AD4HZ;ACxHI;EACI,YAAA;AD0HR;AC3HI;EAIQ,UAAA;EACA,2BAAA;AD0HZ;AC/HI;EAQQ,UAAA;EACA,2BAAA;AD0HZ;ACvHI;EAEQ,UAAA;ADwHZ;AC1HI;EAKQ,UAAA;ADwHZ;ACrHI;EAKI,sBAAA;EACA,uBAAA;ADuHR;AC7HI;EACI,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;ADyHR;ACrHI;;;;;EAOY,aAAA;ADqHhB;AC5HI;EAUY,gBAAA;EACA,qBAAA;ADqHhB;AChII;EAgBQ,aAAA;ADmHZ;AChHQ;EAEQ,aAAA;ADiHhB;ACtII;EA0BQ,cAAA;AD+GZ;ACzGA;EACI,eAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;AD2GJ;AElSA;EACI,aAAA;AFoSJ;AEjSA;EACI,oBAAA;EACA,iCAAA;AFmSJ;AEhSA;EACI,gBAAA;AFkSJ;AG9SA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;EACA,oBAAA;AHgTJ;AGxTA;EAUQ,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AHiTR;AGhTQ;EACI,yCAAA;UAAA,iCAAA;AHkTZ;AGhTQ;EACI;IACI,UAAA;IACA,mBAAA;EHkTd;EGhTU;IACI,UAAA;IACA,mBAAA;EHkTd;AACF;AG1TQ;EACI;IACI,UAAA;IACA,mBAAA;EHkTd;EGhTU;IACI,UAAA;IACA,mBAAA;EHkTd;AACF;AGnVA;EAqCQ,kBAAA;EACA,QAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,kDAAA;UAAA,0CAAA;AHiTR;AG7VA;EA+CQ,aAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,oBAAA;AHiTR;AGvWA;EAwDY,aAAA;AHkTZ;AG1WA;EA2DY,+DAAA;UAAA,uDAAA;EACA,UAAA;EACA,yBAAA;AHkTZ;AI/WC;EDgEmB,6BAAA;UAAA,qBAAA;AHkTpB;AIlXC;EDgEmB,6BAAA;UAAA,qBAAA;AHqTpB;AIrXC;EDgEmB,6BAAA;UAAA,qBAAA;AHwTpB;AIxXC;EDgEmB,6BAAA;UAAA,qBAAA;AH2TpB;AI3XC;EDgEmB,6BAAA;UAAA,qBAAA;AH8TpB;AI9XC;EDgEmB,6BAAA;UAAA,qBAAA;AHiUpB;AIjYC;EDgEmB,6BAAA;UAAA,qBAAA;AHoUpB;AGhUQ;EACI;IACI,YAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,4BAAA;EHkUd;AACF;AG9UQ;EACI;IACI,YAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,4BAAA;EHkUd;AACF;AKlZA;EACI,mEAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;EACA,yBAAA;ALoZJ;AKjZA;EACI,kBAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,eAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,yBAAA;ALmZJ;AKlZI;EAEQ,aAAA;ALmZZ;AKrZI;EAKQ,cAAA;ALmZZ;AKjaA;EAkBQ,cAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,wBAAA;EACA,WAAA;ALkZR;AKjZQ;EAEQ,mBAAA;ALkZhB;AKpZQ;EAKQ,cAAA;EACA,UAAA;EACA,2BAAA;EACA,QAAA;EACA,WAAA;ALkZhB;AKnbA;EAqCY,WAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,2BAAA;EACA,gCAAA;ALiZZ;AKhZY;EAEQ,cAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AKxcA;EA2DgB,aAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,2BAAA;ALgZhB;AKrdA;EAyEY,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,aAAA;EACA,6BAAA;AL+YZ;AK5dA;EAgFY,kBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,oBAAA;AL+YZ;AKneA;EA0FY,kBAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;EACA,oCAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AL4YZ;AK7ZY;EACI,UAAA;AL+ZhB;AKvfA;EA2GY,kBAAA;EACA,WAAA;EACA,WAAA;EACA,oCAAA;EACA,eAAA;AL+YZ;AK9fA;EAiHgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,oCAAA;EACA,WAAA;EACA,yBAAA;EACA,kBAAA;ALgZhB;AKxgBA;EA2HgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;ALgZhB;AKhhBA;EAkIoB,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALiZpB;AK7hBA;EAkJQ,YAAA;EACA,kBAAA;EACA,SAAA;AL8YR;AK7YQ;EACI,aAAA;EACA,kBAAA;EACA,gCAAA;EACA,UAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;AL+YZ;AKxZQ;EAWQ,YAAA;ALgZhB;AK3ZQ;EAcQ,kBAAA;EACA,OAAA;EACA,MAAA;ALgZhB;AKhaQ;EAmBQ,kBAAA;EACA,QAAA;EACA,MAAA;ALgZhB;AKraQ;EAwBQ,kBAAA;EACA,iCAAA;EACA,YAAA;EACA,OAAA;EACA,uCAAA;EACA,kBAAA;EACA,uBAAA;EACA,eAAA;EACA,YAAA;EACA,gCAAA;EACA,mBAAA;ALgZhB;AK/YgB;EACI,mBAAA;ALiZpB;AKrbQ;EAuCY,aAAA;ALiZpB;AKxbQ;EA0CY,eAAA;ALiZpB;AK3bQ;EA6CY,eAAA;EACA,WAAA;EACA,iBAAA;ALiZpB;AKhcQ;EAkDY,YAAA;ALiZpB;AKncQ;EAoDgB,kBAAA;ALkZxB;AK/YwB;EAEQ,0BAAA;ALgZhC;AK7YwB;EAEQ,0BAAA;AL8YhC;AK5cQ;EAmEgB,UAAA;EACA,gBAAA;EACA,iBAAA;EACA,qBAAA;EACA,eAAA;EACA,WAAA;EACA,sBAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,eAAA;AL4YxB;AKzdQ;EAgFgB,mBAAA;EACA,cAAA;AL4YxB;AK7dQ;EAqFY,YAAA;AL2YpB;AKheQ;EAuFgB,YAAA;EACA,YAAA;EACA,qBAAA;AL4YxB;AKreQ;EA4FgB,WAAA;EACA,YAAA;EACA,qBAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;AL4YxB;AK3YwB;EACI,kDAAA;UAAA,0CAAA;AL6Y5B;AKhfQ;EAyGQ,aAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;EACA,YAAA;EACA,sBAAA;EACA,WAAA;EACA,WAAA;AL0YhB;AKzYgB;EACI,WAAA;EACA,YAAA;AL2YpB;AK7YgB;EACI,WAAA;EACA,YAAA;AL2YpB;AKzYgB;EACI,aAAA;AL2YpB;AKvYQ;EAEQ,YAAA;ALwYhB;AKrYQ;EACI,WAAA;ALuYZ;AKxYQ;EAGQ,YAAA;ALwYhB;AKpqBA;;EAiSY,iBAAA;EACA,WAAA;EACA,uCAAA;EACA,sBAAA;EACA,eAAA;EACA,eAAA;ALuYZ;AK7qBA;EAySY,qBAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;EACA,kBAAA;ALuYZ;AKtrBA;EAkTY,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EACA,sBAAA;EACA,qBAAA;ALuYZ;AKjsBA;EA4TgB,gCAAA;EACA,YAAA;ALwYhB;AKtYY;EAEQ,UAAA;ALuYpB;AKpYY;EACI,WAAA;EACA,WAAA;EACA,iBAAA;EACA,eAAA;ALsYhB;AKpYY;EACI,qBAAA;ALsYhB;AKpYY;EACI,kBAAA;ALsYhB;AKpYY;EACI,WAAA;ALsYhB;AKvtBA;EAqVY,kBAAA;EACA,qBAAA;EACA,eAAA;EACA,YAAA;ALqYZ;AKpYY;EAEQ,WAAA;ALqYpB;AKvYY;EAKQ,mBAAA;ALqYpB;AKlYY;EAEQ,WAAA;ALmYpB;AKrYY;EAKQ,mBAAA;ALmYpB;AKzuBA;EA0WgB,qBAAA;EACA,qBAAA;EACA,sBAAA;EACA,YAAA;ALkYhB;AK/uBA;EA+WoB,kBAAA;EACA,SAAA;EACA,QAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;ALmYpB;AKvvBA;EAsXwB,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;ALoYxB;AK/vBA;EA6X4B,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALqY5B;AK5wBA;EA8YY,qBAAA;EACA,YAAA;ALiYZ;AKhxBA;EAkZY,qBAAA;EACA,YAAA;ALiYZ;AKpxBA;EAqZgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,0BAAA;EAAA,uBAAA;EAAA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,cAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,cAAA;ALmYpB;AKjYgB;EACI,mBAAA;ALmYpB;AKzyBA;EA0agB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALkYhB;AKjYgB;EACI,0CAAA;ALmYpB;AKnzBA;EAqbY,qBAAA;EACA,YAAA;ALiYZ;AKvzBA;EAwbgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,aAAA;ALmYpB;AKlYoB;EACI,cAAA;ALoYxB;AKjYgB;EACI,mBAAA;ALmYpB;AKjYgB;EACI,WAAA;EACA,kBAAA;ALmYpB;AKjYgB;EAEQ,aAAA;ALkYxB;AKpYgB;EAKQ,cAAA;ALkYxB;AKv1BA;;EA2dgB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALgYhB;AK/XgB;;EACI,0CAAA;ALkYpB;AKn2BA;EAqegB,cAAA;ALiYhB;AKt2BA;EAueoB,eAAA;EACA,eAAA;ALkYpB;AKhYgB;EAEQ,aAAA;ALiYxB;AKnYgB;EAKQ,qBAAA;ALiYxB;AK9XgB;EAEQ,aAAA;AL+XxB;AKjYgB;EAKQ,qBAAA;AL+XxB;AKt3BA;EA2foB,eAAA;EACA,sBAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EACA,WAAA;AL8XpB;AK93BA;EAkgBwB,kBAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;AL+XxB;AKt4BA;EAygB4B,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;ALgY5B;AK/4BA;EAihBgC,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,gBAAA;ALiYhC;AK55BA;EAmiBY,qBAAA;EACA,YAAA;EACA,kBAAA;AL4XZ;AK3XY;EAEQ,cAAA;AL4XpB;AKp6BA;EA4iBgB,kBAAA;EACA,UAAA;EACA,UAAA;EACA,aAAA;AL2XhB;AK16BA;EAmjBY,kBAAA;EACA,qBAAA;EACA,YAAA;EACA,UAAA;AL0XZ;AKzXY;EAEQ,cAAA;AL0XpB;AK5XY;EAKQ,cAAA;AL0XpB;AKt7BA;EAgkBgB,aAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,oBAAA;ALyXhB;AK97BA;EAwkBgB,aAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;ALyXhB;AK18BA;EAolBgB,YAAA;EACA,sBAAA;EACA,eAAA;EACA,iBAAA;ALyXhB;AKxXgB;EACI,0CAAA;AL0XpB;AKn9BA;EA8lBY,qBAAA;EACA,YAAA;ALwXZ;AKv9BA;EAkmBY,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,mBAAA;ALwXZ;AK99BA;EAymBY,WAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,sBAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;ALwXZ;AKx+BA;EAknBgB,aAAA;EACA,YAAA;EACA,aAAA;ALyXhB;AK7+BA;EAunBgB,qBAAA;EACA,kBAAA;EACA,iCAAA;EACA,yBAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,sBAAA;EACA,eAAA;EACA,4BAAA;ALyXhB;AKz/BA;EAmoBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,mBAAA;EACA,4BAAA;ALyXhB;AKpgCA;EA8oBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,OAAA;EACA,MAAA;EACA,mBAAA;EACA,gBAAA;EACA,4BAAA;EACA,wCAAA;EACA,YAAA;EACA,WAAA;ALyXhB;AKjhCA;EA2pBgB,sCAAA;ALyXhB;AKphCA;EA8pBgB,WAAA;EACA,oCAAA;ALyXhB;AKxhCA;EAkqBgB,UAAA;ALyXhB;AKnXA;EACI,aAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EAEA,SAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;ALoXJ;AMpjCA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;ANsjCJ;AM7jCA;EASQ,qBAAA;EACA,oBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,eAAA;EACA,mBAAA;EACA,iDAAA;ANujCR;AMtjCQ;EACI,kBAAA;EACA,kBAAA;ANwjCZ;AMzkCA;EAqBQ,kBAAA;EACA,QAAA;EACA,2BAAA;ANujCR;AMtjCQ;EACI,sBAAA;EACA,iCAAA;UAAA,yBAAA;EACA,yCAAA;UAAA,iCAAA;EACA,oCAAA;UAAA,4BAAA;ANwjCZ;AMrjCI;EACI;IACI,2BAAA;ENujCV;AACF;AM1jCI;EACI;IACI,2BAAA;ENujCV;AACF;AMzlCA;;EAsCQ,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;ANujCR;AMtjCQ;;EACI,uBAAA;EACA,wCAAA;UAAA,gCAAA;EACA,yCAAA;UAAA,iCAAA;EACA,oCAAA;UAAA,4BAAA;ANyjCZ;AMtjCI;EACI;IACI,mBAAA;ENwjCV;EMtjCM;IACI,mBAAA;ENwjCV;AACF;AM9jCI;EACI;IACI,mBAAA;ENwjCV;EMtjCM;IACI,mBAAA;ENwjCV;AACF;AO/mCA;EACI,oBAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,gBAAA;APinCJ;AOvnCA;EAQQ,eAAA;EACA,gBAAA;EACA,gBAAA;APknCR;AQ5nCA;EACI,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,kCAAA;EACA,cAAA;EACA,gBAAA;EACA,UAAA;EACA,aAAA;AR8nCJ;AQ7nCI;EACI,cAAA;AR+nCR;AQzoCA;EAaQ,YAAA;EACA,sBAAA;EACA,eAAA;AR+nCR;AQ9nCQ;EACI,0CAAA;ARgoCZ;AQjpCA;EAqBY,eAAA;EACA,iBAAA;EACA,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,WAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AR+nCZ;AQ9nCY;EACI,qBAAA;ARgoChB;ASjqCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;ATmqCJ;AStqCA;EAMQ,kBAAA;EACA,iCAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,cAAA;EACA,oBAAA;EACA,kDAAA;UAAA,0CAAA;ATmqCR;AShrCA;EAiBQ,oDAAA;UAAA,4CAAA;ATkqCR;AS9pCA;EACI;IACI,UAAA;IACA,YAAA;IACA,aAAA;ETgqCN;ES9pCE;IACI,iBAAA;IACA,eAAA;IACA,eAAA;ETgqCN;AACF;AS1qCA;EACI;IACI,UAAA;IACA,YAAA;IACA,aAAA;ETgqCN;ES9pCE;IACI,iBAAA;IACA,eAAA;IACA,eAAA;ETgqCN;AACF;AS7pCA;EACI;IACI,iBAAA;IACA,eAAA;IACA,eAAA;ET+pCN;ES7pCE;IACI,eAAA;ET+pCN;ES7pCE;IACI,YAAA;IACA,iBAAA;ET+pCN;ES7pCE;IACI,UAAA;IACA,aAAA;IACA,YAAA;ET+pCN;AACF;AShrCA;EACI;IACI,iBAAA;IACA,eAAA;IACA,eAAA;ET+pCN;ES7pCE;IACI,eAAA;ET+pCN;ES7pCE;IACI,YAAA;IACA,iBAAA;ET+pCN;ES7pCE;IACI,UAAA;IACA,aAAA;IACA,YAAA;ET+pCN;AACF;AUltCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;EACA,QAAA;EACA,kBAAA;EACA,WAAA;EACA,iDAAA;EACA,eAAA;AVotCJ;AUntCI;EACI,aAAA;AVqtCR;AI/tCA;EACI,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,UAAA;EACA,aAAA;AJiuCJ;AIhuCI;EACI,cAAA;AJkuCR;AI9tCA;EACI,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AJguCJ;AIruCA;EAOQ,WAAA;EACA,YAAA;EACA,aAAA;AJiuCR;AI1uCA;EAYQ,cAAA;AJiuCR;AI7uCA;EAeQ,aAAA;AJiuCR;AW7vCA;EACI,kBAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;EACA,iCAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;AX+vCJ;AW7vCI;EACI,aAAA;AX+vCR;AW3wCA;EAgBQ,eAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;AX8vCR;AW1vCQ;EACI,qBAAA;EACA,sBAAA;EACA,iBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AX4vCZ;AWzxCA;EAkCQ,YAAA;EACA,iBAAA;EACA,kBAAA;AX0vCR;AW9xCA;EAwCQ,YAAA;AXyvCR",
                sourcesContent: ["@keyframes my-face {\n    2% {\n        transform: translate(0, 1.5px) rotate(1.5deg);\n    }\n    4% {\n        transform: translate(0, -1.5px) rotate(-0.5deg);\n    }\n    6% {\n        transform: translate(0, 1.5px) rotate(-1.5deg);\n    }\n    8% {\n        transform: translate(0, -1.5px) rotate(-1.5deg);\n    }\n    10% {\n        transform: translate(0, 2.5px) rotate(1.5deg);\n    }\n    12% {\n        transform: translate(0, -0.5px) rotate(1.5deg);\n    }\n    14% {\n        transform: translate(0, -1.5px) rotate(1.5deg);\n    }\n    16% {\n        transform: translate(0, -0.5px) rotate(-1.5deg);\n    }\n    18% {\n        transform: translate(0, 0.5px) rotate(-1.5deg);\n    }\n    20% {\n        transform: translate(0, -1.5px) rotate(2.5deg);\n    }\n    22% {\n        transform: translate(0, 0.5px) rotate(-1.5deg);\n    }\n    24% {\n        transform: translate(0, 1.5px) rotate(1.5deg);\n    }\n    26% {\n        transform: translate(0, 0.5px) rotate(0.5deg);\n    }\n    28% {\n        transform: translate(0, 0.5px) rotate(1.5deg);\n    }\n    30% {\n        transform: translate(0, -0.5px) rotate(2.5deg);\n    }\n    32% {\n        transform: translate(0, 1.5px) rotate(-0.5deg);\n    }\n    34% {\n        transform: translate(0, 1.5px) rotate(-0.5deg);\n    }\n    36% {\n        transform: translate(0, -1.5px) rotate(2.5deg);\n    }\n    38% {\n        transform: translate(0, 1.5px) rotate(-1.5deg);\n    }\n    40% {\n        transform: translate(0, -0.5px) rotate(2.5deg);\n    }\n    42% {\n        transform: translate(0, 2.5px) rotate(-1.5deg);\n    }\n    44% {\n        transform: translate(0, 1.5px) rotate(0.5deg);\n    }\n    46% {\n        transform: translate(0, -1.5px) rotate(2.5deg);\n    }\n    48% {\n        transform: translate(0, -0.5px) rotate(0.5deg);\n    }\n    50% {\n        transform: translate(0, 0.5px) rotate(0.5deg);\n    }\n    52% {\n        transform: translate(0, 2.5px) rotate(2.5deg);\n    }\n    54% {\n        transform: translate(0, -1.5px) rotate(1.5deg);\n    }\n    56% {\n        transform: translate(0, 2.5px) rotate(2.5deg);\n    }\n    58% {\n        transform: translate(0, 0.5px) rotate(2.5deg);\n    }\n    60% {\n        transform: translate(0, 2.5px) rotate(2.5deg);\n    }\n    62% {\n        transform: translate(0, -0.5px) rotate(2.5deg);\n    }\n    64% {\n        transform: translate(0, -0.5px) rotate(1.5deg);\n    }\n    66% {\n        transform: translate(0, 1.5px) rotate(-0.5deg);\n    }\n    68% {\n        transform: translate(0, -1.5px) rotate(-0.5deg);\n    }\n    70% {\n        transform: translate(0, 1.5px) rotate(0.5deg);\n    }\n    72% {\n        transform: translate(0, 2.5px) rotate(1.5deg);\n    }\n    74% {\n        transform: translate(0, -0.5px) rotate(0.5deg);\n    }\n    76% {\n        transform: translate(0, -0.5px) rotate(2.5deg);\n    }\n    78% {\n        transform: translate(0, -0.5px) rotate(1.5deg);\n    }\n    80% {\n        transform: translate(0, 1.5px) rotate(1.5deg);\n    }\n    82% {\n        transform: translate(0, -0.5px) rotate(0.5deg);\n    }\n    84% {\n        transform: translate(0, 1.5px) rotate(2.5deg);\n    }\n    86% {\n        transform: translate(0, -1.5px) rotate(-1.5deg);\n    }\n    88% {\n        transform: translate(0, -0.5px) rotate(2.5deg);\n    }\n    90% {\n        transform: translate(0, 2.5px) rotate(-0.5deg);\n    }\n    92% {\n        transform: translate(0, 0.5px) rotate(-0.5deg);\n    }\n    94% {\n        transform: translate(0, 2.5px) rotate(0.5deg);\n    }\n    96% {\n        transform: translate(0, -0.5px) rotate(1.5deg);\n    }\n    98% {\n        transform: translate(0, -1.5px) rotate(-0.5deg);\n    }\n    0%,\n    100% {\n        transform: translate(0, 0) rotate(0deg);\n    }\n}", "@import '../../node_modules/balloon-css/balloon.css';\n@keyframes my-face {\n  2% {\n    transform: translate(0, 1.5px) rotate(1.5deg);\n  }\n  4% {\n    transform: translate(0, -1.5px) rotate(-0.5deg);\n  }\n  6% {\n    transform: translate(0, 1.5px) rotate(-1.5deg);\n  }\n  8% {\n    transform: translate(0, -1.5px) rotate(-1.5deg);\n  }\n  10% {\n    transform: translate(0, 2.5px) rotate(1.5deg);\n  }\n  12% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  14% {\n    transform: translate(0, -1.5px) rotate(1.5deg);\n  }\n  16% {\n    transform: translate(0, -0.5px) rotate(-1.5deg);\n  }\n  18% {\n    transform: translate(0, 0.5px) rotate(-1.5deg);\n  }\n  20% {\n    transform: translate(0, -1.5px) rotate(2.5deg);\n  }\n  22% {\n    transform: translate(0, 0.5px) rotate(-1.5deg);\n  }\n  24% {\n    transform: translate(0, 1.5px) rotate(1.5deg);\n  }\n  26% {\n    transform: translate(0, 0.5px) rotate(0.5deg);\n  }\n  28% {\n    transform: translate(0, 0.5px) rotate(1.5deg);\n  }\n  30% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  32% {\n    transform: translate(0, 1.5px) rotate(-0.5deg);\n  }\n  34% {\n    transform: translate(0, 1.5px) rotate(-0.5deg);\n  }\n  36% {\n    transform: translate(0, -1.5px) rotate(2.5deg);\n  }\n  38% {\n    transform: translate(0, 1.5px) rotate(-1.5deg);\n  }\n  40% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  42% {\n    transform: translate(0, 2.5px) rotate(-1.5deg);\n  }\n  44% {\n    transform: translate(0, 1.5px) rotate(0.5deg);\n  }\n  46% {\n    transform: translate(0, -1.5px) rotate(2.5deg);\n  }\n  48% {\n    transform: translate(0, -0.5px) rotate(0.5deg);\n  }\n  50% {\n    transform: translate(0, 0.5px) rotate(0.5deg);\n  }\n  52% {\n    transform: translate(0, 2.5px) rotate(2.5deg);\n  }\n  54% {\n    transform: translate(0, -1.5px) rotate(1.5deg);\n  }\n  56% {\n    transform: translate(0, 2.5px) rotate(2.5deg);\n  }\n  58% {\n    transform: translate(0, 0.5px) rotate(2.5deg);\n  }\n  60% {\n    transform: translate(0, 2.5px) rotate(2.5deg);\n  }\n  62% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  64% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  66% {\n    transform: translate(0, 1.5px) rotate(-0.5deg);\n  }\n  68% {\n    transform: translate(0, -1.5px) rotate(-0.5deg);\n  }\n  70% {\n    transform: translate(0, 1.5px) rotate(0.5deg);\n  }\n  72% {\n    transform: translate(0, 2.5px) rotate(1.5deg);\n  }\n  74% {\n    transform: translate(0, -0.5px) rotate(0.5deg);\n  }\n  76% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  78% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  80% {\n    transform: translate(0, 1.5px) rotate(1.5deg);\n  }\n  82% {\n    transform: translate(0, -0.5px) rotate(0.5deg);\n  }\n  84% {\n    transform: translate(0, 1.5px) rotate(2.5deg);\n  }\n  86% {\n    transform: translate(0, -1.5px) rotate(-1.5deg);\n  }\n  88% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  90% {\n    transform: translate(0, 2.5px) rotate(-0.5deg);\n  }\n  92% {\n    transform: translate(0, 0.5px) rotate(-0.5deg);\n  }\n  94% {\n    transform: translate(0, 2.5px) rotate(0.5deg);\n  }\n  96% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  98% {\n    transform: translate(0, -1.5px) rotate(-0.5deg);\n  }\n  0%,\n  100% {\n    transform: translate(0, 0) rotate(0deg);\n  }\n}\n.dplayer {\n  position: relative;\n  overflow: hidden;\n  user-select: none;\n  line-height: 1;\n}\n.dplayer * {\n  box-sizing: content-box;\n}\n.dplayer svg {\n  width: 100%;\n  height: 100%;\n}\n.dplayer svg path,\n.dplayer svg circle {\n  fill: #fff;\n}\n.dplayer:-webkit-full-screen {\n  width: 100%;\n  height: 100%;\n  background: #000;\n  position: fixed;\n  z-index: 100000;\n  left: 0;\n  top: 0;\n  margin: 0;\n  padding: 0;\n  transform: translate(0, 0);\n}\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {\n  display: none;\n}\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {\n  display: none;\n}\n.dplayer.dplayer-no-danmaku .dplayer-danmaku {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-time {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-bar-wrap {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-setting-speed {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-setting-loop {\n  display: none;\n}\n.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {\n  display: none;\n}\n.dplayer.dplayer-arrow .dplayer-danmaku {\n  font-size: 18px;\n}\n.dplayer.dplayer-arrow .dplayer-icon {\n  margin: 0 -3px;\n}\n.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {\n  animation-play-state: running;\n}\n@media (min-width: 900px) {\n  .dplayer.dplayer-playing .dplayer-controller-mask {\n    opacity: 0;\n  }\n  .dplayer.dplayer-playing .dplayer-controller {\n    opacity: 0;\n  }\n  .dplayer.dplayer-playing:hover .dplayer-controller-mask {\n    opacity: 1;\n  }\n  .dplayer.dplayer-playing:hover .dplayer-controller {\n    opacity: 1;\n  }\n}\n.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {\n  display: block;\n}\n.dplayer.dplayer-loading .dplayer-danmaku,\n.dplayer.dplayer-paused .dplayer-danmaku,\n.dplayer.dplayer-loading .dplayer-danmaku-move,\n.dplayer.dplayer-paused .dplayer-danmaku-move {\n  animation-play-state: paused;\n}\n.dplayer.dplayer-hide-controller {\n  cursor: none;\n}\n.dplayer.dplayer-hide-controller .dplayer-controller-mask {\n  opacity: 0;\n  transform: translateY(100%);\n}\n.dplayer.dplayer-hide-controller .dplayer-controller {\n  opacity: 0;\n  transform: translateY(100%);\n}\n.dplayer.dplayer-show-controller .dplayer-controller-mask {\n  opacity: 1;\n}\n.dplayer.dplayer-show-controller .dplayer-controller {\n  opacity: 1;\n}\n.dplayer.dplayer-fulled {\n  position: fixed;\n  z-index: 100000;\n  left: 0;\n  top: 0;\n  width: 100% !important;\n  height: 100% !important;\n}\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {\n  display: none;\n}\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {\n  position: static;\n  display: inline-block;\n}\n.dplayer.dplayer-mobile .dplayer-bar-time {\n  display: none;\n}\n.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {\n  display: none;\n}\n.dplayer.dplayer-mobile .dplayer-mobile-play {\n  display: block;\n}\n.dplayer-web-fullscreen-fix {\n  position: fixed;\n  top: 0;\n  left: 0;\n  margin: 0;\n  padding: 0;\n}\n[data-balloon]:before {\n  display: none;\n}\n[data-balloon]:after {\n  padding: 0.3em 0.7em;\n  background: rgba(17, 17, 17, 0.7);\n}\n[data-balloon][data-balloon-pos=\"up\"]:after {\n  margin-bottom: 0;\n}\n.dplayer-bezel {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  font-size: 22px;\n  color: #fff;\n  pointer-events: none;\n}\n.dplayer-bezel .dplayer-bezel-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -26px 0 0 -26px;\n  height: 52px;\n  width: 52px;\n  padding: 12px;\n  box-sizing: border-box;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n}\n.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {\n  animation: bezel-hide 0.5s linear;\n}\n@keyframes bezel-hide {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n  to {\n    opacity: 0;\n    transform: scale(2);\n  }\n}\n.dplayer-bezel .dplayer-danloading {\n  position: absolute;\n  top: 50%;\n  margin-top: -7px;\n  width: 100%;\n  text-align: center;\n  font-size: 14px;\n  line-height: 14px;\n  animation: my-face 5s infinite ease-in-out;\n}\n.dplayer-bezel .diplayer-loading-icon {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -18px 0 0 -18px;\n  height: 36px;\n  width: 36px;\n  pointer-events: none;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {\n  display: none;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {\n  animation: diplayer-loading-dot-fade 0.8s ease infinite;\n  opacity: 0;\n  transform-origin: 4px 4px;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {\n  animation-delay: 0.1s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {\n  animation-delay: 0.2s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {\n  animation-delay: 0.3s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {\n  animation-delay: 0.4s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {\n  animation-delay: 0.5s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {\n  animation-delay: 0.6s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {\n  animation-delay: 0.7s;\n}\n@keyframes diplayer-loading-dot-fade {\n  0% {\n    opacity: 0.7;\n    transform: scale(1.2, 1.2);\n  }\n  50% {\n    opacity: 0.25;\n    transform: scale(0.9, 0.9);\n  }\n  to {\n    opacity: 0.25;\n    transform: scale(0.85, 0.85);\n  }\n}\n.dplayer-controller-mask {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;\n  height: 98px;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  transition: all 0.3s ease;\n}\n.dplayer-controller {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 41px;\n  padding: 0 20px;\n  user-select: none;\n  transition: all 0.3s ease;\n}\n.dplayer-controller.dplayer-controller-comment .dplayer-icons {\n  display: none;\n}\n.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {\n  display: block;\n}\n.dplayer-controller .dplayer-bar-wrap {\n  padding: 5px 0;\n  cursor: pointer;\n  position: absolute;\n  bottom: 33px;\n  width: calc(100% - 40px);\n  height: 3px;\n}\n.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {\n  display: block;\n  width: 8px;\n  transform: translateX(-4px);\n  top: 4px;\n  height: 40%;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {\n  z-index: 12;\n  position: absolute;\n  top: 5px;\n  width: 6px;\n  height: 20%;\n  border-radius: 6px;\n  background-color: #fff;\n  text-align: center;\n  transform: translateX(-3px);\n  transition: all 0.2s ease-in-out;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {\n  display: block;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {\n  opacity: 0;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {\n  opacity: 0;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {\n  display: none;\n  position: absolute;\n  left: 50%;\n  top: -24px;\n  padding: 5px 8px;\n  background-color: rgba(0, 0, 0, 0.62);\n  color: #fff;\n  border-radius: 4px;\n  font-size: 12px;\n  white-space: nowrap;\n  transform: translateX(-50%);\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {\n  position: absolute;\n  background: #fff;\n  pointer-events: none;\n  display: none;\n  background-size: 16000px 100%;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  pointer-events: none;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {\n  position: absolute;\n  left: 0px;\n  top: -20px;\n  border-radius: 4px;\n  padding: 5px 7px;\n  background-color: rgba(0, 0, 0, 0.62);\n  color: #fff;\n  font-size: 12px;\n  text-align: center;\n  opacity: 1;\n  transition: opacity 0.1s ease-in-out;\n  word-wrap: normal;\n  word-break: normal;\n  z-index: 2;\n  pointer-events: none;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {\n  opacity: 0;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar {\n  position: relative;\n  height: 3px;\n  width: 100%;\n  background: rgba(255, 255, 255, 0.2);\n  cursor: pointer;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.4);\n  height: 3px;\n  transition: all 0.5s ease;\n  will-change: width;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  height: 3px;\n  will-change: width;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {\n  position: absolute;\n  top: 0;\n  right: 5px;\n  margin-top: -4px;\n  margin-right: -10px;\n  height: 11px;\n  width: 11px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  transform: scale(0);\n}\n.dplayer-controller .dplayer-icons {\n  height: 38px;\n  position: absolute;\n  bottom: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box {\n  display: none;\n  position: absolute;\n  transition: all 0.3s ease-in-out;\n  z-index: 2;\n  height: 38px;\n  bottom: 0;\n  left: 20px;\n  right: 20px;\n  color: #fff;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {\n  padding: 7px;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {\n  position: absolute;\n  background: rgba(28, 28, 28, 0.9);\n  bottom: 41px;\n  left: 0;\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);\n  border-radius: 4px;\n  padding: 10px 10px 16px;\n  font-size: 14px;\n  width: 204px;\n  transition: all 0.3s ease-in-out;\n  transform: scale(0);\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {\n  display: none;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {\n  cursor: pointer;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {\n  font-size: 13px;\n  color: #fff;\n  line-height: 30px;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {\n  font-size: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {\n  margin-bottom: 6px;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {\n  border-radius: 4px 0 0 4px;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {\n  border-radius: 0 4px 4px 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {\n  width: 33%;\n  padding: 4px 6px;\n  line-height: 16px;\n  display: inline-block;\n  font-size: 12px;\n  color: #fff;\n  border: 1px solid #fff;\n  margin-right: -1px;\n  box-sizing: border-box;\n  text-align: center;\n  cursor: pointer;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {\n  background: #E4E4E6;\n  color: #1c1c1c;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {\n  font-size: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {\n  font-size: 0;\n  padding: 6px;\n  display: inline-block;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {\n  width: 22px;\n  height: 22px;\n  display: inline-block;\n  border-radius: 50%;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {\n  animation: my-face 5s infinite ease-in-out;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {\n  outline: none;\n  border: none;\n  padding: 8px 31px;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  border-radius: 4px;\n  background: none;\n  margin: 0;\n  height: 100%;\n  box-sizing: border-box;\n  width: 100%;\n  color: #fff;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {\n  color: #fff;\n  opacity: 0.8;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {\n  display: none;\n}\n.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {\n  padding: 7px;\n}\n.dplayer-controller .dplayer-icons.dplayer-icons-right {\n  right: 20px;\n}\n.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {\n  padding: 8px;\n}\n.dplayer-controller .dplayer-icons .dplayer-time,\n.dplayer-controller .dplayer-icons .dplayer-live-badge {\n  line-height: 38px;\n  color: #eee;\n  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);\n  vertical-align: middle;\n  font-size: 13px;\n  cursor: default;\n}\n.dplayer-controller .dplayer-icons .dplayer-live-dot {\n  display: inline-block;\n  width: 6px;\n  height: 6px;\n  vertical-align: 4%;\n  margin-right: 5px;\n  content: '';\n  border-radius: 6px;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon {\n  width: 40px;\n  height: 100%;\n  border: none;\n  background-color: transparent;\n  outline: none;\n  cursor: pointer;\n  vertical-align: middle;\n  box-sizing: border-box;\n  display: inline-block;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {\n  transition: all 0.2s ease-in-out;\n  opacity: 0.8;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {\n  opacity: 1;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {\n  color: #fff;\n  width: auto;\n  line-height: 22px;\n  font-size: 14px;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {\n  padding: 10px 9px 9px;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {\n  padding-top: 8.5px;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {\n  width: 43px;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {\n  width: 45px;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {\n  width: 45px;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {\n  display: inline-block;\n  margin: 0 10px 0 -5px;\n  vertical-align: middle;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {\n  position: relative;\n  top: 17px;\n  width: 0;\n  height: 3px;\n  background: #aaa;\n  transition: all 0.3s ease-in-out;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  transition: all 0.1s ease;\n  will-change: width;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {\n  position: absolute;\n  top: 0;\n  right: 5px;\n  margin-top: -4px;\n  margin-right: -10px;\n  height: 11px;\n  width: 11px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  transform: scale(0);\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {\n  display: inline-block;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles {\n  display: inline-block;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {\n  position: absolute;\n  right: 0;\n  bottom: 50px;\n  transform: scale(0);\n  width: fit-content;\n  max-width: 240px;\n  min-width: 120px;\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.9);\n  padding: 7px 0;\n  transition: all 0.3s ease-in-out;\n  overflow: auto;\n  z-index: 2;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {\n  height: 30px;\n  padding: 5px 10px;\n  box-sizing: border-box;\n  cursor: pointer;\n  position: relative;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.dplayer-controller .dplayer-icons .dplayer-setting {\n  display: inline-block;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {\n  position: absolute;\n  right: 0;\n  bottom: 50px;\n  transform: scale(0);\n  width: 150px;\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.9);\n  padding: 7px 0;\n  transition: all 0.3s ease-in-out;\n  overflow: hidden;\n  z-index: 2;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {\n  width: 70px;\n  text-align: center;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {\n  height: 30px;\n  padding: 5px 10px;\n  box-sizing: border-box;\n  cursor: pointer;\n  position: relative;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {\n  padding: 5px 0;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {\n  padding: 0 10px;\n  display: inline;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {\n  display: inline-block;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {\n  display: inline-block;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {\n  padding: 0 10px;\n  box-sizing: border-box;\n  display: none;\n  vertical-align: middle;\n  height: 100%;\n  width: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {\n  position: relative;\n  top: 8.5px;\n  width: 100%;\n  height: 3px;\n  background: #fff;\n  transition: all 0.3s ease-in-out;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  transition: all 0.1s ease;\n  background: #aaa;\n  will-change: width;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {\n  position: absolute;\n  top: 0;\n  right: 5px;\n  margin-top: -4px;\n  margin-right: -10px;\n  height: 11px;\n  width: 11px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  background: #aaa;\n}\n.dplayer-controller .dplayer-icons .dplayer-full {\n  display: inline-block;\n  height: 100%;\n  position: relative;\n}\n.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {\n  position: absolute;\n  top: -30px;\n  z-index: 1;\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality {\n  position: relative;\n  display: inline-block;\n  height: 100%;\n  z-index: 2;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {\n  display: none;\n  position: absolute;\n  bottom: 38px;\n  left: -18px;\n  width: 80px;\n  padding-bottom: 12px;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {\n  display: none;\n  font-size: 12px;\n  width: 80px;\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.9);\n  padding: 5px 0;\n  transition: all 0.3s ease-in-out;\n  overflow: hidden;\n  color: #fff;\n  text-align: center;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {\n  height: 25px;\n  box-sizing: border-box;\n  cursor: pointer;\n  line-height: 25px;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.dplayer-controller .dplayer-icons .dplayer-comment {\n  display: inline-block;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-label {\n  color: #eee;\n  font-size: 13px;\n  display: inline-block;\n  vertical-align: middle;\n  white-space: nowrap;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle {\n  width: 32px;\n  height: 20px;\n  text-align: center;\n  font-size: 0;\n  vertical-align: middle;\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input {\n  max-height: 0;\n  max-width: 0;\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input + label {\n  display: inline-block;\n  position: relative;\n  box-shadow: #dfdfdf 0 0 0 0 inset;\n  border: 1px solid #dfdfdf;\n  height: 20px;\n  width: 32px;\n  border-radius: 10px;\n  box-sizing: border-box;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  height: 18px;\n  width: 18px;\n  top: 0;\n  left: 0;\n  border-radius: 15px;\n  transition: 0.2s ease-in-out;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  left: 0;\n  top: 0;\n  border-radius: 15px;\n  background: #fff;\n  transition: 0.2s ease-in-out;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n  height: 18px;\n  width: 18px;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {\n  border-color: rgba(255, 255, 255, 0.5);\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {\n  width: 30px;\n  background: rgba(255, 255, 255, 0.5);\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {\n  left: 12px;\n}\n.dplayer-mobile-play {\n  display: none;\n  width: 50px;\n  height: 50px;\n  border: none;\n  background-color: transparent;\n  outline: none;\n  cursor: pointer;\n  box-sizing: border-box;\n  bottom: 0;\n  opacity: 0.8;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.dplayer-danmaku {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  font-size: 22px;\n  color: #fff;\n}\n.dplayer-danmaku .dplayer-danmaku-item {\n  display: inline-block;\n  pointer-events: none;\n  user-select: none;\n  cursor: default;\n  white-space: nowrap;\n  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);\n}\n.dplayer-danmaku .dplayer-danmaku-item--demo {\n  position: absolute;\n  visibility: hidden;\n}\n.dplayer-danmaku .dplayer-danmaku-right {\n  position: absolute;\n  right: 0;\n  transform: translateX(100%);\n}\n.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {\n  will-change: transform;\n  animation-name: 'danmaku';\n  animation-timing-function: linear;\n  animation-play-state: paused;\n}\n@keyframes danmaku {\n  from {\n    transform: translateX(100%);\n  }\n}\n.dplayer-danmaku .dplayer-danmaku-top,\n.dplayer-danmaku .dplayer-danmaku-bottom {\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  visibility: hidden;\n}\n.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,\n.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {\n  will-change: visibility;\n  animation-name: 'danmaku-center';\n  animation-timing-function: linear;\n  animation-play-state: paused;\n}\n@keyframes danmaku-center {\n  from {\n    visibility: visible;\n  }\n  to {\n    visibility: visible;\n  }\n}\n.dplayer-logo {\n  pointer-events: none;\n  position: absolute;\n  left: 20px;\n  top: 20px;\n  max-width: 50px;\n  max-height: 50px;\n}\n.dplayer-logo img {\n  max-width: 100%;\n  max-height: 100%;\n  background: none;\n}\n.dplayer-menu {\n  position: absolute;\n  width: 170px;\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.85);\n  padding: 5px 0;\n  overflow: hidden;\n  z-index: 3;\n  display: none;\n}\n.dplayer-menu.dplayer-menu-show {\n  display: block;\n}\n.dplayer-menu .dplayer-menu-item {\n  height: 30px;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n.dplayer-menu .dplayer-menu-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.dplayer-menu .dplayer-menu-item a {\n  padding: 0 10px;\n  line-height: 30px;\n  color: #eee;\n  font-size: 13px;\n  display: inline-block;\n  vertical-align: middle;\n  width: 100%;\n  box-sizing: border-box;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.dplayer-menu .dplayer-menu-item a:hover {\n  text-decoration: none;\n}\n.dplayer-notice-list {\n  position: absolute;\n  bottom: 60px;\n  left: 20px;\n}\n.dplayer-notice-list .dplayer-notice {\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.9);\n  transition: all 0.3s ease-in-out;\n  overflow: hidden;\n  color: #fff;\n  display: table;\n  pointer-events: none;\n  animation: showNotice 0.3s ease 1 forwards;\n}\n.dplayer-notice-list .remove-notice {\n  animation: removeNotice 0.3s ease 1 forwards;\n}\n@keyframes showNotice {\n  from {\n    padding: 0;\n    font-size: 0;\n    margin-top: 0;\n  }\n  to {\n    padding: 7px 20px;\n    font-size: 14px;\n    margin-top: 5px;\n  }\n}\n@keyframes removeNotice {\n  0% {\n    padding: 7px 20px;\n    font-size: 14px;\n    margin-top: 5px;\n  }\n  20% {\n    font-size: 12px;\n  }\n  21% {\n    font-size: 0;\n    padding: 7px 10px;\n  }\n  100% {\n    padding: 0;\n    margin-top: 0;\n    font-size: 0;\n  }\n}\n.dplayer-subtitle {\n  position: absolute;\n  bottom: 40px;\n  width: 90%;\n  left: 5%;\n  text-align: center;\n  color: #fff;\n  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);\n  font-size: 20px;\n}\n.dplayer-subtitle.dplayer-subtitle-hide {\n  display: none;\n}\n.dplayer-mask {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  display: none;\n}\n.dplayer-mask.dplayer-mask-show {\n  display: block;\n}\n.dplayer-video-wrap {\n  position: relative;\n  background: #000;\n  font-size: 0;\n  width: 100%;\n  height: 100%;\n}\n.dplayer-video-wrap .dplayer-video {\n  width: 100%;\n  height: 100%;\n  display: none;\n}\n.dplayer-video-wrap .dplayer-video-current {\n  display: block;\n}\n.dplayer-video-wrap .dplayer-video-prepare {\n  display: none;\n}\n.dplayer-info-panel {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  width: 400px;\n  background: rgba(28, 28, 28, 0.8);\n  padding: 10px;\n  color: #fff;\n  font-size: 12px;\n  border-radius: 2px;\n}\n.dplayer-info-panel-hide {\n  display: none;\n}\n.dplayer-info-panel .dplayer-info-panel-close {\n  cursor: pointer;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n.dplayer-info-panel .dplayer-info-panel-item > span {\n  display: inline-block;\n  vertical-align: middle;\n  line-height: 15px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.dplayer-info-panel .dplayer-info-panel-item-title {\n  width: 100px;\n  text-align: right;\n  margin-right: 10px;\n}\n.dplayer-info-panel .dplayer-info-panel-item-data {\n  width: 260px;\n}\n", ".dplayer {\n    position: relative;\n    overflow: hidden;\n    user-select: none;\n    line-height: 1;\n\n    * {\n        box-sizing: content-box;\n    }\n\n    svg {\n        width: 100%;\n        height: 100%;\n\n        path,\n        circle {\n            fill: #fff;\n        }\n    }\n\n    &:-webkit-full-screen {\n        width: 100%;\n        height: 100%;\n        background: #000;\n        position: fixed;\n        z-index: 100000;\n        left: 0;\n        top: 0;\n        margin: 0;\n        padding: 0;\n        transform: translate(0, 0);\n        \n    }\n\n    &.dplayer-no-danmaku {\n        .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {\n            .dplayer-setting-showdan,\n            .dplayer-setting-danmaku,\n            .dplayer-setting-danunlimit {\n                display: none;\n            }\n        }\n\n        .dplayer-controller .dplayer-icons .dplayer-comment {\n            display: none;\n        }\n\n        .dplayer-danmaku {\n            display: none;\n        }\n    }\n\n    &.dplayer-live {\n        .dplayer-time {\n            display: none;\n        }\n        .dplayer-bar-wrap {\n            display: none;\n        }\n        .dplayer-setting-speed {\n            display: none;\n        }\n        .dplayer-setting-loop {\n            display: none;\n        }\n\n        &.dplayer-no-danmaku {\n            .dplayer-setting {\n                display: none;\n            }\n        }\n    }\n\n    &.dplayer-arrow {\n        .dplayer-danmaku {\n            font-size: 18px;\n        }\n        .dplayer-icon {\n            margin: 0 -3px;\n        }\n    }\n\n    &.dplayer-playing {\n        .dplayer-danmaku .dplayer-danmaku-move {\n            animation-play-state: running;\n        }\n\n        @media (min-width: 900px) {\n            .dplayer-controller-mask {\n                opacity: 0;\n            }\n            .dplayer-controller {\n                opacity: 0;\n            }\n\n            &:hover {\n                .dplayer-controller-mask {\n                    opacity: 1;\n                }\n                .dplayer-controller {\n                    opacity: 1;\n                }\n            }\n        }\n    }\n\n    &.dplayer-loading {\n        .dplayer-bezel .diplayer-loading-icon {\n            display: block;\n        }\n    }\n\n    &.dplayer-loading,\n    &.dplayer-paused {\n        .dplayer-danmaku,\n        .dplayer-danmaku-move {\n            animation-play-state: paused;\n        }\n    }\n\n    &.dplayer-hide-controller {\n        cursor: none;\n\n        .dplayer-controller-mask {\n            opacity: 0;\n            transform: translateY(100%);\n        }\n        .dplayer-controller {\n            opacity: 0;\n            transform: translateY(100%);\n        }\n    }\n    &.dplayer-show-controller {\n        .dplayer-controller-mask {\n            opacity: 1;\n        }\n        .dplayer-controller {\n            opacity: 1;\n        }\n    }\n    &.dplayer-fulled {\n        position: fixed;\n        z-index: 100000;\n        left: 0;\n        top: 0;\n        width: 100% !important;\n        height: 100% !important;\n    }\n    &.dplayer-mobile {\n        .dplayer-controller .dplayer-icons {\n            .dplayer-volume,\n            .dplayer-camera-icon,\n            .dplayer-airplay-icon,\n            .dplayer-chromecast-icon,\n            .dplayer-play-icon {\n                display: none;\n            }\n            .dplayer-full .dplayer-full-in-icon {\n                position: static;\n                display: inline-block;\n            }\n        }\n\n        .dplayer-bar-time {\n            display: none;\n        }\n\n        &.dplayer-hide-controller {\n            .dplayer-mobile-play {\n                display: none;\n            }\n        }\n\n        .dplayer-mobile-play {\n            display: block;\n        }\n    }\n}\n\n// To hide scroll bar, apply this class to <body>\n.dplayer-web-fullscreen-fix {\n    position: fixed;\n    top: 0;\n    left: 0;\n    margin: 0;\n    padding: 0;\n}\n", "@import '../../node_modules/balloon-css/balloon.css';\n\n[data-balloon]:before {\n    display: none;\n}\n\n[data-balloon]:after {\n    padding: 0.3em 0.7em;\n    background: rgba(17, 17, 17, 0.7);\n}\n\n[data-balloon][data-balloon-pos=\"up\"]:after {\n    margin-bottom: 0;\n}", ".dplayer-bezel {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    font-size: 22px;\n    color: #fff;\n    pointer-events: none;\n    .dplayer-bezel-icon {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin: -26px 0 0 -26px;\n        height: 52px;\n        width: 52px;\n        padding: 12px;\n        box-sizing: border-box;\n        background: rgba(0, 0, 0, .5);\n        border-radius: 50%;\n        opacity: 0;\n        pointer-events: none;\n        &.dplayer-bezel-transition {\n            animation: bezel-hide .5s linear;\n        }\n        @keyframes bezel-hide {\n            from {\n                opacity: 1;\n                transform: scale(1);\n            }\n            to {\n                opacity: 0;\n                transform: scale(2);\n            }\n        }\n    }\n    .dplayer-danloading {\n        position: absolute;\n        top: 50%;\n        margin-top: -7px;\n        width: 100%;\n        text-align: center;\n        font-size: 14px;\n        line-height: 14px;\n        animation: my-face 5s infinite ease-in-out;\n    }\n    .diplayer-loading-icon {\n        display: none;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin: -18px 0 0 -18px;\n        height: 36px;\n        width: 36px;\n        pointer-events: none;\n        .diplayer-loading-hide {\n            display: none;\n        }\n        .diplayer-loading-dot {\n            animation: diplayer-loading-dot-fade .8s ease infinite;\n            opacity: 0;\n            transform-origin: 4px 4px;\n            each(range(7), {\n                &.diplayer-loading-dot-@{value} {\n                    animation-delay: (@value * 0.1s);\n                }\n            });\n        }\n        @keyframes diplayer-loading-dot-fade {\n            0% {\n                opacity: .7;\n                transform: scale(1.2, 1.2)\n            }\n            50% {\n                opacity: .25;\n                transform: scale(.9, .9)\n            }\n            to {\n                opacity: .25;\n                transform: scale(.85, .85)\n            }\n        }\n    }\n}", ".dplayer-mask {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n    display: none;\n    &.dplayer-mask-show {\n        display: block;\n    }\n}\n\n.dplayer-video-wrap {\n    position: relative;\n    background: #000;\n    font-size: 0;\n    width: 100%;\n    height: 100%;\n    .dplayer-video {\n        width: 100%;\n        height: 100%;\n        display: none;\n    }\n    .dplayer-video-current {\n        display: block;\n    }\n    .dplayer-video-prepare {\n        display: none;\n    }\n}", '.dplayer-controller-mask {\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;\n    height: 98px;\n    width: 100%;\n    position: absolute;\n    bottom: 0;\n    transition: all 0.3s ease;\n}\n\n.dplayer-controller {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 41px;\n    padding: 0 20px;\n    user-select: none;\n    transition: all 0.3s ease;\n    &.dplayer-controller-comment {\n        .dplayer-icons {\n            display: none;\n        }\n        .dplayer-icons.dplayer-comment-box {\n            display: block;\n        }\n    }\n    .dplayer-bar-wrap {\n        padding: 5px 0;\n        cursor: pointer;\n        position: absolute;\n        bottom: 33px;\n        width: calc(100% - 40px);\n        height: 3px;\n        &:hover {\n            .dplayer-bar .dplayer-played .dplayer-thumb {\n                transform: scale(1);\n            }\n            .dplayer-highlight {\n                display: block;\n                width: 8px;\n                transform: translateX(-4px);\n                top: 4px;\n                height: 40%;\n            }\n        }\n        .dplayer-highlight {\n            z-index: 12;\n            position: absolute;\n            top: 5px;\n            width: 6px;\n            height: 20%;\n            border-radius: 6px;\n            background-color: #fff;\n            text-align: center;\n            transform: translateX(-3px);\n            transition: all .2s ease-in-out;\n            &:hover {\n                .dplayer-highlight-text {\n                    display: block;\n                }\n                &~.dplayer-bar-preview {\n                    opacity: 0;\n                }\n                &~.dplayer-bar-time {\n                    opacity: 0;\n                }\n            }\n            .dplayer-highlight-text {\n                display: none;\n                position: absolute;\n                left: 50%;\n                top: -24px;\n                padding: 5px 8px;\n                background-color: rgba(0, 0, 0, .62);\n                color: #fff;\n                border-radius: 4px;\n                font-size: 12px;\n                white-space: nowrap;\n                transform: translateX(-50%);\n            }\n        }\n        .dplayer-bar-preview {\n            position: absolute;\n            background: #fff;\n            pointer-events: none;\n            display: none;\n            background-size: 16000px 100%;\n        }\n        .dplayer-bar-preview-canvas {\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            z-index: 1;\n            pointer-events: none;\n        }\n        .dplayer-bar-time {\n            &.hidden {\n                opacity: 0;\n            }\n            position: absolute;\n            left: 0px;\n            top: -20px;\n            border-radius: 4px;\n            padding: 5px 7px;\n            background-color: rgba(0, 0, 0, 0.62);\n            color: #fff;\n            font-size: 12px;\n            text-align: center;\n            opacity: 1;\n            transition: opacity .1s ease-in-out;\n            word-wrap: normal;\n            word-break: normal;\n            z-index: 2;\n            pointer-events: none;\n        }\n        .dplayer-bar {\n            position: relative;\n            height: 3px;\n            width: 100%;\n            background: rgba(255, 255, 255, .2);\n            cursor: pointer;\n            .dplayer-loaded {\n                position: absolute;\n                left: 0;\n                top: 0;\n                bottom: 0;\n                background: rgba(255, 255, 255, .4);\n                height: 3px;\n                transition: all 0.5s ease;\n                will-change: width;\n            }\n            .dplayer-played {\n                position: absolute;\n                left: 0;\n                top: 0;\n                bottom: 0;\n                height: 3px;\n                will-change: width;\n                .dplayer-thumb {\n                    position: absolute;\n                    top: 0;\n                    right: 5px;\n                    margin-top: -4px;\n                    margin-right: -10px;\n                    height: 11px;\n                    width: 11px;\n                    border-radius: 50%;\n                    cursor: pointer;\n                    transition: all .3s ease-in-out;\n                    transform: scale(0);\n                }\n            }\n        }\n    }\n    .dplayer-icons {\n        height: 38px;\n        position: absolute;\n        bottom: 0;\n        &.dplayer-comment-box {\n            display: none;\n            position: absolute;\n            transition: all .3s ease-in-out;\n            z-index: 2;\n            height: 38px;\n            bottom: 0;\n            left: 20px;\n            right: 20px;\n            color: #fff;\n            .dplayer-icon {\n                padding: 7px;\n            }\n            .dplayer-comment-setting-icon {\n                position: absolute;\n                left: 0;\n                top: 0;\n            }\n            .dplayer-send-icon {\n                position: absolute;\n                right: 0;\n                top: 0;\n            }\n            .dplayer-comment-setting-box {\n                position: absolute;\n                background: rgba(28, 28, 28, 0.9);\n                bottom: 41px;\n                left: 0;\n                box-shadow: 0 0 25px rgba(0, 0, 0, .3);\n                border-radius: 4px;\n                padding: 10px 10px 16px;\n                font-size: 14px;\n                width: 204px;\n                transition: all .3s ease-in-out;\n                transform: scale(0);\n                &.dplayer-comment-setting-open {\n                    transform: scale(1);\n                }\n                input[type=radio] {\n                    display: none;\n                }\n                label {\n                    cursor: pointer;\n                }\n                .dplayer-comment-setting-title {\n                    font-size: 13px;\n                    color: #fff;\n                    line-height: 30px;\n                }\n                .dplayer-comment-setting-type {\n                    font-size: 0;\n                    .dplayer-comment-setting-title {\n                        margin-bottom: 6px;\n                    }\n                    label {\n                        &:nth-child(2) {\n                            span {\n                                border-radius: 4px 0 0 4px;\n                            }\n                        }\n                        &:nth-child(4) {\n                            span {\n                                border-radius: 0 4px 4px 0;\n                            }\n                        }\n                    }\n                    span {\n                        width: 33%;\n                        padding: 4px 6px;\n                        line-height: 16px;\n                        display: inline-block;\n                        font-size: 12px;\n                        color: #fff;\n                        border: 1px solid #fff;\n                        margin-right: -1px;\n                        box-sizing: border-box;\n                        text-align: center;\n                        cursor: pointer;\n                    }\n                    input:checked+span {\n                        background: #E4E4E6;\n                        color: #1c1c1c;\n                    }\n                }\n                .dplayer-comment-setting-color {\n                    font-size: 0;\n                    label {\n                        font-size: 0;\n                        padding: 6px;\n                        display: inline-block;\n                    }\n                    span {\n                        width: 22px;\n                        height: 22px;\n                        display: inline-block;\n                        border-radius: 50%;\n                        box-sizing: border-box;\n                        cursor: pointer;\n                        &:hover {\n                            animation: my-face 5s infinite ease-in-out;\n                        }\n                    }\n                }\n            }\n            .dplayer-comment-input {\n                outline: none;\n                border: none;\n                padding: 8px 31px;\n                font-size: 14px;\n                line-height: 18px;\n                text-align: center;\n                border-radius: 4px;\n                background: none;\n                margin: 0;\n                height: 100%;\n                box-sizing: border-box;\n                width: 100%;\n                color: #fff;\n                &::placeholder {\n                    color: #fff;\n                    opacity: 0.8;\n                }\n                &::-ms-clear {\n                    display: none;\n                }\n            }\n        }\n        &.dplayer-icons-left {\n            .dplayer-icon {\n                padding: 7px;\n            }\n        }\n        &.dplayer-icons-right {\n            right: 20px;\n            .dplayer-icon {\n                padding: 8px;\n            }\n        }\n        .dplayer-time,\n        .dplayer-live-badge {\n            line-height: 38px;\n            color: #eee;\n            text-shadow: 0 0 2px rgba(0, 0, 0, .5);\n            vertical-align: middle;\n            font-size: 13px;\n            cursor: default;\n        }\n        .dplayer-live-dot {\n            display: inline-block;\n            width: 6px;\n            height: 6px;\n            vertical-align: 4%;\n            margin-right: 5px;\n            content: \'\';\n            border-radius: 6px;\n        }\n        .dplayer-icon {\n            width: 40px;\n            height: 100%;\n            border: none;\n            background-color: transparent;\n            outline: none;\n            cursor: pointer;\n            vertical-align: middle;\n            box-sizing: border-box;\n            display: inline-block;\n            .dplayer-icon-content {\n                transition: all .2s ease-in-out;\n                opacity: .8;\n            }\n            &:hover {\n                .dplayer-icon-content {\n                    opacity: 1;\n                }\n            }\n            &.dplayer-quality-icon {\n                color: #fff;\n                width: auto;\n                line-height: 22px;\n                font-size: 14px;\n            }\n            &.dplayer-comment-icon {\n                padding: 10px 9px 9px;\n            }\n            &.dplayer-setting-icon {\n                padding-top: 8.5px;\n            }\n            &.dplayer-volume-icon {\n                width: 43px;\n            }\n        }\n        .dplayer-volume {\n            position: relative;\n            display: inline-block;\n            cursor: pointer;\n            height: 100%;\n            &:hover {\n                .dplayer-volume-bar-wrap .dplayer-volume-bar {\n                    width: 45px;\n                }\n                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {\n                    transform: scale(1);\n                }\n            }\n            &.dplayer-volume-active {\n                .dplayer-volume-bar-wrap .dplayer-volume-bar {\n                    width: 45px;\n                }\n                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {\n                    transform: scale(1);\n                }\n            }\n            .dplayer-volume-bar-wrap {\n                display: inline-block;\n                margin: 0 10px 0 -5px;\n                vertical-align: middle;\n                height: 100%;\n                .dplayer-volume-bar {\n                    position: relative;\n                    top: 17px;\n                    width: 0;\n                    height: 3px;\n                    background: #aaa;\n                    transition: all 0.3s ease-in-out;\n                    .dplayer-volume-bar-inner {\n                        position: absolute;\n                        bottom: 0;\n                        left: 0;\n                        height: 100%;\n                        transition: all 0.1s ease;\n                        will-change: width;\n                        .dplayer-thumb {\n                            position: absolute;\n                            top: 0;\n                            right: 5px;\n                            margin-top: -4px;\n                            margin-right: -10px;\n                            height: 11px;\n                            width: 11px;\n                            border-radius: 50%;\n                            cursor: pointer;\n                            transition: all .3s ease-in-out;\n                            transform: scale(0);\n                        }\n                    }\n                }\n            }\n        }\n        .dplayer-subtitle-btn {\n            display: inline-block;\n            height: 100%;\n        }\n        .dplayer-subtitles {\n            display: inline-block;\n            height: 100%;\n            .dplayer-subtitles-box {\n                position: absolute;\n                right: 0;\n                bottom: 50px;\n                transform: scale(0);\n                width: fit-content;\n                max-width: 240px;\n                min-width: 120px;\n                border-radius: 2px;\n                background: rgba(28, 28, 28, 0.9);\n                padding: 7px 0;\n                transition: all .3s ease-in-out;\n                overflow: auto;\n                z-index: 2;\n                &.dplayer-subtitles-panel {\n                    display: block;\n                }\n                &.dplayer-subtitles-box-open {\n                    transform: scale(1);\n                }\n            }\n            .dplayer-subtitles-item {\n                height: 30px;\n                padding: 5px 10px;\n                box-sizing: border-box;\n                cursor: pointer;\n                position: relative;\n                &:hover {\n                    background-color: rgba(255, 255, 255, .1);\n                }\n            }\n        }\n        .dplayer-setting {\n            display: inline-block;\n            height: 100%;\n            .dplayer-setting-box {\n                position: absolute;\n                right: 0;\n                bottom: 50px;\n                transform: scale(0);\n                width: 150px;\n                border-radius: 2px;\n                background: rgba(28, 28, 28, 0.9);\n                padding: 7px 0;\n                transition: all .3s ease-in-out;\n                overflow: hidden;\n                z-index: 2;\n                &>div {\n                    display: none;\n                    &.dplayer-setting-origin-panel {\n                        display: block;\n                    }\n                }\n                &.dplayer-setting-box-open {\n                    transform: scale(1);\n                }\n                &.dplayer-setting-box-narrow {\n                    width: 70px;\n                    text-align: center;\n                }\n                &.dplayer-setting-box-speed {\n                    .dplayer-setting-origin-panel {\n                        display: none;\n                    }\n                    .dplayer-setting-speed-panel {\n                        display: block;\n                    }\n                }\n            }\n            .dplayer-setting-item,\n            .dplayer-setting-speed-item {\n                height: 30px;\n                padding: 5px 10px;\n                box-sizing: border-box;\n                cursor: pointer;\n                position: relative;\n                &:hover {\n                    background-color: rgba(255, 255, 255, .1);\n                }\n            }\n            .dplayer-setting-danmaku {\n                padding: 5px 0;\n                .dplayer-label {\n                    padding: 0 10px;\n                    display: inline;\n                }\n                &:hover {\n                    .dplayer-label {\n                        display: none;\n                    }\n                    .dplayer-danmaku-bar-wrap {\n                        display: inline-block;\n                    }\n                }\n                &.dplayer-setting-danmaku-active {\n                    .dplayer-label {\n                        display: none;\n                    }\n                    .dplayer-danmaku-bar-wrap {\n                        display: inline-block;\n                    }\n                }\n                .dplayer-danmaku-bar-wrap {\n                    padding: 0 10px;\n                    box-sizing: border-box;\n                    display: none;\n                    vertical-align: middle;\n                    height: 100%;\n                    width: 100%;\n                    .dplayer-danmaku-bar {\n                        position: relative;\n                        top: 8.5px;\n                        width: 100%;\n                        height: 3px;\n                        background: #fff;\n                        transition: all 0.3s ease-in-out;\n                        .dplayer-danmaku-bar-inner {\n                            position: absolute;\n                            bottom: 0;\n                            left: 0;\n                            height: 100%;\n                            transition: all 0.1s ease;\n                            background: #aaa;\n                            will-change: width;\n                            .dplayer-thumb {\n                                position: absolute;\n                                top: 0;\n                                right: 5px;\n                                margin-top: -4px;\n                                margin-right: -10px;\n                                height: 11px;\n                                width: 11px;\n                                border-radius: 50%;\n                                cursor: pointer;\n                                transition: all .3s ease-in-out;\n                                background: #aaa;\n                            }\n                        }\n                    }\n                }\n            }\n        }\n        .dplayer-full {\n            display: inline-block;\n            height: 100%;\n            position: relative;\n            &:hover {\n                .dplayer-full-in-icon {\n                    display: block;\n                }\n            }\n            .dplayer-full-in-icon {\n                position: absolute;\n                top: -30px;\n                z-index: 1;\n                display: none;\n            }\n        }\n        .dplayer-quality {\n            position: relative;\n            display: inline-block;\n            height: 100%;\n            z-index: 2;\n            &:hover {\n                .dplayer-quality-list {\n                    display: block;\n                }\n                .dplayer-quality-mask {\n                    display: block;\n                }\n            }\n            .dplayer-quality-mask {\n                display: none;\n                position: absolute;\n                bottom: 38px;\n                left: -18px;\n                width: 80px;\n                padding-bottom: 12px;\n            }\n            .dplayer-quality-list {\n                display: none;\n                font-size: 12px;\n                width: 80px;\n                border-radius: 2px;\n                background: rgba(28, 28, 28, 0.9);\n                padding: 5px 0;\n                transition: all .3s ease-in-out;\n                overflow: hidden;\n                color: #fff;\n                text-align: center;\n            }\n            .dplayer-quality-item {\n                height: 25px;\n                box-sizing: border-box;\n                cursor: pointer;\n                line-height: 25px;\n                &:hover {\n                    background-color: rgba(255, 255, 255, .1);\n                }\n            }\n        }\n        .dplayer-comment {\n            display: inline-block;\n            height: 100%;\n        }\n        .dplayer-label {\n            color: #eee;\n            font-size: 13px;\n            display: inline-block;\n            vertical-align: middle;\n            white-space: nowrap;\n        }\n        .dplayer-toggle {\n            width: 32px;\n            height: 20px;\n            text-align: center;\n            font-size: 0;\n            vertical-align: middle;\n            position: absolute;\n            top: 5px;\n            right: 10px;\n            input {\n                max-height: 0;\n                max-width: 0;\n                display: none;\n            }\n            input+label {\n                display: inline-block;\n                position: relative;\n                box-shadow: rgb(223, 223, 223) 0 0 0 0 inset;\n                border: 1px solid rgb(223, 223, 223);\n                height: 20px;\n                width: 32px;\n                border-radius: 10px;\n                box-sizing: border-box;\n                cursor: pointer;\n                transition: .2s ease-in-out;\n            }\n            input+label:before {\n                content: "";\n                position: absolute;\n                display: block;\n                height: 18px;\n                width: 18px;\n                top: 0;\n                left: 0;\n                border-radius: 15px;\n                transition: .2s ease-in-out;\n            }\n            input+label:after {\n                content: "";\n                position: absolute;\n                display: block;\n                left: 0;\n                top: 0;\n                border-radius: 15px;\n                background: #fff;\n                transition: .2s ease-in-out;\n                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n                height: 18px;\n                width: 18px;\n            }\n            input:checked+label {\n                border-color: rgba(255, 255, 255, 0.5);\n            }\n            input:checked+label:before {\n                width: 30px;\n                background: rgba(255, 255, 255, 0.5);\n            }\n            input:checked+label:after {\n                left: 12px;\n            }\n        }\n    }\n}\n\n.dplayer-mobile-play {\n    display: none;\n    width: 50px;\n    height: 50px;\n    border: none;\n    background-color: transparent;\n    outline: none;\n    cursor: pointer;\n    box-sizing: border-box;\n    position: absolute;\n    bottom: 0;\n    opacity: 0.8;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n}', ".dplayer-danmaku {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    font-size: 22px;\n    color: #fff;\n    .dplayer-danmaku-item {\n        display: inline-block;\n        pointer-events: none;\n        user-select: none;\n        cursor: default;\n        white-space: nowrap;\n        text-shadow: .5px .5px .5px rgba(0, 0, 0, .5);\n        &--demo {\n            position: absolute;\n            visibility: hidden;\n        }\n    }\n    .dplayer-danmaku-right {\n        position: absolute;\n        right: 0;\n        transform: translateX(100%);\n        &.dplayer-danmaku-move {\n            will-change: transform;\n            animation-name: 'danmaku';\n            animation-timing-function: linear;\n            animation-play-state: paused;\n        }\n    }\n    @keyframes danmaku {\n        from {\n            transform: translateX(100%);\n        }\n    }\n    .dplayer-danmaku-top,\n    .dplayer-danmaku-bottom {\n        position: absolute;\n        width: 100%;\n        text-align: center;\n        visibility: hidden;\n        &.dplayer-danmaku-move {\n            will-change: visibility;\n            animation-name: 'danmaku-center';\n            animation-timing-function: linear;\n            animation-play-state: paused;\n        }\n    }\n    @keyframes danmaku-center {\n        from {\n            visibility: visible;\n        }\n        to {\n            visibility: visible;\n        }\n    }\n}", ".dplayer-logo {\n    pointer-events: none;\n    position: absolute;\n    left: 20px;\n    top: 20px;\n    max-width: 50px;\n    max-height: 50px;\n    img {\n        max-width: 100%;\n        max-height: 100%;\n        background: none;\n    }\n}", ".dplayer-menu {\n    position: absolute;\n    width: 170px;\n    border-radius: 2px;\n    background: rgba(28, 28, 28, 0.85);\n    padding: 5px 0;\n    overflow: hidden;\n    z-index: 3;\n    display: none;\n    &.dplayer-menu-show {\n        display: block;\n    }\n    .dplayer-menu-item {\n        height: 30px;\n        box-sizing: border-box;\n        cursor: pointer;\n        &:hover {\n            background-color: rgba(255, 255, 255, .1);\n        }\n        a {\n            display: inline-block;\n            padding: 0 10px;\n            line-height: 30px;\n            color: #eee;\n            font-size: 13px;\n            display: inline-block;\n            vertical-align: middle;\n            width: 100%;\n            box-sizing: border-box;\n            white-space: nowrap;\n            text-overflow: ellipsis;\n            overflow: hidden;\n            &:hover {\n                text-decoration: none;\n            }\n        }\n    }\n}", ".dplayer-notice-list{\n    position: absolute;\n    bottom: 60px;\n    left: 20px;\n\n    .dplayer-notice {\n        border-radius: 2px;\n        background: rgba(28, 28, 28, 0.9);\n        transition: all .3s ease-in-out;\n        overflow: hidden;\n        color: #fff;\n        display: table;\n        pointer-events: none;\n        animation: showNotice .3s ease 1 forwards;\n    }\n\n    .remove-notice{\n        animation: removeNotice .3s ease 1 forwards;\n    }\n}\n\n@keyframes showNotice {\n    from {\n        padding: 0;\n        font-size: 0;\n        margin-top: 0;\n    }\n    to {\n        padding: 7px 20px;\n        font-size: 14px;\n        margin-top: 5px;\n    }\n}\n\n@keyframes removeNotice {\n    0%{\n        padding: 7px 20px;\n        font-size: 14px;\n        margin-top: 5px;\n    }\n    20%{\n        font-size: 12px;\n    }\n    21%{\n        font-size: 0;\n        padding: 7px 10px;\n    }\n    100%{\n        padding: 0;\n        margin-top: 0;\n        font-size: 0;\n    }\n}\n", ".dplayer-subtitle {\n    position: absolute;\n    bottom: 40px;\n    width: 90%;\n    left: 5%;\n    text-align: center;\n    color: #fff;\n    text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);\n    font-size: 20px;\n    &.dplayer-subtitle-hide {\n        display: none;\n    }\n}", ".dplayer-info-panel {\n    position: absolute;\n    top: 10px;\n    left: 10px;\n    width: 400px;\n    background: rgba(28, 28, 28, 0.8);\n    padding: 10px;\n    color: #fff;\n    font-size: 12px;\n    border-radius: 2px;\n\n    &-hide {\n        display: none;\n    }\n\n    .dplayer-info-panel-close {\n        cursor: pointer;\n        position: absolute;\n        right: 10px;\n        top: 10px;\n    }\n\n    .dplayer-info-panel-item {\n        & > span {\n            display: inline-block;\n            vertical-align: middle;\n            line-height: 15px;\n            white-space: nowrap;\n            text-overflow: ellipsis;\n            overflow: hidden;\n        }\n    }\n\n    .dplayer-info-panel-item-title {\n        width: 100px;\n        text-align: right;\n        margin-right: 10px;\n    }\n    \n    .dplayer-info-panel-item-data {\n        width: 260px;\n    }\n}"],
                sourceRoot: ""
            }]);
            const u = A
        }, 9624: n => {
            "use strict";
            var e = [];

            function t(n) {
                for (var t = -1, a = 0; a < e.length; a++) if (e[a].identifier === n) {
                    t = a;
                    break
                }
                return t
            }

            function a(n, a) {
                for (var r = {}, i = [], l = 0; l < n.length; l++) {
                    var s = n[l], p = a.base ? s[0] + a.base : s[0], d = r[p] || 0, A = "".concat(p, " ").concat(d);
                    r[p] = d + 1;
                    var c = t(A), u = {css: s[1], media: s[2], sourceMap: s[3], supports: s[4], layer: s[5]};
                    if (-1 !== c) e[c].references++, e[c].updater(u); else {
                        var y = o(u, a);
                        a.byIndex = l, e.splice(l, 0, {identifier: A, updater: y, references: 1})
                    }
                    i.push(A)
                }
                return i
            }

            function o(n, e) {
                var t = e.domAPI(e);
                return t.update(n), function (e) {
                    if (e) {
                        if (e.css === n.css && e.media === n.media && e.sourceMap === n.sourceMap && e.supports === n.supports && e.layer === n.layer) return;
                        t.update(n = e)
                    } else t.remove()
                }
            }

            n.exports = function (n, o) {
                var r = a(n = n || [], o = o || {});
                return function (n) {
                    n = n || [];
                    for (var i = 0; i < r.length; i++) {
                        var l = t(r[i]);
                        e[l].references--
                    }
                    for (var s = a(n, o), p = 0; p < r.length; p++) {
                        var d = t(r[p]);
                        0 === e[d].references && (e[d].updater(), e.splice(d, 1))
                    }
                    r = s
                }
            }
        }, 6892: n => {
            "use strict";
            var e = {};
            n.exports = function (n, t) {
                var a = function (n) {
                    if (void 0 === e[n]) {
                        var t = document.querySelector(n);
                        if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
                            t = t.contentDocument.head
                        } catch (n) {
                            t = null
                        }
                        e[n] = t
                    }
                    return e[n]
                }(n);
                if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                a.appendChild(t)
            }
        }, 2716: n => {
            "use strict";
            n.exports = function (n) {
                var e = document.createElement("style");
                return n.setAttributes(e, n.attributes), n.insert(e, n.options), e
            }
        }, 6359: (n, e, t) => {
            "use strict";
            n.exports = function (n) {
                var e = t.nc;
                e && n.setAttribute("nonce", e)
            }
        }, 6990: n => {
            "use strict";
            n.exports = function (n) {
                var e = n.insertStyleElement(n);
                return {
                    update: function (t) {
                        !function (n, e, t) {
                            var a = "";
                            t.supports && (a += "@supports (".concat(t.supports, ") {")), t.media && (a += "@media ".concat(t.media, " {"));
                            var o = void 0 !== t.layer;
                            o && (a += "@layer".concat(t.layer.length > 0 ? " ".concat(t.layer) : "", " {")), a += t.css, o && (a += "}"), t.media && (a += "}"), t.supports && (a += "}");
                            var r = t.sourceMap;
                            r && "undefined" != typeof btoa && (a += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r)))), " */")), e.styleTagTransform(a, n, e.options)
                        }(e, n, t)
                    }, remove: function () {
                        !function (n) {
                            if (null === n.parentNode) return !1;
                            n.parentNode.removeChild(n)
                        }(e)
                    }
                }
            }
        }, 230: n => {
            "use strict";
            n.exports = function (n, e) {
                if (e.styleSheet) e.styleSheet.cssText = n; else {
                    for (; e.firstChild;) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(n))
                }
            }
        }, 6251: n => {
            n.exports = '<svg viewBox="0 0 288 288" xmlns="http://www.w3.org/2000/svg"><path d="M288 90v96c0 20-16 36-36 36h-10c-16 0-16-24 0-24h10c7 0 12-5 12-12V90c0-7-5-12-12-12H36c-7 0-12 5-12 12v96c0 7 5 12 12 12h10c16 0 16 24 0 24H36c-20 0-36-16-36-36V90c0-20 16-36 36-36h216c20 0 36 16 36 36zm-120 62l48 68c14 20 1 38-20 38H92c-21 0-34-18-20-38l48-68c13-18 35-18 48 0z"></path></svg>'
        }, 8113: n => {
            n.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z"></path></svg>'
        }, 3193: n => {
            n.exports = '<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="chromecast" class="svg-inline--fa fa-chromecast fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M447.8,64H64c-23.6,0-42.7,19.1-42.7,42.7v63.9H64v-63.9h383.8v298.6H298.6V448H448c23.6,0,42.7-19.1,42.7-42.7V106.7 C490.7,83.1,471.4,64,447.8,64z M21.3,383.6L21.3,383.6l0,63.9h63.9C85.2,412.2,56.6,383.6,21.3,383.6L21.3,383.6z M21.3,298.6V341 c58.9,0,106.6,48.1,106.6,107h42.7C170.7,365.6,103.7,298.7,21.3,298.6z M213.4,448h42.7c-0.5-129.5-105.3-234.3-234.8-234.6l0,42.4 C127.3,255.6,213.3,342,213.4,448z"></path></svg>'
        }, 338: n => {
            n.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z"></path></svg>'
        }, 2807: n => {
            n.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z"></path></svg>'
        }, 1415: n => {
            n.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z"></path></svg>'
        }, 4574: n => {
            n.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z"></path></svg>'
        }, 4182: n => {
            n.exports = '<svg version="1.1" viewBox="0 0 22 22"><svg x="7" y="1"><circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle></svg><svg x="13" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle></svg><svg x="7" y="13"><circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle></svg><svg x="1" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle></svg></svg>'
        }, 1965: n => {
            n.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M19.357 2.88c1.749 0 3.366 0.316 4.851 0.946 1.485 0.632 2.768 1.474 3.845 2.533s1.922 2.279 2.532 3.661c0.611 1.383 0.915 2.829 0.915 4.334 0 1.425-0.304 2.847-0.915 4.271-0.611 1.425-1.587 2.767-2.928 4.028-0.855 0.813-1.811 1.607-2.869 2.38s-2.136 1.465-3.233 2.075c-1.099 0.61-2.198 1.098-3.296 1.465-1.098 0.366-2.115 0.549-3.051 0.549-1.343 0-2.441-0.438-3.296-1.311-0.854-0.876-1.281-2.41-1.281-4.608 0-0.366 0.020-0.773 0.060-1.221s0.062-0.895 0.062-1.343c0-0.773-0.183-1.353-0.55-1.738-0.366-0.387-0.793-0.58-1.281-0.58-0.652 0-1.21 0.295-1.678 0.886s-0.926 1.23-1.373 1.921c-0.447 0.693-0.905 1.334-1.372 1.923s-1.028 0.886-1.679 0.886c-0.529 0-1.048-0.427-1.556-1.282s-0.763-2.259-0.763-4.212c0-2.197 0.529-4.241 1.587-6.133s2.462-3.529 4.21-4.912c1.75-1.383 3.762-2.471 6.041-3.264 2.277-0.796 4.617-1.212 7.018-1.253zM7.334 15.817c0.569 0 1.047-0.204 1.434-0.611s0.579-0.875 0.579-1.404c0-0.569-0.193-1.047-0.579-1.434s-0.864-0.579-1.434-0.579c-0.529 0-0.987 0.193-1.373 0.579s-0.58 0.864-0.58 1.434c0 0.53 0.194 0.998 0.58 1.404 0.388 0.407 0.845 0.611 1.373 0.611zM12.216 11.79c0.691 0 1.292-0.254 1.8-0.763s0.762-1.107 0.762-1.8c0-0.732-0.255-1.343-0.762-1.831-0.509-0.489-1.109-0.732-1.8-0.732-0.732 0-1.342 0.244-1.831 0.732-0.488 0.488-0.732 1.098-0.732 1.831 0 0.693 0.244 1.292 0.732 1.8s1.099 0.763 1.831 0.763zM16.366 25.947c0.692 0 1.282-0.214 1.77-0.64s0.732-0.987 0.732-1.678-0.244-1.261-0.732-1.709c-0.489-0.448-1.078-0.671-1.77-0.671-0.65 0-1.21 0.223-1.678 0.671s-0.702 1.018-0.702 1.709c0 0.692 0.234 1.25 0.702 1.678s1.027 0.64 1.678 0.64zM19.113 9.592c0.651 0 1.129-0.203 1.433-0.611 0.305-0.406 0.459-0.874 0.459-1.404 0-0.488-0.154-0.947-0.459-1.373-0.304-0.427-0.782-0.641-1.433-0.641-0.529 0-1.008 0.193-1.434 0.58s-0.64 0.865-0.64 1.434c0 0.571 0.213 1.049 0.64 1.434 0.427 0.389 0.905 0.581 1.434 0.581zM24.848 12.826c0.57 0 1.067-0.213 1.495-0.64 0.427-0.427 0.64-0.947 0.64-1.556 0-0.57-0.214-1.068-0.64-1.495-0.428-0.427-0.927-0.64-1.495-0.64-0.611 0-1.129 0.213-1.555 0.64-0.428 0.427-0.642 0.926-0.642 1.495 0 0.611 0.213 1.129 0.642 1.556s0.947 0.64 1.555 0.64z"></path></svg>'
        }, 6074: n => {
            n.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>'
        }, 730: n => {
            n.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 32"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>'
        }, 1428: n => {
            n.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>'
        }, 2254: n => {
            n.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z"></path></svg>'
        }, 5934: n => {
            n.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 28"><path d="M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z"></path></svg>'
        }, 8410: n => {
            n.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>'
        }, 2644: n => {
            n.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>'
        }, 1324: n => {
            n.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>'
        }, 4437: n => {
            n.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056z"></path></svg>'
        }, 9959: (n, e, t) => {
            "use strict";
            var a = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t.g ? t.g : {},
                o = Object.create(a), r = /["&'<>]/;

            function i(n) {
                return "string" != typeof n && (n = null == n ? "" : "function" == typeof n ? i(n.call(n)) : JSON.stringify(n)), n
            }

            o.$escape = function (n) {
                return function (n) {
                    var e = "" + n, t = r.exec(e);
                    if (!t) return n;
                    var a = "", o = void 0, i = void 0, l = void 0;
                    for (o = t.index, i = 0; o < e.length; o++) {
                        switch (e.charCodeAt(o)) {
                            case 34:
                                l = "&#34;";
                                break;
                            case 38:
                                l = "&#38;";
                                break;
                            case 39:
                                l = "&#39;";
                                break;
                            case 60:
                                l = "&#60;";
                                break;
                            case 62:
                                l = "&#62;";
                                break;
                            default:
                                continue
                        }
                        i !== o && (a += e.substring(i, o)), i = o + 1, a += l
                    }
                    return i !== o ? a + e.substring(i, o) : a
                }(i(n))
            }, o.$each = function (n, e) {
                if (Array.isArray(n)) for (var t = 0, a = n.length; t < a; t++) e(n[t], t); else for (var o in n) e(n[o], o)
            }, n.exports = o
        }, 6877: (n, e, t) => {
            "use strict";
            n.exports = t(9959)
        }, 6208: (n, e, t) => {
            n.exports = t(4568)
        }, 8170: (n, e, t) => {
            "use strict";
            var a = t(7201), o = t(9095), r = t(8416), i = t(6374), l = t(5967), s = t(5032), p = t(1224), d = t(4033),
                A = t(1766), c = t(8832), u = t(8699);
            n.exports = function (n) {
                return new Promise((function (e, t) {
                    var y, h = n.data, m = n.headers, f = n.responseType;

                    function b() {
                        n.cancelToken && n.cancelToken.unsubscribe(y), n.signal && n.signal.removeEventListener("abort", y)
                    }

                    a.isFormData(h) && a.isStandardBrowserEnv() && delete m["Content-Type"];
                    var g = new XMLHttpRequest;
                    if (n.auth) {
                        var v = n.auth.username || "",
                            E = n.auth.password ? unescape(encodeURIComponent(n.auth.password)) : "";
                        m.Authorization = "Basic " + btoa(v + ":" + E)
                    }
                    var x = l(n.baseURL, n.url);

                    function C() {
                        if (g) {
                            var a = "getAllResponseHeaders" in g ? s(g.getAllResponseHeaders()) : null, r = {
                                data: f && "text" !== f && "json" !== f ? g.response : g.responseText,
                                status: g.status,
                                statusText: g.statusText,
                                headers: a,
                                config: n,
                                request: g
                            };
                            o((function (n) {
                                e(n), b()
                            }), (function (n) {
                                t(n), b()
                            }), r), g = null
                        }
                    }

                    if (g.open(n.method.toUpperCase(), i(x, n.params, n.paramsSerializer), !0), g.timeout = n.timeout, "onloadend" in g ? g.onloadend = C : g.onreadystatechange = function () {
                        g && 4 === g.readyState && (0 !== g.status || g.responseURL && 0 === g.responseURL.indexOf("file:")) && setTimeout(C)
                    }, g.onabort = function () {
                        g && (t(new A("Request aborted", A.ECONNABORTED, n, g)), g = null)
                    }, g.onerror = function () {
                        t(new A("Network Error", A.ERR_NETWORK, n, g, g)), g = null
                    }, g.ontimeout = function () {
                        var e = n.timeout ? "timeout of " + n.timeout + "ms exceeded" : "timeout exceeded",
                            a = n.transitional || d;
                        n.timeoutErrorMessage && (e = n.timeoutErrorMessage), t(new A(e, a.clarifyTimeoutError ? A.ETIMEDOUT : A.ECONNABORTED, n, g)), g = null
                    }, a.isStandardBrowserEnv()) {
                        var k = (n.withCredentials || p(x)) && n.xsrfCookieName ? r.read(n.xsrfCookieName) : void 0;
                        k && (m[n.xsrfHeaderName] = k)
                    }
                    "setRequestHeader" in g && a.forEach(m, (function (n, e) {
                        void 0 === h && "content-type" === e.toLowerCase() ? delete m[e] : g.setRequestHeader(e, n)
                    })), a.isUndefined(n.withCredentials) || (g.withCredentials = !!n.withCredentials), f && "json" !== f && (g.responseType = n.responseType), "function" == typeof n.onDownloadProgress && g.addEventListener("progress", n.onDownloadProgress), "function" == typeof n.onUploadProgress && g.upload && g.upload.addEventListener("progress", n.onUploadProgress), (n.cancelToken || n.signal) && (y = function (n) {
                        g && (t(!n || n && n.type ? new c : n), g.abort(), g = null)
                    }, n.cancelToken && n.cancelToken.subscribe(y), n.signal && (n.signal.aborted ? y() : n.signal.addEventListener("abort", y))), h || (h = null);
                    var w = u(x);
                    w && -1 === ["http", "https", "file"].indexOf(w) ? t(new A("Unsupported protocol " + w + ":", A.ERR_BAD_REQUEST, n)) : g.send(h)
                }))
            }
        }, 4568: (n, e, t) => {
            "use strict";
            var a = t(7201), o = t(5305), r = t(2275), i = t(9834), l = function n(e) {
                var t = new r(e), l = o(r.prototype.request, t);
                return a.extend(l, r.prototype, t), a.extend(l, t), l.create = function (t) {
                    return n(i(e, t))
                }, l
            }(t(6339));
            l.Axios = r, l.CanceledError = t(8832), l.CancelToken = t(5027), l.isCancel = t(1893), l.VERSION = t(4316).version, l.toFormData = t(6615), l.AxiosError = t(1766), l.Cancel = l.CanceledError, l.all = function (n) {
                return Promise.all(n)
            }, l.spread = t(3282), l.isAxiosError = t(3319), n.exports = l, n.exports.default = l
        }, 5027: (n, e, t) => {
            "use strict";
            var a = t(8832);

            function o(n) {
                if ("function" != typeof n) throw new TypeError("executor must be a function.");
                var e;
                this.promise = new Promise((function (n) {
                    e = n
                }));
                var t = this;
                this.promise.then((function (n) {
                    if (t._listeners) {
                        var e, a = t._listeners.length;
                        for (e = 0; e < a; e++) t._listeners[e](n);
                        t._listeners = null
                    }
                })), this.promise.then = function (n) {
                    var e, a = new Promise((function (n) {
                        t.subscribe(n), e = n
                    })).then(n);
                    return a.cancel = function () {
                        t.unsubscribe(e)
                    }, a
                }, n((function (n) {
                    t.reason || (t.reason = new a(n), e(t.reason))
                }))
            }

            o.prototype.throwIfRequested = function () {
                if (this.reason) throw this.reason
            }, o.prototype.subscribe = function (n) {
                this.reason ? n(this.reason) : this._listeners ? this._listeners.push(n) : this._listeners = [n]
            }, o.prototype.unsubscribe = function (n) {
                if (this._listeners) {
                    var e = this._listeners.indexOf(n);
                    -1 !== e && this._listeners.splice(e, 1)
                }
            }, o.source = function () {
                var n;
                return {
                    token: new o((function (e) {
                        n = e
                    })), cancel: n
                }
            }, n.exports = o
        }, 8832: (n, e, t) => {
            "use strict";
            var a = t(1766);

            function o(n) {
                a.call(this, null == n ? "canceled" : n, a.ERR_CANCELED), this.name = "CanceledError"
            }

            t(7201).inherits(o, a, {__CANCEL__: !0}), n.exports = o
        }, 1893: n => {
            "use strict";
            n.exports = function (n) {
                return !(!n || !n.__CANCEL__)
            }
        }, 2275: (n, e, t) => {
            "use strict";
            var a = t(7201), o = t(6374), r = t(6808), i = t(7313), l = t(9834), s = t(5967), p = t(9712),
                d = p.validators;

            function A(n) {
                this.defaults = n, this.interceptors = {request: new r, response: new r}
            }

            A.prototype.request = function (n, e) {
                "string" == typeof n ? (e = e || {}).url = n : e = n || {}, (e = l(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
                var t = e.transitional;
                void 0 !== t && p.assertOptions(t, {
                    silentJSONParsing: d.transitional(d.boolean),
                    forcedJSONParsing: d.transitional(d.boolean),
                    clarifyTimeoutError: d.transitional(d.boolean)
                }, !1);
                var a = [], o = !0;
                this.interceptors.request.forEach((function (n) {
                    "function" == typeof n.runWhen && !1 === n.runWhen(e) || (o = o && n.synchronous, a.unshift(n.fulfilled, n.rejected))
                }));
                var r, s = [];
                if (this.interceptors.response.forEach((function (n) {
                    s.push(n.fulfilled, n.rejected)
                })), !o) {
                    var A = [i, void 0];
                    for (Array.prototype.unshift.apply(A, a), A = A.concat(s), r = Promise.resolve(e); A.length;) r = r.then(A.shift(), A.shift());
                    return r
                }
                for (var c = e; a.length;) {
                    var u = a.shift(), y = a.shift();
                    try {
                        c = u(c)
                    } catch (n) {
                        y(n);
                        break
                    }
                }
                try {
                    r = i(c)
                } catch (n) {
                    return Promise.reject(n)
                }
                for (; s.length;) r = r.then(s.shift(), s.shift());
                return r
            }, A.prototype.getUri = function (n) {
                n = l(this.defaults, n);
                var e = s(n.baseURL, n.url);
                return o(e, n.params, n.paramsSerializer)
            }, a.forEach(["delete", "get", "head", "options"], (function (n) {
                A.prototype[n] = function (e, t) {
                    return this.request(l(t || {}, {method: n, url: e, data: (t || {}).data}))
                }
            })), a.forEach(["post", "put", "patch"], (function (n) {
                function e(e) {
                    return function (t, a, o) {
                        return this.request(l(o || {}, {
                            method: n,
                            headers: e ? {"Content-Type": "multipart/form-data"} : {},
                            url: t,
                            data: a
                        }))
                    }
                }

                A.prototype[n] = e(), A.prototype[n + "Form"] = e(!0)
            })), n.exports = A
        }, 1766: (n, e, t) => {
            "use strict";
            var a = t(7201);

            function o(n, e, t, a, o) {
                Error.call(this), this.message = n, this.name = "AxiosError", e && (this.code = e), t && (this.config = t), a && (this.request = a), o && (this.response = o)
            }

            a.inherits(o, Error, {
                toJSON: function () {
                    return {
                        message: this.message,
                        name: this.name,
                        description: this.description,
                        number: this.number,
                        fileName: this.fileName,
                        lineNumber: this.lineNumber,
                        columnNumber: this.columnNumber,
                        stack: this.stack,
                        config: this.config,
                        code: this.code,
                        status: this.response && this.response.status ? this.response.status : null
                    }
                }
            });
            var r = o.prototype, i = {};
            ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED"].forEach((function (n) {
                i[n] = {value: n}
            })), Object.defineProperties(o, i), Object.defineProperty(r, "isAxiosError", {value: !0}), o.from = function (n, e, t, i, l, s) {
                var p = Object.create(r);
                return a.toFlatObject(n, p, (function (n) {
                    return n !== Error.prototype
                })), o.call(p, n.message, e, t, i, l), p.name = n.name, s && Object.assign(p, s), p
            }, n.exports = o
        }, 6808: (n, e, t) => {
            "use strict";
            var a = t(7201);

            function o() {
                this.handlers = []
            }

            o.prototype.use = function (n, e, t) {
                return this.handlers.push({
                    fulfilled: n,
                    rejected: e,
                    synchronous: !!t && t.synchronous,
                    runWhen: t ? t.runWhen : null
                }), this.handlers.length - 1
            }, o.prototype.eject = function (n) {
                this.handlers[n] && (this.handlers[n] = null)
            }, o.prototype.forEach = function (n) {
                a.forEach(this.handlers, (function (e) {
                    null !== e && n(e)
                }))
            }, n.exports = o
        }, 5967: (n, e, t) => {
            "use strict";
            var a = t(724), o = t(4669);
            n.exports = function (n, e) {
                return n && !a(e) ? o(n, e) : e
            }
        }, 7313: (n, e, t) => {
            "use strict";
            var a = t(7201), o = t(6431), r = t(1893), i = t(6339), l = t(8832);

            function s(n) {
                if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted) throw new l
            }

            n.exports = function (n) {
                return s(n), n.headers = n.headers || {}, n.data = o.call(n, n.data, n.headers, n.transformRequest), n.headers = a.merge(n.headers.common || {}, n.headers[n.method] || {}, n.headers), a.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function (e) {
                    delete n.headers[e]
                })), (n.adapter || i.adapter)(n).then((function (e) {
                    return s(n), e.data = o.call(n, e.data, e.headers, n.transformResponse), e
                }), (function (e) {
                    return r(e) || (s(n), e && e.response && (e.response.data = o.call(n, e.response.data, e.response.headers, n.transformResponse))), Promise.reject(e)
                }))
            }
        }, 9834: (n, e, t) => {
            "use strict";
            var a = t(7201);
            n.exports = function (n, e) {
                e = e || {};
                var t = {};

                function o(n, e) {
                    return a.isPlainObject(n) && a.isPlainObject(e) ? a.merge(n, e) : a.isPlainObject(e) ? a.merge({}, e) : a.isArray(e) ? e.slice() : e
                }

                function r(t) {
                    return a.isUndefined(e[t]) ? a.isUndefined(n[t]) ? void 0 : o(void 0, n[t]) : o(n[t], e[t])
                }

                function i(n) {
                    if (!a.isUndefined(e[n])) return o(void 0, e[n])
                }

                function l(t) {
                    return a.isUndefined(e[t]) ? a.isUndefined(n[t]) ? void 0 : o(void 0, n[t]) : o(void 0, e[t])
                }

                function s(t) {
                    return t in e ? o(n[t], e[t]) : t in n ? o(void 0, n[t]) : void 0
                }

                var p = {
                    url: i,
                    method: i,
                    data: i,
                    baseURL: l,
                    transformRequest: l,
                    transformResponse: l,
                    paramsSerializer: l,
                    timeout: l,
                    timeoutMessage: l,
                    withCredentials: l,
                    adapter: l,
                    responseType: l,
                    xsrfCookieName: l,
                    xsrfHeaderName: l,
                    onUploadProgress: l,
                    onDownloadProgress: l,
                    decompress: l,
                    maxContentLength: l,
                    maxBodyLength: l,
                    beforeRedirect: l,
                    transport: l,
                    httpAgent: l,
                    httpsAgent: l,
                    cancelToken: l,
                    socketPath: l,
                    responseEncoding: l,
                    validateStatus: s
                };
                return a.forEach(Object.keys(n).concat(Object.keys(e)), (function (n) {
                    var e = p[n] || r, o = e(n);
                    a.isUndefined(o) && e !== s || (t[n] = o)
                })), t
            }
        }, 9095: (n, e, t) => {
            "use strict";
            var a = t(1766);
            n.exports = function (n, e, t) {
                var o = t.config.validateStatus;
                t.status && o && !o(t.status) ? e(new a("Request failed with status code " + t.status, [a.ERR_BAD_REQUEST, a.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4], t.config, t.request, t)) : n(t)
            }
        }, 6431: (n, e, t) => {
            "use strict";
            var a = t(7201), o = t(6339);
            n.exports = function (n, e, t) {
                var r = this || o;
                return a.forEach(t, (function (t) {
                    n = t.call(r, n, e)
                })), n
            }
        }, 6339: (n, e, t) => {
            "use strict";
            var a = t(7201), o = t(5227), r = t(1766), i = t(4033), l = t(6615),
                s = {"Content-Type": "application/x-www-form-urlencoded"};

            function p(n, e) {
                !a.isUndefined(n) && a.isUndefined(n["Content-Type"]) && (n["Content-Type"] = e)
            }

            var d, A = {
                transitional: i,
                adapter: (("undefined" != typeof XMLHttpRequest || "undefined" != typeof process && "[object process]" === Object.prototype.toString.call(process)) && (d = t(8170)), d),
                transformRequest: [function (n, e) {
                    if (o(e, "Accept"), o(e, "Content-Type"), a.isFormData(n) || a.isArrayBuffer(n) || a.isBuffer(n) || a.isStream(n) || a.isFile(n) || a.isBlob(n)) return n;
                    if (a.isArrayBufferView(n)) return n.buffer;
                    if (a.isURLSearchParams(n)) return p(e, "application/x-www-form-urlencoded;charset=utf-8"), n.toString();
                    var t, r = a.isObject(n), i = e && e["Content-Type"];
                    if ((t = a.isFileList(n)) || r && "multipart/form-data" === i) {
                        var s = this.env && this.env.FormData;
                        return l(t ? {"files[]": n} : n, s && new s)
                    }
                    return r || "application/json" === i ? (p(e, "application/json"), function (n, e, t) {
                        if (a.isString(n)) try {
                            return (0, JSON.parse)(n), a.trim(n)
                        } catch (n) {
                            if ("SyntaxError" !== n.name) throw n
                        }
                        return (0, JSON.stringify)(n)
                    }(n)) : n
                }],
                transformResponse: [function (n) {
                    var e = this.transitional || A.transitional, t = e && e.silentJSONParsing,
                        o = e && e.forcedJSONParsing, i = !t && "json" === this.responseType;
                    if (i || o && a.isString(n) && n.length) try {
                        return JSON.parse(n)
                    } catch (n) {
                        if (i) {
                            if ("SyntaxError" === n.name) throw r.from(n, r.ERR_BAD_RESPONSE, this, null, this.response);
                            throw n
                        }
                    }
                    return n
                }],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                maxBodyLength: -1,
                env: {FormData: t(3997)},
                validateStatus: function (n) {
                    return n >= 200 && n < 300
                },
                headers: {common: {Accept: "application/json, text/plain, */*"}}
            };
            a.forEach(["delete", "get", "head"], (function (n) {
                A.headers[n] = {}
            })), a.forEach(["post", "put", "patch"], (function (n) {
                A.headers[n] = a.merge(s)
            })), n.exports = A
        }, 4033: n => {
            "use strict";
            n.exports = {silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1}
        }, 4316: n => {
            n.exports = {version: "0.27.2"}
        }, 5305: n => {
            "use strict";
            n.exports = function (n, e) {
                return function () {
                    for (var t = new Array(arguments.length), a = 0; a < t.length; a++) t[a] = arguments[a];
                    return n.apply(e, t)
                }
            }
        }, 6374: (n, e, t) => {
            "use strict";
            var a = t(7201);

            function o(n) {
                return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
            }

            n.exports = function (n, e, t) {
                if (!e) return n;
                var r;
                if (t) r = t(e); else if (a.isURLSearchParams(e)) r = e.toString(); else {
                    var i = [];
                    a.forEach(e, (function (n, e) {
                        null != n && (a.isArray(n) ? e += "[]" : n = [n], a.forEach(n, (function (n) {
                            a.isDate(n) ? n = n.toISOString() : a.isObject(n) && (n = JSON.stringify(n)), i.push(o(e) + "=" + o(n))
                        })))
                    })), r = i.join("&")
                }
                if (r) {
                    var l = n.indexOf("#");
                    -1 !== l && (n = n.slice(0, l)), n += (-1 === n.indexOf("?") ? "?" : "&") + r
                }
                return n
            }
        }, 4669: n => {
            "use strict";
            n.exports = function (n, e) {
                return e ? n.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : n
            }
        }, 8416: (n, e, t) => {
            "use strict";
            var a = t(7201);
            n.exports = a.isStandardBrowserEnv() ? {
                write: function (n, e, t, o, r, i) {
                    var l = [];
                    l.push(n + "=" + encodeURIComponent(e)), a.isNumber(t) && l.push("expires=" + new Date(t).toGMTString()), a.isString(o) && l.push("path=" + o), a.isString(r) && l.push("domain=" + r), !0 === i && l.push("secure"), document.cookie = l.join("; ")
                }, read: function (n) {
                    var e = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
                    return e ? decodeURIComponent(e[3]) : null
                }, remove: function (n) {
                    this.write(n, "", Date.now() - 864e5)
                }
            } : {
                write: function () {
                }, read: function () {
                    return null
                }, remove: function () {
                }
            }
        }, 724: n => {
            "use strict";
            n.exports = function (n) {
                return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)
            }
        }, 3319: (n, e, t) => {
            "use strict";
            var a = t(7201);
            n.exports = function (n) {
                return a.isObject(n) && !0 === n.isAxiosError
            }
        }, 1224: (n, e, t) => {
            "use strict";
            var a = t(7201);
            n.exports = a.isStandardBrowserEnv() ? function () {
                var n, e = /(msie|trident)/i.test(navigator.userAgent), t = document.createElement("a");

                function o(n) {
                    var a = n;
                    return e && (t.setAttribute("href", a), a = t.href), t.setAttribute("href", a), {
                        href: t.href,
                        protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
                        host: t.host,
                        search: t.search ? t.search.replace(/^\?/, "") : "",
                        hash: t.hash ? t.hash.replace(/^#/, "") : "",
                        hostname: t.hostname,
                        port: t.port,
                        pathname: "/" === t.pathname.charAt(0) ? t.pathname : "/" + t.pathname
                    }
                }

                return n = o(window.location.href), function (e) {
                    var t = a.isString(e) ? o(e) : e;
                    return t.protocol === n.protocol && t.host === n.host
                }
            }() : function () {
                return !0
            }
        }, 5227: (n, e, t) => {
            "use strict";
            var a = t(7201);
            n.exports = function (n, e) {
                a.forEach(n, (function (t, a) {
                    a !== e && a.toUpperCase() === e.toUpperCase() && (n[e] = t, delete n[a])
                }))
            }
        }, 3997: n => {
            n.exports = null
        }, 5032: (n, e, t) => {
            "use strict";
            var a = t(7201),
                o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
            n.exports = function (n) {
                var e, t, r, i = {};
                return n ? (a.forEach(n.split("\n"), (function (n) {
                    if (r = n.indexOf(":"), e = a.trim(n.substr(0, r)).toLowerCase(), t = a.trim(n.substr(r + 1)), e) {
                        if (i[e] && o.indexOf(e) >= 0) return;
                        i[e] = "set-cookie" === e ? (i[e] ? i[e] : []).concat([t]) : i[e] ? i[e] + ", " + t : t
                    }
                })), i) : i
            }
        }, 8699: n => {
            "use strict";
            n.exports = function (n) {
                var e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
                return e && e[1] || ""
            }
        }, 3282: n => {
            "use strict";
            n.exports = function (n) {
                return function (e) {
                    return n.apply(null, e)
                }
            }
        }, 6615: (n, e, t) => {
            "use strict";

            function a(n) {
                return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
                    return typeof n
                } : function (n) {
                    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
                }, a(n)
            }

            var o = t(7201);
            n.exports = function (n, e) {
                e = e || new FormData;
                var t = [];

                function r(n) {
                    return null === n ? "" : o.isDate(n) ? n.toISOString() : o.isArrayBuffer(n) || o.isTypedArray(n) ? "function" == typeof Blob ? new Blob([n]) : Buffer.from(n) : n
                }

                return function n(i, l) {
                    if (o.isPlainObject(i) || o.isArray(i)) {
                        if (-1 !== t.indexOf(i)) throw Error("Circular reference detected in " + l);
                        t.push(i), o.forEach(i, (function (t, i) {
                            if (!o.isUndefined(t)) {
                                var s, p = l ? l + "." + i : i;
                                if (t && !l && "object" === a(t)) if (o.endsWith(i, "{}")) t = JSON.stringify(t); else if (o.endsWith(i, "[]") && (s = o.toArray(t))) return void s.forEach((function (n) {
                                    !o.isUndefined(n) && e.append(p, r(n))
                                }));
                                n(t, p)
                            }
                        })), t.pop()
                    } else e.append(l, r(i))
                }(n), e
            }
        }, 9712: (n, e, t) => {
            "use strict";

            function a(n) {
                return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
                    return typeof n
                } : function (n) {
                    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
                }, a(n)
            }

            var o = t(4316).version, r = t(1766), i = {};
            ["object", "boolean", "number", "function", "string", "symbol"].forEach((function (n, e) {
                i[n] = function (t) {
                    return a(t) === n || "a" + (e < 1 ? "n " : " ") + n
                }
            }));
            var l = {};
            i.transitional = function (n, e, t) {
                function a(n, e) {
                    return "[Axios v" + o + "] Transitional option '" + n + "'" + e + (t ? ". " + t : "")
                }

                return function (t, o, i) {
                    if (!1 === n) throw new r(a(o, " has been removed" + (e ? " in " + e : "")), r.ERR_DEPRECATED);
                    return e && !l[o] && (l[o] = !0, console.warn(a(o, " has been deprecated since v" + e + " and will be removed in the near future"))), !n || n(t, o, i)
                }
            }, n.exports = {
                assertOptions: function (n, e, t) {
                    if ("object" !== a(n)) throw new r("options must be an object", r.ERR_BAD_OPTION_VALUE);
                    for (var o = Object.keys(n), i = o.length; i-- > 0;) {
                        var l = o[i], s = e[l];
                        if (s) {
                            var p = n[l], d = void 0 === p || s(p, l, n);
                            if (!0 !== d) throw new r("option " + l + " must be " + d, r.ERR_BAD_OPTION_VALUE)
                        } else if (!0 !== t) throw new r("Unknown option " + l, r.ERR_BAD_OPTION)
                    }
                }, validators: i
            }
        }, 7201: (n, e, t) => {
            "use strict";

            function a(n) {
                return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
                    return typeof n
                } : function (n) {
                    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
                }, a(n)
            }

            var o, r = t(5305), i = Object.prototype.toString, l = (o = Object.create(null), function (n) {
                var e = i.call(n);
                return o[e] || (o[e] = e.slice(8, -1).toLowerCase())
            });

            function s(n) {
                return n = n.toLowerCase(), function (e) {
                    return l(e) === n
                }
            }

            function p(n) {
                return Array.isArray(n)
            }

            function d(n) {
                return void 0 === n
            }

            var A = s("ArrayBuffer");

            function c(n) {
                return null !== n && "object" === a(n)
            }

            function u(n) {
                if ("object" !== l(n)) return !1;
                var e = Object.getPrototypeOf(n);
                return null === e || e === Object.prototype
            }

            var y = s("Date"), h = s("File"), m = s("Blob"), f = s("FileList");

            function b(n) {
                return "[object Function]" === i.call(n)
            }

            var g = s("URLSearchParams");

            function v(n, e) {
                if (null != n) if ("object" !== a(n) && (n = [n]), p(n)) for (var t = 0, o = n.length; t < o; t++) e.call(null, n[t], t, n); else for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && e.call(null, n[r], r, n)
            }

            var E, x = (E = "undefined" != typeof Uint8Array && Object.getPrototypeOf(Uint8Array), function (n) {
                return E && n instanceof E
            });
            n.exports = {
                isArray: p,
                isArrayBuffer: A,
                isBuffer: function (n) {
                    return null !== n && !d(n) && null !== n.constructor && !d(n.constructor) && "function" == typeof n.constructor.isBuffer && n.constructor.isBuffer(n)
                },
                isFormData: function (n) {
                    var e = "[object FormData]";
                    return n && ("function" == typeof FormData && n instanceof FormData || i.call(n) === e || b(n.toString) && n.toString() === e)
                },
                isArrayBufferView: function (n) {
                    return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(n) : n && n.buffer && A(n.buffer)
                },
                isString: function (n) {
                    return "string" == typeof n
                },
                isNumber: function (n) {
                    return "number" == typeof n
                },
                isObject: c,
                isPlainObject: u,
                isUndefined: d,
                isDate: y,
                isFile: h,
                isBlob: m,
                isFunction: b,
                isStream: function (n) {
                    return c(n) && b(n.pipe)
                },
                isURLSearchParams: g,
                isStandardBrowserEnv: function () {
                    return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
                },
                forEach: v,
                merge: function n() {
                    var e = {};

                    function t(t, a) {
                        u(e[a]) && u(t) ? e[a] = n(e[a], t) : u(t) ? e[a] = n({}, t) : p(t) ? e[a] = t.slice() : e[a] = t
                    }

                    for (var a = 0, o = arguments.length; a < o; a++) v(arguments[a], t);
                    return e
                },
                extend: function (n, e, t) {
                    return v(e, (function (e, a) {
                        n[a] = t && "function" == typeof e ? r(e, t) : e
                    })), n
                },
                trim: function (n) {
                    return n.trim ? n.trim() : n.replace(/^\s+|\s+$/g, "")
                },
                stripBOM: function (n) {
                    return 65279 === n.charCodeAt(0) && (n = n.slice(1)), n
                },
                inherits: function (n, e, t, a) {
                    n.prototype = Object.create(e.prototype, a), n.prototype.constructor = n, t && Object.assign(n.prototype, t)
                },
                toFlatObject: function (n, e, t) {
                    var a, o, r, i = {};
                    e = e || {};
                    do {
                        for (o = (a = Object.getOwnPropertyNames(n)).length; o-- > 0;) i[r = a[o]] || (e[r] = n[r], i[r] = !0);
                        n = Object.getPrototypeOf(n)
                    } while (n && (!t || t(n, e)) && n !== Object.prototype);
                    return e
                },
                kindOf: l,
                kindOfTest: s,
                endsWith: function (n, e, t) {
                    n = String(n), (void 0 === t || t > n.length) && (t = n.length), t -= e.length;
                    var a = n.indexOf(e, t);
                    return -1 !== a && a === t
                },
                toArray: function (n) {
                    if (!n) return null;
                    var e = n.length;
                    if (d(e)) return null;
                    for (var t = new Array(e); e-- > 0;) t[e] = n[e];
                    return t
                },
                isTypedArray: x,
                isFileList: f
            }
        }, 8160: n => {
            "use strict";
            n.exports = function (n) {
                var e = [];
                return e.toString = function () {
                    return this.map((function (e) {
                        var t = "", a = void 0 !== e[5];
                        return e[4] && (t += "@supports (".concat(e[4], ") {")), e[2] && (t += "@media ".concat(e[2], " {")), a && (t += "@layer".concat(e[5].length > 0 ? " ".concat(e[5]) : "", " {")), t += n(e), a && (t += "}"), e[2] && (t += "}"), e[4] && (t += "}"), t
                    })).join("")
                }, e.i = function (n, t, a, o, r) {
                    "string" == typeof n && (n = [[null, n, void 0]]);
                    var i = {};
                    if (a) for (var l = 0; l < this.length; l++) {
                        var s = this[l][0];
                        null != s && (i[s] = !0)
                    }
                    for (var p = 0; p < n.length; p++) {
                        var d = [].concat(n[p]);
                        a && i[d[0]] || (void 0 !== r && (void 0 === d[5] || (d[1] = "@layer".concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {").concat(d[1], "}")), d[5] = r), t && (d[2] ? (d[1] = "@media ".concat(d[2], " {").concat(d[1], "}"), d[2] = t) : d[2] = t), o && (d[4] ? (d[1] = "@supports (".concat(d[4], ") {").concat(d[1], "}"), d[4] = o) : d[4] = "".concat(o)), e.push(d))
                    }
                }, e
            }
        }, 8431: n => {
            "use strict";
            n.exports = function (n, e) {
                return e || (e = {}), n ? (n = String(n.__esModule ? n.default : n), /^['"].*['"]$/.test(n) && (n = n.slice(1, -1)), e.hash && (n += e.hash), /["'() \t\n]|(%20)/.test(n) || e.needQuotes ? '"'.concat(n.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : n) : n
            }
        }, 8955: n => {
            "use strict";
            n.exports = function (n) {
                var e = n[1], t = n[3];
                if (!t) return e;
                if ("function" == typeof btoa) {
                    var a = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
                        o = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),
                        r = "/*# ".concat(o, " */"), i = t.sources.map((function (n) {
                            return "/*# sourceURL=".concat(t.sourceRoot || "").concat(n, " */")
                        }));
                    return [e].concat(i).concat([r]).join("\n")
                }
                return [e].join("\n")
            }
        }, 7831: n => {
            "use strict";
            n.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg=="
        }
    }, e = {};

    function t(a) {
        var o = e[a];
        if (void 0 !== o) return o.exports;
        var r = e[a] = {id: a, exports: {}};
        return n[a](r, r.exports, t), r.exports
    }

    t.m = n, t.n = n => {
        var e = n && n.__esModule ? () => n.default : () => n;
        return t.d(e, {a: e}), e
    }, t.d = (n, e) => {
        for (var a in e) t.o(e, a) && !t.o(n, a) && Object.defineProperty(n, a, {enumerable: !0, get: e[a]})
    }, t.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (n) {
            if ("object" == typeof window) return window
        }
    }(), t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e), t.b = document.baseURI || self.location.href, t.nc = void 0;
    var a = {};
    return (() => {
        "use strict";
        t.d(a, {default: () => bt});
        var n = t(9624), e = t.n(n), o = t(6990), r = t.n(o), i = t(6892), l = t.n(i), s = t(6359), p = t.n(s),
            d = t(2716), A = t.n(d), c = t(230), u = t.n(c), y = t(3150), h = {};
        h.styleTagTransform = u(), h.setAttributes = p(), h.insert = l().bind(null, "head"), h.domAPI = r(), h.insertStyleElement = A(), e()(y.Z, h), y.Z && y.Z.locals && y.Z.locals;

        function m(n) {
            return m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
                return typeof n
            } : function (n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            }, m(n)
        }

        function f(n) {
            return f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
                return typeof n
            } : function (n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            }, f(n)
        }

        var b = setTimeout;

        function g(n) {
            return Boolean(n && void 0 !== n.length)
        }

        function v() {
        }

        function E(n) {
            if (!(this instanceof E)) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof n) throw new TypeError("not a function");
            this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], I(n, this)
        }

        function x(n, e) {
            for (; 3 === n._state;) n = n._value;
            0 !== n._state ? (n._handled = !0, E._immediateFn((function () {
                var t = 1 === n._state ? e.onFulfilled : e.onRejected;
                if (null !== t) {
                    var a;
                    try {
                        a = t(n._value)
                    } catch (n) {
                        return void k(e.promise, n)
                    }
                    C(e.promise, a)
                } else (1 === n._state ? C : k)(e.promise, n._value)
            }))) : n._deferreds.push(e)
        }

        function C(n, e) {
            try {
                if (e === n) throw new TypeError("A promise cannot be resolved with itself.");
                if (e && ("object" === f(e) || "function" == typeof e)) {
                    var t = e.then;
                    if (e instanceof E) return n._state = 3, n._value = e, void w(n);
                    if ("function" == typeof t) return void I((a = t, o = e, function () {
                        a.apply(o, arguments)
                    }), n)
                }
                n._state = 1, n._value = e, w(n)
            } catch (e) {
                k(n, e)
            }
            var a, o
        }

        function k(n, e) {
            n._state = 2, n._value = e, w(n)
        }

        function w(n) {
            2 === n._state && 0 === n._deferreds.length && E._immediateFn((function () {
                n._handled || E._unhandledRejectionFn(n._value)
            }));
            for (var e = 0, t = n._deferreds.length; e < t; e++) x(n, n._deferreds[e]);
            n._deferreds = null
        }

        function B(n, e, t) {
            this.onFulfilled = "function" == typeof n ? n : null, this.onRejected = "function" == typeof e ? e : null, this.promise = t
        }

        function I(n, e) {
            var t = !1;
            try {
                n((function (n) {
                    t || (t = !0, C(e, n))
                }), (function (n) {
                    t || (t = !0, k(e, n))
                }))
            } catch (n) {
                if (t) return;
                t = !0, k(e, n)
            }
        }

        E.prototype.catch = function (n) {
            return this.then(null, n)
        }, E.prototype.then = function (n, e) {
            var t = new this.constructor(v);
            return x(this, new B(n, e, t)), t
        }, E.prototype.finally = function (n) {
            var e = this.constructor;
            return this.then((function (t) {
                return e.resolve(n()).then((function () {
                    return t
                }))
            }), (function (t) {
                return e.resolve(n()).then((function () {
                    return e.reject(t)
                }))
            }))
        }, E.all = function (n) {
            return new E((function (e, t) {
                if (!g(n)) return t(new TypeError("Promise.all accepts an array"));
                var a = Array.prototype.slice.call(n);
                if (0 === a.length) return e([]);
                var o = a.length;

                function r(n, i) {
                    try {
                        if (i && ("object" === f(i) || "function" == typeof i)) {
                            var l = i.then;
                            if ("function" == typeof l) return void l.call(i, (function (e) {
                                r(n, e)
                            }), t)
                        }
                        a[n] = i, 0 == --o && e(a)
                    } catch (n) {
                        t(n)
                    }
                }

                for (var i = 0; i < a.length; i++) r(i, a[i])
            }))
        }, E.allSettled = function (n) {
            return new this((function (e, t) {
                if (!n || void 0 === n.length) return t(new TypeError(m(n) + " " + n + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
                var a = Array.prototype.slice.call(n);
                if (0 === a.length) return e([]);
                var o = a.length;

                function r(n, t) {
                    if (t && ("object" === m(t) || "function" == typeof t)) {
                        var i = t.then;
                        if ("function" == typeof i) return void i.call(t, (function (e) {
                            r(n, e)
                        }), (function (t) {
                            a[n] = {status: "rejected", reason: t}, 0 == --o && e(a)
                        }))
                    }
                    a[n] = {status: "fulfilled", value: t}, 0 == --o && e(a)
                }

                for (var i = 0; i < a.length; i++) r(i, a[i])
            }))
        }, E.resolve = function (n) {
            return n && "object" === f(n) && n.constructor === E ? n : new E((function (e) {
                e(n)
            }))
        }, E.reject = function (n) {
            return new E((function (e, t) {
                t(n)
            }))
        }, E.race = function (n) {
            return new E((function (e, t) {
                if (!g(n)) return t(new TypeError("Promise.race accepts an array"));
                for (var a = 0, o = n.length; a < o; a++) E.resolve(n[a]).then(e, t)
            }))
        }, E._immediateFn = "function" == typeof setImmediate && function (n) {
            setImmediate(n)
        } || function (n) {
            b(n, 0)
        }, E._unhandledRejectionFn = function (n) {
            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", n)
        };
        const S = E;
        var L = /mobile/i.test(window.navigator.userAgent);
        const z = {
            secondToTime: function (n) {
                if (0 === (n = n || 0) || n === 1 / 0 || "NaN" === n.toString()) return "00:00";
                var e = Math.floor(n / 3600), t = Math.floor((n - 3600 * e) / 60),
                    a = Math.floor(n - 3600 * e - 60 * t);
                return (e > 0 ? [e, t, a] : [t, a]).map((function (n) {
                    return n < 10 ? "0" + n : "" + n
                })).join(":")
            },
            getElementViewLeft: function (n) {
                var e = n.offsetLeft, t = n.offsetParent,
                    a = document.body.scrollLeft + document.documentElement.scrollLeft;
                if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement) for (; null !== t && t !== n;) e += t.offsetLeft, t = t.offsetParent; else for (; null !== t;) e += t.offsetLeft, t = t.offsetParent;
                return e - a
            },
            getBoundingClientRectViewLeft: function (n) {
                var e = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);
                if (n.getBoundingClientRect) {
                    if ("number" != typeof this.getBoundingClientRectViewLeft.offset) {
                        var t = document.createElement("div");
                        t.style.cssText = "position:absolute;top:0;left:0;", document.body.appendChild(t), this.getBoundingClientRectViewLeft.offset = -t.getBoundingClientRect().top - e, document.body.removeChild(t), t = null
                    }
                    var a = n.getBoundingClientRect(), o = this.getBoundingClientRectViewLeft.offset;
                    return a.left + o
                }
                return this.getElementViewLeft(n)
            },
            getScrollPosition: function () {
                return {
                    left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
                    top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
                }
            },
            setScrollPosition: function (n) {
                var e = n.left, t = void 0 === e ? 0 : e, a = n.top, o = void 0 === a ? 0 : a;
                this.isFirefox ? (document.documentElement.scrollLeft = t, document.documentElement.scrollTop = o) : window.scrollTo(t, o)
            },
            isMobile: L,
            isFirefox: /firefox/i.test(window.navigator.userAgent),
            isChrome: /chrome/i.test(window.navigator.userAgent),
            isSafari: /safari/i.test(window.navigator.userAgent),
            storage: {
                set: function (n, e) {
                    localStorage.setItem(n, e)
                }, get: function (n) {
                    return localStorage.getItem(n)
                }
            },
            nameMap: {
                dragStart: L ? "touchstart" : "mousedown",
                dragMove: L ? "touchmove" : "mousemove",
                dragEnd: L ? "touchend" : "mouseup"
            },
            color2Number: function (n) {
                return "#" === n[0] && (n = n.substr(1)), 3 === n.length && (n = "".concat(n[0]).concat(n[0]).concat(n[1]).concat(n[1]).concat(n[2]).concat(n[2])), parseInt(n, 16) + 0 & 16777215
            },
            number2Color: function (n) {
                return "#" + ("00000" + n.toString(16)).slice(-6)
            },
            number2Type: function (n) {
                switch (n) {
                    case 0:
                    default:
                        return "right";
                    case 1:
                        return "top";
                    case 2:
                        return "bottom"
                }
            }
        };
        var q = t(6208), D = t.n(q);
        const T = {
            send: function (n) {
                D().post(n.url, n.data).then((function (e) {
                    var t = e.data;
                    t && 0 === t.code ? n.success && n.success(t) : n.error && n.error(t && t.msg)
                })).catch((function (e) {
                    console.error(e), n.error && n.error()
                }))
            }, read: function (n) {
                D().get(n.url).then((function (e) {
                    var t = e.data;
                    t && 0 === t.code ? n.success && n.success(t.data.map((function (n) {
                        return {time: n[0], type: n[1], color: n[2], author: n[3], text: n[4]}
                    }))) : n.error && n.error(t && t.msg)
                })).catch((function (e) {
                    console.error(e), n.error && n.error()
                }))
            }
        };

        function O(n) {
            return O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
                return typeof n
            } : function (n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            }, O(n)
        }

        function Y(n) {
            var e = this;
            this.lang = n, this.fallbackLang = this.lang.includes("-") ? this.lang.split("-")[0] : this.lang, this.tran = function (n) {
                return n = n.toLowerCase(), M[e.lang] && M[e.lang][n] ? M[e.lang][n] : M[e.fallbackLang] && M[e.fallbackLang][n] ? M[e.fallbackLang][n] : N[n] ? N[n] : n
            }
        }

        var N = {
                "danmaku-loading": "Danmaku is loading",
                top: "Top",
                bottom: "Bottom",
                rolling: "Rolling",
                "input-danmaku-enter": "Input danmaku, hit Enter",
                "about-author": "About author",
                "dplayer-feedback": "DPlayer feedback",
                "about-dplayer": "About DPlayer",
                loop: "Loop",
                speed: "Speed",
                "opacity-danmaku": "Opacity for danmaku",
                normal: "Normal",
                "please-input-danmaku": "Please input danmaku content!",
                "set-danmaku-color": "Set danmaku color",
                "set-danmaku-type": "Set danmaku type",
                "show-danmaku": "Show danmaku",
                "video-failed": "Video load failed",
                "danmaku-failed": "Danmaku load failed",
                "danmaku-send-failed": "Danmaku send failed",
                "switching-quality": "Switching to %q quality",
                "switched-quality": "Switched to %q quality",
                ff: "FF %s s",
                rew: "REW %s s",
                "unlimited-danmaku": "Unlimited danmaku",
                "send-danmaku": "Send danmaku",
                setting: "Setting",
                fullscreen: "Full screen",
                "web-fullscreen": "Web full screen",
                send: "Send",
                screenshot: "Screenshot",
                airplay: "AirPlay",
                chromecast: "ChromeCast",
                subtitle: "Subtitle",
                off: "Off",
                "show-subs": "Show subtitle",
                "hide-subs": "Hide subtitle",
                volume: "Volume",
                live: "Live",
                "video-info": "Video info"
            }, M = {
                en: N,
                "zh-cn": {
                    "danmaku-loading": "弹幕加载中",
                    top: "顶部",
                    bottom: "底部",
                    rolling: "滚动",
                    "input-danmaku-enter": "输入弹幕，回车发送",
                    "about-author": "关于作者",
                    "dplayer-feedback": "播放器意见反馈",
                    "about-dplayer": "关于 DPlayer 播放器",
                    loop: "洗脑循环",
                    speed: "速度",
                    "opacity-danmaku": "弹幕透明度",
                    normal: "正常",
                    "please-input-danmaku": "要输入弹幕内容啊喂！",
                    "set-danmaku-color": "设置弹幕颜色",
                    "set-danmaku-type": "设置弹幕类型",
                    "show-danmaku": "显示弹幕",
                    "video-failed": "视频加载失败",
                    "danmaku-failed": "弹幕加载失败",
                    "danmaku-send-failed": "弹幕发送失败",
                    "switching-quality": "正在切换至 %q 画质",
                    "switched-quality": "已经切换至 %q 画质",
                    ff: "快进 %s 秒",
                    rew: "快退 %s 秒",
                    "unlimited-danmaku": "海量弹幕",
                    "send-danmaku": "发送弹幕",
                    setting: "设置",
                    fullscreen: "全屏",
                    "web-fullscreen": "页面全屏",
                    send: "发送",
                    screenshot: "截图",
                    airplay: "无线投屏",
                    chromecast: "ChromeCast",
                    subtitle: "字幕",
                    off: "关闭",
                    "show-subs": "显示字幕",
                    "hide-subs": "隐藏字幕",
                    volume: "音量",
                    live: "直播",
                    "video-info": "视频统计信息"
                },
                "zh-tw": {
                    "danmaku-loading": "彈幕載入中",
                    top: "頂部",
                    bottom: "底部",
                    rolling: "滾動",
                    "input-danmaku-enter": "輸入彈幕，Enter 發送",
                    "about-author": "關於作者",
                    "dplayer-feedback": "播放器意見回饋",
                    "about-dplayer": "關於 DPlayer 播放器",
                    loop: "循環播放",
                    speed: "速度",
                    "opacity-danmaku": "彈幕透明度",
                    normal: "正常",
                    "please-input-danmaku": "請輸入彈幕內容啊！",
                    "set-danmaku-color": "設定彈幕顏色",
                    "set-danmaku-type": "設定彈幕類型",
                    "show-danmaku": "顯示彈幕",
                    "video-failed": "影片載入失敗",
                    "danmaku-failed": "彈幕載入失敗",
                    "danmaku-send-failed": "彈幕發送失敗",
                    "switching-quality": "正在切換至 %q 畫質",
                    "switched-quality": "已經切換至 %q 畫質",
                    ff: "快進 %s 秒",
                    rew: "快退 %s 秒",
                    "unlimited-danmaku": "巨量彈幕",
                    "send-danmaku": "發送彈幕",
                    setting: "設定",
                    fullscreen: "全螢幕",
                    "web-fullscreen": "頁面全螢幕",
                    send: "發送",
                    screenshot: "截圖",
                    airplay: "無線投屏",
                    chromecast: "ChromeCast",
                    subtitle: "字幕",
                    off: "關閉",
                    "show-subs": "顯示字幕",
                    "hide-subs": "隱藏字幕",
                    volume: "音量",
                    live: "直播",
                    "video-info": "影片統計訊息"
                },
                "ko-kr": {
                    "danmaku-loading": "Danmaku를 불러오는 중입니다.",
                    top: "Top",
                    bottom: "Bottom",
                    rolling: "Rolling",
                    "input-danmaku-enter": "Danmaku를 입력하고 Enter를 누르세요.",
                    "about-author": "만든이",
                    "dplayer-feedback": "피드백 보내기",
                    "about-dplayer": "DPlayer 정보",
                    loop: "반복",
                    speed: "배속",
                    "opacity-danmaku": "Danmaku 불투명도",
                    normal: "표준",
                    "please-input-danmaku": "Danmaku를 입력하세요!",
                    "set-danmaku-color": "Danmaku 색상",
                    "set-danmaku-type": "Danmaku 설정",
                    "show-danmaku": "Danmaku 표시",
                    "video-failed": "비디오를 불러오지 못했습니다.",
                    "danmaku-failed": "Danmaku를 불러오지 못했습니다.",
                    "danmaku-send-failed": "Danmaku 전송에 실패했습니다.",
                    "Switching to": "",
                    "Switched to": "",
                    "switching-quality": "전환 %q 화질",
                    "switched-quality": "전환 됨 %q 화질",
                    ff: "앞으로 %s 초",
                    rew: "뒤로 %s 초",
                    "unlimited-danmaku": "끝없는 Danmaku",
                    "send-danmaku": "Danmaku 보내기",
                    setting: "설정",
                    fullscreen: "전체 화면",
                    "web-fullscreen": "웹 내 전체화면",
                    send: "보내기",
                    screenshot: "화면 캡쳐",
                    airplay: "에어플레이",
                    chromecast: "ChromeCast",
                    subtitle: "부제",
                    off: "끄다",
                    "show-subs": "자막 보이기",
                    "hide-subs": "자막 숨기기",
                    Volume: "볼륨",
                    live: "생방송",
                    "video-info": "비디오 정보"
                },
                de: {
                    "danmaku-loading": "Danmaku lädt...",
                    top: "Oben",
                    bottom: "Unten",
                    rolling: "Rollend",
                    "input-danmaku-enter": "Drücke Enter nach dem Einfügen vom Danmaku",
                    "about-author": "Über den Autor",
                    "dplayer-feedback": "DPlayer Feedback",
                    "about-dplayer": "Über DPlayer",
                    loop: "Wiederholen",
                    speed: "Geschwindigkeit",
                    "opacity-danmaku": "Transparenz für Danmaku",
                    normal: "Normal",
                    "please-input-danmaku": "Bitte Danmaku Inhalt eingeben!",
                    "set-danmaku-color": "Danmaku Farbe festlegen",
                    "set-danmaku-type": "Danmaku Typ festlegen",
                    "show-danmaku": "Zeige Danmaku",
                    "video-failed": "Das Video konnte nicht geladen werden",
                    "danmaku-failed": "Danmaku konnte nicht geladen werden",
                    "danmaku-send-failed": "Das senden von Danmaku ist fehgeschlagen",
                    "switching-quality": "Wechsle zur %q Qualität",
                    "switched-quality": "Zur %q Qualität gewechselt",
                    ff: "%s s Vorwärts",
                    rew: "%s s Zurück",
                    "unlimited-danmaku": "Unlimitiertes Danmaku",
                    "send-danmaku": "Sende Danmaku",
                    setting: "Einstellungen",
                    fullscreen: "Vollbild",
                    "web-fullscreen": "Browser Vollbild",
                    send: "Senden",
                    screenshot: "Screenshot",
                    airplay: "AirPlay",
                    "show-subs": "Zeige Untertitel",
                    chromecast: "ChromeCast",
                    subtitle: "Untertitel",
                    off: "Schließung",
                    "hide-subs": "Verstecke Untertitel",
                    volume: "Lautstärke",
                    live: "Live",
                    "video-info": "Video Info"
                }
            }, j = t(730), R = t.n(j), _ = t(6074), U = t.n(_), W = t(4437), P = t.n(W), F = t(2644), Q = t.n(F),
            H = t(1324), K = t.n(H), Z = t(4574), X = t.n(Z), V = t(1415), J = t.n(V), G = t(5934), $ = t.n(G),
            nn = t(1428), en = t.n(nn), tn = t(2807), an = t.n(tn), on = t(338), rn = t.n(on), ln = t(2254),
            sn = t.n(ln), pn = t(1965), dn = t.n(pn), An = t(8113), cn = t.n(An), un = t(6251), yn = t.n(un),
            hn = t(8410), mn = t.n(hn), fn = t(4182), bn = t.n(fn), gn = t(3193), vn = t.n(gn);
        const En = {
            play: R(),
            pause: U(),
            volumeUp: P(),
            volumeDown: Q(),
            volumeOff: K(),
            full: X(),
            fullWeb: J(),
            setting: $(),
            right: en(),
            comment: an(),
            commentOff: rn(),
            send: sn(),
            pallette: dn(),
            camera: cn(),
            subtitle: mn(),
            loading: bn(),
            airplay: yn(),
            chromecast: vn()
        };
        var xn = t(1916), Cn = t.n(xn);

        function kn(n, e) {
            for (var t = 0; t < e.length; t++) {
                var a = e[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, a.key, a)
            }
        }

        var wn = function () {
            function n(e) {
                !function (n, e) {
                    if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), this.container = e.container, this.options = e.options, this.index = e.index, this.tran = e.tran, this.init()
            }

            var e, t, a;
            return e = n, a = [{
                key: "NewNotice", value: function (n, e) {
                    var t = document.createElement("div");
                    return t.classList.add("dplayer-notice"), t.style.opacity = e, t.innerText = n, t
                }
            }], (t = [{
                key: "init", value: function () {
                    this.container.innerHTML = Cn()({
                        options: this.options,
                        index: this.index,
                        tran: this.tran,
                        icons: En,
                        mobile: z.isMobile,
                        video: {
                            current: !0,
                            pic: this.options.video.pic,
                            screenshot: this.options.screenshot,
                            airplay: !(!z.isSafari || z.isChrome) && this.options.airplay,
                            chromecast: this.options.chromecast,
                            preload: this.options.preload,
                            url: this.options.video.url,
                            subtitle: this.options.subtitle
                        }
                    }), this.volumeBar = this.container.querySelector(".dplayer-volume-bar-inner"), this.volumeBarWrap = this.container.querySelector(".dplayer-volume-bar"), this.volumeBarWrapWrap = this.container.querySelector(".dplayer-volume-bar-wrap"), this.volumeButton = this.container.querySelector(".dplayer-volume"), this.volumeButtonIcon = this.container.querySelector(".dplayer-volume-icon"), this.volumeIcon = this.container.querySelector(".dplayer-volume-icon .dplayer-icon-content"), this.playedBar = this.container.querySelector(".dplayer-played"), this.loadedBar = this.container.querySelector(".dplayer-loaded"), this.playedBarWrap = this.container.querySelector(".dplayer-bar-wrap"), this.playedBarTime = this.container.querySelector(".dplayer-bar-time"), this.danmaku = this.container.querySelector(".dplayer-danmaku"), this.danmakuLoading = this.container.querySelector(".dplayer-danloading"), this.video = this.container.querySelector(".dplayer-video-current"), this.bezel = this.container.querySelector(".dplayer-bezel-icon"), this.playButton = this.container.querySelector(".dplayer-play-icon"), this.mobilePlayButton = this.container.querySelector(".dplayer-mobile-play"), this.videoWrap = this.container.querySelector(".dplayer-video-wrap"), this.controllerMask = this.container.querySelector(".dplayer-controller-mask"), this.ptime = this.container.querySelector(".dplayer-ptime"), this.settingButton = this.container.querySelector(".dplayer-setting-icon"), this.settingBox = this.container.querySelector(".dplayer-setting-box"), this.mask = this.container.querySelector(".dplayer-mask"), this.loop = this.container.querySelector(".dplayer-setting-loop"), this.loopToggle = this.container.querySelector(".dplayer-setting-loop .dplayer-toggle-setting-input"), this.showDanmaku = this.container.querySelector(".dplayer-setting-showdan"), this.showDanmakuToggle = this.container.querySelector(".dplayer-showdan-setting-input"), this.unlimitDanmaku = this.container.querySelector(".dplayer-setting-danunlimit"), this.unlimitDanmakuToggle = this.container.querySelector(".dplayer-danunlimit-setting-input"), this.speed = this.container.querySelector(".dplayer-setting-speed"), this.speedItem = this.container.querySelectorAll(".dplayer-setting-speed-item"), this.danmakuOpacityBar = this.container.querySelector(".dplayer-danmaku-bar-inner"), this.danmakuOpacityBarWrap = this.container.querySelector(".dplayer-danmaku-bar"), this.danmakuOpacityBarWrapWrap = this.container.querySelector(".dplayer-danmaku-bar-wrap"), this.danmakuOpacityBox = this.container.querySelector(".dplayer-setting-danmaku"), this.dtime = this.container.querySelector(".dplayer-dtime"), this.controller = this.container.querySelector(".dplayer-controller"), this.commentInput = this.container.querySelector(".dplayer-comment-input"), this.commentButton = this.container.querySelector(".dplayer-comment-icon"), this.commentSettingBox = this.container.querySelector(".dplayer-comment-setting-box"), this.commentSettingButton = this.container.querySelector(".dplayer-comment-setting-icon"), this.commentSettingFill = this.container.querySelector(".dplayer-comment-setting-icon path"), this.commentSendButton = this.container.querySelector(".dplayer-send-icon"), this.commentSendFill = this.container.querySelector(".dplayer-send-icon path"), this.commentColorSettingBox = this.container.querySelector(".dplayer-comment-setting-color"), this.browserFullButton = this.container.querySelector(".dplayer-full-icon"), this.webFullButton = this.container.querySelector(".dplayer-full-in-icon"), this.menu = this.container.querySelector(".dplayer-menu"), this.menuItem = this.container.querySelectorAll(".dplayer-menu-item"), this.qualityList = this.container.querySelector(".dplayer-quality-list"), this.camareButton = this.container.querySelector(".dplayer-camera-icon"), this.airplayButton = this.container.querySelector(".dplayer-airplay-icon"), this.chromecastButton = this.container.querySelector(".dplayer-chromecast-icon"), this.subtitleButton = this.container.querySelector(".dplayer-subtitle-icon"), this.subtitleButtonInner = this.container.querySelector(".dplayer-subtitle-icon .dplayer-icon-content"), this.subtitlesButton = this.container.querySelector(".dplayer-subtitles-icon"), this.subtitlesBox = this.container.querySelector(".dplayer-subtitles-box"), this.subtitlesItem = this.container.querySelectorAll(".dplayer-subtitles-item"), this.subtitle = this.container.querySelector(".dplayer-subtitle"), this.subtrack = this.container.querySelector(".dplayer-subtrack"), this.qualityButton = this.container.querySelector(".dplayer-quality-icon"), this.barPreview = this.container.querySelector(".dplayer-bar-preview"), this.barWrap = this.container.querySelector(".dplayer-bar-wrap"), this.noticeList = this.container.querySelector(".dplayer-notice-list"), this.infoPanel = this.container.querySelector(".dplayer-info-panel"), this.infoPanelClose = this.container.querySelector(".dplayer-info-panel-close"), this.infoVersion = this.container.querySelector(".dplayer-info-panel-item-version .dplayer-info-panel-item-data"), this.infoFPS = this.container.querySelector(".dplayer-info-panel-item-fps .dplayer-info-panel-item-data"), this.infoType = this.container.querySelector(".dplayer-info-panel-item-type .dplayer-info-panel-item-data"), this.infoUrl = this.container.querySelector(".dplayer-info-panel-item-url .dplayer-info-panel-item-data"), this.infoResolution = this.container.querySelector(".dplayer-info-panel-item-resolution .dplayer-info-panel-item-data"), this.infoDuration = this.container.querySelector(".dplayer-info-panel-item-duration .dplayer-info-panel-item-data"), this.infoDanmakuId = this.container.querySelector(".dplayer-info-panel-item-danmaku-id .dplayer-info-panel-item-data"), this.infoDanmakuApi = this.container.querySelector(".dplayer-info-panel-item-danmaku-api .dplayer-info-panel-item-data"), this.infoDanmakuAmount = this.container.querySelector(".dplayer-info-panel-item-danmaku-amount .dplayer-info-panel-item-data")
                }
            }]) && kn(e.prototype, t), a && kn(e, a), Object.defineProperty(e, "prototype", {writable: !1}), n
        }();
        const Bn = wn;

        function In(n) {
            return In = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
                return typeof n
            } : function (n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            }, In(n)
        }

        function Sn(n, e) {
            for (var t = 0; t < e.length; t++) {
                var a = e[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, a.key, a)
            }
        }

        var Ln = function () {
            function n(e) {
                !function (n, e) {
                    if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), this.options = e, this.player = this.options.player, this.container = this.options.container, this.danTunnel = {
                    right: {},
                    top: {},
                    bottom: {}
                }, this.danIndex = 0, this.dan = [], this.showing = !0, this._opacity = this.options.opacity, this.events = this.options.events, this.unlimited = this.options.unlimited, this._measure(""), this.load()
            }

            var e, t;
            return e = n, t = [{
                key: "load", value: function () {
                    var n, e = this;
                    n = this.options.api.maximum ? "".concat(this.options.api.address, "v3/?id=").concat(this.options.api.id, "&max=").concat(this.options.api.maximum) : "".concat(this.options.api.address, "v3/?id=").concat(this.options.api.id);
                    var t = (this.options.api.addition || []).slice(0);
                    t.push(n), this.events && this.events.trigger("danmaku_load_start", t), this._readAllEndpoints(t, (function (n) {
                        e.dan = [].concat.apply([], n).sort((function (n, e) {
                            return n.time - e.time
                        })), window.requestAnimationFrame((function () {
                            e.frame()
                        })), e.options.callback(), e.events && e.events.trigger("danmaku_load_end")
                    }))
                }
            }, {
                key: "reload", value: function (n) {
                    this.options.api = n, this.dan = [], this.clear(), this.load()
                }
            }, {
                key: "_readAllEndpoints", value: function (n, e) {
                    for (var t = this, a = [], o = 0, r = function (r) {
                        t.options.apiBackend.read({
                            url: n[r], success: function (t) {
                                a[r] = t, ++o === n.length && e(a)
                            }, error: function (i) {
                                t.options.error(i || t.options.tran("danmaku-failed")), a[r] = [], ++o === n.length && e(a)
                            }
                        })
                    }, i = 0; i < n.length; ++i) r(i)
                }
            }, {
                key: "send", value: function (n, e) {
                    var t = this, a = {
                        token: this.options.api.token,
                        id: this.options.api.id,
                        author: this.options.api.user,
                        time: this.options.time(),
                        text: n.text,
                        color: n.color,
                        type: n.type
                    };
                    this.options.apiBackend.send({
                        url: this.options.api.address + "v3/",
                        data: a,
                        success: e,
                        error: function (n) {
                            t.options.error(n || t.options.tran("danmaku-failed"))
                        }
                    }), this.dan.splice(this.danIndex, 0, a), this.danIndex++;
                    var o = {
                        text: this.htmlEncode(a.text),
                        color: a.color,
                        type: a.type,
                        border: "2px solid ".concat(this.options.borderColor)
                    };
                    this.draw(o), this.events && this.events.trigger("danmaku_send", a)
                }
            }, {
                key: "frame", value: function () {
                    var n = this;
                    if (this.dan.length && !this.paused && this.showing) {
                        for (var e = this.dan[this.danIndex], t = []; e && this.options.time() > parseFloat(e.time);) t.push(e), e = this.dan[++this.danIndex];
                        this.draw(t)
                    }
                    window.requestAnimationFrame((function () {
                        n.frame()
                    }))
                }
            }, {
                key: "opacity", value: function (n) {
                    if (void 0 !== n) {
                        for (var e = this.container.getElementsByClassName("dplayer-danmaku-item"), t = 0; t < e.length; t++) e[t].style.opacity = n;
                        this._opacity = n, this.events && this.events.trigger("danmaku_opacity", this._opacity)
                    }
                    return this._opacity
                }
            }, {
                key: "draw", value: function (n) {
                    var e = this;
                    if (this.showing) {
                        var t = this.options.height, a = this.container.offsetWidth, o = this.container.offsetHeight,
                            r = parseInt(o / t), i = function (n) {
                                var t = n.offsetWidth || parseInt(n.style.width),
                                    a = n.getBoundingClientRect().right || e.container.getBoundingClientRect().right + t;
                                return e.container.getBoundingClientRect().right - a
                            }, l = function (n) {
                                return (a + n) / 5
                            }, s = function (n, t, o) {
                                for (var s = a / l(o), p = function (o) {
                                    var p = e.danTunnel[t][o + ""];
                                    if (!p || !p.length) return e.danTunnel[t][o + ""] = [n], n.addEventListener("animationend", (function () {
                                        e.danTunnel[t][o + ""].splice(0, 1)
                                    })), {v: o % r};
                                    if ("right" !== t) return "continue";
                                    for (var d = 0; d < p.length; d++) {
                                        var A = i(p[d]) - 10;
                                        if (A <= a - s * l(parseInt(p[d].style.width)) || A <= 0) break;
                                        if (d === p.length - 1) return e.danTunnel[t][o + ""].push(n), n.addEventListener("animationend", (function () {
                                            e.danTunnel[t][o + ""].splice(0, 1)
                                        })), {v: o % r}
                                    }
                                }, d = 0; e.unlimited || d < r; d++) {
                                    var A = p(d);
                                    if ("continue" !== A && "object" === In(A)) return A.v
                                }
                                return -1
                            };
                        "[object Array]" !== Object.prototype.toString.call(n) && (n = [n]);
                        for (var p = document.createDocumentFragment(), d = function (o) {
                            n[o].type = z.number2Type(n[o].type), n[o].color || (n[o].color = 16777215);
                            var r = document.createElement("div");
                            r.classList.add("dplayer-danmaku-item"), r.classList.add("dplayer-danmaku-".concat(n[o].type)), n[o].border ? r.innerHTML = '<span style="border:'.concat(n[o].border, '">').concat(n[o].text, "</span>") : r.innerHTML = n[o].text, r.style.opacity = e._opacity, r.style.color = z.number2Color(n[o].color), r.addEventListener("animationend", (function () {
                                e.container.removeChild(r)
                            }));
                            var i = e._measure(n[o].text), l = void 0;
                            switch (n[o].type) {
                                case"right":
                                    (l = s(r, n[o].type, i)) >= 0 && (r.style.width = i + 1 + "px", r.style.top = t * l + "px", r.style.transform = "translateX(-".concat(a, "px)"));
                                    break;
                                case"top":
                                    (l = s(r, n[o].type)) >= 0 && (r.style.top = t * l + "px");
                                    break;
                                case"bottom":
                                    (l = s(r, n[o].type)) >= 0 && (r.style.bottom = t * l + "px");
                                    break;
                                default:
                                    console.error("Can't handled danmaku type: ".concat(n[o].type))
                            }
                            l >= 0 && (r.classList.add("dplayer-danmaku-move"), r.style.animationDuration = e._danAnimation(n[o].type), p.appendChild(r))
                        }, A = 0; A < n.length; A++) d(A);
                        return this.container.appendChild(p), p
                    }
                }
            }, {
                key: "play", value: function () {
                    this.paused = !1
                }
            }, {
                key: "pause", value: function () {
                    this.paused = !0
                }
            }, {
                key: "_measure", value: function (n) {
                    if (!this.context) {
                        var e = getComputedStyle(this.container.getElementsByClassName("dplayer-danmaku-item")[0], null);
                        this.context = document.createElement("canvas").getContext("2d"), this.context.font = e.getPropertyValue("font")
                    }
                    return this.context.measureText(n).width
                }
            }, {
                key: "seek", value: function () {
                    this.clear();
                    for (var n = 0; n < this.dan.length; n++) {
                        if (this.dan[n].time >= this.options.time()) {
                            this.danIndex = n;
                            break
                        }
                        this.danIndex = this.dan.length
                    }
                }
            }, {
                key: "clear", value: function () {
                    this.danTunnel = {
                        right: {},
                        top: {},
                        bottom: {}
                    }, this.danIndex = 0, this.options.container.innerHTML = "", this.events && this.events.trigger("danmaku_clear")
                }
            }, {
                key: "htmlEncode", value: function (n) {
                    return n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2f;")
                }
            }, {
                key: "resize", value: function () {
                    for (var n = this.container.offsetWidth, e = this.container.getElementsByClassName("dplayer-danmaku-item"), t = 0; t < e.length; t++) e[t].style.transform = "translateX(-".concat(n, "px)")
                }
            }, {
                key: "hide", value: function () {
                    this.showing = !1, this.pause(), this.clear(), this.events && this.events.trigger("danmaku_hide")
                }
            }, {
                key: "show", value: function () {
                    this.seek(), this.showing = !0, this.play(), this.events && this.events.trigger("danmaku_show")
                }
            }, {
                key: "unlimit", value: function (n) {
                    this.unlimited = n
                }
            }, {
                key: "speed", value: function (n) {
                    this.options.api.speedRate = n
                }
            }, {
                key: "_danAnimation", value: function (n) {
                    var e = this.options.api.speedRate || 1, t = !!this.player.fullScreen.isFullScreen();
                    return {
                        top: "".concat((t ? 6 : 4) / e, "s"),
                        right: "".concat((t ? 8 : 5) / e, "s"),
                        bottom: "".concat((t ? 6 : 4) / e, "s")
                    }[n]
                }
            }], t && Sn(e.prototype, t), Object.defineProperty(e, "prototype", {writable: !1}), n
        }();
        const zn = Ln;

        function qn(n, e) {
            for (var t = 0; t < e.length; t++) {
                var a = e[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, a.key, a)
            }
        }

        const Dn = function () {
            function n() {
                !function (n, e) {
                    if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), this.events = {}, this.videoEvents = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "mozaudioavailable", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], this.playerEvents = ["screenshot", "thumbnails_show", "thumbnails_hide", "danmaku_show", "danmaku_hide", "danmaku_clear", "danmaku_loaded", "danmaku_send", "danmaku_opacity", "contextmenu_show", "contextmenu_hide", "notice_show", "notice_hide", "quality_start", "quality_end", "destroy", "resize", "fullscreen", "fullscreen_cancel", "webfullscreen", "webfullscreen_cancel", "subtitle_show", "subtitle_hide", "subtitle_change"]
            }

            var e, t;
            return e = n, (t = [{
                key: "on", value: function (n, e) {
                    this.type(n) && "function" == typeof e && (this.events[n] || (this.events[n] = []), this.events[n].push(e))
                }
            }, {
                key: "trigger", value: function (n, e) {
                    if (this.events[n] && this.events[n].length) for (var t = 0; t < this.events[n].length; t++) this.events[n][t](e)
                }
            }, {
                key: "type", value: function (n) {
                    return -1 !== this.playerEvents.indexOf(n) ? "player" : -1 !== this.videoEvents.indexOf(n) ? "video" : (console.error("Unknown event name: ".concat(n)), null)
                }
            }]) && qn(e.prototype, t), Object.defineProperty(e, "prototype", {writable: !1}), n
        }();

        function Tn(n, e) {
            for (var t = 0; t < e.length; t++) {
                var a = e[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, a.key, a)
            }
        }

        var On = function () {
            function n(e) {
                var t = this;
                !function (n, e) {
                    if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), this.player = e, this.lastScrollPosition = {
                    left: 0,
                    top: 0
                }, this.player.events.on("webfullscreen", (function () {
                    t.player.resize()
                })), this.player.events.on("webfullscreen_cancel", (function () {
                    t.player.resize(), z.setScrollPosition(t.lastScrollPosition)
                })), this.fullscreenchange = function () {
                    t.player.resize(), t.isFullScreen("browser") ? t.player.events.trigger("fullscreen") : (z.setScrollPosition(t.lastScrollPosition), t.player.events.trigger("fullscreen_cancel"))
                }, this.docfullscreenchange = function () {
                    var n = document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
                    n && n !== t.player.container || (t.player.resize(), n ? t.player.events.trigger("fullscreen") : (z.setScrollPosition(t.lastScrollPosition), t.player.events.trigger("fullscreen_cancel")))
                }, /Firefox/.test(navigator.userAgent) ? (document.addEventListener("mozfullscreenchange", this.docfullscreenchange), document.addEventListener("fullscreenchange", this.docfullscreenchange)) : (this.player.container.addEventListener("fullscreenchange", this.fullscreenchange), this.player.container.addEventListener("webkitfullscreenchange", this.fullscreenchange), document.addEventListener("msfullscreenchange", this.docfullscreenchange), document.addEventListener("MSFullscreenChange", this.docfullscreenchange))
            }

            var e, t;
            return e = n, t = [{
                key: "isFullScreen", value: function () {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "browser";
                    switch (n) {
                        case"browser":
                            return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
                        case"web":
                            return this.player.container.classList.contains("dplayer-fulled")
                    }
                }
            }, {
                key: "request", value: function () {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "browser",
                        e = "browser" === n ? "web" : "browser", t = this.isFullScreen(e);
                    switch (t || (this.lastScrollPosition = z.getScrollPosition()), n) {
                        case"browser":
                            this.player.container.requestFullscreen ? this.player.container.requestFullscreen() : this.player.container.mozRequestFullScreen ? this.player.container.mozRequestFullScreen() : this.player.container.webkitRequestFullscreen ? this.player.container.webkitRequestFullscreen() : this.player.video.webkitEnterFullscreen ? this.player.video.webkitEnterFullscreen() : this.player.video.webkitEnterFullScreen ? this.player.video.webkitEnterFullScreen() : this.player.container.msRequestFullscreen && this.player.container.msRequestFullscreen();
                            break;
                        case"web":
                            this.player.container.classList.add("dplayer-fulled"), document.body.classList.add("dplayer-web-fullscreen-fix"), this.player.events.trigger("webfullscreen")
                    }
                    t && this.cancel(e)
                }
            }, {
                key: "cancel", value: function () {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "browser";
                    switch (n) {
                        case"browser":
                            document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.webkitCancelFullscreen ? document.webkitCancelFullscreen() : document.msCancelFullScreen ? document.msCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen();
                            break;
                        case"web":
                            this.player.container.classList.remove("dplayer-fulled"), document.body.classList.remove("dplayer-web-fullscreen-fix"), this.player.events.trigger("webfullscreen_cancel")
                    }
                }
            }, {
                key: "toggle", value: function () {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "browser";
                    this.isFullScreen(n) ? this.cancel(n) : this.request(n)
                }
            }, {
                key: "destroy", value: function () {
                    /Firefox/.test(navigator.userAgent) ? (document.removeEventListener("mozfullscreenchange", this.docfullscreenchange), document.removeEventListener("fullscreenchange", this.docfullscreenchange)) : (this.player.container.removeEventListener("fullscreenchange", this.fullscreenchange), this.player.container.removeEventListener("webkitfullscreenchange", this.fullscreenchange), document.removeEventListener("msfullscreenchange", this.docfullscreenchange), document.removeEventListener("MSFullscreenChange", this.docfullscreenchange))
                }
            }], t && Tn(e.prototype, t), Object.defineProperty(e, "prototype", {writable: !1}), n
        }();
        const Yn = On;

        function Nn(n, e) {
            for (var t = 0; t < e.length; t++) {
                var a = e[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, a.key, a)
            }
        }

        var Mn = function () {
            function n(e) {
                !function (n, e) {
                    if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), this.storageName = {
                    opacity: "dplayer-danmaku-opacity",
                    volume: "dplayer-volume",
                    unlimited: "dplayer-danmaku-unlimited",
                    danmaku: "dplayer-danmaku-show",
                    subtitle: "dplayer-subtitle-show"
                }, this.default = {
                    opacity: .7,
                    volume: e.options.hasOwnProperty("volume") ? e.options.volume : .7,
                    unlimited: (e.options.danmaku && e.options.danmaku.unlimited ? 1 : 0) || 0,
                    danmaku: 1,
                    subtitle: 1
                }, this.data = {}, this.init()
            }

            var e, t;
            return e = n, (t = [{
                key: "init", value: function () {
                    for (var n in this.storageName) {
                        var e = this.storageName[n];
                        this.data[n] = parseFloat(z.storage.get(e) || this.default[n])
                    }
                }
            }, {
                key: "get", value: function (n) {
                    return this.data[n]
                }
            }, {
                key: "set", value: function (n, e) {
                    this.data[n] = e, z.storage.set(this.storageName[n], e)
                }
            }]) && Nn(e.prototype, t), Object.defineProperty(e, "prototype", {writable: !1}), n
        }();
        const jn = Mn;

        function Rn(n, e) {
            for (var t = 0; t < e.length; t++) {
                var a = e[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, a.key, a)
            }
        }

        var _n = function () {
            function n(e, t, a, o) {
                !function (n, e) {
                    if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), this.container = e, this.video = t, this.options = a, this.events = o, this.init()
            }

            var e, t;
            return e = n, t = [{
                key: "init", value: function () {
                    var n = this;
                    if (this.container.style.fontSize = this.options.fontSize, this.container.style.bottom = this.options.bottom, this.container.style.color = this.options.color, this.video.textTracks && this.video.textTracks[0]) {
                        var e = this.video.textTracks[0];
                        e.oncuechange = function () {
                            var t = e.activeCues[e.activeCues.length - 1];
                            if (n.container.innerHTML = "", t) {
                                var a = document.createElement("div");
                                a.appendChild(t.getCueAsHTML());
                                var o = a.innerHTML.split(/\r?\n/).map((function (n) {
                                    return "<p>".concat(n, "</p>")
                                })).join("");
                                n.container.innerHTML = o
                            }
                            n.events.trigger("subtitle_change")
                        }
                    }
                }
            }, {
                key: "show", value: function () {
                    this.container.classList.remove("dplayer-subtitle-hide"), this.events.trigger("subtitle_show")
                }
            }, {
                key: "hide", value: function () {
                    this.container.classList.add("dplayer-subtitle-hide"), this.events.trigger("subtitle_hide")
                }
            }, {
                key: "toggle", value: function () {
                    this.container.classList.contains("dplayer-subtitle-hide") ? this.show() : this.hide()
                }
            }], t && Rn(e.prototype, t), Object.defineProperty(e, "prototype", {writable: !1}), n
        }();
        const Un = _n;

        function Wn(n, e) {
            for (var t = 0; t < e.length; t++) {
                var a = e[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, a.key, a)
            }
        }

        var Pn = function () {
            function n(e) {
                var t = this;
                !function (n, e) {
                    if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), this.player = e, this.player.template.mask.addEventListener("click", (function () {
                    t.hide()
                })), this.player.template.subtitlesButton.addEventListener("click", (function () {
                    t.adaptiveHeight(), t.show()
                }));
                for (var a = this.player.template.subtitlesItem.length - 1, o = function (n) {
                    t.player.template.subtitlesItem[n].addEventListener("click", (function () {
                        t.hide(), t.player.options.subtitle.index !== n && (t.player.template.subtitle.innerHTML = "<p></p>", t.player.template.subtrack.src = t.player.template.subtitlesItem[n].dataset.subtitle, t.player.options.subtitle.index = n, t.player.template.subtitle.classList.contains("dplayer-subtitle-hide") && t.subContainerShow())
                    }))
                }, r = 0; r < a; r++) o(r);
                this.player.template.subtitlesItem[a].addEventListener("click", (function () {
                    t.hide(), t.player.options.subtitle.index !== a && (t.player.template.subtitle.innerHTML = "<p></p>", t.player.template.subtrack.src = "", t.player.options.subtitle.index = a, t.subContainerHide())
                }))
            }

            var e, t;
            return e = n, (t = [{
                key: "subContainerShow", value: function () {
                    this.player.template.subtitle.classList.remove("dplayer-subtitle-hide"), this.player.events.trigger("subtitle_show")
                }
            }, {
                key: "subContainerHide", value: function () {
                    this.player.template.subtitle.classList.add("dplayer-subtitle-hide"), this.player.events.trigger("subtitle_hide")
                }
            }, {
                key: "hide", value: function () {
                    this.player.template.subtitlesBox.classList.remove("dplayer-subtitles-box-open"), this.player.template.mask.classList.remove("dplayer-mask-show"), this.player.controller.disableAutoHide = !1
                }
            }, {
                key: "show", value: function () {
                    this.player.template.subtitlesBox.classList.add("dplayer-subtitles-box-open"), this.player.template.mask.classList.add("dplayer-mask-show"), this.player.controller.disableAutoHide = !0
                }
            }, {
                key: "adaptiveHeight", value: function () {
                    var n = 30 * this.player.template.subtitlesItem.length + 14,
                        e = .8 * this.player.template.videoWrap.offsetHeight;
                    n >= e - 50 ? (this.player.template.subtitlesBox.style.bottom = "8px", this.player.template.subtitlesBox.style["max-height"] = e - 8 + "px") : (this.player.template.subtitlesBox.style.bottom = "50px", this.player.template.subtitlesBox.style["max-height"] = e - 50 + "px")
                }
            }]) && Wn(e.prototype, t), Object.defineProperty(e, "prototype", {writable: !1}), n
        }();
        const Fn = Pn;

        function Qn(n, e) {
            for (var t = 0; t < e.length; t++) {
                var a = e[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, a.key, a)
            }
        }

        var Hn = function () {
            function n(e) {
                !function (n, e) {
                    if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), this.elements = {}, this.elements.volume = e.volumeBar, this.elements.played = e.playedBar, this.elements.loaded = e.loadedBar, this.elements.danmaku = e.danmakuOpacityBar
            }

            var e, t;
            return e = n, (t = [{
                key: "set", value: function (n, e, t) {
                    e = Math.max(e, 0), e = Math.min(e, 1), this.elements[n].style[t] = 100 * e + "%"
                }
            }, {
                key: "get", value: function (n) {
                    return parseFloat(this.elements[n].style.width) / 100
                }
            }]) && Qn(e.prototype, t), Object.defineProperty(e, "prototype", {writable: !1}), n
        }();
        const Kn = Hn;

        function Zn(n, e) {
            for (var t = 0; t < e.length; t++) {
                var a = e[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, a.key, a)
            }
        }

        var Xn = function () {
            function n(e) {
                !function (n, e) {
                    if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), this.player = e, window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (n) {
                    window.setTimeout(n, 1e3 / 60)
                }, this.types = ["loading", "info", "fps"], this.init()
            }

            var e, t;
            return e = n, (t = [{
                key: "init", value: function () {
                    var n = this;
                    this.types.map((function (e) {
                        return "fps" !== e && n["init".concat(e, "Checker")](), e
                    }))
                }
            }, {
                key: "initloadingChecker", value: function () {
                    var n = this, e = 0, t = 0, a = !1;
                    this.loadingChecker = setInterval((function () {
                        n.enableloadingChecker && (t = n.player.video.currentTime, a || t !== e || n.player.video.paused || (n.player.container.classList.add("dplayer-loading"), a = !0), a && t > e && !n.player.video.paused && (n.player.container.classList.remove("dplayer-loading"), a = !1), e = t)
                    }), 100)
                }
            }, {
                key: "initfpsChecker", value: function () {
                    var n = this;
                    window.requestAnimationFrame((function () {
                        if (n.enablefpsChecker) if (n.initfpsChecker(), n.fpsStart) {
                            n.fpsIndex++;
                            var e = new Date;
                            e - n.fpsStart > 1e3 && (n.player.infoPanel.fps(n.fpsIndex / (e - n.fpsStart) * 1e3), n.fpsStart = new Date, n.fpsIndex = 0)
                        } else n.fpsStart = new Date, n.fpsIndex = 0; else n.fpsStart = 0, n.fpsIndex = 0
                    }))
                }
            }, {
                key: "initinfoChecker", value: function () {
                    var n = this;
                    this.infoChecker = setInterval((function () {
                        n.enableinfoChecker && n.player.infoPanel.update()
                    }), 1e3)
                }
            }, {
                key: "enable", value: function (n) {
                    this["enable".concat(n, "Checker")] = !0, "fps" === n && this.initfpsChecker()
                }
            }, {
                key: "disable", value: function (n) {
                    this["enable".concat(n, "Checker")] = !1
                }
            }, {
                key: "destroy", value: function () {
                    var n = this;
                    this.types.map((function (e) {
                        return n["enable".concat(e, "Checker")] = !1, n["".concat(e, "Checker")] && clearInterval(n["".concat(e, "Checker")]), e
                    }))
                }
            }]) && Zn(e.prototype, t), Object.defineProperty(e, "prototype", {writable: !1}), n
        }();
        const Vn = Xn;

        function Jn(n, e) {
            for (var t = 0; t < e.length; t++) {
                var a = e[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, a.key, a)
            }
        }

        const Gn = function () {
            function n(e) {
                var t = this;
                !function (n, e) {
                    if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), this.container = e, this.container.addEventListener("animationend", (function () {
                    t.container.classList.remove("dplayer-bezel-transition")
                }))
            }

            var e, t;
            return e = n, (t = [{
                key: "switch", value: function (n) {
                    this.container.innerHTML = n, this.container.classList.add("dplayer-bezel-transition")
                }
            }]) && Jn(e.prototype, t), Object.defineProperty(e, "prototype", {writable: !1}), n
        }();

        function $n(n, e) {
            for (var t = 0; t < e.length; t++) {
                var a = e[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, a.key, a)
            }
        }

        var ne = function () {
            function n(e) {
                !function (n, e) {
                    if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), this.container = e.container, this.barWidth = e.barWidth, this.container.style.backgroundImage = "url('".concat(e.url, "')"), this.events = e.events
            }

            var e, t;
            return e = n, (t = [{
                key: "resize", value: function (n, e, t) {
                    this.container.style.width = "".concat(n, "px"), this.container.style.height = "".concat(e, "px"), this.container.style.top = "".concat(2 - e, "px"), this.barWidth = t
                }
            }, {
                key: "show", value: function () {
                    this.container.style.display = "block", this.events && this.events.trigger("thumbnails_show")
                }
            }, {
                key: "move", value: function (n) {
                    this.container.style.backgroundPosition = "-".concat(160 * (Math.ceil(n / this.barWidth * 100) - 1), "px 0"), this.container.style.left = "".concat(Math.min(Math.max(n - this.container.offsetWidth / 2, -10), this.barWidth - 150), "px")
                }
            }, {
                key: "hide", value: function () {
                    this.container.style.display = "none", this.events && this.events.trigger("thumbnails_hide")
                }
            }]) && $n(e.prototype, t), Object.defineProperty(e, "prototype", {writable: !1}), n
        }();
        const ee = ne;
        var te = function (n, e) {
            return te = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (n, e) {
                n.__proto__ = e
            } || function (n, e) {
                for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t])
            }, te(n, e)
        };

        function ae(n, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function t() {
                this.constructor = n
            }

            te(n, e), n.prototype = null === e ? Object.create(e) : (t.prototype = e.prototype, new t)
        }

        function oe(n) {
            var e = "function" == typeof Symbol && Symbol.iterator, t = e && n[e], a = 0;
            if (t) return t.call(n);
            if (n && "number" == typeof n.length) return {
                next: function () {
                    return n && a >= n.length && (n = void 0), {value: n && n[a++], done: !n}
                }
            };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }

        function re(n, e) {
            var t = "function" == typeof Symbol && n[Symbol.iterator];
            if (!t) return n;
            var a, o, r = t.call(n), i = [];
            try {
                for (; (void 0 === e || e-- > 0) && !(a = r.next()).done;) i.push(a.value)
            } catch (n) {
                o = {error: n}
            } finally {
                try {
                    a && !a.done && (t = r.return) && t.call(r)
                } finally {
                    if (o) throw o.error
                }
            }
            return i
        }

        function ie(n, e, t) {
            if (t || 2 === arguments.length) for (var a, o = 0, r = e.length; o < r; o++) !a && o in e || (a || (a = Array.prototype.slice.call(e, 0, o)), a[o] = e[o]);
            return n.concat(a || Array.prototype.slice.call(e))
        }

        function le(n) {
            return "function" == typeof n
        }

        function se(n) {
            var e = n((function (n) {
                Error.call(n), n.stack = (new Error).stack
            }));
            return e.prototype = Object.create(Error.prototype), e.prototype.constructor = e, e
        }

        Object.create, Object.create;
        var pe = se((function (n) {
            return function (e) {
                n(this), this.message = e ? e.length + " errors occurred during unsubscription:\n" + e.map((function (n, e) {
                    return e + 1 + ") " + n.toString()
                })).join("") : "", this.name = "UnsubscriptionError", this.errors = e
            }
        }));

        function de(n, e) {
            if (n) {
                var t = n.indexOf(e);
                0 <= t && n.splice(t, 1)
            }
        }

        var Ae = function () {
            function n(n) {
                this.initialTeardown = n, this.closed = !1, this._parentage = null, this._finalizers = null
            }

            var e;
            return n.prototype.unsubscribe = function () {
                var n, e, t, a, o;
                if (!this.closed) {
                    this.closed = !0;
                    var r = this._parentage;
                    if (r) if (this._parentage = null, Array.isArray(r)) try {
                        for (var i = oe(r), l = i.next(); !l.done; l = i.next()) l.value.remove(this)
                    } catch (e) {
                        n = {error: e}
                    } finally {
                        try {
                            l && !l.done && (e = i.return) && e.call(i)
                        } finally {
                            if (n) throw n.error
                        }
                    } else r.remove(this);
                    var s = this.initialTeardown;
                    if (le(s)) try {
                        s()
                    } catch (n) {
                        o = n instanceof pe ? n.errors : [n]
                    }
                    var p = this._finalizers;
                    if (p) {
                        this._finalizers = null;
                        try {
                            for (var d = oe(p), A = d.next(); !A.done; A = d.next()) {
                                var c = A.value;
                                try {
                                    ye(c)
                                } catch (n) {
                                    o = null != o ? o : [], n instanceof pe ? o = ie(ie([], re(o)), re(n.errors)) : o.push(n)
                                }
                            }
                        } catch (n) {
                            t = {error: n}
                        } finally {
                            try {
                                A && !A.done && (a = d.return) && a.call(d)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                    }
                    if (o) throw new pe(o)
                }
            }, n.prototype.add = function (e) {
                var t;
                if (e && e !== this) if (this.closed) ye(e); else {
                    if (e instanceof n) {
                        if (e.closed || e._hasParent(this)) return;
                        e._addParent(this)
                    }
                    (this._finalizers = null !== (t = this._finalizers) && void 0 !== t ? t : []).push(e)
                }
            }, n.prototype._hasParent = function (n) {
                var e = this._parentage;
                return e === n || Array.isArray(e) && e.includes(n)
            }, n.prototype._addParent = function (n) {
                var e = this._parentage;
                this._parentage = Array.isArray(e) ? (e.push(n), e) : e ? [e, n] : n
            }, n.prototype._removeParent = function (n) {
                var e = this._parentage;
                e === n ? this._parentage = null : Array.isArray(e) && de(e, n)
            }, n.prototype.remove = function (e) {
                var t = this._finalizers;
                t && de(t, e), e instanceof n && e._removeParent(this)
            }, n.EMPTY = ((e = new n).closed = !0, e), n
        }(), ce = Ae.EMPTY;

        function ue(n) {
            return n instanceof Ae || n && "closed" in n && le(n.remove) && le(n.add) && le(n.unsubscribe)
        }

        function ye(n) {
            le(n) ? n() : n.unsubscribe()
        }

        var he = null, me = null, fe = void 0, be = !1, ge = !1, ve = {
            setTimeout: function (n) {
                function e(e, t) {
                    return n.apply(this, arguments)
                }

                return e.toString = function () {
                    return n.toString()
                }, e
            }((function (n, e) {
                for (var t = [], a = 2; a < arguments.length; a++) t[a - 2] = arguments[a];
                var o = ve.delegate;
                return (null == o ? void 0 : o.setTimeout) ? o.setTimeout.apply(o, ie([n, e], re(t))) : setTimeout.apply(void 0, ie([n, e], re(t)))
            })), clearTimeout: function (n) {
                function e(e) {
                    return n.apply(this, arguments)
                }

                return e.toString = function () {
                    return n.toString()
                }, e
            }((function (n) {
                var e = ve.delegate;
                return ((null == e ? void 0 : e.clearTimeout) || clearTimeout)(n)
            })), delegate: void 0
        };

        function Ee() {
        }

        var xe = Ce("C", void 0, void 0);

        function Ce(n, e, t) {
            return {kind: n, value: e, error: t}
        }

        var ke = null;

        function we(n) {
            if (be) {
                var e = !ke;
                if (e && (ke = {errorThrown: !1, error: null}), n(), e) {
                    var t = ke, a = t.errorThrown, o = t.error;
                    if (ke = null, a) throw o
                }
            } else n()
        }

        var Be = function (n) {
            function e(e) {
                var t = n.call(this) || this;
                return t.isStopped = !1, e ? (t.destination = e, ue(e) && e.add(t)) : t.destination = Te, t
            }

            return ae(e, n), e.create = function (n, e, t) {
                return new ze(n, e, t)
            }, e.prototype.next = function (n) {
                this.isStopped ? De(function (n) {
                    return Ce("N", n, void 0)
                }(n), this) : this._next(n)
            }, e.prototype.error = function (n) {
                this.isStopped ? De(Ce("E", void 0, n), this) : (this.isStopped = !0, this._error(n))
            }, e.prototype.complete = function () {
                this.isStopped ? De(xe, this) : (this.isStopped = !0, this._complete())
            }, e.prototype.unsubscribe = function () {
                this.closed || (this.isStopped = !0, n.prototype.unsubscribe.call(this), this.destination = null)
            }, e.prototype._next = function (n) {
                this.destination.next(n)
            }, e.prototype._error = function (n) {
                try {
                    this.destination.error(n)
                } finally {
                    this.unsubscribe()
                }
            }, e.prototype._complete = function () {
                try {
                    this.destination.complete()
                } finally {
                    this.unsubscribe()
                }
            }, e
        }(Ae), Ie = Function.prototype.bind;

        function Se(n, e) {
            return Ie.call(n, e)
        }

        var Le = function () {
            function n(n) {
                this.partialObserver = n
            }

            return n.prototype.next = function (n) {
                var e = this.partialObserver;
                if (e.next) try {
                    e.next(n)
                } catch (n) {
                    qe(n)
                }
            }, n.prototype.error = function (n) {
                var e = this.partialObserver;
                if (e.error) try {
                    e.error(n)
                } catch (n) {
                    qe(n)
                } else qe(n)
            }, n.prototype.complete = function () {
                var n = this.partialObserver;
                if (n.complete) try {
                    n.complete()
                } catch (n) {
                    qe(n)
                }
            }, n
        }(), ze = function (n) {
            function e(e, t, a) {
                var o, r, i = n.call(this) || this;
                return le(e) || !e ? o = {
                    next: null != e ? e : void 0,
                    error: null != t ? t : void 0,
                    complete: null != a ? a : void 0
                } : i && ge ? ((r = Object.create(e)).unsubscribe = function () {
                    return i.unsubscribe()
                }, o = {
                    next: e.next && Se(e.next, r),
                    error: e.error && Se(e.error, r),
                    complete: e.complete && Se(e.complete, r)
                }) : o = e, i.destination = new Le(o), i
            }

            return ae(e, n), e
        }(Be);

        function qe(n) {
            var e;
            be ? (e = n, be && ke && (ke.errorThrown = !0, ke.error = e)) : function (n) {
                ve.setTimeout((function () {
                    if (!he) throw n;
                    he(n)
                }))
            }(n)
        }

        function De(n, e) {
            var t = me;
            t && ve.setTimeout((function () {
                return t(n, e)
            }))
        }

        var Te = {
            closed: !0, next: Ee, error: function (n) {
                throw n
            }, complete: Ee
        }, Oe = "function" == typeof Symbol && Symbol.observable || "@@observable";

        function Ye(n) {
            return n
        }

        function Ne(n) {
            return 0 === n.length ? Ye : 1 === n.length ? n[0] : function (e) {
                return n.reduce((function (n, e) {
                    return e(n)
                }), e)
            }
        }

        var Me = function () {
            function n(n) {
                n && (this._subscribe = n)
            }

            return n.prototype.lift = function (e) {
                var t = new n;
                return t.source = this, t.operator = e, t
            }, n.prototype.subscribe = function (n, e, t) {
                var a, o = this, r = (a = n) && a instanceof Be || function (n) {
                    return n && le(n.next) && le(n.error) && le(n.complete)
                }(a) && ue(a) ? n : new ze(n, e, t);
                return we((function () {
                    var n = o, e = n.operator, t = n.source;
                    r.add(e ? e.call(r, t) : t ? o._subscribe(r) : o._trySubscribe(r))
                })), r
            }, n.prototype._trySubscribe = function (n) {
                try {
                    return this._subscribe(n)
                } catch (e) {
                    n.error(e)
                }
            }, n.prototype.forEach = function (n, e) {
                var t = this;
                return new (e = je(e))((function (e, a) {
                    var o = new ze({
                        next: function (e) {
                            try {
                                n(e)
                            } catch (n) {
                                a(n), o.unsubscribe()
                            }
                        }, error: a, complete: e
                    });
                    t.subscribe(o)
                }))
            }, n.prototype._subscribe = function (n) {
                var e;
                return null === (e = this.source) || void 0 === e ? void 0 : e.subscribe(n)
            }, n.prototype[Oe] = function () {
                return this
            }, n.prototype.pipe = function () {
                for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
                return Ne(n)(this)
            }, n.prototype.toPromise = function (n) {
                var e = this;
                return new (n = je(n))((function (n, t) {
                    var a;
                    e.subscribe((function (n) {
                        return a = n
                    }), (function (n) {
                        return t(n)
                    }), (function () {
                        return n(a)
                    }))
                }))
            }, n.create = function (e) {
                return new n(e)
            }, n
        }();

        function je(n) {
            var e;
            return null !== (e = null != n ? n : fe) && void 0 !== e ? e : Promise
        }

        var Re, _e = se((function (n) {
            return function () {
                n(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed"
            }
        })), Ue = function (n) {
            function e() {
                var e = n.call(this) || this;
                return e.closed = !1, e.currentObservers = null, e.observers = [], e.isStopped = !1, e.hasError = !1, e.thrownError = null, e
            }

            return ae(e, n), e.prototype.lift = function (n) {
                var e = new We(this, this);
                return e.operator = n, e
            }, e.prototype._throwIfClosed = function () {
                if (this.closed) throw new _e
            }, e.prototype.next = function (n) {
                var e = this;
                we((function () {
                    var t, a;
                    if (e._throwIfClosed(), !e.isStopped) {
                        e.currentObservers || (e.currentObservers = Array.from(e.observers));
                        try {
                            for (var o = oe(e.currentObservers), r = o.next(); !r.done; r = o.next()) r.value.next(n)
                        } catch (n) {
                            t = {error: n}
                        } finally {
                            try {
                                r && !r.done && (a = o.return) && a.call(o)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                    }
                }))
            }, e.prototype.error = function (n) {
                var e = this;
                we((function () {
                    if (e._throwIfClosed(), !e.isStopped) {
                        e.hasError = e.isStopped = !0, e.thrownError = n;
                        for (var t = e.observers; t.length;) t.shift().error(n)
                    }
                }))
            }, e.prototype.complete = function () {
                var n = this;
                we((function () {
                    if (n._throwIfClosed(), !n.isStopped) {
                        n.isStopped = !0;
                        for (var e = n.observers; e.length;) e.shift().complete()
                    }
                }))
            }, e.prototype.unsubscribe = function () {
                this.isStopped = this.closed = !0, this.observers = this.currentObservers = null
            }, Object.defineProperty(e.prototype, "observed", {
                get: function () {
                    var n;
                    return (null === (n = this.observers) || void 0 === n ? void 0 : n.length) > 0
                }, enumerable: !1, configurable: !0
            }), e.prototype._trySubscribe = function (e) {
                return this._throwIfClosed(), n.prototype._trySubscribe.call(this, e)
            }, e.prototype._subscribe = function (n) {
                return this._throwIfClosed(), this._checkFinalizedStatuses(n), this._innerSubscribe(n)
            }, e.prototype._innerSubscribe = function (n) {
                var e = this, t = this, a = t.hasError, o = t.isStopped, r = t.observers;
                return a || o ? ce : (this.currentObservers = null, r.push(n), new Ae((function () {
                    e.currentObservers = null, de(r, n)
                })))
            }, e.prototype._checkFinalizedStatuses = function (n) {
                var e = this, t = e.hasError, a = e.thrownError, o = e.isStopped;
                t ? n.error(a) : o && n.complete()
            }, e.prototype.asObservable = function () {
                var n = new Me;
                return n.source = this, n
            }, e.create = function (n, e) {
                return new We(n, e)
            }, e
        }(Me), We = function (n) {
            function e(e, t) {
                var a = n.call(this) || this;
                return a.destination = e, a.source = t, a
            }

            return ae(e, n), e.prototype.next = function (n) {
                var e, t;
                null === (t = null === (e = this.destination) || void 0 === e ? void 0 : e.next) || void 0 === t || t.call(e, n)
            }, e.prototype.error = function (n) {
                var e, t;
                null === (t = null === (e = this.destination) || void 0 === e ? void 0 : e.error) || void 0 === t || t.call(e, n)
            }, e.prototype.complete = function () {
                var n, e;
                null === (e = null === (n = this.destination) || void 0 === n ? void 0 : n.complete) || void 0 === e || e.call(n)
            }, e.prototype._subscribe = function (n) {
                var e, t;
                return null !== (t = null === (e = this.source) || void 0 === e ? void 0 : e.subscribe(n)) && void 0 !== t ? t : ce
            }, e
        }(Ue);

        function Pe(n, e) {
            for (var t = 0; t < e.length; t++) {
                var a = e[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, a.key, a)
            }
        }

        var Fe = !0, Qe = !1, He = function () {
            function n(e) {
                !function (n, e) {
                    if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), this.player = e, this.autoHideTimer = 0, z.isMobile || (this.setAutoHideHandler = this.setAutoHide.bind(this), this.player.container.addEventListener("mousemove", this.setAutoHideHandler), this.player.container.addEventListener("click", this.setAutoHideHandler), this.player.on("play", this.setAutoHideHandler), this.player.on("pause", this.setAutoHideHandler)), this.initPlayButton(), this.initThumbnails(), this.initPlayedBar(), this.initFullButton(), this.initQualityButton(), this.initScreenshotButton(), this.player.options.subtitle && "string" == typeof this.player.options.subtitle.url && this.initSubtitleButton(), this.initHighlights(), this.initAirplayButton(), this.initChromecastButton(), z.isMobile || this.initVolumeButton()
            }

            var e, t;
            return e = n, (t = [{
                key: "initPlayButton", value: function () {
                    var n = this;
                    this.player.template.playButton.addEventListener("click", (function () {
                        n.player.toggle()
                    })), this.player.template.mobilePlayButton.addEventListener("click", (function () {
                        n.player.toggle()
                    })), z.isMobile ? (this.player.template.videoWrap.addEventListener("click", (function () {
                        n.toggle()
                    })), this.player.template.controllerMask.addEventListener("click", (function () {
                        n.toggle()
                    }))) : this.player.options.preventClickToggle || (this.player.template.videoWrap.addEventListener("click", (function () {
                        n.player.toggle()
                    })), this.player.template.controllerMask.addEventListener("click", (function () {
                        n.player.toggle()
                    })))
                }
            }, {
                key: "initHighlights", value: function () {
                    var n = this;
                    this.player.on("durationchange", (function () {
                        if (1 !== n.player.video.duration && n.player.video.duration !== 1 / 0 && n.player.options.highlight) {
                            var e = n.player.template.playedBarWrap.querySelectorAll(".dplayer-highlight");
                            [].slice.call(e, 0).forEach((function (e) {
                                n.player.template.playedBarWrap.removeChild(e)
                            }));
                            for (var t = 0; t < n.player.options.highlight.length; t++) if (n.player.options.highlight[t].text && n.player.options.highlight[t].time) {
                                var a = document.createElement("div");
                                a.classList.add("dplayer-highlight"), a.style.left = n.player.options.highlight[t].time / n.player.video.duration * 100 + "%", a.innerHTML = '<span class="dplayer-highlight-text">' + n.player.options.highlight[t].text + "</span>", n.player.template.playedBarWrap.insertBefore(a, n.player.template.playedBarTime)
                            }
                        }
                    }))
                }
            }, {
                key: "initThumbnails", value: function () {
                    var n = this;
                    this.player.options.video.thumbnails && (this.thumbnails = new ee({
                        container: this.player.template.barPreview,
                        barWidth: this.player.template.barWrap.offsetWidth,
                        url: this.player.options.video.thumbnails,
                        events: this.player.events
                    }), this.player.on("loadedmetadata", (function () {
                        n.thumbnails.resize(160, n.player.video.videoHeight / n.player.video.videoWidth * 160, n.player.template.barWrap.offsetWidth)
                    })))
                }
            }, {
                key: "initPlayedBar", value: function () {
                    var n = this, e = function (e) {
                        var t = ((e.clientX || e.changedTouches[0].clientX) - z.getBoundingClientRectViewLeft(n.player.template.playedBarWrap)) / n.player.template.playedBarWrap.clientWidth;
                        t = Math.max(t, 0), t = Math.min(t, 1), n.player.bar.set("played", t, "width"), n.player.template.ptime.innerHTML = z.secondToTime(t * n.player.video.duration)
                    }, t = function t(a) {
                        document.removeEventListener(z.nameMap.dragEnd, t), document.removeEventListener(z.nameMap.dragMove, e);
                        var o = ((a.clientX || a.changedTouches[0].clientX) - z.getBoundingClientRectViewLeft(n.player.template.playedBarWrap)) / n.player.template.playedBarWrap.clientWidth;
                        o = Math.max(o, 0), o = Math.min(o, 1), n.player.bar.set("played", o, "width"), n.player.seek(n.player.bar.get("played") * n.player.video.duration), n.player.timer.enable("progress")
                    };
                    this.player.template.playedBarWrap.addEventListener(z.nameMap.dragStart, (function () {
                        n.player.timer.disable("progress"), document.addEventListener(z.nameMap.dragMove, e), document.addEventListener(z.nameMap.dragEnd, t)
                    })), this.player.template.playedBarWrap.addEventListener(z.nameMap.dragMove, (function (e) {
                        if (n.player.video.duration) {
                            var t = n.player.template.playedBarWrap.getBoundingClientRect().left,
                                a = (e.clientX || e.changedTouches[0].clientX) - t;
                            if (a < 0 || a > n.player.template.playedBarWrap.offsetWidth) return;
                            var o = n.player.video.duration * (a / n.player.template.playedBarWrap.offsetWidth);
                            z.isMobile && n.thumbnails && n.thumbnails.show(), n.thumbnails && n.thumbnails.move(a), n.player.template.playedBarTime.style.left = "".concat(a - (o >= 3600 ? 25 : 20), "px"), n.player.template.playedBarTime.innerText = z.secondToTime(o), n.player.template.playedBarTime.classList.remove("hidden")
                        }
                    })), this.player.template.playedBarWrap.addEventListener(z.nameMap.dragEnd, (function () {
                        z.isMobile && n.thumbnails && n.thumbnails.hide()
                    })), z.isMobile || (this.player.template.playedBarWrap.addEventListener("mouseenter", (function () {
                        n.player.video.duration && (n.thumbnails && n.thumbnails.show(), n.player.template.playedBarTime.classList.remove("hidden"))
                    })), this.player.template.playedBarWrap.addEventListener("mouseleave", (function () {
                        n.player.video.duration && (n.thumbnails && n.thumbnails.hide(), n.player.template.playedBarTime.classList.add("hidden"))
                    })))
                }
            }, {
                key: "initFullButton", value: function () {
                    var n = this;
                    this.player.template.browserFullButton.addEventListener("click", (function () {
                        n.player.fullScreen.toggle("browser")
                    })), this.player.template.webFullButton.addEventListener("click", (function () {
                        n.player.fullScreen.toggle("web")
                    }))
                }
            }, {
                key: "initVolumeButton", value: function () {
                    var n = this, e = function (e) {
                        var t = e || window.event,
                            a = ((t.clientX || t.changedTouches[0].clientX) - z.getBoundingClientRectViewLeft(n.player.template.volumeBarWrap) - 5.5) / 35;
                        n.player.volume(a)
                    }, t = function t() {
                        document.removeEventListener(z.nameMap.dragEnd, t), document.removeEventListener(z.nameMap.dragMove, e), n.player.template.volumeButton.classList.remove("dplayer-volume-active")
                    };
                    this.player.template.volumeBarWrapWrap.addEventListener("click", (function (e) {
                        var t = e || window.event,
                            a = ((t.clientX || t.changedTouches[0].clientX) - z.getBoundingClientRectViewLeft(n.player.template.volumeBarWrap) - 5.5) / 35;
                        n.player.volume(a)
                    })), this.player.template.volumeBarWrapWrap.addEventListener(z.nameMap.dragStart, (function () {
                        document.addEventListener(z.nameMap.dragMove, e), document.addEventListener(z.nameMap.dragEnd, t), n.player.template.volumeButton.classList.add("dplayer-volume-active")
                    })), this.player.template.volumeButtonIcon.addEventListener("click", (function () {
                        n.player.video.muted ? (n.player.video.muted = !1, n.player.switchVolumeIcon(), n.player.bar.set("volume", n.player.volume(), "width")) : (n.player.video.muted = !0, n.player.template.volumeIcon.innerHTML = En.volumeOff, n.player.bar.set("volume", 0, "width"))
                    }))
                }
            }, {
                key: "initQualityButton", value: function () {
                    var n = this;
                    this.player.options.video.quality && this.player.template.qualityList.addEventListener("click", (function (e) {
                        e.target.classList.contains("dplayer-quality-item") && n.player.switchQuality(e.target.dataset.index)
                    }))
                }
            }, {
                key: "initScreenshotButton", value: function () {
                    var n = this;
                    this.player.options.screenshot && this.player.template.camareButton.addEventListener("click", (function () {
                        var e, t = document.createElement("canvas");
                        t.width = n.player.video.videoWidth, t.height = n.player.video.videoHeight, t.getContext("2d").drawImage(n.player.video, 0, 0, t.width, t.height), t.toBlob((function (t) {
                            e = URL.createObjectURL(t);
                            var a = document.createElement("a");
                            a.href = e, a.download = "DPlayer.png", a.style.display = "none", document.body.appendChild(a), a.click(), document.body.removeChild(a), URL.revokeObjectURL(e), n.player.events.trigger("screenshot", e)
                        }))
                    }))
                }
            }, {
                key: "initAirplayButton", value: function () {
                    this.player.options.airplay && (window.WebKitPlaybackTargetAvailabilityEvent ? this.player.video.addEventListener("webkitplaybacktargetavailabilitychanged", function (n) {
                        "available" === n.availability ? this.template.airplayButton.disable = !1 : this.template.airplayButton.disable = !0, this.template.airplayButton.addEventListener("click", function () {
                            this.video.webkitShowPlaybackTargetPicker()
                        }.bind(this))
                    }.bind(this.player)) : this.player.template.airplayButton.style.display = "none")
                }
            }, {
                key: "initChromecast", value: function () {
                    var n = window.document.createElement("script");
                    n.setAttribute("type", "text/javascript"), n.setAttribute("src", "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"), window.document.body.appendChild(n), window.__onGCastApiAvailable = function (n) {
                        if (n) {
                            var e = new (Re = window.chrome.cast).SessionRequest(Re.media.DEFAULT_MEDIA_RECEIVER_APP_ID),
                                t = new Re.ApiConfig(e, (function () {
                                }), (function (n) {
                                    n === Re.ReceiverAvailability.AVAILABLE && console.log("chromecast: ", n)
                                }));
                            Re.initialize(t, (function () {
                            }))
                        }
                    }
                }
            }, {
                key: "initChromecastButton", value: function () {
                    var n = this;
                    if (this.player.options.chromecast) {
                        Fe && (Fe = !1, this.initChromecast());
                        var e = function (e, t) {
                            n.currentMedia = t
                        }, t = function (n) {
                            console.error("Error launching media", n)
                        };
                        this.player.template.chromecastButton.addEventListener("click", (function () {
                            var a;
                            Qe ? (Qe = !1, n.currentMedia.stop(), n.session.stop(), n.initChromecast()) : (Qe = !0, a = new Ue, Re.requestSession((function (o) {
                                var r, i, l;
                                n.session = o, a.next("CONNECTED"), r = n.player.options.video.url, i = new Re.media.MediaInfo(r), l = new Re.media.LoadRequest(i), n.session ? n.session.loadMedia(l, e.bind(n, "loadMedia"), t).play() : window.open(r)
                            }), (function (e) {
                                "cancel" === e.code ? (n.session = void 0, a.next("CANCEL")) : console.error("Error selecting a cast device", e)
                            })))
                        }))
                    }
                }
            }, {
                key: "initSubtitleButton", value: function () {
                    var n = this;
                    this.player.events.on("subtitle_show", (function () {
                        n.player.template.subtitleButton.dataset.balloon = n.player.tran("hide-subs"), n.player.template.subtitleButtonInner.style.opacity = "", n.player.user.set("subtitle", 1)
                    })), this.player.events.on("subtitle_hide", (function () {
                        n.player.template.subtitleButton.dataset.balloon = n.player.tran("show-subs"), n.player.template.subtitleButtonInner.style.opacity = "0.4", n.player.user.set("subtitle", 0)
                    })), this.player.template.subtitleButton.addEventListener("click", (function () {
                        n.player.subtitle.toggle()
                    }))
                }
            }, {
                key: "setAutoHide", value: function () {
                    var n = this;
                    this.show(), clearTimeout(this.autoHideTimer), this.autoHideTimer = setTimeout((function () {
                        !n.player.video.played.length || n.player.paused || n.disableAutoHide || n.hide()
                    }), 3e3)
                }
            }, {
                key: "show", value: function () {
                    this.player.container.classList.remove("dplayer-hide-controller")
                }
            }, {
                key: "hide", value: function () {
                    this.player.container.classList.add("dplayer-hide-controller"), this.player.setting.hide(), this.player.comment && this.player.comment.hide()
                }
            }, {
                key: "isShow", value: function () {
                    return !this.player.container.classList.contains("dplayer-hide-controller")
                }
            }, {
                key: "toggle", value: function () {
                    this.isShow() ? this.hide() : this.show()
                }
            }, {
                key: "destroy", value: function () {
                    z.isMobile || (this.player.container.removeEventListener("mousemove", this.setAutoHideHandler), this.player.container.removeEventListener("click", this.setAutoHideHandler)), clearTimeout(this.autoHideTimer)
                }
            }]) && Pe(e.prototype, t), Object.defineProperty(e, "prototype", {writable: !1}), n
        }();
        const Ke = He;

        function Ze(n, e) {
            for (var t = 0; t < e.length; t++) {
                var a = e[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, a.key, a)
            }
        }

        var Xe = function () {
            function n(e) {
                var t = this;
                !function (n, e) {
                    if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), this.player = e, this.player.template.mask.addEventListener("click", (function () {
                    t.hide()
                })), this.player.template.settingButton.addEventListener("click", (function () {
                    t.show()
                })), this.loop = this.player.options.loop, this.player.template.loopToggle.checked = this.loop, this.player.template.loop.addEventListener("click", (function () {
                    t.player.template.loopToggle.checked = !t.player.template.loopToggle.checked, t.player.template.loopToggle.checked ? t.loop = !0 : t.loop = !1, t.hide()
                })), this.showDanmaku = this.player.user.get("danmaku"), this.showDanmaku || this.player.danmaku && this.player.danmaku.hide(), this.player.template.showDanmakuToggle.checked = this.showDanmaku, this.player.template.showDanmaku.addEventListener("click", (function () {
                    t.player.template.showDanmakuToggle.checked = !t.player.template.showDanmakuToggle.checked, t.player.template.showDanmakuToggle.checked ? (t.showDanmaku = !0, t.player.danmaku.show()) : (t.showDanmaku = !1, t.player.danmaku.hide()), t.player.user.set("danmaku", t.showDanmaku ? 1 : 0), t.hide()
                })), this.unlimitDanmaku = this.player.user.get("unlimited"), this.player.template.unlimitDanmakuToggle.checked = this.unlimitDanmaku, this.player.template.unlimitDanmaku.addEventListener("click", (function () {
                    t.player.template.unlimitDanmakuToggle.checked = !t.player.template.unlimitDanmakuToggle.checked, t.player.template.unlimitDanmakuToggle.checked ? (t.unlimitDanmaku = !0, t.player.danmaku.unlimit(!0)) : (t.unlimitDanmaku = !1, t.player.danmaku.unlimit(!1)), t.player.user.set("unlimited", t.unlimitDanmaku ? 1 : 0), t.hide()
                })), this.player.template.speed.addEventListener("click", (function () {
                    t.player.template.settingBox.classList.add("dplayer-setting-box-narrow"), t.player.template.settingBox.classList.add("dplayer-setting-box-speed")
                }));
                for (var a = function (n) {
                    t.player.template.speedItem[n].addEventListener("click", (function () {
                        t.player.speed(t.player.template.speedItem[n].dataset.speed), t.hide()
                    }))
                }, o = 0; o < this.player.template.speedItem.length; o++) a(o);
                if (this.player.danmaku) {
                    this.player.on("danmaku_opacity", (function (n) {
                        t.player.bar.set("danmaku", n, "width"), t.player.user.set("opacity", n)
                    })), this.player.danmaku.opacity(this.player.user.get("opacity"));
                    var r = function (n) {
                        var e = n || window.event,
                            a = ((e.clientX || e.changedTouches[0].clientX) - z.getBoundingClientRectViewLeft(t.player.template.danmakuOpacityBarWrap)) / 130;
                        a = Math.max(a, 0), a = Math.min(a, 1), t.player.danmaku.opacity(a)
                    }, i = function n() {
                        document.removeEventListener(z.nameMap.dragEnd, n), document.removeEventListener(z.nameMap.dragMove, r), t.player.template.danmakuOpacityBox.classList.remove("dplayer-setting-danmaku-active")
                    };
                    this.player.template.danmakuOpacityBarWrapWrap.addEventListener("click", (function (n) {
                        var e = n || window.event,
                            a = ((e.clientX || e.changedTouches[0].clientX) - z.getBoundingClientRectViewLeft(t.player.template.danmakuOpacityBarWrap)) / 130;
                        a = Math.max(a, 0), a = Math.min(a, 1), t.player.danmaku.opacity(a)
                    })), this.player.template.danmakuOpacityBarWrapWrap.addEventListener(z.nameMap.dragStart, (function () {
                        document.addEventListener(z.nameMap.dragMove, r), document.addEventListener(z.nameMap.dragEnd, i), t.player.template.danmakuOpacityBox.classList.add("dplayer-setting-danmaku-active")
                    }))
                }
            }

            var e, t;
            return e = n, (t = [{
                key: "hide", value: function () {
                    var n = this;
                    this.player.template.settingBox.classList.remove("dplayer-setting-box-open"), this.player.template.mask.classList.remove("dplayer-mask-show"), setTimeout((function () {
                        n.player.template.settingBox.classList.remove("dplayer-setting-box-narrow"), n.player.template.settingBox.classList.remove("dplayer-setting-box-speed")
                    }), 300), this.player.controller.disableAutoHide = !1
                }
            }, {
                key: "show", value: function () {
                    this.player.template.settingBox.classList.add("dplayer-setting-box-open"), this.player.template.mask.classList.add("dplayer-mask-show"), this.player.controller.disableAutoHide = !0
                }
            }]) && Ze(e.prototype, t), Object.defineProperty(e, "prototype", {writable: !1}), n
        }();
        const Ve = Xe;

        function Je(n, e) {
            for (var t = 0; t < e.length; t++) {
                var a = e[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, a.key, a)
            }
        }

        var Ge = function () {
            function n(e) {
                var t = this;
                !function (n, e) {
                    if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), this.player = e, this.player.template.mask.addEventListener("click", (function () {
                    t.hide()
                })), this.player.template.commentButton.addEventListener("click", (function () {
                    t.show()
                })), this.player.template.commentSettingButton.addEventListener("click", (function () {
                    t.toggleSetting()
                })), this.player.template.commentColorSettingBox.addEventListener("click", (function () {
                    if (t.player.template.commentColorSettingBox.querySelector("input:checked+span")) {
                        var n = t.player.template.commentColorSettingBox.querySelector("input:checked").value;
                        t.player.template.commentSettingFill.style.fill = n, t.player.template.commentInput.style.color = n, t.player.template.commentSendFill.style.fill = n
                    }
                })), this.player.template.commentInput.addEventListener("click", (function () {
                    t.hideSetting()
                })), this.player.template.commentInput.addEventListener("keydown", (function (n) {
                    13 === (n || window.event).keyCode && t.send()
                })), this.player.template.commentSendButton.addEventListener("click", (function () {
                    t.send()
                }))
            }

            var e, t;
            return e = n, (t = [{
                key: "show", value: function () {
                    this.player.controller.disableAutoHide = !0, this.player.template.controller.classList.add("dplayer-controller-comment"), this.player.template.mask.classList.add("dplayer-mask-show"), this.player.container.classList.add("dplayer-show-controller"), this.player.template.commentInput.focus()
                }
            }, {
                key: "hide", value: function () {
                    this.player.template.controller.classList.remove("dplayer-controller-comment"), this.player.template.mask.classList.remove("dplayer-mask-show"), this.player.container.classList.remove("dplayer-show-controller"), this.player.controller.disableAutoHide = !1, this.hideSetting()
                }
            }, {
                key: "showSetting", value: function () {
                    this.player.template.commentSettingBox.classList.add("dplayer-comment-setting-open")
                }
            }, {
                key: "hideSetting", value: function () {
                    this.player.template.commentSettingBox.classList.remove("dplayer-comment-setting-open")
                }
            }, {
                key: "toggleSetting", value: function () {
                    this.player.template.commentSettingBox.classList.contains("dplayer-comment-setting-open") ? this.hideSetting() : this.showSetting()
                }
            }, {
                key: "send", value: function () {
                    var n = this;
                    this.player.template.commentInput.blur(), this.player.template.commentInput.value.replace(/^\s+|\s+$/g, "") ? this.player.danmaku.send({
                        text: this.player.template.commentInput.value,
                        color: z.color2Number(this.player.container.querySelector(".dplayer-comment-setting-color input:checked").value),
                        type: parseInt(this.player.container.querySelector(".dplayer-comment-setting-type input:checked").value)
                    }, (function () {
                        n.player.template.commentInput.value = "", n.hide()
                    })) : this.player.notice(this.player.tran("please-input-danmaku"))
                }
            }]) && Je(e.prototype, t), Object.defineProperty(e, "prototype", {writable: !1}), n
        }();
        const $e = Ge;

        function nt(n, e) {
            for (var t = 0; t < e.length; t++) {
                var a = e[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, a.key, a)
            }
        }

        var et = function () {
            function n(e) {
                !function (n, e) {
                    if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), this.player = e, this.doHotKeyHandler = this.doHotKey.bind(this), this.cancelFullScreenHandler = this.cancelFullScreen.bind(this), this.player.options.hotkey && document.addEventListener("keydown", this.doHotKeyHandler), document.addEventListener("keydown", this.cancelFullScreenHandler)
            }

            var e, t;
            return e = n, (t = [{
                key: "doHotKey", value: function (n) {
                    if (this.player.focus) {
                        var e = document.activeElement.tagName.toUpperCase(),
                            t = document.activeElement.getAttribute("contenteditable");
                        if ("INPUT" !== e && "TEXTAREA" !== e && "" !== t && "true" !== t) {
                            var a, o = n || window.event;
                            switch (o.keyCode) {
                                case 32:
                                    o.preventDefault(), this.player.toggle();
                                    break;
                                case 37:
                                    if (o.preventDefault(), this.player.options.live) break;
                                    this.player.seek(this.player.video.currentTime - 5), this.player.controller.setAutoHide();
                                    break;
                                case 39:
                                    if (o.preventDefault(), this.player.options.live) break;
                                    this.player.seek(this.player.video.currentTime + 5), this.player.controller.setAutoHide();
                                    break;
                                case 38:
                                    o.preventDefault(), a = this.player.volume() + .1, this.player.volume(a);
                                    break;
                                case 40:
                                    o.preventDefault(), a = this.player.volume() - .1, this.player.volume(a)
                            }
                        }
                    }
                }
            }, {
                key: "cancelFullScreen", value: function (n) {
                    27 === (n || window.event).keyCode && this.player.fullScreen.isFullScreen("web") && this.player.fullScreen.cancel("web")
                }
            }, {
                key: "destroy", value: function () {
                    this.player.options.hotkey && document.removeEventListener("keydown", this.doHotKeyHandler), document.removeEventListener("keydown", this.cancelFullScreenHandler)
                }
            }]) && nt(e.prototype, t), Object.defineProperty(e, "prototype", {writable: !1}), n
        }();
        const tt = et;

        function at(n, e) {
            for (var t = 0; t < e.length; t++) {
                var a = e[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, a.key, a)
            }
        }

        var ot = function () {
            function n(e) {
                var t = this;
                !function (n, e) {
                    if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), this.player = e, this.shown = !1, Array.prototype.slice.call(this.player.template.menuItem).forEach((function (n, e) {
                    t.player.options.contextmenu[e].click && n.addEventListener("click", (function () {
                        t.player.options.contextmenu[e].click(t.player), t.hide()
                    }))
                })), this.contextmenuHandler = function (n) {
                    if (t.shown) t.hide(); else {
                        var e = n || window.event;
                        e.preventDefault();
                        var a = t.player.container.getBoundingClientRect();
                        t.show(e.clientX - a.left, e.clientY - a.top), t.player.template.mask.addEventListener("click", (function () {
                            t.hide()
                        }))
                    }
                }, this.player.container.addEventListener("contextmenu", this.contextmenuHandler)
            }

            var e, t;
            return e = n, (t = [{
                key: "show", value: function (n, e) {
                    this.player.template.menu.classList.add("dplayer-menu-show");
                    var t = this.player.container.getBoundingClientRect();
                    n + this.player.template.menu.offsetWidth >= t.width ? (this.player.template.menu.style.right = t.width - n + "px", this.player.template.menu.style.left = "initial") : (this.player.template.menu.style.left = n + "px", this.player.template.menu.style.right = "initial"), e + this.player.template.menu.offsetHeight >= t.height ? (this.player.template.menu.style.bottom = t.height - e + "px", this.player.template.menu.style.top = "initial") : (this.player.template.menu.style.top = e + "px", this.player.template.menu.style.bottom = "initial"), this.player.template.mask.classList.add("dplayer-mask-show"), this.shown = !0, this.player.events.trigger("contextmenu_show")
                }
            }, {
                key: "hide", value: function () {
                    this.player.template.mask.classList.remove("dplayer-mask-show"), this.player.template.menu.classList.remove("dplayer-menu-show"), this.shown = !1, this.player.events.trigger("contextmenu_hide")
                }
            }, {
                key: "destroy", value: function () {
                    this.player.container.removeEventListener("contextmenu", this.contextmenuHandler)
                }
            }]) && at(e.prototype, t), Object.defineProperty(e, "prototype", {writable: !1}), n
        }();
        const rt = ot;

        function it(n, e) {
            for (var t = 0; t < e.length; t++) {
                var a = e[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, a.key, a)
            }
        }

        var lt = function () {
            function n(e) {
                var t = this;
                !function (n, e) {
                    if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, n), this.container = e.template.infoPanel, this.template = e.template, this.video = e.video, this.player = e, this.template.infoPanelClose.addEventListener("click", (function () {
                    t.hide()
                }))
            }

            var e, t;
            return e = n, (t = [{
                key: "show", value: function () {
                    this.beginTime = Date.now(), this.update(), this.player.timer.enable("info"), this.player.timer.enable("fps"), this.container.classList.remove("dplayer-info-panel-hide")
                }
            }, {
                key: "hide", value: function () {
                    this.player.timer.disable("info"), this.player.timer.disable("fps"), this.container.classList.add("dplayer-info-panel-hide")
                }
            }, {
                key: "triggle", value: function () {
                    this.container.classList.contains("dplayer-info-panel-hide") ? this.show() : this.hide()
                }
            }, {
                key: "update", value: function () {
                    this.template.infoVersion.innerHTML = "MUSEPlayer v".concat("1.27.0", " ").concat("a0424ca"), this.template.infoType.innerHTML = this.player.type, this.template.infoUrl.innerHTML = this.player.options.video.url, this.template.infoResolution.innerHTML = "".concat(this.player.video.videoWidth, " x ").concat(this.player.video.videoHeight), this.template.infoDuration.innerHTML = this.player.video.duration, this.player.options.danmaku && (this.template.infoDanmakuId.innerHTML = this.player.options.danmaku.id, this.template.infoDanmakuApi.innerHTML = this.player.options.danmaku.api, this.template.infoDanmakuAmount.innerHTML = this.player.danmaku.dan.length)
                }
            }, {
                key: "fps", value: function (n) {
                    this.template.infoFPS.innerHTML = "".concat(n.toFixed(1))
                }
            }]) && it(e.prototype, t), Object.defineProperty(e, "prototype", {writable: !1}), n
        }();
        const st = lt;
        var pt = t(1568), dt = t.n(pt);

        function At(n, e) {
            var t = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(n);
                e && (a = a.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), t.push.apply(t, a)
            }
            return t
        }

        function ct(n, e, t) {
            return e in n ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[e] = t, n
        }

        function ut(n, e) {
            for (var t = 0; t < e.length; t++) {
                var a = e[t];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(n, a.key, a)
            }
        }

        var yt = 0, ht = [], mt = function () {
            function n(e) {
                var t = this;
                (function (n, e) {
                    if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                })(this, n), this.options = function (n) {
                    var e = {
                        container: n.element || document.getElementsByClassName("dplayer")[0],
                        live: !1,
                        autoplay: !1,
                        theme: "#b7daff",
                        loop: !1,
                        lang: (navigator.language || navigator.browserLanguage).toLowerCase(),
                        screenshot: !1,
                        airplay: !0,
                        chromecast: !1,
                        hotkey: !0,
                        preload: "metadata",
                        volume: .7,
                        playbackSpeed: [.5, .75, 1, 1.25, 1.5, 2],
                        apiBackend: T,
                        video: {},
                        contextmenu: [],
                        mutex: !0,
                        pluginOptions: {hls: {}, flv: {}, dash: {}, webtorrent: {}},
                        preventClickToggle: !1
                    };
                    for (var t in e) e.hasOwnProperty(t) && !n.hasOwnProperty(t) && (n[t] = e[t]);
                    return n.video && !n.video.type && (n.video.type = "auto"), "object" === O(n.danmaku) && n.danmaku && !n.danmaku.user && (n.danmaku.user = "DIYgod"), n.subtitle && (!n.subtitle.type && (n.subtitle.type = "webvtt"), !n.subtitle.fontSize && (n.subtitle.fontSize = "20px"), !n.subtitle.bottom && (n.subtitle.bottom = "40px"), !n.subtitle.color && (n.subtitle.color = "#fff")), n.video.quality && (n.video.url = n.video.quality[n.video.defaultQuality].url), n.lang && (n.lang = n.lang.toLowerCase()), n.contextmenu = n.contextmenu.concat([{
                        key: "video-info",
                        click: function (n) {
                            n.infoPanel.triggle()
                        }
                    }, {
                        text: "MUSEPlayer",
                        link: "https://www.musestar.top/"
                    }]), n
                }(function (n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? At(Object(t), !0).forEach((function (e) {
                            ct(n, e, t[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : At(Object(t)).forEach((function (e) {
                            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                        }))
                    }
                    return n
                }({preload: "webtorrent" === e.video.type ? "none" : "metadata"}, e)), this.options.video.quality && (this.qualityIndex = this.options.video.defaultQuality, this.quality = this.options.video.quality[this.options.video.defaultQuality]), this.tran = new Y(this.options.lang).tran, this.events = new Dn, this.user = new jn(this), this.container = this.options.container, this.container.classList.add("dplayer"), this.options.danmaku || this.container.classList.add("dplayer-no-danmaku"), this.options.live ? this.container.classList.add("dplayer-live") : this.container.classList.remove("dplayer-live"), z.isMobile && this.container.classList.add("dplayer-mobile"), this.arrow = this.container.offsetWidth <= 500, this.arrow && this.container.classList.add("dplayer-arrow"), this.options.subtitle && Array.isArray(this.options.subtitle.url) && (this.options.subtitle.url.push({
                    subtitle: "",
                    lang: "off"
                }), this.options.subtitle.defaultSubtitle && ("string" == typeof this.options.subtitle.defaultSubtitle ? this.options.subtitle.index = this.options.subtitle.url.findIndex((function (n) {
                    return n.lang === t.options.subtitle.defaultSubtitle || n.name === t.options.subtitle.defaultSubtitle
                })) : "number" == typeof this.options.subtitle.defaultSubtitle && (this.options.subtitle.index = this.options.subtitle.defaultSubtitle)), (-1 === this.options.subtitle.index || !this.options.subtitle.index || this.options.subtitle.index > this.options.subtitle.url.length - 1) && (this.options.subtitle.index = this.options.subtitle.url.findIndex((function (n) {
                    return n.lang === t.options.lang
                }))), -1 === this.options.subtitle.index && (this.options.subtitle.index = this.options.subtitle.url.length - 1)), this.template = new Bn({
                    container: this.container,
                    options: this.options,
                    index: yt,
                    tran: this.tran
                }), this.video = this.template.video, this.bar = new Kn(this.template), this.bezel = new Gn(this.template.bezel), this.fullScreen = new Yn(this), this.controller = new Ke(this), this.options.danmaku && (this.danmaku = new zn({
                    player: this,
                    container: this.template.danmaku,
                    opacity: this.user.get("opacity"),
                    callback: function () {
                        setTimeout((function () {
                            t.template.danmakuLoading.style.display = "none", t.options.autoplay && t.play()
                        }), 0)
                    },
                    error: function (n) {
                        t.notice(n)
                    },
                    apiBackend: this.options.apiBackend,
                    borderColor: this.options.theme,
                    height: this.arrow ? 24 : 30,
                    time: function () {
                        return t.video.currentTime
                    },
                    unlimited: this.user.get("unlimited"),
                    api: {
                        id: this.options.danmaku.id,
                        address: this.options.danmaku.api,
                        token: this.options.danmaku.token,
                        maximum: this.options.danmaku.maximum,
                        addition: this.options.danmaku.addition,
                        user: this.options.danmaku.user,
                        speedRate: this.options.danmaku.speedRate
                    },
                    events: this.events,
                    tran: function (n) {
                        return t.tran(n)
                    }
                }), this.comment = new $e(this)), this.setting = new Ve(this), this.plugins = {}, this.docClickFun = function () {
                    t.focus = !1
                }, this.containerClickFun = function () {
                    t.focus = !0
                }, document.addEventListener("click", this.docClickFun, !0), this.container.addEventListener("click", this.containerClickFun, !0), this.paused = !0, this.timer = new Vn(this), this.hotkey = new tt(this), this.contextmenu = new rt(this), this.initVideo(this.video, this.quality && this.quality.type || this.options.video.type), this.infoPanel = new st(this), !this.danmaku && this.options.autoplay && this.play(), yt++, ht.push(this)
            }

            var e, t, a;
            return e = n, t = [{
                key: "seek", value: function (n) {
                    n = Math.max(n, 0), this.video.duration && (n = Math.min(n, this.video.duration)), this.video.currentTime < n ? this.notice("".concat(this.tran("ff").replace("%s", (n - this.video.currentTime).toFixed(0)))) : this.video.currentTime > n && this.notice("".concat(this.tran("rew").replace("%s", (this.video.currentTime - n).toFixed(0)))), this.video.currentTime = n, this.danmaku && this.danmaku.seek(), this.bar.set("played", n / this.video.duration, "width"), this.template.ptime.innerHTML = z.secondToTime(n)
                }
            }, {
                key: "play", value: function (n) {
                    var e = this;
                    if (this.paused = !1, this.video.paused && !z.isMobile && this.bezel.switch(En.play), this.template.playButton.innerHTML = En.pause, this.template.mobilePlayButton.innerHTML = En.pause, n || S.resolve(this.video.play()).catch((function () {
                        e.pause()
                    })).then((function () {
                    })), this.timer.enable("loading"), this.container.classList.remove("dplayer-paused"), this.container.classList.add("dplayer-playing"), this.danmaku && this.danmaku.play(), this.options.mutex) for (var t = 0; t < ht.length; t++) this !== ht[t] && ht[t].pause()
                }
            }, {
                key: "pause", value: function (n) {
                    this.paused = !0, this.container.classList.remove("dplayer-loading"), this.video.paused || z.isMobile || this.bezel.switch(En.pause), this.template.playButton.innerHTML = En.play, this.template.mobilePlayButton.innerHTML = En.play, n || this.video.pause(), this.timer.disable("loading"), this.container.classList.remove("dplayer-playing"), this.container.classList.add("dplayer-paused"), this.danmaku && this.danmaku.pause()
                }
            }, {
                key: "switchVolumeIcon", value: function () {
                    this.volume() >= .95 ? this.template.volumeIcon.innerHTML = En.volumeUp : this.volume() > 0 ? this.template.volumeIcon.innerHTML = En.volumeDown : this.template.volumeIcon.innerHTML = En.volumeOff
                }
            }, {
                key: "volume", value: function (n, e, t) {
                    if (n = parseFloat(n), !isNaN(n)) {
                        n = Math.max(n, 0), n = Math.min(n, 1), this.bar.set("volume", n, "width");
                        var a = "".concat((100 * n).toFixed(0), "%");
                        this.template.volumeBarWrapWrap.dataset.balloon = a, e || this.user.set("volume", n), t || this.notice("".concat(this.tran("volume"), " ").concat((100 * n).toFixed(0), "%")), this.video.volume = n, this.video.muted && (this.video.muted = !1), this.switchVolumeIcon()
                    }
                    return this.video.volume
                }
            }, {
                key: "toggle", value: function () {
                    this.video.paused ? this.play() : this.pause()
                }
            }, {
                key: "on", value: function (n, e) {
                    this.events.on(n, e)
                }
            }, {
                key: "switchVideo", value: function (n, e) {
                    this.pause(), this.video.poster = n.pic ? n.pic : "", this.video.src = n.url, this.initMSE(this.video, n.type || "auto"), e && (this.template.danmakuLoading.style.display = "block", this.bar.set("played", 0, "width"), this.bar.set("loaded", 0, "width"), this.template.ptime.innerHTML = "00:00", this.template.danmaku.innerHTML = "", this.danmaku && this.danmaku.reload({
                        id: e.id,
                        address: e.api,
                        token: e.token,
                        maximum: e.maximum,
                        addition: e.addition,
                        user: e.user
                    }))
                }
            }, {
                key: "initMSE", value: function (n, e) {
                    var t = this;
                    if (this.type = e, this.options.video.customType && this.options.video.customType[e]) "[object Function]" === Object.prototype.toString.call(this.options.video.customType[e]) ? this.options.video.customType[e](this.video, this) : console.error("Illegal customType: ".concat(e)); else switch ("auto" === this.type && (/m3u8(#|\?|$)/i.exec(n.src) ? this.type = "hls" : /.flv(#|\?|$)/i.exec(n.src) ? this.type = "flv" : /.mpd(#|\?|$)/i.exec(n.src) ? this.type = "dash" : this.type = "normal"), "hls" === this.type && (n.canPlayType("application/x-mpegURL") || n.canPlayType("application/vnd.apple.mpegURL")) && (this.type = "normal"), this.type) {
                        case"hls":
                            if (window.Hls) if (window.Hls.isSupported()) {
                                var a = this.options.pluginOptions.hls, o = new window.Hls(a);
                                this.plugins.hls = o, o.loadSource(n.src), o.attachMedia(n), this.events.on("destroy", (function () {
                                    o.destroy(), delete t.plugins.hls
                                }))
                            } else this.notice("Error: Hls is not supported."); else this.notice("Error: Can't find Hls.");
                            break;
                        case"flv":
                            if (window.flvjs) if (window.flvjs.isSupported()) {
                                var r = window.flvjs.createPlayer(Object.assign(this.options.pluginOptions.flv.mediaDataSource || {}, {
                                    type: "flv",
                                    url: n.src
                                }), this.options.pluginOptions.flv.config);
                                this.plugins.flvjs = r, r.attachMediaElement(n), r.load(), this.events.on("destroy", (function () {
                                    r.unload(), r.detachMediaElement(), r.destroy(), delete t.plugins.flvjs
                                }))
                            } else this.notice("Error: flvjs is not supported."); else this.notice("Error: Can't find flvjs.");
                            break;
                        case"dash":
                            if (window.dashjs) {
                                var i = window.dashjs.MediaPlayer().create().initialize(n, n.src, !1),
                                    l = this.options.pluginOptions.dash;
                                i.updateSettings(l), this.plugins.dash = i, this.events.on("destroy", (function () {
                                    window.dashjs.MediaPlayer().reset(), delete t.plugins.dash
                                }))
                            } else this.notice("Error: Can't find dashjs.");
                            break;
                        case"webtorrent":
                            if (window.WebTorrent) if (window.WebTorrent.WEBRTC_SUPPORT) {
                                this.container.classList.add("dplayer-loading");
                                var s = this.options.pluginOptions.webtorrent, p = new window.WebTorrent(s);
                                this.plugins.webtorrent = p;
                                var d = n.src;
                                n.src = "", n.preload = "metadata", n.addEventListener("durationchange", (function () {
                                    return t.container.classList.remove("dplayer-loading")
                                }), {once: !0}), p.add(d, (function (n) {
                                    n.files.find((function (n) {
                                        return n.name.endsWith(".mp4")
                                    })).renderTo(t.video, {autoplay: t.options.autoplay, controls: !1})
                                })), this.events.on("destroy", (function () {
                                    p.remove(d), p.destroy(), delete t.plugins.webtorrent
                                }))
                            } else this.notice("Error: Webtorrent is not supported."); else this.notice("Error: Can't find Webtorrent.")
                    }
                }
            }, {
                key: "initVideo", value: function (n, e) {
                    var t = this;
                    this.initMSE(n, e), this.on("durationchange", (function () {
                        1 !== n.duration && n.duration !== 1 / 0 && (t.template.dtime.innerHTML = z.secondToTime(n.duration))
                    })), this.on("progress", (function () {
                        var e = n.buffered.length ? n.buffered.end(n.buffered.length - 1) / n.duration : 0;
                        t.bar.set("loaded", e, "width")
                    })), this.on("error", (function () {
                        t.video.error && t.tran && t.notice && "webtorrent" !== t.type && t.notice(t.tran("video-failed"), -1)
                    })), this.on("ended", (function () {
                        t.bar.set("played", 1, "width"), t.setting.loop ? (t.seek(0), t.play()) : t.pause(), t.danmaku && (t.danmaku.danIndex = 0)
                    })), this.on("play", (function () {
                        t.paused && t.play(!0)
                    })), this.on("pause", (function () {
                        t.paused || t.pause(!0)
                    })), this.on("timeupdate", (function () {
                        t.bar.set("played", t.video.currentTime / t.video.duration, "width");
                        var n = z.secondToTime(t.video.currentTime);
                        t.template.ptime.innerHTML !== n && (t.template.ptime.innerHTML = n)
                    }));
                    for (var a = function (e) {
                        n.addEventListener(t.events.videoEvents[e], (function () {
                            t.events.trigger(t.events.videoEvents[e])
                        }))
                    }, o = 0; o < this.events.videoEvents.length; o++) a(o);
                    this.volume(this.user.get("volume"), !0, !0), this.options.subtitle && (this.subtitle = new Un(this.template.subtitle, this.video, this.options.subtitle, this.events), Array.isArray(this.options.subtitle.url) && (this.subtitles = new Fn(this)), this.user.get("subtitle") || this.subtitle.hide())
                }
            }, {
                key: "switchQuality", value: function (n) {
                    var e = this;
                    if (n = "string" == typeof n ? parseInt(n) : n, this.qualityIndex !== n && !this.switchingQuality) {
                        this.prevIndex = this.qualityIndex, this.qualityIndex = n, this.switchingQuality = !0, this.quality = this.options.video.quality[n], this.template.qualityButton.innerHTML = this.quality.name;
                        var t = this.video.paused;
                        this.video.pause();
                        var a = dt()({
                            current: !1,
                            pic: null,
                            screenshot: this.options.screenshot,
                            preload: "auto",
                            url: this.quality.url,
                            subtitle: this.options.subtitle
                        }), o = (new DOMParser).parseFromString(a, "text/html").body.firstChild;
                        this.template.videoWrap.insertBefore(o, this.template.videoWrap.getElementsByTagName("div")[0]), this.prevVideo = this.video, this.video = o, this.initVideo(this.video, this.quality.type || this.options.video.type), this.seek(this.prevVideo.currentTime), this.notice("".concat(this.tran("switching-quality").replace("%q", this.quality.name)), -1), this.events.trigger("quality_start", this.quality), this.on("canplay", (function () {
                            if (e.prevVideo) {
                                if (e.video.currentTime !== e.prevVideo.currentTime) return void e.seek(e.prevVideo.currentTime);
                                e.template.videoWrap.removeChild(e.prevVideo), e.video.classList.add("dplayer-video-current"), t || e.video.play(), e.prevVideo = null, e.notice("".concat(e.tran("switched-quality").replace("%q", e.quality.name))), e.switchingQuality = !1, e.events.trigger("quality_end")
                            }
                        })), this.on("error", (function () {
                            e.video.error && e.prevVideo && (e.template.videoWrap.removeChild(e.video), e.video = e.prevVideo, t || e.video.play(), e.qualityIndex = e.prevIndex, e.quality = e.options.video.quality[e.qualityIndex], e.noticeTime = setTimeout((function () {
                                e.template.notice.style.opacity = 0, e.events.trigger("notice_hide")
                            }), 3e3), e.prevVideo = null, e.switchingQuality = !1)
                        }))
                    }
                }
            }, {
                key: "notice", value: function (n) {
                    var e, t, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2e3,
                        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .8, r = Bn.NewNotice(n, o);
                    this.template.noticeList.appendChild(r), this.events.trigger("notice_show", r), a > 0 && setTimeout((e = r, t = this, function () {
                        e.addEventListener("animationend", (function () {
                            t.template.noticeList.removeChild(e)
                        })), e.classList.add("remove-notice"), t.events.trigger("notice_hide")
                    }), a)
                }
            }, {
                key: "resize", value: function () {
                    this.danmaku && this.danmaku.resize(), this.controller.thumbnails && this.controller.thumbnails.resize(160, this.video.videoHeight / this.video.videoWidth * 160, this.template.barWrap.offsetWidth), this.events.trigger("resize")
                }
            }, {
                key: "speed", value: function (n) {
                    this.video.playbackRate = n
                }
            }, {
                key: "destroy", value: function () {
                    ht.splice(ht.indexOf(this), 1), this.pause(), document.removeEventListener("click", this.docClickFun, !0), this.container.removeEventListener("click", this.containerClickFun, !0), this.fullScreen.destroy(), this.hotkey.destroy(), this.contextmenu.destroy(), this.controller.destroy(), this.timer.destroy(), this.video.src = "", this.container.innerHTML = "", this.events.trigger("destroy")
                }
            }], a = [{
                key: "version", get: function () {
                    return "1.27.0"
                }
            }], t && ut(e.prototype, t), a && ut(e, a), Object.defineProperty(e, "prototype", {writable: !1}), n
        }();
        const ft = mt;
        console.log("\n".concat(" %c DPlayer v", "1.27.0", " ").concat("a0424ca", " %c https://dplayer.diygod.dev ", "\n", "\n"), "color: #fadfa3; background: #030307; padding:5px 0;", "background: #fadfa3; padding:5px 0;");
        const bt = ft
    })(), a.default
})()));
//# sourceMappingURL=DPlayer.min.js.map