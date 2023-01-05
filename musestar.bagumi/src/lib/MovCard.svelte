<script>
	import The3DCard from './The3DCard.svelte';
	export let theBangumi = {
		title: "标题",
		src: "链接",
		img: "图片地址",
		releaseDate: new Date(2023, 1, 1),
		classify: "类型",
		country: "国家",
		state: "上映时间：2020-10-02"
	};

	let dateString = theBangumi.releaseDate.getFullYear() + '-'
		+ theBangumi.releaseDate.getMonth() + '-'
		+ theBangumi.releaseDate.getDay();

</script>

<main>
    <div class="cardMain">
        <a href="{theBangumi.src}">
            <The3DCard backgroundImage="{theBangumi.img}">
                <div class="inCardTags">
                    <span class="theCountry">{theBangumi.country}</span>
                    <span class="theClassify">{theBangumi.classify}</span>
                </div>
                <div class="theState">
                    <span>{theBangumi.state}</span>
                </div>
            </The3DCard>
        </a>
        <div class="mTit">
            <a class="theTitle" href="{theBangumi.src}">
                {theBangumi.title}
            </a>
            <span class="theDate">
                放送日期 {dateString}
            </span>
        </div>
    </div>

</main>

<style>
    .cardMain {
        width: 190px;
        height: 340px;
    }

    .mTit {
        height: 55px;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: space-between;
    }

    .mTit .theTitle:link {
        font-size: 16px;
        line-height: 18px;
        color: white;
        text-decoration: none;
        transition: color 200ms;
    }

    .mTit .theTitle:hover {
        color: #2785BD;
    }

    .mTit .theTitle:active {
        color: #1C618A;
    }

    .mTit .theDate {
        font-size: 12px;
        color: #ccc;
    }

    .inCardTags {
        position: absolute;
        /*border: 1px red solid;*/
        display: flex;
        top: 5px;
        left: 5px;
    }

    .inCardTags .theCountry {
        color: white;
        font-size: 12px;
        margin-right: 5px;
        background-color: #2785BD;
        padding: 0 3px;
        border-radius: 5px;
    }

    .inCardTags .theClassify {
        color: white;
        font-size: 12px;
        margin-right: 5px;
        background-color: #E5A500;
        padding: 0 3px;
        border-radius: 5px;
    }

    .theState{
        position: absolute;
        bottom: 5px;
        right: 5px;

        color: #ccc;
        font-size: 12px;
        line-height: 12px;
        background-color: rgba(30%,30%,30%,.7);
        padding: 3px;
        border-radius: 5px;
    }
</style>