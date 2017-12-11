<template>
  <div>
    <div class="header">
    	<div><img src="../../assets/images/shopping/icon1.png"></div>
    	<div>
    		<input type="text" placeholder="搜索你喜欢的商品、店铺">
    		<img class="search" src="../../assets/images/shopping/search.png">
    	</div>
    	<div><img src="../../assets/images/shopping/icon2.png"></div>
    </div>
    <div style="height: 60px;"></div>
    <div id="banner">
	    <swiper :options="swiperOption" ref="mySwiper">
	      <!-- slides -->
	      <swiper-slide><img src="../../../../shopApp2/src/assets/images/shopping/banner.jpg"/></swiper-slide>
	      <swiper-slide><img src="../../../../shopApp2/src/assets/images/shopping/banner.jpg"/></swiper-slide>
	      <swiper-slide><img src="../../../../shopApp2/src/assets/images/shopping/banner.jpg"/></swiper-slide>
	      <div class="swiper-pagination"  slot="pagination"></div>
	      <div class="swiper-button-prev" slot="button-prev"></div>
	      <div class="swiper-button-next" slot="button-next"></div>
	      <div class="swiper-scrollbar"   slot="scrollbar"></div>
	    </swiper>
    </div>
    <div id="nav1">
    	<div>
    		<img src="../../../../shopApp2/src/assets/images/shopping/shopList1.png"/>
    		<p>新品上架</p>
    	</div>
    	<div>
    		<img src="../../../../shopApp2/src/assets/images/shopping/shopList2.png"/>
    		<p>排毒养颜</p>
    	</div>
    	<div>
    		<img src="../../../../shopApp2/src/assets/images/shopping/shopList3.png"/>
    		<p>减肥塑形</p>
    	</div>
    	<div>
    		<img src="../../../../shopApp2/src/assets/images/shopping/shopList4.png"/>
    		<p>女士调理</p>
    	</div>
    	<div>
    		<img src="../../../../shopApp2/src/assets/images/shopping/shopList5.png"/>
    		<p>运动营养</p>
    	</div>
    	<div>
    		<img src="../../../../shopApp2/src/assets/images/shopping/shopList6.png"/>
    		<p>心血管健康</p>
    	</div>
    	<div>
    		<img src="../../../../shopApp2/src/assets/images/shopping/shopList7.png"/>
    		<p>男士健康</p>
    	</div>
    	<div>
    		<img src="../../../../shopApp2/src/assets/images/shopping/shopList8.png"/>
    		<p>精品套装</p>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'carrousel',
  data () {
    return {
      swiperOption: {
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log('this is current swiper instance object', this.swiper)
  }
}
</script>

<style scoped="scoped">
	.header{
		position: fixed;
		top: 0;
		z-index: 10;
		width: 100%;
		height: 60px;
		background: #ca3232;
		display: flex;
	}
	.header>div{
		position: relative;
		width: 12%;
	}
	.header>div:nth-of-type(2){
		width: 76%;
		box-sizing: border-box;
		padding: 0 2%;
	}
	.header>div>img{
		-webkit-transform: translateX(6vw);
		width: 36px;
		margin-top: 12px;
		margin-left: -18px;
	}
	.header input{
		font-size: 16px;
		box-sizing: border-box;
		padding-left: 35px;
		color: white;
		border-radius: 8px;
		width: 100%;
		height: 40px;
		margin-top: 10px;
		border: none;
		background: #a22828;
		line-height: 40px;
	}
	.header input::-webkit-input-placeholder{
		color: #d04747;
	}
	.header>div>.search{
		width: 30px;
		position: absolute;
		left: 5px;
		background: none;
		top: 4px;
	}
	.shopInfo{
		width: 100%;
		background: #1f2228;
		display: flex;
		height: 74px;
	}
	.grey{
		color: #636569;
		font-size: 14px;
	}
	.yellow{
		color: #ffe400;
	}
	.shopInfo>div:first-child{
		width: 14%;
	}
	.shopInfo>div:first-child img{
		width: 60%;
		height: 46px;
		margin-left: 20%;
	}
	.shopInfo>div:first-child .grey{
		text-align: center;
	}
	.shopInfo>div:nth-of-type(2){
		width: 68%;
		box-sizing: border-box;
	}
	.shopInfo>div:nth-of-type(2) dl dt,.shopInfo>div:nth-of-type(2) dl dd{
		float: left;
	}
	.shopInfo>div:nth-of-type(2) dl dt{
		height: 100%;
		margin: 0 5%;
	}
	.shopInfo>div:nth-of-type(2) img{
		height: 100%;
	}
	.shopInfo>div:nth-of-type(2) dl{
		height: 100%;
		box-sizing: border-box;
		padding: 10px 0;
	}
	.shopInfo>div:last-child{
		width: 18%;
	}
	.shopInfo>div:last-child img{
		width: 80%;
		height: 60px;
		margin-top: 7px;
		margin-left: 10%;
	}
	.shopInfo>div:nth-of-type(2) .white{
		color: white;
		line-height: 30px;
		font-size: 20px;
	}
	#banner img{
		width:100%;
	}
	#nav1 div{
		width: 25%;
		float: left;
		text-align: center;
	}
	#nav1 div img{
		width: 90%;
	}
</style>
