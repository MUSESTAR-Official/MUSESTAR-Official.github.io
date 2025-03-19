// main.js - 主要功能脚本
// 包含所有UI交互和渲染逻辑

// 设置默认主题为黑色模式
document.documentElement.setAttribute('data-theme', 'dark');

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 从本地存储加载主题设置
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        
        // 同步所有主题切换按钮的图标
        if (savedTheme === 'light') {
            const themeToggleIcon = document.querySelector('.theme-toggle i');
            if (themeToggleIcon) {
                themeToggleIcon.classList.remove('fa-moon');
                themeToggleIcon.classList.add('fa-sun');
            }
            
            const mobileThemeToggleIcon = document.querySelector('.mobile-theme-toggle i');
            if (mobileThemeToggleIcon) {
                mobileThemeToggleIcon.classList.remove('fa-moon');
                mobileThemeToggleIcon.classList.add('fa-sun');
            }
        }
    }

    // 初始化所有功能
    initNavbarScroll();
    initCarousel();
    initThemeToggle();
    initBackToTop();
    initAnnouncement();
    initializePage();
    initMobileThemeToggle();
    initMobileView();
    updateThemeToggle();
});

// 节流函数 - 限制函数执行频率
function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return func.apply(this, args);
    };
}

// 导航栏滚动效果
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    // 初始检查，确保页面加载时就应用正确的样式
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // 使用节流函数减少滚动事件触发频率
    const handleScroll = throttle(function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, 100); // 100ms的节流延迟
    
    window.addEventListener('scroll', handleScroll, { passive: true });
}

// 轮播图功能
function initCarousel() {
    const carousel = document.querySelector('.carousel-container');
    // 如果没有轮播图容器，则退出函数
    if (!carousel) return;
    
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    
    // 如果没有幻灯片，则退出函数
    if (slides.length === 0) return;
    
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
}

// 主题切换功能
function initThemeToggle() {
    // 获取元素和初始状态
    const themeToggle = document.querySelector('.theme-toggle');
    const mobileThemeToggle = document.querySelector('.mobile-theme-toggle');
    const htmlElement = document.documentElement;
    
    if (!themeToggle) return;
    
    // 检查本地存储中的主题设置，默认为dark
    const currentTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-theme', currentTheme);
    
    // 初始化图标状态
    updateAllThemeIcons(currentTheme);
    
    // 桌面版主题切换按钮事件
    themeToggle.addEventListener('click', function(e) {
        // 阻止事件默认行为和冒泡
        e.preventDefault();
        e.stopPropagation();
        
        toggleTheme();
        
        return false; // 阻止默认行为
    });
    
    // 移动版主题切换按钮事件
    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', function() {
            toggleTheme();
        });
    }
    
    // 统一切换主题的函数
    function toggleTheme() {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        // 更新主题
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // 更新所有图标
        updateAllThemeIcons(newTheme);
        
        // 强制重新应用样式，添加过渡效果
        document.body.classList.add('theme-transition');
        setTimeout(function() {
            document.body.classList.remove('theme-transition');
        }, 300);
    }
    
    // 统一更新所有主题图标
    function updateAllThemeIcons(theme) {
        // 更新桌面版图标
        const themeToggleIcon = themeToggle.querySelector('i');
        if (themeToggleIcon) {
            themeToggleIcon.className = theme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
        }
        
        // 更新移动版图标
        const mobileThemeToggleIcon = mobileThemeToggle ? mobileThemeToggle.querySelector('i') : null;
        if (mobileThemeToggleIcon) {
            mobileThemeToggleIcon.className = theme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
}

// 回到顶部按钮功能
function initBackToTop() {
    const backToTop = document.querySelector('.back-to-top');
    
    // 使用节流函数减少滚动事件触发频率
    const handleScroll = throttle(function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }, 100); // 100ms的节流延迟
    
    window.addEventListener('scroll', handleScroll, { passive: true });

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
    
    // 检查页面是否包含横向动漫卡片容器
    const animeGridContainer = document.querySelector('.anime-grid');
    if (animeGridContainer) {
        // 渲染横向动漫卡片 - 使用分批加载
        renderHorizontalAnimeProgressively();
        
        // 强制移除所有阴影
        forceRemoveAllShadows();
    }
    
    console.log('页面初始化完成');
}

