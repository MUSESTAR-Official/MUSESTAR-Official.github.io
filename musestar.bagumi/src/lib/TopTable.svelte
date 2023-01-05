<script>
	import ScroImg from './ScroImg.svelte';
</script>

<main>
    <div class="outBox">
        <img class="pImg" src="./src/assets/anisphere_01.png" alt="anisphere">
        <div class="forImg">
            <ScroImg/>
        </div>
        <img class="pImg" src="./src/assets/euphilia_01.png" alt="euphilia">
    </div>
</main>

<style>
    .forImg {
        margin: 30px;
    }

    .outBox {
        width: 100%;
        display: flex;
        justify-content: space-around;
        background-color: rgba(66, 66, 66, .3);
        backdrop-filter: blur(5px);
        border-bottom: 2px rgba(222,222,222,.7) solid;
    }

    .pImg{
        padding: 25px 25px 0;
        filter: drop-shadow(0 0 10px rgba(33,33,33,.7));
        height: 340px;
    }

    @media screen and (max-width: 1450px){
        .pImg{
            display: none;
        }
    }
</style>