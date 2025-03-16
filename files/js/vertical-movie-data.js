// 纵向选项卡内容 - 全部影视列表
const verticalMovieData = [
    {
        image: "https://s1.imagehub.cc/images/2024/12/16/4830fb9ff71a01e44b066491e3468888.png",
        title: "鱿鱼游戏 第二季",
        url: "/teleplay/SquidGame2/01",
        country: "韩国",
        type: "动作",
        duration: "总集数: 7",
        releaseDate: "2024年12月26日"
    },
    {
        image: "https://s1.imagehub.cc/images/2024/12/14/591edfc09936e96d2d724a4f7adcf1f8.jpg",
        title: "毒液：最后一舞",
        url: "/film/Venom3",
        country: "美国",
        type: "科幻",
        duration: "影片时长: 1:48:55",
        releaseDate: "2024年10月23日"
    },
    {
        image: "https://s1.imagehub.cc/images/2024/11/24/466cbe99a3a590714b7557b29438c1be.jpg",
        title: "出走的决心",
        url: "/film/LikeARollingStone",
        country: "中国",
        type: "剧情",
        duration: "影片时长: 1:45:20",
        releaseDate: "2024年9月15日"
    },
    {
        image: "https://s1.imagehub.cc/images/2024/10/18/14263a888127c08369e650be307d5fd3.jpg",
        title: "异形：夺命舰",
        url: "/film/Alien",
        country: "美国",
        type: "科幻",
        duration: "影片时长: 1:59:45",
        releaseDate: "2024年8月16日"
    },
    {
        image: "https://s1.imagehub.cc/images/2024/08/01/66213bc0cf7da1118e8a07b0ea2c84f1.png",
        title: "死侍与金刚狼",
        url: "/film/Deadpool3",
        country: "美国",
        type: "科幻",
        duration: "影片时长: 2:08:38",
        releaseDate: "2024年7月26日"
    },
    {
        image: "https://s1.imagehub.cc/images/2024/10/01/bbdf22953d7871c6e9e87908fa608651.jpg",
        title: "抓娃娃",
        url: "/film/Successor",
        country: "中国",
        type: "喜剧",
        duration: "影片时长: 2:13:25",
        releaseDate: "2024年7月16日"
    },
    {
        image: "https://s1.imagehub.cc/images/2024/03/08/5c2d89b452e6219ac32d028e0e0fcaa5.jpeg",
        title: "沙丘2",
        url: "/film/Dune2",
        country: "美国/加拿大",
        type: "剧情",
        duration: "影片时长: 2:45:47",
        releaseDate: "2024年3月8日"
    },
    {
        image: "https://s1.imagehub.cc/images/2024/03/08/77c45a12233fb2ee4a9e128dfe733fe7.jpeg",
        title: "周处除三害",
        url: "/film/zccsh",
        country: "中国",
        type: "犯罪",
        duration: "影片时长: 2:14:00",
        releaseDate: "2024年3月1日"
    },
    {
        image: "https://s1.imagehub.cc/images/2024/02/15/fadac74cbd0dff1825d7e446d46e1fe9.jpeg",
        title: "第二十条",
        url: "/film/Article20",
        country: "中国",
        type: "剧情",
        duration: "影片时长: 2:23:23",
        releaseDate: "2024年2月10日"
    },
    {
        image: "https://s1.imagehub.cc/images/2024/02/15/00afacb70f62c5edbcefb9da52f6d553.jpeg",
        title: "飞驰人生2",
        url: "/film/Pegasus2",
        country: "中国",
        type: "剧情",
        duration: "影片时长: 1:56:32",
        releaseDate: "2024年2月10日"
    },
    {
        image: "https://s1.imagehub.cc/images/2024/05/26/80ab593da3c62dd3dff35791e8865fd7.webp",
        title: "我们一起摇太阳",
        url: "/film/VivaLaVida",
        country: "中国",
        type: "剧情",
        duration: "影片时长: 2:09:53",
        releaseDate: "2024年2月10日"
    },
    {
        image: "https://s1.imagehub.cc/images/2024/02/14/a569df061c2f79f77988379669460c21.jpeg",
        title: "年会不能停！",
        url: "/film/JohnnyKeepWalking",
        country: "中国",
        type: "喜剧",
        duration: "影片时长: 1:57:04",
        releaseDate: "2023年12月29日"
    },
    {
        image: "https://s1.imagehub.cc/images/2024/02/02/c7f84824f4f786661086ac7390159a37.jpeg",
        title: "三大队",
        url: "/film/EndlessJourney",
        country: "中国",
        type: "犯罪",
        duration: "影片时长: 2:12:59",
        releaseDate: "2023年12月15日"
    },
    {
        image: "https://s1.imagehub.cc/images/2024/01/13/cf3a7494cdcfb3eee68c3f0b3478b005.jpeg",
        title: "涉过愤怒的海",
        url: "/film/AcrosstheFuriousSea",
        country: "中国",
        type: "悬疑",
        duration: "影片时长: 2:23:55",
        releaseDate: "2023年11月25日"
    },
    {
        image: "https://s1.imagehub.cc/images/2025/03/05/e5322ac5a40357910dbd77907f6138b7.jpg",
        title: "尸体",
        url: "/teleplay/bodies/01",
        country: "英国",
        type: "悬疑",
        duration: "总集数: 6",
        releaseDate: "2023年10月19日"
    },
    {
        image: "https://s1.imagehub.cc/images/2023/11/03/09757e6198a5efc12bb76a8cfa68b26b.png",
        title: "洛基 第二季",
        url: "/teleplay/Loki2",
        country: "美国",
        type: "科幻",
        duration: "总集数: 6",
        releaseDate: "2023年10月5日"
    },
    {
        image: "https://s1.imagehub.cc/images/2023/12/15/1eb3605cf794cfbcca3e153ba329089c.jpeg",
        title: "坚如磐石",
        url: "/film/UndertheLight",
        country: "中国",
        type: "犯罪",
        duration: "影片时长: 2:07:32",
        releaseDate: "2023年9月28日"
    },
    {
        image: "https://s1.imagehub.cc/images/2023/08/30/Oppenheimer.webp",
        title: "奥本海默",
        url: "/film/Oppenheimer",
        country: "美国",
        type: "剧情",
        duration: "影片时长: 3:00:22",
        releaseDate: "2023年8月30日"
    },
    {
        image: "https://s1.imagehub.cc/images/2023/08/25/TheKillingVote.webp",
        title: "国民死刑投票",
        url: "/teleplay/TheKillingVote",
        country: "韩国",
        type: "剧情",
        duration: "总集数: 12",
        releaseDate: "2023年8月10日"
    },
    {
        image: "https://s1.imagehub.cc/images/2023/08/17/NoMoreBets.webp",
        title: "孤注一掷",
        url: "/film/NoMoreBets",
        country: "中国",
        type: "犯罪",
        duration: "影片时长: 2:09:55",
        releaseDate: "2023年8月8日"
    },
    {
        image: "https://s1.imagehub.cc/images/2023/08/17/LostintheStars.webp",
        title: "消失的她",
        url: "/film/LostintheStars",
        country: "中国",
        type: "悬疑",
        duration: "影片时长: 2:01:43",
        releaseDate: "2023年6月22日"
    },
    {
        image: "https://s1.imagehub.cc/images/2023/07/18/Flash.webp",
        title: "闪电侠",
        url: "/film/Flash",
        country: "美国",
        type: "科幻",
        duration: "影片时长: 2:07:19",
        releaseDate: "2023年6月16日"
    },
    {
        image: "https://s1.imagehub.cc/images/2023/06/12/Fast10.webp",
        title: "速度与激情10",
        url: "/film/Fast10",
        country: "美国",
        type: "动作",
        duration: "影片时长: 2:20:50",
        releaseDate: "2023年5月17日"
    },
    {
        image: "https://s1.imagehub.cc/images/2023/05/14/GuardiansoftheGalaxy3.webp",
        title: "银河护卫队3",
        url: "/film/GuardiansoftheGalaxy3",
        country: "美国",
        type: "科幻",
        duration: "影片时长: 2:30:02",
        releaseDate: "2023年5月5日"
    },
    {
        image: "https://s1.imagehub.cc/images/2023/04/15/6b8deba55eca287f19146c2db71f43d5.webp",
        title: "俄罗斯方块",
        url: "/film/Tetris",
        country: "美国",
        type: "传记",
        duration: "影片时长: 1:57:44",
        releaseDate: "2023年3月31日"
    },
    {
        image: "https://s1.imagehub.cc/images/2023/05/14/PostTruth.webp",
        title: "保你平安",
        url: "/film/PostTruth",
        country: "中国",
        type: "剧情",
        duration: "影片时长: 1:51:24",
        releaseDate: "2023年3月10日"
    },
    {
        image: "https://s1.imagehub.cc/images/2023/01/02/49348cf0d5976eb8567f845bb616ae38.webp",
        title: "流浪地球2",
        url: "/film/TheWanderingEarth2",
        country: "中国",
        type: "科幻",
        duration: "影片时长: 2:53:22",
        releaseDate: "2023年1月22日"
    },
    {
        image: "https://s1.imagehub.cc/images/2022/12/16/852ece4d2e2d5d3347f0027b2528f0e6.webp",
        title: "阿凡达2：水之道",
        url: "/film/Avatar2",
        country: "美国",
        type: "科幻",
        duration: "影片时长: 3:04:31",
        releaseDate: "2022年12月16日"
    }
]; 