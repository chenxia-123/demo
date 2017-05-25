<template>
	<div class="login">
		<div class="mainbox">
			<div class="yk-logo"></div>
			<div class="form-box">
				<ul>
					<li>
						<input type="tel" class="form-input" placeholder="请输入大陆11位手机号码" />
					</li>
					<li>
						<input type="number" class="form-input w-p-60" placeholder="请输入手机验证码" />
						<a href="javascript:;" class="btn-vcode fr">发送验证码</a>
					</li>
					<li>
						<input type="text" class="form-input" placeholder="请输入专属邀请码" />
					</li>
					<li>
						<input type="tel" class="form-input" placeholder="请输入大陆11位手机号码" />
					</li>
					<li>
						<input type="number" class="form-input w-p-60" placeholder="请输入手机验证码" />
						<a href="javascript:;" class="btn-vcode fr">发送验证码</a>
					</li>
					<li>
						<input type="text" class="form-input" placeholder="请输入专属邀请码" />
					</li>
					<li>
						<input type="tel" class="form-input" placeholder="请输入大陆11位手机号码" />
					</li>
					<li>
						<input type="number" class="form-input w-p-60" placeholder="请输入手机验证码" />
						<a href="javascript:;" class="btn-vcode fr">发送验证码</a>
					</li>
					<li>
						<input type="text" class="form-input" placeholder="请输入专属邀请码" />
					</li>
					<li>
						<input type="tel" class="form-input" placeholder="请输入大陆11位手机号码" />
					</li>
					<li>
						<input type="number" class="form-input w-p-60" placeholder="请输入手机验证码" />
						<a href="javascript:;" class="btn-vcode fr">发送验证码</a>
					</li>
					<li>
						<input type="text" class="form-input" placeholder="请输入专属邀请码" />
					</li>
				</ul>
				<a href="javascript:;" class="btn" @click="tip">登录</a>
				<alert-tip v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" :alertText="alertText"></alert-tip>
			</div>
		</div>
		<div class="foot-logo"></div>
	</div>
</template>

<script>
import alertTip from '../alertTip/alertTip';
export default {
    data () {
        return {
            showAlert: false
        };
    },
    methods: {
        tip() {
            this.showAlert = true;
            this.alertText = '端午来了，你吃咸粽还是甜粽？大家分肯德基饭卡道具卡就疯狂老地方就爱看打飞机快递费就减肥咖啡机读卡防静电服骄傲聚少离多道具卡加快递费金卡戴珊家啊啊开发';
        },
        closeTip() {
            this.showAlert = false;
        }
    },
    components: {
        alertTip
    }
};
</script>

<style lang="scss">
	@charset "utf-8";

	//定义各种颜色
	$blackColor:#555;
	$grayColor:#888;
	$whiteColor:#fff;
	$brownColor:#ae8330;
	$blueColor:#0a9aff;
	$redColor:#ff2626;
	$grayBgColor:#ccc;
	$lightGrayBgColor:#f1f3f4;
	$brownBgColor:#cbb676;
	$lighterbrownBgColor:#dad0b4;
	$lightbrownBgColor:#dcc897;
	$bodyBgColor:#f8fbfc;
	$grayBorder:#d9d9d9;

	//定义字体大小
	$normalSize:0.46rem;
	$bigSize:0.5rem;
	$smallSize:0.42rem;
	$smallerSize:0.36rem;
	.login {
		width: 100%;
		height: 100%;
		overflow: auto;
	}
	.foot-logo{
		position:fixed;
		bottom:0.5rem;
		left:18%;
		width:64%;
		height:0.8rem;
		background-image:url("./logo_YK_HK.png");
		background-size:100% auto;
		background-repeat:no-repeat;
		background-position:center center;
	}
	.yk-logo{
		width:30%;
		height:4.2rem;
		margin:0 auto;
		background-image:url("./logoYK.png");
		background-size:100% auto;
		background-repeat:no-repeat;
		background-position:center bottom;
	}

	/*表单相关样式*/
	.form-box{
		.current-phone{
			text-align:center;
			padding:2rem 0 1.5rem 0;
			font-size:$bigSize;
			color:$blackColor;
		}
		ul{
			padding:0.5rem 0.8rem 0 0.8rem;
			
			li{
				line-height:1.2rem;
				padding:0.3rem 0;
				border-bottom:solid 1px $grayBgColor;
				&::after {
					content:'';
					display:block;
					visibility:hidden;
					clear:both;
					height:0;
				}
				
				.form-input{
					float:left;
					width:100%;
					height:0.8rem;
					line-height:0.8rem;
					padding:0.2rem 0;
					font-size:$normalSize;
					color:$blackColor;
					text-overflow:ellipsis;
						    box-sizing: content-box;
					&.w-half{
						width:50%;
					}
					&.w-p-60{
						width:60%;
					}
				}
			}
		}
	}
	.btn{
		display: block;
		margin: 1.1rem auto 2rem; 
		width: 7.1rem;
		height: 0.88rem;
		padding: 0.2rem 0;
		line-height: 0.88rem;
		background: #d5c284;
		font-size: 0.5rem;
		border-radius: 0.2rem;
		text-align: center;
		color: #fff;
		
	}
	.fr{
		float: right;
	}
	.btn-vcode{
		width: 40%;
		height: 0.88rem;
		padding: 0.2rem 0;
		line-height: 0.88rem;
		text-align: center;
		color: #fff;
		background: #d5c284;
		font-size: 0.5rem;
		border-radius: 0.2rem;
	}
</style>

