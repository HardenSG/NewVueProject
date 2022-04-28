<template>
  <!--页面尾部-->
		<div class="footer">
			<div class="w">
				<div class="footer_img">
					<ul>
						<li>
							<img src="@/assets/logo.png"/>
							<h4>正品保障</h4>
							<p>正品保障，提供发票</p>
						</li>
						<li>
							<img src="@/assets/logo.png"/>
							<h4>正品保障</h4>
							<p>正品保障，提供发票</p>
						</li>
						<li>
							<img src="@/assets/logo.png"/>
							<h4>正品保障</h4>
							<p>正品保障，提供发票</p>
						</li>
						<li>
							<img src="@/assets/logo.png"/>
							<h4>正品保障</h4>
							<p>正品保障，提供发票</p>
						</li>
						<li class="footer_img_no">
							<img src="@/assets/logo.png"/>
							<h4>正品保障</h4>
							<p>正品保障，提供发票</p>
						</li>
					</ul>
				</div>
				<span></span>
				<div class="mod_service">
					<section class="service_fl">
						<dl>
							<dt>购物指南</dt>
							<dd><a href="#">购物流程</a></dd>
							<dd><a href="#">购物流程</a></dd>
							<dd><a href="#">购物流程</a></dd>
							<dd><a href="#">购物流程</a></dd>
							<dd><a href="#">购物流程</a></dd>
							<dd><a href="#">购物流程</a></dd>
						</dl>
						<dl>
							<dt>购物指南</dt>
							<dd><a href="#">购物流程</a></dd>
							<dd><a href="#">购物流程</a></dd>
							<dd><a href="#">购物流程</a></dd>
							<dd><a href="#">购物流程</a></dd>
							<dd><a href="#">购物流程</a></dd>
							<dd><a href="#">购物流程</a></dd>
						</dl>
						<dl>
							<dt>购物指南</dt>
							<dd><a href="#">购物流程</a></dd>
							<dd><a href="#">购物流程</a></dd>
							<dd><a href="#">购物流程</a></dd>
							<dd><a href="#">购物流程</a></dd>
							<dd><a href="#">购物流程</a></dd>
							<dd><a href="#">购物流程</a></dd>
						</dl>
						<dl>
							<dt>购物指南</dt>
							<dd><a href="#">购物流程</a></dd>
							<dd><a href="#">购物流程</a></dd>
							<dd><a href="#">购物流程</a></dd>
							<dd><a href="#">购物流程</a></dd>
							<dd><a href="#">购物流程</a></dd>
							<dd><a href="#">购物流程</a></dd>
						</dl>
						<dl class="service_dl_no">
							<dt>购物指南</dt>
							<dd><a href="#">购物流程</a></dd>
							<dd><a href="#">购物流程</a></dd>
							<dd><a href="#">购物流程</a></dd>
							<dd><a href="#">购物流程</a></dd>
							<dd><a href="#">购物流程</a></dd>
							<dd><a href="#">购物流程</a></dd>
						</dl>
					</section>
					<section class="service_fr">
						<dl>
							<dt>帮助中心</dt>
							<dd>
								<img src="@/assets/logo.png"/>
							</dd>
							<dd>品优购客户端</dd>
						</dl>
					</section>
				</div>
				<span></span>
				<section class="mod_copyright">
					<ul>
						<li><a href="#">关于我们</a></li>
						<li>|</li>
						<li><a href="#">关于我们</a></li>
						<li>|</li>
						<li><a href="#">关于我们</a></li>
						<li>|</li>
						<li><a href="#">关于我们</a></li>
						<li>|</li>
						<li><a href="#">关于我们</a></li>
						<li>|</li>
						<li><a href="#">关于我们</a></li>
						<li>|</li>
						<li><a href="#">关于我们</a></li>
						<li>|</li>
						<li><a href="#">关于我们</a></li>
						<li>|</li>
						<li><a href="#">关于我们</a></li>
						<li>|</li>
						<li><a href="#">关于我们</a></li>
						<li>|</li>
						<li><a href="#">关于我们</a></li>
						<li>|</li>
						<li><a href="#">关于我们</a></li>
					</ul><br />
					
					<div class="address">
						<p>地址:北京市昌平区建材城西路金燕龙办公楼一层 邮编 : 100096 电话 : 010-82935100 邮箱 : zhanghj+itcast.cn</p>
						<p>京ICP备 08001421 号京公网安备 110108007702</p>
					</div>
				</section>
			</div>
		</div>
</template>

<script>
export default {
	name:'FooterSection'
}
</script>

<style scope>
img{
	width: 50px !important;
	height: 50px !important;
}
	.footer {
	height: 417px;
	background-color: #f5f5f5;
	overflow: hidden;/*清除浮动*/
	text-align: center;
}

.footer_img ul{
	margin-top: 30px;
	margin-left: 37px;
}

.footer_img ul li img{
	float: left;
	vertical-align: middle;
	padding-right: 5px;
}

.footer_img ul li {
	float: left;
	margin-right: 78px;
	width: 165px;
	height: 49px;	
}

.footer_img ul li p {
	padding-top: 5px;
	font-size: 12px;
}

.footer_img ul .footer_img_no {
	margin-right: 0px;
}

.footer span {
	display: inline-block;
	margin-top: 30px;
	width: 100%;
	height: 0px;
	border-bottom: 1px solid #ededed;
}

.mod_service {
	padding: 11px 80px 24px 50px;
	height: 187px;
}

.service_fl {
	float: left;
}

.service_fl dl {
	float: left;
	margin-right: 135px;
}

.mod_service dt {
	font-size: 16px;
	color: #333333;
	margin-bottom: 14px;
}

.service_fl .service_dl_no {
	margin-right: 0;
}

.mod_service dd {
	padding-bottom: 8px;
	font-size: 12px;
	color: #666666;
}

.service_fr {
	float: right;
}

.service_fr dl {
	text-align: center;
}

.mod_copyright ul{
	margin-left: 114px;
}

.mod_copyright ul li {
	float: left;
}

.mod_copyright ul li:nth-of-type(2n) {
	margin-left: 16px;
	margin-right: 14px;
	color: #666666;
	font-size: 12px;
	line-height: 20px;
}

.mod_copyright p {
	margin-left: 237px;
	padding-top: 5px;
	font-size: 12px;
	color:#666666 ;
}

.mod_copyright .address {
	text-align: center;
	margin-left: -20%;
}
</style>