// 头部滚动到轮播图，颜色透明
// 添加一个全局加载事件
window.addEventListener('load',function(){
	// 获取轮播图的高度
	var sildeHeight=document.querySelector('#slide').offsetHeight;
	// 获取头部元素
	var header=document.querySelector('#header');
	//添加一个滚动事件
	window.addEventListener('scroll',function(){

		var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;

		//计算透明度   滚动条距离/轮播图高度
		var opacity=scrollTop/sildeHeight;
		// console.log(opacity);
		header.style.backgroundColor='rgba(222,24,27,'+opacity+')';



	});

	// 倒计时功能
	//定义一个总时间
	var time=2*60*60;
	var spans=document.querySelectorAll('.seckill-time span');

	//求小时


	function downtime(){
		var hour=time/60/60
	// console.log(hour)
	//求分钟
	var minute=time%3600/60;
	// console.log(minute)
	//求秒
	var second=time%60;
	// console.log(second)

	//把时分秒对应到相关的span里
	spans[0].innerHTML=Math.floor(hour/10);
	spans[1].innerHTML=Math.floor(hour%10);
	spans[3].innerHTML=Math.floor(minute/10);
	spans[4].innerHTML=Math.floor(minute%10);
	spans[6].innerHTML=Math.floor(second/10);
	spans[7].innerHTML=Math.floor(second%10);
	}
	downtime();

	
	setInterval(function(){
		time--
		downtime();
	},1000);

//轮播图js初始化
  var swiper = new Swiper('.swiper-container', {
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
        pagination: {
        el: '.swiper-pagination',
      },
    });


},false);