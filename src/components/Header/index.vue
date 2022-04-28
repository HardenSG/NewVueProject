<template>
  <div>
     <section class="shortcut">
			<div class="w">
				<div class="fl">
					<span>品优购欢迎您!</span>
					<router-link to="/login">请登录</router-link>
					<router-link to="/register">免费注册</router-link>
				</div>
				<div class="fr">
					<ul>
						<li>
							<a href="#">我的订单</a>
						</li>
						<li>|</li>
						<li>
							<a href="#" class="arrow_icon">我的品优购</a>
						</li>
						<li>|</li>
						<li>
							<a href="#">品优购会员</a>
						</li>
						<li>|</li>
						<li>
							<a href="#">企业采购</a>
						</li>
						<li>|</li>
						<li>
							<a href="#" class="arrow_icon">关注品优购</a>
						</li>
						<li>|</li>
						<li>
							<a href="#" class="arrow_icon">客户服务</a>
						</li>
						<li>|</li>
						<li>
							<a href="#" class="arrow_icon">网站导航</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
		
		
		<!--头部log和搜索栏购物车部分-->
		<header class="header w">
			<!--logo模块-->
			<div class="logo">
				<h1>
					<a href="index.html" title="品优购商城">品优购商城</a>
				</h1>
			</div>
			<!--购物车模块-->
			<div class="shopcar">
				<i>&#xe682;</i>
				<a href="shopCar.html">我的购物车</a>
				<em>8</em>
			</div>
		</header>
  </div>
</template>

<script>
export default {
    name:'HeaderSection'
}
</script>

<style scope>
/*版心大小*/
.w {
	margin: 0 auto;
	width: 1200px;
}
/*导航栏部分*/
.shortcut {
	height: 31px;
	background-color: #f1f1f1;
	line-height: 31px;
	font-size: 12px;	
	color: #666666;
}


/*fl和fr是快捷导航栏的左右浮动*/
.fl {
	float: left;
}

.fl  a {
	margin-left: 7px;
}

.fl  a:nth-of-type(2) {
	color: #c81623;
	font-weight: 700;
}

 .fr {
 	float: right;
 }

.fr ul li {
	float: left;
	padding: 2px;
	font-family: 'iconfont';
}

a[class = arrow_icon]::after {
	padding-left: 5px;
	content: '\e665';
	font-family:'iconfont' ;
}

.fr ul li:nth-last-of-type(2n) {
	margin-left: 4px;
	margin-right: 4px;
}

/*header部分*/
.header {
	position: relative;
	height: 105px;
	margin-bottom: 10px;
}

.fixedBackTop {
	position: fixed;
	/*right: 0;*/
	display: none;
	top: 200px;
	width: 40px;
	height: auto;
	border-radius: 20px;
}

.fixedBackTop ul li {
	width: 100%;
	height: 60px;
	border: 1px solid #E4E4E4;
	text-align: center;
	line-height: 28px;
	cursor: pointer;
}

.backcurrent {
	background-color: red;
}

.back {
	display: none;
}

/*logo部分*/
.logo {
	position: absolute;
	width: 171px;
	height: 58px;
}

.logo h1 {
	float: left;
}

.logo a {
	display: inline-block;
	width: 171px;
	height: 58px;
    background: url("@/assets/logo.png") center;
	font-size: 0;
}



/*购物车部分*/
.shopcar {
	position: absolute;
	left: 993px;
	top: 35px;
	width: 140px;
	height: 36px;
	background-color: #f7f7f7;
	border: 1px solid #dfdfdf;
}

.shopcar i {
	margin-left: 18px;
	color: red;
	font-family: 'iconfont';
	line-height: 36px;
}

.shopcar em {
	position: absolute;
	right: 20%;
	padding: 2px;
	background-color: #e60012;
	border-radius: 9px 9px 9px 0;
	color: white;
	font-size: 12px;
}

.shopcar a::after {
	margin-left: 15px;
	content: '\e662';
	font-family: 'iconfont';
}

</style>