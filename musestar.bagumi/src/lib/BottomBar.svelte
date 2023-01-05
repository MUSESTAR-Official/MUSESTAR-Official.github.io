<script>

</script>

<main>
    <div class="bottomBar">
        <a class="iconBox hL">
            <span class="iconfont defIcon">&#xfc2a;</span>
            <p class="iconName">动漫</p>
        </a>
        <a class="iconBox">
            <span class="iconfont defIcon">&#xfc3a;</span>
            <p class="iconName">影视</p>
        </a>
        <a class="iconBox">
            <span class="iconfont defIcon">&#xfc48;</span>
            <p class="iconName">搜索</p>
        </a>
        <a class="iconBox">
            <span class="iconfont defIcon">&#xfc6b;</span>
            <p class="iconName">官方</p>
        </a>
    </div>
</main>

<style>
    .bottomBar {
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: space-around;
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 60px;
        background-color: #333;
        border-top: 2px #555 solid;
    }

    .iconBox {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .defIcon {
        font-size: 30px;
        color: #ccc;
        transition: color 200ms;
    }

    .iconName {
        font-size: 12px;
        color: #999;
    }

    .hL .defIcon {
        color: #2785BD;
    }

    .hL .iconName {
        color: #1C618A;
    }

    .iconBox:active .defIcon {
        color: #3967FF;
    }
</style>