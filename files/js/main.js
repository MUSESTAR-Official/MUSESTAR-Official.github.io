// main.js - 主要功能脚本
// 包含所有UI交互和渲染逻辑

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有功能
    initNavbarScroll();
    initCarousel();
    initThemeToggle();
    initBackToTop();
    initAnnouncement();
    initializePage();
});

// 导航栏滚动效果
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    // 初始检查，确保页面加载时就应用正确的样式
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// 轮播图功能
function initCarousel() {
    const carousel = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    
    let currentSlide = 0;
    const slideCount = slides.length;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
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
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // 添加指示点点击事件
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel();
        });
    });

    // 自动轮播
    setInterval(nextSlide, 5000);
}

// 主题切换功能
function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const icon = themeToggle.querySelector('i');
    const htmlElement = document.documentElement;

    // 检查本地存储中的主题设置，默认为dark
    const currentTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-theme', currentTheme);
    updateIcon(currentTheme);

    themeToggle.addEventListener('click', (e) => {
        // 阻止事件默认行为和冒泡
        e.preventDefault();
        e.stopPropagation();
        
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
        
        // 强制重新应用样式，添加过渡效果
        document.body.classList.add('theme-transition');
        setTimeout(function() {
            document.body.classList.remove('theme-transition');
        }, 300);
        
        return false; // 阻止默认行为
    });

    function updateIcon(theme) {
        icon.className = theme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// 回到顶部按钮功能
function initBackToTop() {
    const backToTop = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 公告功能
function initAnnouncement() {
    const announcement = document.querySelector('.announcement');
    const announcementContent = announcement.querySelector('.announcement-content');
    const announcementClose = announcement.querySelector('.announcement-close');

    // 从announcement-data.js中获取公告内容
    if (typeof announcementData !== 'undefined' && announcementData.enabled) {
        // 设置公告内容
        announcementContent.textContent = announcementData.text;
        
        // 使用配置的延迟时间显示公告
        setTimeout(() => {
            announcement.classList.add('visible');
        }, announcementData.delay);
        
        // 如果设置了自动关闭时间，则自动关闭公告
        if (announcementData.autoCloseDelay > 0) {
            setTimeout(() => {
                announcement.classList.remove('visible');
            }, announcementData.autoCloseDelay);
        }
    }

    // 关闭公告
    announcementClose.addEventListener('click', () => {
        announcement.classList.remove('visible');
    });
}

// 1. 横向动漫卡片渲染和交互逻辑
function renderHorizontalAnime() {
    const container = document.querySelector('.anime-grid');
    if (!container) {
        console.error('找不到横向动漫容器元素');
        return;
    }
    
    console.log('开始渲染横向动漫卡片');
    
    // 使用文档片段减少DOM重绘
    const fragment = document.createDocumentFragment();
    
    // 渲染每个动漫卡片
    horizontalAnimeData.forEach((anime, index) => {
        const animeElement = document.createElement('div');
        
        // 创建卡片内容 - 修复标题位置，确保标题在卡片外部
        animeElement.innerHTML = `
            <div class="anime-card">
                <img src="${anime.image}" alt="${anime.title}" loading="lazy">
                <video src="${anime.video}" loop muted preload="none" style="display: none;"></video>
                <div class="error-icon" style="display: none;">
                    <i class="fas fa-exclamation-circle"></i>
                </div>
            </div>
            <div class="anime-title">${anime.title}</div>
        `;
        
        // 添加点击跳转功能
        if (anime.url) {
            animeElement.style.cursor = 'pointer';
            animeElement.addEventListener('click', function() {
                window.location.href = anime.url;
            });
        }
        
        // 添加到文档片段
        fragment.appendChild(animeElement);
        
        // 获取视频和图片元素
        const video = animeElement.querySelector('video');
        const img = animeElement.querySelector('img');
        const errorIcon = animeElement.querySelector('.error-icon');
        const cardElement = animeElement.querySelector('.anime-card');
        
        // 特别处理第五个卡片，确保没有阴影
        if (index === 4) {
            animeElement.style.setProperty('box-shadow', 'none', 'important');
            cardElement.style.setProperty('box-shadow', 'none', 'important');
        }
        
        // 使用事件委托减少事件监听器数量
        animeElement.dataset.index = index;
    });
    
    // 一次性将所有元素添加到DOM
    container.innerHTML = '';
    container.appendChild(fragment);
    
    // 使用事件委托处理鼠标事件
    setupHorizontalEventDelegation(container);
    
    console.log('横向动漫卡片渲染完成');
}

// 使用事件委托处理横向动漫卡片的鼠标事件
function setupHorizontalEventDelegation(container) {
    // 鼠标进入事件
    container.addEventListener('mouseenter', (e) => {
        const animeElement = findParentCard(e.target);
        if (!animeElement) return;
        
        const index = parseInt(animeElement.dataset.index);
        const cardElement = animeElement.querySelector('.anime-card');
        const video = animeElement.querySelector('video');
        const img = animeElement.querySelector('img');
        const errorIcon = animeElement.querySelector('.error-icon');
        
        // 设置卡片放大效果
        animeElement.style.transform = 'scale(1.25)';
        animeElement.style.zIndex = '100';
        animeElement.style.transition = 'all 0.25s cubic-bezier(0.25, 0.1, 0.25, 1.0)';
        animeElement.style.transformOrigin = 'center center';
        
        // 强制确保没有阴影
        animeElement.style.setProperty('box-shadow', 'none', 'important');
        cardElement.style.setProperty('box-shadow', 'none', 'important');
        
        // 特别处理第五个卡片
        if (index === 4) {
            requestAnimationFrame(() => {
                animeElement.style.setProperty('box-shadow', 'none', 'important');
                cardElement.style.setProperty('box-shadow', 'none', 'important');
            });
        }
        
        // 显示视频，隐藏图片
        img.style.display = 'none';
        video.style.display = 'block';
        
        // 尝试播放视频
        try {
            video.play().catch(error => {
                console.error('视频播放失败:', error);
                img.style.display = 'block';
                video.style.display = 'none';
                errorIcon.style.display = 'flex';
            });
        } catch (error) {
            console.error('视频播放出错:', error);
            img.style.display = 'block';
            video.style.display = 'none';
            errorIcon.style.display = 'flex';
        }
        
        // 推开其他卡片
        const allCards = container.querySelectorAll('.anime-grid > div');
        const currentIndex = Array.from(allCards).indexOf(animeElement);
        
        allCards.forEach((otherCard, otherIndex) => {
            if (otherCard !== animeElement) {
                const otherCardElement = otherCard.querySelector('.anime-card');
                
                // 确保其他卡片也没有阴影
                otherCard.style.setProperty('box-shadow', 'none', 'important');
                if (otherCardElement) {
                    otherCardElement.style.setProperty('box-shadow', 'none', 'important');
                }
                
                // 左侧卡片向左移动，右侧卡片向右移动
                if (otherIndex < currentIndex) {
                    otherCard.style.transform = 'translateX(-30px)';
                } else {
                    otherCard.style.transform = 'translateX(30px)';
                }
                otherCard.style.transition = 'all 0.25s cubic-bezier(0.25, 0.1, 0.25, 1.0)';
            }
        });
    }, true);
    
    // 鼠标离开事件
    container.addEventListener('mouseleave', (e) => {
        const animeElement = findParentCard(e.target);
        if (!animeElement) return;
        
        const index = parseInt(animeElement.dataset.index);
        const cardElement = animeElement.querySelector('.anime-card');
        const video = animeElement.querySelector('video');
        const img = animeElement.querySelector('img');
        const errorIcon = animeElement.querySelector('.error-icon');
        
        // 重置卡片样式
        animeElement.style.transform = 'scale(1)';
        animeElement.style.zIndex = '';
        animeElement.style.transition = 'all 0.25s cubic-bezier(0.25, 0.1, 0.25, 1.0)';
        animeElement.style.transformOrigin = '';
        
        // 强制确保没有阴影
        animeElement.style.setProperty('box-shadow', 'none', 'important');
        cardElement.style.setProperty('box-shadow', 'none', 'important');
        
        // 特别处理第五个卡片
        if (index === 4) {
            requestAnimationFrame(() => {
                animeElement.style.setProperty('box-shadow', 'none', 'important');
                cardElement.style.setProperty('box-shadow', 'none', 'important');
            });
        }
        
        // 显示图片，隐藏视频
        img.style.display = 'block';
        video.style.display = 'none';
        errorIcon.style.display = 'none';
        
        // 暂停视频并重置
        video.pause();
        video.currentTime = 0;
        
        // 重置其他卡片
        const allCards = container.querySelectorAll('.anime-grid > div');
        allCards.forEach((otherCard) => {
            if (otherCard !== animeElement) {
                otherCard.style.transform = '';
                otherCard.style.transition = 'all 0.25s cubic-bezier(0.25, 0.1, 0.25, 1.0)';
                
                // 确保其他卡片也没有阴影
                otherCard.style.setProperty('box-shadow', 'none', 'important');
                const otherCardElement = otherCard.querySelector('.anime-card');
                if (otherCardElement) {
                    otherCardElement.style.setProperty('box-shadow', 'none', 'important');
                }
            }
        });
    }, true);
}

// 查找父级卡片元素
function findParentCard(element) {
    while (element && !element.parentNode.classList.contains('anime-grid')) {
        element = element.parentNode;
        if (!element) return null;
    }
    return element;
}

// 全局样式重置函数 - 确保所有卡片没有阴影
function forceRemoveAllShadows() {
    // 使用requestAnimationFrame优化性能
    requestAnimationFrame(() => {
        // 获取所有相关元素
        const allElements = document.querySelectorAll('.horizontal-section *, .anime-grid, .anime-grid *, .anime-card, .anime-card *');
        
        // 使用批量样式设置减少重绘
        const style = {
            'box-shadow': 'none',
            '-webkit-box-shadow': 'none',
            '-moz-box-shadow': 'none',
            'filter': 'none',
            'text-shadow': 'none',
            'border-shadow': 'none',
            'drop-shadow': 'none',
            'outline': 'none',
            'border': 'none'
        };
        
        // 遍历所有元素，强制移除阴影
        allElements.forEach(element => {
            // 批量设置样式
            Object.keys(style).forEach(key => {
                element.style.setProperty(key, style[key], 'important');
            });
        });
    });
}

// 2. 纵向动漫卡片渲染逻辑
function renderVerticalAnime() {
    const container = document.querySelector('.vertical-section');
    if (!container) {
        console.error('找不到纵向动漫容器元素');
        return;
    }
    
    console.log('开始渲染纵向动漫卡片');
    
    // 清空容器
    container.innerHTML = '';
    
    // 添加内容
    verticalAnimeData.forEach(anime => {
        const animeCard = document.createElement('div');
        animeCard.className = 'vertical-card';
        animeCard.innerHTML = `
            <img src="${anime.image}" alt="${anime.title}">
            <div class="title">${anime.title}</div>
        `;
        
        // 添加点击跳转功能
        if (anime.url) {
            animeCard.style.cursor = 'pointer';
            animeCard.addEventListener('click', function() {
                window.location.href = anime.url;
            });
        }
        
        container.appendChild(animeCard);
    });
    
    console.log('纵向动漫卡片渲染完成');
}

// 3. 页面初始化函数
function initializePage() {
    console.log('页面初始化开始');
    
    // 渲染横向动漫卡片
    renderHorizontalAnime();
    
    // 渲染纵向动漫卡片
    renderVerticalAnime();
    
    // 强制移除所有阴影
    forceRemoveAllShadows();
    
    console.log('页面初始化完成');
} 