$(function() {
    new Swiper('.category-left  .swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        mousewheel: true,
    });

    new Swiper('.category-right .swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        mousewheel: true,
    });
    var links = $('.category-left ul li a');
    //获取子元素
    var swiperslide = $('.swiper-slide');
    //获取父元素
    var swipercontainer = $('.swiper-container');
    //获取滑动块元素
    var swiperwrapper = $('.swiper-wrapper');


    for (i = 0; i < links.length; i++) {
        // links.index=i
        // 遍历a标签，为a标签内容设置索引
        // links[i].setAttribute('index', i);
        //为每个a标签设置点击事件
        links[i].addEventListener('click', (function(i) {
            // 将拿到的索引值赋值到index里
            // var index = this.getAttribute('index');
            // 位移y轴值=-（索引值*这个a标签的高度）
            // var translateY = -index * this.offsetHeight;
            return function(e) {
                var translateY = -i * links[i].offsetHeight;
                // 计算索引最小高度（ 父元素高度 - 子元素高度）
                var mintranslate = swipercontainer.offsetHeight - swiperslide.offsetHeight;
                // console.log(mintranslate)
                // 判断当前索引值是否小于最小索引值
                if (translateY < mintranslate) {
                    // 如果小于， 则将最小索引值赋值给当前y轴值
                    translateY = mintranslate;
                };
                // console.log(mintranslate)
                // 遍历a标签， 为a标签内容类样式
                for (j = 0; j < links.length; j++) {
                    // a标签所有父元素移除active类样式
                    links[j].parentNode.classList.remove('active');
                    // 然后触发点击事件的a标签， 添加active类样式
                    this.parentNode.classList.add('active');
                }
                // 跟据y轴值进行位移
                swiperwrapper.style.transform = 'translate3d(0px,' + translateY + 'px,0px)';
                // 且添加位移过度事件0 .3 s
                swiperwrapper.style.transition = "all 0.3s"
            }

        })(i));
    }
    links.each(function(i, value) {
        // links.index=i
        // 遍历a标签，为a标签内容设置索引
        // links[i].setAttribute('index', i);
        //为每个a标签设置点击事件
        $(value).on('tap', (function(i) {
            // 将拿到的索引值赋值到index里
            // var index = this.getAttribute('index');
            // 位移y轴值=-（索引值*这个a标签的高度）
            // var translateY = -index * this.offsetHeight;
            return function(e) {
                    var translateY = -i * links[i].offsetHeight;
                    // 计算索引最小高度（ 父元素高度 - 子元素高度）
                    var mintranslate = swipercontainer.offsetHeight - swiperslide.offsetHeight;
                    // console.log(mintranslate)
                    // 判断当前索引值是否小于最小索引值
                    if (translateY < mintranslate) {
                        // 如果小于， 则将最小索引值赋值给当前y轴值
                        translateY = mintranslate;
                    };
                    // console.log(mintranslate)
                    // 遍历a标签， 为a标签内容类样式
                    $(this).parent().addClass('active').siblings().remove('active');

                    // a标签所有父元素移除active类样式

                    // 然后触发点击事件的a标签， 添加active类样式

                }
                // 跟据y轴值进行位移/且添加位移过度事件0 .3 s
            swiperslide.css({
                transform: 'translate3d(0px,' + translateY + 'px,0px)',
                transition: 'all 0.3s'
            })

        })(i));


    });
})
