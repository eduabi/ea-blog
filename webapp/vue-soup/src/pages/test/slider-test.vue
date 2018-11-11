<template>
    <div class="test">
        <Slider ref="mySlider" :value="valueList" :tip-format="formatsliderTip" @on-change="valueChange" @on-input="valueChange" range></Slider>
        <div ref="cardModal" class="card-modal"></div>
        <!-- <button @click="saySlider">dfsdf</button> -->
    </div>
</template>
<script>
export default {
  name: "test",
  props: {
    initNumList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  created(){
      debugger
      console.log("created")
     //更新值
  },
  mounted(){
    debugger
    console.log("mounted")
  },
  data() {
    return {
      startNumber: "",
      endNumber: "",
      numberList: [],
      valueList: this.initNumList
    };
  },
  watch: {
    initNumList(newVal){
      debugger
      this.valueList = newVal
    }
  },
  methods: {
    formatsliderTip(params) {
      return params;
    },
    saySlider() {
      let _ele = $(this.$refs.mySlider.$el).find(".ivu-slider-button-wrap")[1];
      $(this.$refs.cardModal).attr("style", $(_ele).attr("style"));
    },
    valueChange(data) {
      this.$nextTick(() => {
        this.saySlider();
      });
    }
  },
  mounted() {
    this.saySlider();
  }
};
</script>
<style lang="less">
@import "../../assets/less/common.less";
.test {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 77px;
  padding: 40px 0;
  /deep/.ivu-tabs .ivu-tabs-tabpane {
    min-height: 600px;
  }
  /deep/.ivu-tabs-nav {
    padding-left: calc(50% - 120px);
  }
  /deep/.ivu-slider-wrap {
    background-color: #fbf40f;
  }
  /deep/.ivu-slider-bar {
    background: #14dc1a;
  }
  /deep/.ivu-slider-button-wrap {
    z-index: 900;
  }
  .card-modal {
    position: relative;
    top: -20px;
    width: 100%;
    height: 5px;
    background-color: red;
  }
}
</style>

