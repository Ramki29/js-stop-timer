function timer()
{
	var time=new Date();
	console.log(time.toLocaleTimeString());
}
let timefun=setInterval(timer,1000);
function stoptime()
{
	clearInterval(timefun);
}
	