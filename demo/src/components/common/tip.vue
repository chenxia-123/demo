<template>
    <div v-show="toastshow" transition="toast" class="toast font-normal">
        {{toasttext}}
    </div>
</template>
<script>
export default {
    props: {
        toastshow: {
            type: Boolean,
            required: false,
            default: function() {
                return false;
            }
        },
        toasttext: {
            type: String,
            required: false,
            default: function() {
                return 'no message';
            }
        },
        duration: {
            type: Number,
            default: 3000,
            required: false
        }
    },
    ready() {
        
    },
    watch: {
        toastshow(val) {
            if (this._timeout) clearTimeout(this._timeout);
            if (val && !!this.duration) {
             this._timeout = setTimeout(function() {
                this.toastshow = false;
             }, this.duration);
            }
        }
    }
};
</script>
<style>
    .toast{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: block;
        width: 200px;
        height: auto;
        text-align: center;
        color: white;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        z-index: 10;
        transform: scale(1);
        padding: 5px;
    }
    .toast-transition{
        transition: all .3s ease;
    }
    .toast-enter{
        opacity: 0;
        transform: scale(0.1);
    }
    .toast-leave{
        opacity: 0;
        transform: scale(0.1);
    }
</style>
