// 时间表数据 - 每日更新时间表
// 使用按需加载策略，初始只加载当天和明天的数据
const scheduleData = {};

// 获取当前是星期几
function getCurrentDay() {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const today = new Date().getDay(); // 0是星期日，1是星期一，以此类推
    return days[today];
}

// 获取明天是星期几
function getTomorrowDay() {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return days[tomorrow.getDay()];
}

// 初始化时间表数据 - 只加载当天和明天的数据
const currentDay = getCurrentDay();
const tomorrowDay = getTomorrowDay();

// 当天的数据
scheduleData[currentDay] = [
    {
        image: " ",
        title: "测试中",
        time: "更新时间: 22:00",
        url: `/animation/${currentDay}/test`,
        country: currentDay === "monday" ? "中国" : (currentDay === "wednesday" ? "美国" : "日本"),
        type: "测试",
        episodes: "未知"
    }
];

// 如果是星期四，加载实际数据
if (currentDay === "thursday") {
    scheduleData[currentDay] = [
        {
            image: "https://s1.imagehub.cc/images/2024/12/08/4448e7557b33850ac40959b8ac720130.jpg",
            title: "BanG Dream! Ave Mujica",
            time: "更新时间: 22:00后",
            url: "/animation/AveMujica/01",
            country: "日本",
            type: "音乐",
            episodes: "13话"
        }
    ];
}

// 明天的数据
scheduleData[tomorrowDay] = [
    {
        image: " ",
        title: "测试中",
        time: "更新时间: 22:00",
        url: `/animation/${tomorrowDay}/test`,
        country: tomorrowDay === "monday" ? "中国" : (tomorrowDay === "wednesday" ? "美国" : (tomorrowDay === "friday" ? "韩国" : "日本")),
        type: "测试",
        episodes: "未知"
    }
];

// 如果明天是星期四，加载实际数据
if (tomorrowDay === "thursday") {
    scheduleData[tomorrowDay] = [
        {
            image: "https://s1.imagehub.cc/images/2024/12/08/4448e7557b33850ac40959b8ac720130.jpg",
            title: "BanG Dream! Ave Mujica",
            time: "更新时间: 22:00后",
            url: "/animation/AveMujica/01",
            country: "日本",
            type: "音乐",
            episodes: "13话"
        }
    ];
}

// 完整的时间表数据 - 只在需要时加载
const fullScheduleData = {
    monday: [
        {
            image: " ",
            title: "测试中",
            time: "更新时间: 22:00",
            url: "/animation/monday/test",
            country: "中国",
            type: "测试",
            episodes: "未知"
        }
    ],
    tuesday: [
        {
            image: " ",
            title: "测试中",
            time: "更新时间: 22:00",
            url: "/animation/tuesday/test",
            country: "日本",
            type: "测试",
            episodes: "未知"
        }
    ],
    wednesday: [
        {
            image: " ",
            title: "测试中",
            time: "更新时间: 22:00",
            url: "/animation/wednesday/test",
            country: "美国",
            type: "测试",
            episodes: "未知"
        }
    ],
    thursday: [
        {
            image: "https://s1.imagehub.cc/images/2024/12/08/4448e7557b33850ac40959b8ac720130.jpg",
            title: "BanG Dream! Ave Mujica",
            time: "更新时间: 22:00后",
            url: "/animation/AveMujica/01",
            country: "日本",
            type: "音乐",
            episodes: "13话"
        }
    ],
    friday: [
        {
            image: " ",
            title: "测试中",
            time: "更新时间: 22:00",
            url: "/animation/friday/test",
            country: "韩国",
            type: "测试",
            episodes: "未知"
        }
    ],
    saturday: [
        {
            image: " ",
            title: "测试中",
            time: "更新时间: 22:00",
            url: "/animation/saturday/test",
            country: "日本",
            type: "测试",
            episodes: "未知"
        }
    ],
    sunday: [
        {
            image: " ",
            title: "测试中",
            time: "更新时间: 22:00",
            url: "/animation/sunday/test",
            country: "日本",
            type: "测试",
            episodes: "未知"
        }
    ]
};

// 懒加载函数 - 当用户点击特定日期标签时加载该日期的数据
function loadScheduleForDay(day) {
    if (!scheduleData[day] && fullScheduleData[day]) {
        scheduleData[day] = fullScheduleData[day];
        // 这里可以添加渲染新数据的代码
    }
    return scheduleData[day] || [];
}

// 加载所有日期的数据
function loadAllScheduleData() {
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    days.forEach(day => {
        if (!scheduleData[day] && fullScheduleData[day]) {
            scheduleData[day] = fullScheduleData[day];
        }
    });
    return scheduleData;
} 