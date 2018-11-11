<template>
    <div class="example">
        <!-- <Tabs type="card" value="name1">
        <TabPane label="标签一" name="name1">
            <DatePicker type="datetimerange" placeholder="Select date and time" placement="right-end" style="width: 300px"></DatePicker>
            asdfasdfa324324234234234234234234
        </TabPane>
        <TabPane label="标签二" name="name2">标签二的内容</TabPane>
        <TabPane label="标签三" name="name3">标签三的内容</TabPane>
    </Tabs> -->
        <!-- <DatePicker type="datetimerange" placeholder="Select date and time" style="width: 300px"></DatePicker> -->
        <sliderTest :initNumList="getValue1" v-if="showSlider"></sliderTest>
        {{getValue1}}
        <!-- <sliderTest :initNumList="value2" ></sliderTest> -->
        <!-- <div class="myDragdiv" v-drag="{age:'sdfsf'}"></div> -->
        <button @click="onChangeSliderValue">changeSliderValue</button>
        <button @click="onHideSlider">hideSlider</button>
        <button @click="onShowSlider">showSlider</button>
    </div>
</template>
<script>
import sliderTest from "./slider-test";
export default {
  name: "example",
  components: {
    sliderTest
  },
  created() {
    debugger;
    this.sb1 = 50;
    this.sb2 = 100;
  },
  mounted() {
    debugger;
  },
  data() {
    let self = this;
    return {
      startNumber: "",
      endNumber: "",
      numberList: [],
      sb1: 25,
      sb2: 50,
      //  value1: [self.sb1, self.sb2],
      value2: [30, 80],
      showSlider: false
    };
  },
  computed: {
    getValue1() {
      return [this.sb1, this.sb2];
    }
  },
  methods: {
    onChangeSliderValue() {
      debugger;
      this.sb1 = 0;
      this.sb2 = 1;
    },
    onHideSlider() {
      debugger;
      this.showSlider = false;
    },
    onShowSlider() {
      debugger;
      this.showSlider = true;
    }
  }
};
</script>
<style lang="less">
@import "../../assets/less/common.less";
.example {
  width: 300px;
  height: 200px;
  .myDragdiv {
    width: 100px;
    height: 100px;
    background-color: red;
  }
}
</style>

