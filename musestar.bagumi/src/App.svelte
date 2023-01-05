<script>
	import TopBar from './lib/TopBar.svelte';
	import BottomBar from './lib/BottomBar.svelte';
	import MovCard from './lib/MovCard.svelte';
	import TopTable from './lib/TopTable.svelte';
	import HandoffBar from './lib/HandoffBar.svelte';
	import PcUnder from './lib/PcUnder.svelte';
	import {fade,blur} from 'svelte/transition';
	import {TheBangumiList,TheBangumiMoveList} from './js/BangumiList';

	let theS = true;//真为番剧，假为剧场

	const bangumiList = TheBangumiList();
	const bangumiMoveList = TheBangumiMoveList();
	const isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
</script>

<main>
    <img src="{isMobile?'https://api.anosu.top/api/?sort=mp':'https://api.anosu.top/api/?sort=pc'}" class="backG"
         alt="back">
    {#if isMobile}
        <BottomBar/>
    {:else}
        <TopBar/>
        <div class="mainBox pcMainBox">
            <TopTable/>
            <div class="blurBox">
                <HandoffBar on:theChn={(e)=>{theS=e.detail;}}/>
                <div class="cardBox">
                    {#if theS}
                        {#each bangumiList as item}
                            <div class="mCard"
                                 in:blur={{duration:250,delay:200,opacity:0.2,amount: 15}}
                                 out:blur={{duration:250,opacity:0.3,amount: 15}}
                            >
                                <MovCard theBangumi={item}/>
                            </div>
                        {/each}
                    {:else}
                        {#each bangumiMoveList as item}
                            <div class="mCard"
                                 in:blur={{duration:250,delay:200,opacity:0.2,amount: 15}}
                                 out:blur={{duration:250,opacity:0.3,amount: 15}}
                            >
                                <MovCard theBangumi={item}/>
                            </div>
                        {/each}
                    {/if}
                    <!--下面这些是为了自适应的填充物-->
                    <i class="paddingIn"></i>
                    <i class="paddingIn"></i>
                    <i class="paddingIn"></i>
                    <i class="paddingIn"></i>
                    <i class="paddingIn"></i>
                    <i class="paddingIn"></i>
                    <i class="paddingIn"></i>
                    <i class="paddingIn"></i>
                    <i class="paddingIn"></i>
                    <i class="paddingIn"></i>
                    <i class="paddingIn"></i>
                    <i class="paddingIn"></i>
                    <i class="paddingIn"></i>
                    <i class="paddingIn"></i>
                    <i class="paddingIn"></i>
                    <i class="paddingIn"></i>
                    <i class="paddingIn"></i>
                    <i class="paddingIn"></i>
                    <i class="paddingIn"></i>
                    <i class="paddingIn"></i>
                </div>
            </div>
        </div>
        <div class="pcUnder"><PcUnder/></div>
    {/if}

</main>

<style>
    .backG {
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .mainBox {

    }

    .pcMainBox {
        min-width: 730px;
        margin: 100px 15vw 60px 15vw;
        border-radius: 7px;
        overflow: hidden;
    }

    .blurBox {
        width: 100%;
        height: 100%;
        backdrop-filter: blur(10px);
        background-color: rgba(66, 66, 66, .7);
        padding: 0px;
    }

    .cardBox {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .cardBox .mCard {
        margin: 25px;
    }

    .paddingIn {
        width: 190px;
        margin: 0 25px;
    }

    .pcUnder{
        position: relative;
        bottom: 0;
    }
</style>
