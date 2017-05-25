 <template>
    <div id="wrap">
        <div class="alet_container">
            <div class="contain">
                <section class="tip_text_container">
                    <div class="tip_icon">
                        <span></span>
                        <span></span>
                    </div>
                    <p class="tip_text">{{alertText}}</p>
                </section>
            </div>
        </div>
        <div class="confrim" @click="closeTip">
            <i>确认</i>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll';

    export default {
        data() {
            return {
                positionY: 0,
                timer: null,
                scroll: ''
            };
        },
        props: ['alertText'],
        methods: {
            closeTip() {
                this.$emit('closeTip');
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.scroll = new BScroll(document.getElementById('wrap'), {probeType: 2});
            });
        }
    };
</script>

<style lang="scss" scoped>
    @import './mixin';
	@keyframes tipMove{
       0%   { transform: scale(1) }
       35%  { transform: scale(.8) }
       70%  { transform: scale(1.1) }
       100% { transform: scale(1) }
    }  
    #wrap{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: 200;
        background: rgba(0, 0, 0, 0.5);
        overflow: hidden;
    }
    /* .alet_container{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: 200;
        // background: rgba(0, 0, 0, 0.5);
        overflow: hidden;
    } */
    .contain{
        width: 100%;
        min-height: 100%;
        background-color: rgba(255,255,255,0.8);
        .tip_text_container{
            width: 100%;
            animation: tipMove .4s ;
            padding-top: 0.85rem;
            padding-bottom: 2rem;
         
            .tip_icon{
                @include wh(3rem, 3rem);
                position: relative;
                left: 50%;
                transform: translateX(-50%);
                border: 0.15rem solid #f8cb86;
                border-radius: 50%;
                span:nth-of-type(1){
                    @include wh(3rem, 3rem);
                    position: relative;
                    left: 50%;
                    transform: translateX(-50%);
                    background-color: #f8cb86;
                }
                span:nth-of-type(2){
                    @include wh(3rem, 3rem);
                    position: relative;
                    left: 50%;
                    transform: translateX(-50%);
                    border: 1px;
                    border-radius: 50%;
                    margin-top: .2rem;
                    background-color: #f8cb86;
                }
            }
            .tip_text{
                position: relative;
                left: 50%;
                transform: translateX(-50%);
                width: 3rem;
                line-height: .9rem;
                text-align: center;
                margin-top: .8rem;
                padding: 0 .4rem;
            }
        }
    }
    
    .confrim{
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        z-index: 200;
        width: 4rem;
        height: 1.5rem;
        i{
            @include wh(4rem, 1.5rem);
            margin: 0 auto;
            display: inline-block;
            font-weight: bold;
            font-style: normal;
            background-color: #4cd964;
            text-align: center;
            line-height: 1.5rem;
            border: 1px;
            border-radius: 0.25rem;
        }
    }
</style>
