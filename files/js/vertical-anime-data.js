// 纵向选项卡内容 - 全部动漫列表
// 使用分批加载策略，初始只加载前10个数据
const verticalAnimeData = [
    {
        image: "https://s1.imagehub.cc/images/2025/03/11/0db55824fce28687d9770fec63b614e6.jpg",
        title: "孤独摇滚！ 剧场总集篇 Re:",
        url: "/film/bocchirocks",
        country: "日本",
        type: "音乐",
        episodes: "1:29:39",
        releaseDate: "2025年3月"
    },
    {
        image: "https://s1.imagehub.cc/images/2025/03/02/730c367da74f851a8f9e2fbc3e10af1a.jpg",
        title: "你的颜色",
        url: "/film/Kiminoiro",
        country: "日本",
        type: "音乐",
        episodes: "1:40:39",
        releaseDate: "2025年2月21日"
    },
    {
        image: "https://s1.imagehub.cc/images/2024/12/16/cd4ef51d8852f35db8764ce2c934e5f6.jpg",
        title: "地缚少年花子君 第二季",
        url: "/animation/hanakokun2/01",
        country: "日本",
        type: "奇幻",
        episodes: "12话",
        releaseDate: "2025年1月12日"
    },
    {
        image: "https://s1.imagehub.cc/images/2024/12/16/bebaa3b39e403aeb1b0e45c73575e564.webp",
        title: "超超超超超喜欢你的100个女朋友 第二季",
        url: "/animation/hyakkano2/01",
        country: "日本",
        type: "喜剧",
        episodes: "12话",
        releaseDate: "2025年1月12日"
    },
    {
        image: "https://s1.imagehub.cc/images/2024/12/16/d6fe24d2d22818bff757b88a6926353c.jpg",
        title: "我独自升级 第二季",
        url: "/animation/SoloLeveling2/01",
        country: "日本",
        type: "奇幻",
        episodes: "13话",
        releaseDate: "2025年1月4日"
    },
    {
        image: "https://s1.imagehub.cc/images/2024/12/08/4448e7557b33850ac40959b8ac720130.jpg",
        title: "BanG Dream! Ave Mujica",
        url: "/animation/AveMujica/01",
        country: "日本",
        type: "音乐",
        episodes: "13话",
        releaseDate: "2025年1月2日"
    },
    {
        image: "https://s1.imagehub.cc/images/2024/10/01/0065636f82a0d5f286d9f3ccec7b823d.jpg",
        title: "精灵幻想记 第二季",
        url: "/animation/SeireiGensouki2/01",
        country: "日本",
        type: "奇幻",
        episodes: "12话",
        releaseDate: "2024年10月8日"
    },
    {
        image: "https://s1.imagehub.cc/images/2024/10/07/a730387be806bf403a862b060a106fed.jpg",
        title: "死神 千年血战篇 -相克谭-",
        url: "/animation/bleach3/27",
        country: "日本",
        type: "战斗",
        episodes: "13话",
        releaseDate: "2024年10月5日"
    },
    {
        image: "https://s1.imagehub.cc/images/2024/10/05/722b48cfc6e2dc3a6176e240bfe38c4d.png",
        title: "盒中之海",
        url: "/film/hzzh",
        country: "中国",
        type: "奇幻",
        episodes: "2:09:31",
        releaseDate: "2024年10月3日"
    },
    {
        image: "https://s1.imagehub.cc/images/2024/08/18/69a776cb5468e12bb38866b0f7332b0d.jpg",
        title: "Re:从零开始的异世界生活 第三季",
        url: "/animation/re0s3/01",
        country: "日本",
        type: "奇幻",
        episodes: "16话",
        releaseDate: "2024年10月2日"
    }
];

