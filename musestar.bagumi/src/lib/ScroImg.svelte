<script>
	import {onDestroy, onMount} from 'svelte';
	import {tweened} from 'svelte/motion';
	import {cubicInOut} from 'svelte/easing';

	export let imgList = [
		{src: './src/assets/test/v-pc1.jpg', href: 'javascript:console.log("链接1");'},
		{src: './src/assets/test/v-pc2.jpg', href: 'javascript:console.log("链接2");'},
		{src: './src/assets/test/v-pc3.jpg', href: 'javascript:console.log("链接3");'},
		{src: './src/assets/test/v-pc4.jpg', href: 'javascript:console.log("链接4");'}
	];
	const twYCer = tweened(0, {
		duration: 1200,
		easing: cubicInOut
	});
	let isCov = false;
	let intervalID = null;
	onMount(() => {
		TheTimer();
		intervalID = setInterval(() => {
			if (isCov) {
				twYCer.set(0, {duration: 0});
				TheTimer();
			} else {
				twYCer.set(500);
			}
			isCov = !isCov;
		}, 3000);
	});
	onDestroy(() => {
		clearInterval(intervalID);
	});
	let nowIndex = 0;
	let topItem = {src: '', href: ''};
	let bottomItem = {src: '', href: ''};

	function TheTimer() {
		if (nowIndex >= imgList.length) nowIndex = 0;
		topItem = imgList.at(nowIndex);
		bottomItem = (nowIndex + 1 >= imgList.length) ? imgList.at(nowIndex + 1 - imgList.length) : imgList.at(nowIndex + 1);
		nowIndex++;
		//console.log(topItem, bottomItem);
	}

</script>

<main>
    <div class="outBox">
        <div class="inBox" style="right: {-$twYCer}px;">
            <a href="{topItem.href}" class="topA well">
                <img src="{bottomItem.src}" alt="{bottomItem.src}">
            </a>

            <a href="{bottomItem.href}" class="bottomA well">
                <img src="{topItem.src}" alt="{topItem.src}">
            </a>
        </div>
    </div>
</main>

<style>
    .outBox{
        position: relative;
        width: 500px;
        height: 280px;
        overflow: hidden;
        border-radius: 10px;
        transition: all 500ms;
        border: 1px #ccc solid;
        box-shadow: 0 0 10px rgba(33,33,33,.7);
        filter: grayscale(.3);
    }
    .outBox:hover{
        transform: scale(1.03);
        box-shadow: 0 0 25px rgba(33,33,33,.5);
        filter: grayscale(0);
    }
    .outBox:active{
        transform: scale(0.97);
        box-shadow: 0 0 7px rgba(33,33,33,.8);
    }
    .inBox{
        position: absolute;
        display: flex;
        transition: right;
    }
    .well img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .topA,.bottomA{
        display: block;
        width: 500px;
        height: 280px;
    }
</style>