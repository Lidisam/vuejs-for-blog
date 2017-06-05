<template>
  <div>
    <div class="dialog-wrap">
      <div class="dialog-cover"  v-if="isShow" @click="closeMyself"></div>
      <transition name="drop">
        <div class="dialog-content"  v-if="isShow" :style="[size]">
          <p class="dialog-close" @click="closeMyself">x</p>
          <slot>empty</slot>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      isShow: {
        type: Boolean,
        default: false
      },
      size: {        //最好用百分比
        required: false
      }
    },
    data () {
      return {

      }
    },
    methods: {
      closeMyself () {
        this.$emit('on-close')
      }
    }
  }
</script>

<style scoped>
  .drop-enter-active {
    transition: all .5s ease;
  }
  .drop-leave-active {
    transition: all .3s ease;
  }
  .drop-enter {
    transform: translateY(-500px);
  }
  .drop-leave-active {
    transform: translateY(-500px);
  }

  .dialog-wrap {
    position: fixed;
    width: 100%;
    height: 100%;
  }
  .dialog-cover {
    background: #000;
    opacity: .3;
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .dialog-content {
    position: fixed;
    overflow: auto;
    background: #fff;
    z-index: 10;
    border: 2px solid #ffffff;
    padding: 2%;
    line-height: 1.6;
    width: 50%;
    left: 25%;
    top: 20%;
    max-height: 50%;
    box-shadow: 1px 1px 1px #fff;
  }
  .dialog-close {
    position: absolute;
    right: 5px;
    top: 5px;
    width: 20px;
    height: 20px;
    text-align: center;
    cursor: pointer;
  }
  .dialog-close:hover {
    color: #4fc08d;
  }
</style>
