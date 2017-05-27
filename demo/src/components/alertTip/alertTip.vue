 <template>
    <div id="wrap">
        <div class="alet_container">
            <div class="contain">
                <div class="title">{{title}}</div>
                <div class="page" id="scroll">
                    <div class="pageScroll">
                        <div class="input-wrap">
                            <span>血尿酸值</span><input type="text" placeholder="请输入血尿酸值" maxlength="10"><span>μmol/L</span>
                        </div>
                        <div class="tip">
                            温馨提示：<br>
                            以每日早上空腹时检测尿酸为准确，建议使用优客推荐的百捷尿酸仪进行指尖血尿酸检测。
                        </div>
                    </div>
                </div>
                <div class="btn-group">
                    <button class="cancel" @click="closeTip">取消</button><button class="confirm">确定</button>
                </div>
            </div>
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
        props: ['title'],
        methods: {
            closeTip() {
                this.$emit('closeTip');
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.scroll = new BScroll(document.getElementById('scroll'), {probeType: 2});
            });
        }
    };
</script>

<style lang="scss" scoped>
    @import './mixin';
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
    .alet_container{
        width: 100%;
        height: 100%;
    }
    .contain{
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 8.8rem;
        min-height: 8.2rem;
        border-radius: 0.2rem;
        background-color: rgba(255,255,255,1);

       .title{
            width: 100%;
            height: 1.3rem;
            text-align: center;
            line-height: 1.3rem;
            font-size: 0.4rem;
            font-weight: 700;
            color: #555;
       }
       .page{
            box-sizing: border-box;
            width: 100%;
            max-height: 12rem;
            border-top: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            padding: 0.65rem 0.65rem 0 0.65rem;
            overflow: hidden;

            .input-wrap{
                padding: 0.27rem 0;
                span{
                    display: inline-block;
                    height: 1.1rem;
                    line-height: 1.1rem;
                    font-size: 0.4rem;
                    font-weight: 700;
                    color: #555;
                }
                input{
                    box-sizing: border-box;
                    display: inline-block;
                    margin: 0 0.2rem;
                    padding-left: 0.4rem;
                    width: 3.8rem;
                    height: 1.1rem;
                    font-size: 0.4rem;
                    font-weight: 700;
                    border: 1px solid #ccc;
                    border-radius: 0.2rem;
                }
            }
            .tip{
                line-height: 0.7rem;
                font-size: 0.35rem;
                font-weight: 700;
                color: #888;
                padding-bottom: 0.92rem;
            }
       }
       .btn-group{
            height: 1.68rem;
            display: flex;
            button{
                flex: 1;
                height: 100%;
                line-height: 1.68rem;
                font-size: 0.46rem;
                font-weight: 700;
                color: #ae8330;
                background: #fff;
                border:none;
                &.cancel{
                    border-right: 1px solid #ccc;
                    border-radius: 0 0 0 0.2rem;
                }
                &.confirm{
                    border-radius: 0 0 0.2rem 0;
                }
            }
       }
    }
</style>