// 分批渲染横向动漫卡片
function renderHorizontalAnimeProgressively() {
    const container = document.querySelector('.anime-grid');
    if (!container) {
        console.error('找不到横向动漫容器元素');
        return;
    }
    
    console.log('开始渲染横向动漫卡片');
    
    // 清空容器
    container.innerHTML = '';
    
    // 分批加载卡片
    function loadCardsProgressively(index) {
        if (index >= horizontalAnimeData.length) {
            // 所有卡片都已加载完成
            // 使用事件委托处理鼠标事件
            setupHorizontalEventDelegation(container);
            console.log('横向动漫卡片渲染完成');
            return;
        }
        
        const anime = horizontalAnimeData[index];
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
        
        // 使用动画效果显示卡片
        animeElement.style.opacity = '0';
        animeElement.style.transform = 'translateY(20px)';
        animeElement.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        
        // 添加到容器
        container.appendChild(animeElement);
        
        // 使用requestAnimationFrame确保过渡效果生效
        requestAnimationFrame(() => {
            setTimeout(() => {
                animeElement.style.opacity = '1';
                animeElement.style.transform = 'translateY(0)';
            }, 10);
        });
        
        // 延迟加载下一个卡片
        setTimeout(() => {
            loadCardsProgressively(index + 1);
        }, 100); // 100ms的延迟
    }
    
    // 开始分批加载
    loadCardsProgressively(0);
}

// 移动端主题切换功能
function initMobileThemeToggle() {
    // 此函数不再单独处理点击事件，只负责创建移动端主题切换按钮
    // 实际的点击处理已移至initThemeToggle函数中统一处理
    const mobileThemeToggle = document.querySelector('.mobile-theme-toggle');
    if (mobileThemeToggle) {
        // 确保移动版按钮的初始状态与当前主题一致
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const mobileThemeToggleIcon = mobileThemeToggle.querySelector('i');
        if (mobileThemeToggleIcon && currentTheme === 'light') {
            mobileThemeToggleIcon.classList.remove('fa-moon');
            mobileThemeToggleIcon.classList.add('fa-sun');
        }
    }
}

// 窗口大小监听，动态添加移动视图类
function initMobileView() {
    // 检测移动设备或小屏幕
    function handleWindowResize() {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        const isSmallScreen = window.innerWidth < 768;
        
        if (isMobile || isSmallScreen) {
            document.body.classList.add('mobile-view');
        } else {
            document.body.classList.remove('mobile-view');
        }
    }
    
    // 初始调用一次
    handleWindowResize();
    
    // 添加窗口大小改变事件监听
    window.addEventListener('resize', handleWindowResize);
}

// 更新主题切换按钮功能，不再添加新的事件监听器
function updateThemeToggle() {
    // 此函数仅用于初始化时同步图标状态，不再添加事件监听器
    const themeToggle = document.querySelector('.theme-toggle');
    const mobileThemeToggle = document.querySelector('.mobile-theme-toggle');
    
    if (themeToggle || mobileThemeToggle) {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        
        // 更新桌面版图标
        if (themeToggle) {
            const themeToggleIcon = themeToggle.querySelector('i');
            if (themeToggleIcon) {
                themeToggleIcon.className = currentTheme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
            }
        }
        
        // 更新移动版图标
        if (mobileThemeToggle) {
            const mobileThemeToggleIcon = mobileThemeToggle.querySelector('i');
            if (mobileThemeToggleIcon) {
                mobileThemeToggleIcon.className = currentTheme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
            }
        }
    }
} 