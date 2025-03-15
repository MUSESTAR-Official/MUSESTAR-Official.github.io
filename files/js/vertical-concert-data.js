// 纵向选项卡内容 - 全部演唱会列表
// 使用分批加载策略，初始只加载前10个数据
const verticalConcertData = [
    {
        image: "https://s1.imagehub.cc/images/2025/02/13/1b2217f14c1a5ff6006ad887fb84db67.jpg",
        title: "V.W.P 3rd ONE-MAN LIVE「現象III-神椿市探訪中-」",
        url: "/teleplay/VWP/2025",
        country: "日本",
        type: "全息演唱会",
        duration: "",
        releaseDate: "2025年3月27日"
    },
    {
        image: "https://s1.imagehub.cc/images/2025/02/19/db998a5b32cef3f3a1d3ed648ccd5196.jpg",
        title: "YOASOBI ASIA TOUR 2024-2025 \"超現実 cho-genjitsu\" IN SHANGHAI",
        url: "/teleplay/YOASOBI/2025",
        country: "中国",
        type: "演唱会",
        duration: "",
        releaseDate: "2025年2月15日"
    },
    {
        image: "https://s1.imagehub.cc/images/2024/12/14/35953ba149b8d29b1a8153d79838877e.jpg",
        title: "明透 1st ONE-MAN LIVE「RAY」",
        url: "/teleplay/ASU/2024",
        country: "日本",
        type: "全息演唱会",
        duration: "",
        releaseDate: "2024年12月28日"
    },
    {
        image: "https://s1.imagehub.cc/images/2024/12/20/e68bf75d39a1c2ce21fa20b344398899.jpg",
        title: "上海 · TOGENASHI TOGEARI Live「凛音の理」",
        url: "/teleplay/GBC/2024",
        country: "中国",
        type: "演唱会",
        duration: "",
        releaseDate: "2024年12月14日"
    },
    {
        image: "https://s1.imagehub.cc/images/2024/11/03/e1349db45e7c2bd056354116ede7f7d3.jpg",
        title: "花譜 4th ONE-MAN LIVE「怪歌（再）」",
        url: "/teleplay/KAF/2024",
        country: "日本",
        type: "全息演唱会",
        duration: "",
        releaseDate: "2024年11月3日"
    },
    {
        image: "https://s1.imagehub.cc/images/2024/11/03/0b344e3e2a5dda2d0bc72c400a18c78f.jpg",
        title: "V.W.P 2nd ONE-MAN LIVE「現象Ⅱ （再）」",
        url: "/teleplay/VWP/2024",
        country: "日本",
        type: "全息演唱会",
        duration: "",
        releaseDate: "2024年11月2日"
    },
    {
        image: "https://s1.imagehub.cc/images/2024/10/08/009311278d9e91751280590d6ce037cb.jpg",
        title: "洛天依「歌行宇宙·无限共鸣」",
        url: "/teleplay/LTYWXGM2024",
        country: "中国",
        type: "全息演唱会",
        duration: "",
        releaseDate: "2024年10月5日"
    },
    {
        image: "https://s1.imagehub.cc/images/2024/09/15/fc0d5b23e477d9973dbc3898181baccf.png",
        title: "冰火歌会2024漫游季",
        url: "/teleplay/BHGH2024",
        country: "中国",
        type: "虚拟演唱会",
        duration: "",
        releaseDate: "2024年9月15日"
    },
    {
        image: "https://s1.imagehub.cc/images/2025/01/07/1558dd061de8b9f33e1b2430193855d3.jpg",
        title: "花譜・理芽「Singularity Live Vol.3」",
        url: "/teleplay/KAF/KAF-RIM2024",
        country: "日本",
        type: "全息演唱会",
        duration: "",
        releaseDate: "2024年9月14日"
    },
    {
        image: "https://s1.imagehub.cc/images/2024/06/15/566f287884202f982c16618804792d65.jpeg",
        title: "BILIBILI MACRO LINK 2024",
        url: "/teleplay/BML2024/100",
        country: "中国",
        type: "综合演唱会",
        duration: "",
        releaseDate: "2024年7月13日"
    }
];

// 剩余数据，只在需要时加载
const verticalConcertDataMore = [
    {
        image: "https://s1.imagehub.cc/images/2024/07/28/65c2270b7b17a06eadf72cc5a5c9255e.jpeg",
        title: "TUBEOUT! 2024",
        url: "/teleplay/TUBEOUT2024",
        country: "中国",
        type: "虚拟演唱会",
        duration: "",
        releaseDate: "2024年7月12日"
    },
    {
        image: "https://s1.imagehub.cc/images/2024/11/05/150bafa7517c4a0566f52d3f4d313122.jpg",
        title: "花譜 4th ONE-MAN LIVE「怪歌」",
        url: "/teleplay/KAF/20241",
        country: "日本",
        type: "全息演唱会",
        duration: "",
        releaseDate: "2024年1月14日"
    },
    {
        image: "https://s1.imagehub.cc/images/2023/11/03/f5fe54b0f1912636d3129f3cd8fe049e.jpeg",
        title: "BILIBILI MACRO LINK 2023",
        url: "/teleplay/BML2023/01",
        country: "中国",
        type: "综合演唱会",
        duration: "",
        releaseDate: "2023年7月22日"
    },
    {
        image: "https://s1.imagehub.cc/images/2025/02/19/2f0ea48f124c2d4639d839795c4a4873.png",
        title: "花譜 3rd ONE-MAN LIVE「不可解参(想)」",
        url: "/teleplay/KAF/2023",
        country: "日本",
        type: "全息演唱会",
        duration: "",
        releaseDate: "2023年3月4日"
    },
    {
        image: "https://s1.imagehub.cc/images/2025/02/19/2770037481b04f934b537137007225f1.jpg",
        title: "花譜 2nd ONE-MAN LIVE「不可解弐Q2」",
        url: "/teleplay/KAF/2021",
        country: "日本",
        type: "全息演唱会",
        duration: "",
        releaseDate: "2021年3月13日"
    },
    {
        image: "https://s1.imagehub.cc/images/2025/02/20/57b0547afd8578d88e716aa877a74963.jpeg",
        title: "花譜 1st ONE-MAN LIVE「不可解」",
        url: "/teleplay/KAF/2019",
        country: "日本",
        type: "全息演唱会",
        duration: "",
        releaseDate: "2019年8月1日"
    }
];

// 懒加载函数 - 当用户点击"查看全部"或滚动到底部时加载更多数据
function loadMoreConcertData() {
    // 合并数据
    verticalConcertData.push(...verticalConcertDataMore);
    // 清空额外数据数组以释放内存
    verticalConcertDataMore.length = 0;
    // 这里可以添加渲染新数据的代码
    return verticalConcertData;
}

// 图片懒加载优化
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