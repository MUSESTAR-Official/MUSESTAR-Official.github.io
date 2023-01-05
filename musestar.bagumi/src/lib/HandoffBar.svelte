<script>
	let theS = true;//真为番剧，假为剧场
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	$:dispatch(`theChn`, theS)
</script>

<main>
    <div class="mainBox">
        <button class="swBtn swBtn1" class:isS={theS} on:click={()=>{theS=true}}>番剧</button>
        <button class="swBtn swBtn2" class:isS={!theS} on:click={()=>{theS=false}}>剧场</button>
    </div>
</main>

<style>
    .mainBox {
        display: flex;
        width: 100%;
        height: 35px;
        overflow: hidden;
        /*border: 1px red solid;*/
    }

    .swBtn {
        margin: 0;
        padding: 0;
        border: 0;
        height: 30px;
        width: 90px;
        background-color: rgba(233, 233, 233, .7);
        color: #333333;
        transition: all 500ms;
        box-shadow: 0 0 5px white;
    }
    .swBtn:hover{
        background-color: #fff;
    }
    .isS:hover{
        background-color: deepskyblue;
    }
    .swBtn1 {
        border-right: 2px rgba(233, 233, 233, .7) solid;
    }

    .swBtn2 {
        border-radius: 0 0 10px 0;
    }

    .isS{
        box-shadow: 0 0 5px deepskyblue;
        background-color: #2785BD;
        color: white;
    }
</style>