<template>
  <div id="body">
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
	    </swiper>
    </div>
    <div id="nav1">
    	<ul>
    		<li>
    			<img src="../../../../shopApp2/src/assets/images/shopping/shopList1.png"/>
    			<p>新品上架</p>
    		</li>
    		<li>
    			<img src="../../../../shopApp2/src/assets/images/shopping/shopList2.png"/>
    			<p>排毒养颜</p>
    		</li>
    		<li>
    			<img src="../../../../shopApp2/src/assets/images/shopping/shopList3.png"/>
    			<p>减肥塑形</p>
    		</li>
    		<li>
    			<img src="../../../../shopApp2/src/assets/images/shopping/shopList4.png"/>
    			<p>女士调理</p>
    		</li>
    		<li>
    			<img src="../../../../shopApp2/src/assets/images/shopping/shopList5.png"/>
    			<p>运动营养</p>
    		</li>
    		<li>
    			<img src="../../../../shopApp2/src/assets/images/shopping/shopList6.png"/>
    			<p>心血管健康</p>
    		</li>
    		<li>
    			<img src="../../../../shopApp2/src/assets/images/shopping/shopList7.png"/>
    			<p>男士健康</p>
    		</li>
    		<li>
    			<img src="../../../../shopApp2/src/assets/images/shopping/shopList8.png"/>
    			<p>精品套装</p>
    		</li>
    	</ul>
    </div>
    <div id="weekmain">
      <div>
      	<h3>本周主打<span>更多主打<i>&gt;</i></span></h3>
        <hr />
      </div>
      <div id="heimaka">
      	<h6>日本2H2D黑马卡</h6>
      	<small class="orange">秘鲁有机玛卡</small>
      	<small class="orange">重振男人雄风</small>
      	<img src="../../assets/images/shopping/heimaha.jpg"/>
      </div>
      <div id="right">
	      <div id="MARUEI">
	      	<div class="text">
		      	<h6>MARUEI</h6>
		      	<h6>青汁酵素 (芒果味)</h6>
		      	<small class="orange">塑形 调养 养颜</small>
	      	</div>
	      	<img src="../../assets/images/shopping/MARUEI.jpg"/>
	      </div>
	      <div class="right-bottom">
	      	<h6>星期10左旋肉碱</h6>
	      	<small class="orange">减肥塑形</small>
	      	<img src="../../assets/images/shopping/jianfeiyao.jpg"/>
	      </div>
	      <div class="right-bottom">
	      	<h6>Metabolical巴西</br>莓酵素果替代餐分</h6>
	      	<small class="orange">塑身 美容</small>
	      	<img src="../../assets/images/shopping/yingyang.jpg"/>
	      </div>
      </div>
    </div>
    <div class="monthmain">
	    <div id="month">
	      	<h3>本月推荐<i>&gt;</i><span>更多好货</span></h3>
	        <hr />
	    </div>
      <div class="monthcontent">
      	<h6>日本2H2D</br>冬虫夏草口服液</h6>
      	<small class="">强肾 滋补</small>
      	<img src="../../assets/images/shopping/month1.jpg"/>
      </div>
      <div class="monthcontent">
      	<h6>Pill box KAORU</br>香体丸</h6>
      	<small class="">玫瑰+香草</small>
      	<img src="../../assets/images/shopping/month2.jpg"/>
      </div>
      <div class="monthcontent">
      	<h6>Smils美味桃</br>之酵素水</h6>
      	<small class="">瘦身养颜</small>
      	<img src="../../assets/images/shopping/month3.jpg"/>
      </div>
      <div class="monthcontent">
      	<h6>MetabolicBB</br>胎盘素</h6>
      	<small class="">美白 保湿 抗衰</small>
      	<img src="../../assets/images/shopping/month4.jpg"/>
      </div>
    </div>
    <div class="Familysuit">
	    <div id="Familysuitmain">
	      	<h3>家庭套装<i>&gt;</i><span>更多实惠</span></h3>
	        <hr />
	    </div>
	    <div class="Family">
	    	<p>日本2H2D黑玛卡</br>60粒</p>
	    	<span class="price">
	    		￥219.00
		    	<small>
		    		￥596.00
		    	</small>
	    	</span>
	    	<img src="../../assets/images/shopping/family1.jpg"/>
	    </div>
	    <div class="Family">
	    	<p>Metabolic酵母酵</br>素 132粒</p>
	    	<span class="price">
	    		￥210.00
		    	<small>
		    		￥398.00
		    	</small>
	    	</span>
	    	<img src="../../assets/images/shopping/family2.jpg"/>
	    </div>
	    <div class="Family">
	    	<p>柠檬盐酸胶原蛋白</br>粉 500g</p>
	    	<span class="price">
	    		￥433.00
		    	<small >
		    		￥498.00
		    	</small>
	    	</span>
	    	<img src="../../assets/images/shopping/family3.jpg"/>
	    </div>
    </div>
    <div id="Recommend">
    	<hr />
    	<p>为您推荐</p>
    	<hr />
    </div>
    <div class="Recommend">
    	<img src="../../assets/images/shopping/recommend1.jpg"/>
    	<div class="Recommend-text">
    		<h5>日本2H2D 黑玛卡 强肾 滋补 60粒</h5>
    		<small>报税区</small>
    	</div>
    	<div class="Recommend-price">
    		<p>￥219.00</p>
    		<small>￥596.00</small>
    	</div>
    </div>
    <div class="Recommend">
    	<img src="../../assets/images/shopping/recommend2.jpg"/>
    	<div class="Recommend-text">
    		<h5>日本2H2D 黑玛卡 强肾 滋补 60粒</h5>
    		<small>报税区</small>
    	</div>
    	<div class="Recommend-price">
    		<p>￥219.00</p>
    		<small>￥596.00</small>
    	</div>
    </div>
    <div class="Recommend">
    	<img src="../../assets/images/shopping/recommend3.jpg"/>
    	<div class="Recommend-text">
    		<h5>日本2H2D 黑玛卡 强肾 滋补 60粒</h5>
    		<small>报税区</small>
    	</div>
    	<div class="Recommend-price">
    		<p>￥219.00</p>
    		<small>￥596.00</small>
    	</div>
    </div>
    <div class="Recommend">
    	<img src="../../assets/images/shopping/recommend4.jpg"/>
    	<div class="Recommend-text">
    		<h5>日本2H2D 黑玛卡 强肾 滋补 60粒</h5>
    		<small>报税区</small>
    	</div>
    	<div class="Recommend-price">
    		<p>￥219.00</p>
    		<small>￥596.00</small>
    	</div>
    </div>
    <div id="overfooter">
    	
    </div>
    <div id="footer">
    	<ul>
    		<li><div><img src="../../assets/images/shopping/nav1-active.jpg" class="active"/><img src="../../assets/images/shopping/nav1.jpg"/></div><p>首页</p></li>
    		<li><div><img src="../../assets/images/shopping/nav2-active.jpg"/><img src="../../assets/images/shopping/nav2.jpg"/></div><p>购物车</p></li>
    		<li><div><img src="../../assets/images/shopping/nav3-active.jpg"/><img src="../../assets/images/shopping/nav3.jpg"/></div><p>订单管理</p></li>
    		<li><div><img src="../../assets/images/shopping/nav4-active.jpg"/><img src="../../assets/images/shopping/nav4.jpg"/></div><p>个人中心</p></li>
    	</ul>
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
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination'
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
    console.log('this is current swiper instance object', this.swiper)
  }
}
</script>

