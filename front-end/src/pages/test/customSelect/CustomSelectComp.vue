<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-08-19 14:30:34
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-10-11 14:41:23
 * @FilePath: \front-end\src\pages\healthy\components\trend.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="custom-select-box">
    {{value}}--{{valueKey}}
    <el-select  multiple required v-model="valueKey">
      <el-option v-for="item in list" :key="item.value" :value="item.value">{{item.label}}</el-option>
    </el-select>
  </div>
</template>

<script lang="js">

export default {
  props: {
    value: {
      type: Object,
      default: []
    }
  },
  computed: {
    valueKey: {
      get() {
        let value = this.value
        console.log('value:', value)
        if(Array.isArray(value)) {
          return value.map((ele)=>ele.value)
        }
      },
      set(val) {
        console.log('val:', val)
        const result = val.map((ele)=>this.list.find((item)=>item.value===ele))
        console.log('val:', val, result)
        this.$emit('input', result)
      } 
     }
  },
  data() {
    return {
      list: [
        {
          label: '1',
          value: '1'
        },
        {
          label: '11',
          value: '11'
        },
        
      ]
    }
  },
  methods: {
    // handleChange(val) {
    //   debugger
    //   const result = val.map((ele)=>{
    //     return this.list.find((item)=>item.value===ele)
    //   })
    //   this.$emit('input', result.join(','))
    //   console.log('val:', result)
    // },
  }
}
</script>
<style lang="scss" scoped>
.tab-bar {
  background: #fff;
  display: flex;
  padding: 10px 20px;
  overflow: hidden;
  .time-select {
    width: 84px;
    height: 21px;
    margin: 0;
    padding: 0;
    margin-left: 20px;
    font-size: 12px;
    color: #909097;
    overflow: hidden;
    .ant-select-selector {
      padding: 0;
      height: 21px;
    }
    .ant-select-single.ant-select-sm:not(.ant-select-customize-input)
      .ant-select-selector {
      padding: 0;
    }
  }
  & > div {
    display: flex;
    align-items: center;
    .ant-divider-vertical {
      margin: 0 15px;
      height: 80%;
    }
  }

  .tab-item {
    text-decoration: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #909090;
    font-size: 14px;

    &:hover {
      color: #007fff;
    }
  }
  .active {
    color: #007fff;
  }
  border-bottom: 1px solid #e5e6eb;
}
</style>
