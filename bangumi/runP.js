
crUl();
if (!(typeof (playarr) == "undefined" || playarr == null)) {
	pAr = playarr;
	//console.log(pAr);
	runPlayer(pAr, 'playarr');
	isOnLo = true;
}

if (!(typeof (playarr_lz) == "undefined" || playarr_lz == null)) {
	pAr = playarr_lz;
	//console.log(pAr);
	runPlayer(pAr, 'playarr_lz');
	isOnLo = true;
}

if (!(typeof (playarr_wj) == "undefined" || playarr_wj == null)) {
	pAr = playarr_wj;
	//console.log(pAr);
	runPlayer(pAr, 'playarr_wj');
	isOnLo = true;
}

if (!(typeof (playarr_1) == "undefined" || playarr_1 == null)) {
	pAr = playarr_1;
	//console.log(pAr);
	runPlayer(pAr, 'playarr_1');
	isOnLo = true;
}

if (!(typeof (playarr_2) == "undefined" || playarr_2 == null)) {
	pAr = playarr_2;
	//console.log(pAr);
	runPlayer(pAr, 'playarr_2');
	isOnLo = true;
}

if (!(typeof (playarr_bj) == "undefined" || playarr_bj == null)) {
	pAr = playarr_bj;
	//console.log(pAr);
	runPlayer(pAr, 'playarr_bj');
	isOnLo = true;
}

if (!(typeof (playarr_fs) == "undefined" || playarr_fs == null)) {
	pAr = playarr_fs;
	//console.log(pAr);
	runPlayer(pAr, 'playarr_fs');
	isOnLo = true;
}

if (!(typeof (playarr_hn) == "undefined" || playarr_hn == null)) {
	pAr = playarr_hn;
	//console.log(pAr);
	runPlayer(pAr, 'playarr_hn');
	isOnLo = true;
}

if (!isOnLo) {
	document.body.appendChild(scrP);
	let runP = document.createElement('script');
	runP.src = 'runP.js';
	runP.type = 'text/javascript';
	document.body.appendChild(runP);
}

console.log('runP已加载');