<style scoped="scoped">
	div{
		box-sizing: border-box;
	}
	#body{
		margin: 0;
		padding: 0;
		overflow: hidden;
		background:#F1F1F1 ;
	}
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
	#banner{
		margin-bottom: -4px;
	}
	#banner img{
		width:100%;
	}
	#nav1{
		overflow: hidden;
		background: white;
		margin-bottom: 15px;
		padding-bottom:10px ;
	}
	#nav1 ul li{
		margin-top: 30px;
		list-style: none;
		width: 25%;
		float: left;
		text-align: center;
	}
	#nav1 ul li img{
		width: 55%;
	}
	#weekmain{
		overflow: hidden;
		background: white;
	}
	#weekmain hr{
		width: 30%;
		border: 0.04em solid #CA3232;
	}
	#weekmain h3{
		padding: 0.8em;
		color: #CA3232;
	}
	#weekmain h3 span{
		float: right;
		font-weight: normal;
		font-size: 0.9em;
		color: #999999;
	}
	#weekmain h3 span i{
		color: #CA3232;
	}
	#right{
		width: 66%;
		float: left;
	}
	#right small{
		font-size: 0.8em;
		margin-top: 0.7em;
	}
	#heimaka{
		float: left;
		border: 0.1em solid #DDDDDD;
		width: 34%;
		padding: 1em;
	}
	.orange{
		margin-top: 0.5em;
		color: orange;
		display: block;
	}
	#heimaka img{
		width: 6em;
		margin-top: 3em;
	}
	#MARUEI{
		float: left;
		border: 1px solid #DDDDDD;
		border-left:none;
		width: 100%;
		padding: 1em;
	}
	#MARUEI .text{
		float: left;
	}
	#MARUEI img{
		float: right;
		width: 4em;
	}
	.right-bottom{
		border: 0.1em solid #DDDDDD;
		border-left: none;
		border-top: none;
		padding: 0.8em;
		width: 50%;
		float: left;
	}
	.right-bottom img{
		margin-top: 1em;
		float: right;
		width: 4em;
	}
	.monthmain{
		margin-top: 1rem;
		overflow: hidden;
		background: white;
	}
	#month hr{
		width: 30%;
		border: 0.04em solid #d24aff;
	}
	#month h3{
		padding: 0.8em;
		color: #d24aff;
	}
	#month h3 span{
		float: right;
		font-weight: normal;
		font-size: 0.9em;
		color: #999999;
	}
	#month h3 i{
		float: right;
		color: #d24aff;
	}
	.monthcontent{
		border: 1px solid #DDDDDD;
		padding: 1rem;
		float: left;
		width: 50%;
		height: 7rem;
	}
	.monthcontent img{
		float: right;
		margin-top: -2rem;
		width: 3rem;
	}
	.Familysuit {
		margin-top: 1rem;
		background:white;
		overflow: hidden;
	}
	#Familysuitmain hr{
		width: 30%;
		border: 0.04em solid #009cff;
	}
	#Familysuitmain h3{
		padding: 0.8em;
		color: #009cff;
	}
	#Familysuitmain h3 span{
		float: right;
		font-weight: normal;
		font-size: 0.9em;
		color: #999999;
	}
	#Familysuitmain h3 i{
		float: right;
		color: #009cff;
	}
	.Family {
		border: 1px solid #DDDDDD;
		width:33.333%;
		float: left;
		padding: 0.7em;
	}
	.Family p{
		font-size: 0.7em;
	}
	.price{
		color: #009CFF;
		font-size: 0.5em;
	}
	.price small{
		color: #DDDDDD;
		text-decoration: line-through;
	}
	.Family img{
		width: 5rem;
		margin: 0 auto;
	}
	#Recommend{
		margin: 0 auto;
		height: 1.7rem;
		margin-top: 0.3em;
		color: #DDDDDD;
	}
	#Recommend hr{
		margin: 1em;
		margin-top: 0.7em;
		width: 32%;
		float: left;
	}
	#Recommend p{
		float: left;
	}
	.Recommend{
		padding-bottom: 3.5em;
		border: 1px solid #DDDDDD;
	}
	.Recommend img{
		width: 100%;
	}
	.Recommend-text{
		float: left;
		margin: 0.5em;
		width: 70%;
	}
	.Recommend-text small{
		border: 1px solid #f38873;
		border-radius: 5px;
		color: #f38873;
	}
	.Recommend-price{
		float: left;
		border-left:1px solid #DDDDDD ;
		margin: 0.5em;
		padding-left: 0.5em;
		color: #ca3232;
	}
	.Recommend-price small{
		color: #DDDDDD;
		text-decoration: line-through;
	}
	#overfooter{
		height: 3.5em;
	}
	#footer{
		position: fixed;
		bottom: 0;
		width: 100%;
	}
	#footer ul{
		background: white;
		height: 4em;
		width: 100%;
	}
	#footer ul li{
		text-align: center;
		list-style: none;
		float: left;
		width: 25%;
	}
	#footer ul li div{
		position: relative;
		width: 2em;
		height: 2em;
		margin: 0 auto;
	}
	#footer ul li div img{
		position: absolute;
		left: 0;
		width: 2em;
	}
	.active{
		z-index: 10;
	}
</style>