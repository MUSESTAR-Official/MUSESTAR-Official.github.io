// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 获取footer元素
    const footer = document.querySelector('.footer');
    
    // 创建底栏内容
    const footerContent = document.createElement('div');
    footerContent.className = 'foot';
    
    // 添加logo
    const logoDiv = document.createElement('div');
    logoDiv.className = 'footer-logo';
    const logoImg = document.createElement('img');
    logoImg.src = 'https://s1.imagehub.cc/images/2024/01/13/d0469ae970a9dac3b9e56aa223193e34.png';
    logoImg.alt = 'MUSESTAR Logo';
    
    // 确保图片加载完成后再显示
    logoImg.onload = function() {
        logoDiv.style.opacity = '1';
    };
    
    // 添加加载错误处理
    logoImg.onerror = function() {
        console.error('底栏logo加载失败');
        // 尝试使用备用图片
        this.src = 'https://s1.imagehub.cc/images/2025/03/14/75aca0f31bd08308fa150301c0ec6589.png';
    };
    
    logoDiv.appendChild(logoImg);
    footerContent.appendChild(logoDiv);
    
    // 添加分隔线
    const divider1 = document.createElement('div');
    divider1.className = 'footer-divider';
    footerContent.appendChild(divider1);
    
    // 添加链接区域
    const linksDiv = document.createElement('div');
    linksDiv.className = 'footer-links';
    
    // 添加版权链接
    const copyrightLink = document.createElement('a');
    copyrightLink.href = 'https://musestar.cc/';
    copyrightLink.innerHTML = '© ' + new Date().getFullYear() + ' MUSESTAR';
    linksDiv.appendChild(copyrightLink);
    
    // 添加ICP备案链接
    const icpLink = document.createElement('a');
    icpLink.href = 'https://icp.gov.moe/?keyword=20226956';
    icpLink.target = '_blank';
    icpLink.textContent = '萌ICP备20226956号';
    linksDiv.appendChild(icpLink);
    
    // 添加服务状态链接
    const statusLink = document.createElement('a');
    statusLink.href = 'https://stats.uptimerobot.com/NJ9gBiMZ7D';
    statusLink.target = '_blank';
    statusLink.textContent = '缪斯星服务状态';
    linksDiv.appendChild(statusLink);
    
    // 添加邮箱链接
    const emailLink = document.createElement('a');
    emailLink.href = 'mailto:admin@musestar.cc';
    emailLink.target = '_blank';
    emailLink.textContent = '联系邮箱admin@musestar.cc';
    linksDiv.appendChild(emailLink);
    
    footerContent.appendChild(linksDiv);
    
    // 添加分隔线
    const divider2 = document.createElement('div');
    divider2.className = 'footer-divider';
    footerContent.appendChild(divider2);
    
    // 添加社交媒体链接
    const socialDiv = document.createElement('div');
    socialDiv.className = 'footer-social';
    
    // 添加微博图标
    const weiboLink = document.createElement('a');
    weiboLink.href = '#';
    weiboLink.title = '微博';
    const weiboIcon = document.createElement('i');
    weiboIcon.className = 'fab fa-weibo';
    weiboLink.appendChild(weiboIcon);
    socialDiv.appendChild(weiboLink);
    
    // 添加微信图标
    const wechatLink = document.createElement('a');
    wechatLink.href = '#';
    wechatLink.title = '微信';
    const wechatIcon = document.createElement('i');
    wechatIcon.className = 'fab fa-weixin';
    wechatLink.appendChild(wechatIcon);
    socialDiv.appendChild(wechatLink);
    
    // 添加QQ图标
    const qqLink = document.createElement('a');
    qqLink.href = '#';
    qqLink.title = 'QQ';
    const qqIcon = document.createElement('i');
    qqIcon.className = 'fab fa-qq';
    qqLink.appendChild(qqIcon);
    socialDiv.appendChild(qqLink);
    
    // 添加GitHub图标
    const githubLink = document.createElement('a');
    githubLink.href = '#';
    githubLink.title = 'GitHub';
    const githubIcon = document.createElement('i');
    githubIcon.className = 'fab fa-github';
    githubLink.appendChild(githubIcon);
    socialDiv.appendChild(githubLink);
    
    footerContent.appendChild(socialDiv);
    
    // 添加运行时间
    const runtimeDiv = document.createElement('div');
    runtimeDiv.className = 'footer-runtime';
    runtimeDiv.innerHTML = '本站已运行 <span class="brand" id="runtime"></span>';
    footerContent.appendChild(runtimeDiv);
    
    // 将内容添加到footer
    footer.appendChild(footerContent);
    
    // 运行时间计算函数
    function showRuntime() {
        const startDate = new Date("04/25/2022 00:00:00");
        const currentDate = new Date();
        const timeDiff = currentDate.getTime() - startDate.getTime();
        const dayUnit = 24 * 60 * 60 * 1000;
        
        const totalDays = timeDiff / dayUnit;
        const days = Math.floor(totalDays);
        
        const hoursFraction = (totalDays - days) * 24;
        const hours = Math.floor(hoursFraction);
        
        const minutesFraction = (hoursFraction - hours) * 60;
        const minutes = Math.floor(minutesFraction);
        
        const secondsFraction = (minutesFraction - minutes) * 60;
        const seconds = Math.floor(secondsFraction);
        
        const runtimeElement = document.getElementById('runtime');
        if (runtimeElement) {
            runtimeElement.textContent = days + "天" + hours + "小时" + minutes + "分" + seconds + "秒";
        }
        
        setTimeout(showRuntime, 1000);
    }
    
    // 启动运行时间计算
    showRuntime();
}); 