/**
 * 缪斯星动漫配置文件
 * 此文件用于配置动漫页面的动态数据
 */

// 动漫配置数据
const animeConfig = {
    // 示例动漫配置，请根据实际情况修改
    "ave_mujica": {
        "title": "动漫标题示例",          // 动漫标题
        "keywords": "关键词示例",          // 关键词，用于SEO
        "synopsis": "这里是动漫简介示例，可以写详细的剧情介绍。", // 剧情简介
        "searchKeyword": "搜索关键词示例", // 第三方搜索关键词
        "backgroundImage": "https://example.com/background.jpg", // 背景图片URL
        "thumbnailUrl": "https://s1.imagehub.cc/images/2025/02/27/62748f14ca38ab1da01921b6753aee7f.jpg", // 预览图
        "totalEpisodes": 12,             // 总集数
        "episodes": {
            // 各集信息
            "01": {
                "linkOD": "https://my.microsoftpersonalcontent.com/personal/34ad44ca3c61e505/_layouts/15/download.aspx?share=示例链接OD-01",
                "linkDT": "https://data.musestar.cc/onedrive/animation/示例链接DT-01",
                "magnetLink": "https://acgrip.art/?term=ANi+示例磁力01"
            },
            "02": {
                "linkOD": "https://my.microsoftpersonalcontent.com/personal/34ad44ca3c61e505/_layouts/15/download.aspx?share=示例链接OD-02",
                "linkDT": "https://data.musestar.cc/onedrive/animation/示例链接DT-02",
                "magnetLink": "https://acgrip.art/?term=ANi+示例磁力02"
            },
            // 可以继续添加更多集数
            "03": {
                "linkOD": "https://my.microsoftpersonalcontent.com/personal/34ad44ca3c61e505/_layouts/15/download.aspx?share=示例链接OD-03",
                "linkDT": "https://data.musestar.cc/onedrive/animation/示例链接DT-03",
                "magnetLink": "https://acgrip.art/?term=ANi+示例磁力03"
            },
            "04": {
                "linkOD": "https://my.microsoftpersonalcontent.com/personal/34ad44ca3c61e505/_layouts/15/download.aspx?share=示例链接OD-04",
                "linkDT": "https://data.musestar.cc/onedrive/animation/示例链接DT-04",
                "magnetLink": "https://acgrip.art/?term=ANi+示例磁力04"
            },
            "05": {
                "linkOD": "https://my.microsoftpersonalcontent.com/personal/34ad44ca3c61e505/_layouts/15/download.aspx?share=示例链接OD-05",
                "linkDT": "https://data.musestar.cc/onedrive/animation/示例链接DT-05",
                "magnetLink": "https://acgrip.art/?term=ANi+示例磁力05"
            },
            "06": {
                "linkOD": "https://my.microsoftpersonalcontent.com/personal/34ad44ca3c61e505/_layouts/15/download.aspx?share=示例链接OD-06",
                "linkDT": "https://data.musestar.cc/onedrive/animation/示例链接DT-06",
                "magnetLink": "https://acgrip.art/?term=ANi+示例磁力06"
            },
            "07": {
                "linkOD": "https://my.microsoftpersonalcontent.com/personal/34ad44ca3c61e505/_layouts/15/download.aspx?share=示例链接OD-07",
                "linkDT": "https://data.musestar.cc/onedrive/animation/示例链接DT-07",
                "magnetLink": "https://acgrip.art/?term=ANi+示例磁力07"
            },
            "08": {
                "linkOD": "https://my.microsoftpersonalcontent.com/personal/34ad44ca3c61e505/_layouts/15/download.aspx?share=示例链接OD-08",
                "linkDT": "https://data.musestar.cc/onedrive/animation/示例链接DT-08",
                "magnetLink": "https://acgrip.art/?term=ANi+示例磁力08"
            },
            "09": {
                "linkOD": "https://my.microsoftpersonalcontent.com/personal/34ad44ca3c61e505/_layouts/15/download.aspx?share=示例链接OD-09",
                "linkDT": "https://data.musestar.cc/onedrive/animation/示例链接DT-09",
                "magnetLink": "https://acgrip.art/?term=ANi+示例磁力09"
            },
            "10": {
                "linkOD": "https://my.microsoftpersonalcontent.com/personal/34ad44ca3c61e505/_layouts/15/download.aspx?share=示例链接OD-10",
                "linkDT": "https://data.musestar.cc/onedrive/animation/示例链接DT-10",
                "magnetLink": "https://acgrip.art/?term=ANi+示例磁力10"
            },
            "11": {
                "linkOD": "https://my.microsoftpersonalcontent.com/personal/34ad44ca3c61e505/_layouts/15/download.aspx?share=示例链接OD-11",
                "linkDT": "https://data.musestar.cc/onedrive/animation/示例链接DT-11",
                "magnetLink": "https://acgrip.art/?term=ANi+示例磁力11"
            },
            "12": {
                "linkOD": "https://my.microsoftpersonalcontent.com/personal/34ad44ca3c61e505/_layouts/15/download.aspx?share=示例链接OD-12",
                "linkDT": "https://data.musestar.cc/onedrive/animation/示例链接DT-12",
                "magnetLink": "https://acgrip.art/?term=ANi+示例磁力12"
            }
        }
    },
    // 可以添加更多动漫的配置
    "other_anime_id": {
        "title": "另一部动漫",
        "keywords": "另一部,动漫,关键词",
        "synopsis": "这是另一部动漫的简介...",
        "searchKeyword": "另一部动漫搜索词",
        "backgroundImage": "https://example.com/another-background.jpg",
        "thumbnailUrl": "https://example.com/another-thumbnail.jpg",
        "totalEpisodes": 24,
        "episodes": {
            "01": {
                "linkOD": "https://example.com/od-link-01",
                "linkDT": "https://example.com/dt-link-01",
                "magnetLink": "https://example.com/magnet-01"
            },
            // ... 其他集数
        }
    }
};

// 触发配置加载完成事件
window.dispatchEvent(new Event('animeConfigLoaded')); 