<script>
    import {onMount,onDestroy} from 'svelte';
    const startTime = (new Date(2022,4,25)).getTime();
	let sense = ''
    let idInterval;
    onMount(()=>{
	    idInterval = setInterval(()=>{
		    sense = formatDuring((new Date()).getTime() - startTime)
	    },500)
    })
    onDestroy(()=>{
	    clearInterval(idInterval)
    })
    function formatDuring(mss) {
	    const days = Math.floor(mss / (1000 * 60 * 60 * 24));
	    const hours = Math.floor((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	    const minutes = Math.floor((mss % (1000 * 60 * 60)) / (1000 * 60));
	    const seconds = ((mss % (1000 * 60)) / 1000).toFixed(0);
	    return days + " 天 " + hours + " 小时 " + minutes + " 分钟 " + seconds + " 秒 ";
    }
</script>

<main>
    <div class="mainBox">
        <span>&copy;2023 MUSESTAR</span>
        <span>&copy;2023 Ninnana</span>
        <span>萌ICP备 20226956 号</span>
        <span class="grText">网站地图</span>
        <span class="grText">未经本站授权禁止转载、摘编、复制或建立镜像。</span>
        <span class="grText">本站只提供WEB页面服务，本站不存储、不制作任何视频及图像，不承担任何由于内容的合法性及健康性所引起的争议和法律责任。</span>
        <i class="time">本网站已运行{sense}</i>
    </div>
</main>

<style>
    .mainBox{
        width: 100%;
        height: 195px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #333333DD;
        backdrop-filter: blur(10px);
        color: white;
    }
    .grText{
        font-size: 12px;
        color: #aaa;
    }
    .time{
        padding-top: 15px;
        font-style: normal;
    }
</style>