// 剩余数据，只在需要时加载
const verticalAnimeDataMore = [
    // 这里放置剩余的动漫数据
    {
        image: "https://s1.imagehub.cc/images/2024/08/19/b68cbf5ff34a36fe57d3ce0d06e4870a.png",
        title: "通往夏天的隧道,再见的出口",
        url: "/film/NatsuenoTunnel",
        country: "日本",
        type: "恋爱",
        episodes: "1:22:39",
        releaseDate: "2024年8月30日"
    },
    {
        image: "https://s1.imagehub.cc/images/2024/07/26/02fa0219d89963cdffa13b4d18ccaf3c.jpeg",
        title: "败犬女主太多了！",
        url: "/animation/makeine",
        country: "日本",
        type: "喜剧",
        episodes: "12话",
        releaseDate: "2024年7月14日"
    },
    {
        image: "https://s1.imagehub.cc/images/2024/07/07/f02eaaca3d092dfbf69a4ad9974683c9.jpeg",
        title: "鹿乃子乃子虎视眈眈",
        url: "/animation/shikanoko",
        country: "日本",
        type: "喜剧",
        episodes: "12话",
        releaseDate: "2024年7月3日"
    },
    {
        image: "https://s1.imagehub.cc/images/2024/08/22/83ac04dacb9b4d9a4c68403f2edf1de0.jpg",
        title: "我推的孩子 第二季",
        url: "/animation/oshinoko2",
        country: "日本",
        type: "奇幻",
        episodes: "24话",
        releaseDate: "2024年7月3日"
    },
    {
        image: "https://s1.imagehub.cc/images/2024/05/18/79b3a87e77a21f5bebc01183b2415dc9.webp",
        title: "不时轻声地以俄语遮羞的邻座艾莉同学",
        url: "/animation/roshidere",
        country: "日本",
        type: "爱情",
        episodes: "12话",
        releaseDate: "2024年7月3日"
    },
    {
        image: "https://s1.imagehub.cc/images/2024/04/03/79fa16f63e2969b1b008306464f147f7.png",
        title: "鬼灭之刃 第四季 柱训练篇",
        url: "/animation/kimetsu4",
        country: "日本",
        type: "奇幻",
        episodes: "8话",
        releaseDate: "2024年5月12日"
    },
    {
        image: "https://s1.imagehub.cc/images/2023/09/30/spyfamilycode.jpeg",
        title: "间谍过家家 代号：白",
        url: "/film/spyfamilycode",
        country: "日本",
        type: "喜剧",
        episodes: "1:50:01",
        releaseDate: "2023年4月30日"
    },
    {
        image: "https://s1.imagehub.cc/images/2024/04/03/f540b1992cc0ac37ecfa29f5d02120a5.jpeg",
        title: "约会大作战 第五季",
        url: "/animation/DateALive5",
        country: "日本",
        type: "奇幻",
        episodes: "12话",
        releaseDate: "2024年4月10日"
    },
    {
        image: "https://s1.imagehub.cc/images/2024/04/03/1beffc411899eecd7a5085ead6859cb4.jpeg",
        title: "为美好的世界献上祝福！ 第三季",
        url: "/animation/konosuba3",
        country: "日本",
        type: "奇幻",
        episodes: "11话",
        releaseDate: "2024年4月10日"
    },
    {
        image: "https://s1.imagehub.cc/images/2024/04/19/94cb2ee4ca48478b87f684ecdfa74156.jpeg",
        title: "夜晚的水母不会游泳",
        url: "/animation/yorukura",
        country: "日本",
        type: "群像",
        episodes: "12话",
        releaseDate: "2024年4月7日"
    },
    {
        image: "https://s1.imagehub.cc/images/2024/04/03/8c251884ab46fb4841eff6cac7e5dc2a.jpeg",
        title: "无职转生Ⅱ Part2",
        url: "/animation/mushokutensei2",
        country: "日本",
        type: "奇幻",
        episodes: "12话",
        releaseDate: "2024年4月7日"
    },
    {
        image: "https://s1.imagehub.cc/images/2023/12/29/01191f75f4d21914dd389a46f6c42e02.webp",
        title: "葬送的芙莉莲 第二季度",
        url: "/animation/FrierenBeyondJourneysEnd",
        country: "日本",
        type: "治愈",
        episodes: "28话",
        releaseDate: "2024年1月5日"
    },
    {
        image: "https://s1.imagehub.cc/images/2024/01/01/622396e5acdeffcc1307614f48396be5.webp",
        title: "憧憬成为魔法少女",
        url: "/animation/mahoako",
        country: "日本",
        type: "魔法",
        episodes: "13话",
        releaseDate: "2024年1月3日"
    },
    {
        image: "https://s1.imagehub.cc/images/2024/07/04/af4907bcf6d53279c6aeeda32a3203f5.jpeg",
        title: "青春猪头少年不会梦到红书包女孩",
        url: "/film/knapsack",
        country: "日本",
        type: "剧情",
        episodes: "1:14:54",
        releaseDate: "2023年12月1日"
    },
    {
        image: "https://s1.imagehub.cc/images/2023/09/29/spyfamilys2.jpeg",
        title: "间谍过家家 第二季",
        url: "/animation/spyfamilys2",
        country: "日本",
        type: "喜剧",
        episodes: "13话",
        releaseDate: "2023年10月7日"
    },
    {
        image: "https://s1.imagehub.cc/images/2023/09/29/hikikomari.jpeg",
        title: "家里蹲吸血姬的苦闷",
        url: "/animation/hikikomari",
        country: "日本",
        type: "奇幻",
        episodes: "12话",
        releaseDate: "2023年10月7日"
    },
    {
        image: "https://s1.imagehub.cc/images/2023/12/29/74550f2b6a424fd34b77d010533c98c2.webp",
        title: "葬送的芙莉莲 第一季度",
        url: "/animation/FrierenBeyondJourneysEnd",
        country: "日本",
        type: "治愈",
        episodes: "28话",
        releaseDate: "2023年9月29日"
    },
    {
        image: "https://s1.imagehub.cc/images/2023/08/05/shiroseijyo.webp",
        title: "白圣女与黑牧师",
        url: "/animation/shiroseijyo",
        country: "日本",
        type: "爱情",
        episodes: "12话",
        releaseDate: "2023年7月8日"
    }
    // 如果还有更多数据，继续添加...
];

// 懒加载函数 - 当用户点击"查看全部"或滚动到底部时加载更多数据
function loadMoreAnimeData() {
    // 合并数据
    verticalAnimeData.push(...verticalAnimeDataMore);
    // 清空额外数据数组以释放内存
    verticalAnimeDataMore.length = 0;
    // 这里可以添加渲染新数据的代码
    return verticalAnimeData;
}

// 图片懒加载优化
// 注意：这部分代码已在concert-data.js中定义，不需要重复定义
// 如果这个文件单独使用，请取消下面代码的注释

/*
document.addEventListener("DOMContentLoaded", function() {
    // 使用IntersectionObserver实现图片懒加载
    if ('IntersectionObserver' in window) {
        const lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    if (lazyImage.dataset.src) {
                        lazyImage.src = lazyImage.dataset.src;
                        lazyImage.removeAttribute('data-src');
                    }
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        // 获取所有需要懒加载的图片
        document.querySelectorAll('.vertical-card img, .schedule-card img').forEach(function(img) {
            // 将原始src存储到data-src属性
            if (img.src) {
                img.dataset.src = img.src;
                // 设置一个占位图或低质量预览图
                img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E';
                lazyImageObserver.observe(img);
            }
        });
    }
});
*/ 