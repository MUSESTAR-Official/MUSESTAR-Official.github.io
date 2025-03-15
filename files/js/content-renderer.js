// 内容渲染器 - 处理轮播图和时间表的渲染逻辑

// 1. 轮播图渲染函数
function renderCarousel() {
    console.log("开始渲染轮播图");
    const carouselContainer = document.querySelector('.carousel-container');
    const dotsContainer = document.querySelector('.carousel-dots');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    
    // 创建立即播放按钮
    const playBtn = document.createElement('button');
    playBtn.className = 'carousel-play-btn';
    playBtn.innerHTML = '<i class="fas fa-play"></i> 立即播放';
    document.querySelector('.carousel').appendChild(playBtn);
    
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
        
        // 更新立即播放按钮的链接
        if (carouselData[currentSlide] && carouselData[currentSlide].url) {
            playBtn.onclick = function() {
                window.location.href = carouselData[currentSlide].url;
            };
        }
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
    
    // 初始化立即播放按钮
    updateCarousel();

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
            
            // 构建卡片HTML，将话数标签放在图片内部
            animeCard.innerHTML = `
                <div class="img-container" style="position: relative; width: 100%;">
                    <img src="${anime.image}" alt="${anime.title}">
                    <div class="country-tag">${anime.country || '日本'}</div>
                    <div class="type-tag">${anime.type || '动画'}</div>
                    <div class="episode-count" style="position: absolute; right: 10px; bottom: 10px;">${anime.episodes || '未知'}</div>
                </div>
                <div class="title">${anime.title}</div>
                <div class="time">${anime.time}</div>
            `;
            
            // 添加点击跳转功能
            if (anime.url) {
                animeCard.style.cursor = 'pointer';
                animeCard.addEventListener('click', function() {
                    window.location.href = anime.url;
                });
            }
            
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

// 3. 渲染动漫列表
function renderVerticalAnimeSection() {
    console.log("开始渲染动漫列表");
    const verticalSection = document.querySelector('.vertical-section');
    
    if (!verticalSection) {
        console.error('找不到动漫列表容器元素');
        return;
    }
    
    // 清空容器
    verticalSection.innerHTML = '';
    
    // 使用外部数据填充动漫列表，最多显示10个
    const maxItems = Math.min(verticalAnimeData.length, 10);
    
    for (let i = 0; i < maxItems; i++) {
        const anime = verticalAnimeData[i];
        const animeCard = document.createElement('div');
        animeCard.className = 'vertical-card';
        
        // 构建卡片HTML，将话数标签放在图片内部
        animeCard.innerHTML = `
            <div class="img-container" style="position: relative; width: 100%;">
                <img src="${anime.image}" alt="${anime.title}" onerror="this.src='https://s1.imagehub.cc/images/2024/12/08/error-image.jpg';">
                <div class="country-tag">${anime.country || '日本'}</div>
                <div class="type-tag">${anime.type || '动画'}</div>
                <div class="episode-count" style="position: absolute; right: 10px; bottom: 10px;">${anime.episodes || '未知'}</div>
            </div>
            <div class="title">${anime.title}</div>
            <div class="release-date">${anime.releaseDate || '2024'}</div>
        `;
        
        // 添加点击跳转功能
        if (anime.url) {
            animeCard.style.cursor = 'pointer';
            animeCard.addEventListener('click', function() {
                window.location.href = anime.url;
            });
        }
        
        verticalSection.appendChild(animeCard);
    }
    
    console.log("动漫列表渲染完成");
}

// 4. 渲染影视列表
function renderVerticalMovieSection() {
    console.log("开始渲染影视列表");
    const movieSection = document.getElementById('movie-section');
    
    if (!movieSection) {
        console.error('找不到影视列表容器元素');
        return;
    }
    
    // 清空容器
    movieSection.innerHTML = '';
    
    // 使用外部数据填充影视列表，最多显示10个
    const maxItems = Math.min(verticalMovieData.length, 10);
    
    for (let i = 0; i < maxItems; i++) {
        const movie = verticalMovieData[i];
        const movieCard = document.createElement('div');
        movieCard.className = 'vertical-card';
        
        // 构建卡片HTML，将时长标签放在图片内部
        movieCard.innerHTML = `
            <div class="img-container" style="position: relative; width: 100%;">
                <img src="${movie.image}" alt="${movie.title}" onerror="this.src='https://s1.imagehub.cc/images/2024/12/08/error-image.jpg';">
                <div class="country-tag">${movie.country || '美国'}</div>
                <div class="type-tag">${movie.type || '电影'}</div>
                <div class="episode-count" style="position: absolute; right: 10px; bottom: 10px;">${movie.duration || '未知'}</div>
            </div>
            <div class="title">${movie.title}</div>
            <div class="release-date">${movie.releaseDate || '2024'}</div>
        `;
        
        // 添加点击跳转功能
        if (movie.url) {
            movieCard.style.cursor = 'pointer';
            movieCard.addEventListener('click', function() {
                window.location.href = movie.url;
            });
        }
        
        movieSection.appendChild(movieCard);
    }
    
    console.log("影视列表渲染完成");
}

// 5. 渲染演唱会列表
function renderVerticalConcertSection() {
    console.log("开始渲染演唱会列表");
    const concertSection = document.getElementById('concert-section');
    
    if (!concertSection) {
        console.error('找不到演唱会列表容器元素');
        return;
    }
    
    // 清空容器
    concertSection.innerHTML = '';
    
    // 使用外部数据填充演唱会列表，最多显示10个
    const maxItems = Math.min(verticalConcertData.length, 10);
    
    for (let i = 0; i < maxItems; i++) {
        const concert = verticalConcertData[i];
        const concertCard = document.createElement('div');
        concertCard.className = 'vertical-card';
        
        // 构建卡片HTML，将时长标签放在图片内部
        concertCard.innerHTML = `
            <div class="img-container" style="position: relative; width: 100%;">
                <img src="${concert.image}" alt="${concert.title}" onerror="this.src='https://s1.imagehub.cc/images/2024/12/08/error-image.jpg';">
                <div class="country-tag">${concert.country || '日本'}</div>
                <div class="type-tag">${concert.type || '演唱会'}</div>
                <div class="episode-count" style="position: absolute; right: 10px; bottom: 10px;">${concert.duration || '未知'}</div>
            </div>
            <div class="title">${concert.title}</div>
            <div class="release-date">${concert.releaseDate || '2024'}</div>
        `;
        
        // 添加点击跳转功能
        if (concert.url) {
            concertCard.style.cursor = 'pointer';
            concertCard.addEventListener('click', function() {
                window.location.href = concert.url;
            });
        }
        
        concertSection.appendChild(concertCard);
    }
    
    console.log("演唱会列表渲染完成");
}

// 页面加载完成后执行渲染
document.addEventListener('DOMContentLoaded', function() {
    // 渲染轮播图
    renderCarousel();
    
    // 渲染时间表
    renderScheduleTabs();
    
    // 渲染动漫列表
    renderVerticalAnimeSection();
    
    // 渲染影视列表
    renderVerticalMovieSection();
    
    // 渲染演唱会列表
    renderVerticalConcertSection();
}); 