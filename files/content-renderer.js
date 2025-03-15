// 内容渲染器 - 处理轮播图和时间表的渲染逻辑

// 1. 轮播图渲染函数
function renderCarousel() {
    console.log("开始渲染轮播图");
    const carouselContainer = document.querySelector('.carousel-container');
    const dotsContainer = document.querySelector('.carousel-dots');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    
    if (!carouselContainer || !dotsContainer) {
        console.error('找不到轮播图容器元素');
        return;
    }
    
    // 清空轮播图容器
    carouselContainer.innerHTML = '';
    dotsContainer.innerHTML = '';
    
    // 使用外部数据填充轮播图
    carouselData.forEach((slide, index) => {
        // 创建轮播图幻灯片
        const slideElement = document.createElement('div');
        slideElement.className = 'carousel-slide';
        
        // 添加点击跳转功能
        if (slide.url) {
            slideElement.style.cursor = 'pointer';
            slideElement.addEventListener('click', function() {
                window.location.href = slide.url;
            });
        }
        
        slideElement.innerHTML = `
            <img src="${slide.image}" alt="${slide.title}">
            <div class="carousel-title">${slide.title}</div>
        `;
        carouselContainer.appendChild(slideElement);
        
        // 创建指示点
        const dot = document.createElement('div');
        dot.className = 'carousel-dot' + (index === 0 ? ' active' : '');
        dotsContainer.appendChild(dot);
    });
    
    // 获取更新后的幻灯片和指示点
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    
    let currentSlide = 0;
    const slideCount = slides.length;

    function updateCarousel() {
        carouselContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
        // 更新指示点状态
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        updateCarousel();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        updateCarousel();
    }

    // 添加按钮点击事件
    if (prevBtn && nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
    }

    // 添加指示点点击事件
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel();
        });
    });

    // 自动轮播
    setInterval(nextSlide, 5000);
    
    console.log("轮播图渲染完成");
}

// 2. 时间表渲染函数
function renderScheduleTabs() {
    console.log("开始渲染时间表选项卡");
    const tabsContainer = document.querySelector('.schedule-tabs-container');
    const contentContainer = document.querySelector('.schedule-content');
    
    if (!tabsContainer || !contentContainer) {
        console.error('找不到时间表容器元素');
        return;
    }
    
    console.log("找到容器元素:", tabsContainer, contentContainer);
    
    // 清空容器
    contentContainer.innerHTML = '';
    
    // 为每个日期创建内容区域
    Object.keys(scheduleData).forEach(day => {
        console.log(`创建 ${day} 的内容区域`);
        const dayContent = document.createElement('div');
        dayContent.className = `${day}-content`;
        dayContent.style.display = 'none';
        
        // 添加该日期的所有动漫卡片
        scheduleData[day].forEach(anime => {
            const animeCard = document.createElement('div');
            animeCard.className = 'schedule-card';
            animeCard.innerHTML = `
                <img src="${anime.image}" alt="${anime.title}">
                <div class="title">${anime.title}</div>
                <div class="time">${anime.time}</div>
            `;
            dayContent.appendChild(animeCard);
        });
        
        contentContainer.appendChild(dayContent);
    });
    
    // 设置选项卡点击事件
    const tabs = tabsContainer.querySelectorAll('.schedule-tab');
    console.log("找到选项卡:", tabs.length);
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const day = this.getAttribute('data-day');
            console.log(`点击了 ${day} 选项卡`);
            
            // 更新选项卡样式
            tabs.forEach(t => {
                t.classList.remove('active');
                t.style.backgroundColor = 'var(--card-bg)';
                t.style.color = 'var(--text-color)';
            });
            this.classList.add('active');
            this.style.backgroundColor = 'var(--hover-color)';
            this.style.color = 'white';
            
            // 更新内容显示
            const allContents = contentContainer.children;
            console.log(`找到 ${allContents.length} 个内容区域`);
            
            for (let i = 0; i < allContents.length; i++) {
                allContents[i].style.display = 'none';
            }
            
            // 显示对应日期的内容
            const dayContent = contentContainer.querySelector(`.${day}-content`);
            if (dayContent) {
                console.log(`显示 ${day} 的内容`);
                dayContent.style.display = 'grid';
            } else {
                console.error(`找不到内容: .${day}-content`);
            }
        });
    });
    
    // 默认显示今天的时间表
    function setDefaultTab() {
        // 获取今天是周几（0是周日，1是周一，以此类推）
        const today = new Date().getDay();
        // 将JS的日期转换为我们的数据格式
        const dayMap = {
            0: 'sunday',
            1: 'monday',
            2: 'tuesday',
            3: 'wednesday',
            4: 'thursday',
            5: 'friday',
            6: 'saturday'
        };
        
        const todayString = dayMap[today];
        console.log(`今天是 ${todayString}`);
        
        // 找到今天对应的选项卡
        const todayTab = document.querySelector(`.schedule-tab[data-day="${todayString}"]`);
        if (todayTab) {
            console.log(`找到今天的选项卡`);
            // 设置今天选项卡为激活状态
            todayTab.classList.add('active');
            todayTab.style.backgroundColor = 'var(--hover-color)';
            todayTab.style.color = 'white';
            
            // 显示今天的内容
            const todayContent = document.querySelector(`.${todayString}-content`);
            if (todayContent) {
                console.log(`显示今天的内容`);
                todayContent.style.display = 'grid';
            } else {
                console.error(`找不到今天的内容: .${todayString}-content`);
            }
        } else {
            console.log(`找不到今天的选项卡，默认显示周一`);
            // 如果找不到今天的选项卡，默认显示周一
            const mondayTab = document.querySelector('.schedule-tab[data-day="monday"]');
            if (mondayTab) {
                mondayTab.classList.add('active');
                mondayTab.style.backgroundColor = 'var(--hover-color)';
                mondayTab.style.color = 'white';
                
                const mondayContent = document.querySelector('.monday-content');
                if (mondayContent) {
                    mondayContent.style.display = 'grid';
                } else {
                    console.error('找不到周一内容: .monday-content');
                }
            }
        }
    }
    
    // 初始化时设置默认选项卡
    setDefaultTab();
    console.log("时间表渲染完成");
}

// 页面加载完成后执行渲染
document.addEventListener('DOMContentLoaded', function() {
    // 渲染轮播图
    renderCarousel();
    
    // 渲染时间表
    renderScheduleTabs();
}); 