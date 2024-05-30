<template>
  <div class="print-box">
    <div class="content">
      <div v-for="key in Object.keys(labelMap)" :key="key">
        <div v-if="typeof obj[key] === 'object'" class="item item2">
          <div v-if="getObjType(obj[key]) === 'array'">
            <label>{{ labelMap[key].label }}</label>
            <div v-for="item in obj[key]" :key="item">
              <print-page
                :obj="item"
                :labelMap="labelMap[key].keys"
              ></print-page>
            </div>
          </div>
          <div v-else>
            <label>{{ labelMap[key].label }}</label>
            <print-page
              :obj="obj[key]"
              :labelMap="labelMap[key].keys"
            ></print-page>
          </div>
        </div>
        <div v-else class="item">
          <label> {{ labelMap[key] }}</label>
          <span> {{ obj[key] }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
export default  {
  name: 'print-page',
  props: {
    labelMap: {
      default: {
        "quantity": '质量',
        "price": "价格",
        "totalPrice": "总价",
        "orderMaterial": {
          "label": "订单详情",
          "keys": {
            "name": "名称",
            "materialType": "类型",
            "orderSpecs": {
              "label": "规格详情",
              "keys": {
                "name": "名称",
                "price": "价格",
              }
            }
          }
        },
        // "orderSpec": "规格",
      }
    },
    obj: {
      default: {
        "id": "1",
        "quantity": 20,
        "price": 3000,
        "totalPrice": 60000,
        "warehousingentryId": "1",
        "orderMaterial": {
            "id": "1",
            "name": "语音笔",
            "materialType": "normal",
            "supplierId": "1",
            "orderSpecs": [{
              "id": "1",
              "name": "1支",
              "price": 3000,
              "materialId": "1"
            }]
        },
        "orderSpec": {
            "id": "1",
            "name": "1支",
            "price": 3000,
            "materialId": "1"
        }
      }
    }
  },
  methods: {
    getObjType(obj) {
      if(obj instanceof Array) {
        return 'array'
      }
      //  if(obj[key] instanceof Array) {
      //   return 'array'
      // }
    }
  },
  mounted() {
    const query = this.$route.query
    const { from, type } = query
    if(from !== 'server') {
        const originTitle = document.title;
        window.addEventListener('beforeprint', ()=> {
          console.log('正在打印')
          document.title = '打印'
        });
        window.addEventListener('afterprint', ()=> {
          document.title = originTitle
          console.log('打印完成')
          window.close()
        })
    }
    switch (type) {
      case 'dynamic':
        break;
      default:
        break;
    }
    setTimeout(() => {
      window.print()
    }, 0);
  },
  data() {
    const obj = {
      "id": "1",
      "quantity": 20,
      "price": 3000,
      "totalPrice": 60000,
      "warehousingentryId": "1",
      "orderMaterial": {
          "id": "1",
          "name": "语音笔",
          "materialType": "normal",
          "supplierId": "1",
          "orderSpecs": []
      },
      "orderSpec": {
          "id": "1",
          "name": "1支",
          "price": 3000,
          "materialId": "1"
      }
    }
    const labelMap = {
      "quantity": '质量',
      "price": "价格",
      "totalPrice": "总价",
      "orderMaterial": "订单详情",
    }
    return {
      // obj,
      // labelMap,
      // mockJSON: {
      //   labelMap,
      // }
    }
  }
}
</script>
<style lang="scss">
.print-box {
  // page-break-after: always;
  // counter-reset: page;
  // .page-footer {
  //     position: fixed;
  //     bottom: 20px;
  //     right: 40px;
  //     display: table-footer-group !important;
  //     &:after {
  //       counter-increment: page;
  //       content: counter(page);
  //     }
  //   }
  .content {
    .item {
      width: 50%;
      float: left;
      label {
        margin-right: 10px;
        position: relative;
        &::after {
          position: absolute;
          right: -5px;
          content: ":";
        }
      }
    }
    .item2 {
      width: 100%;
    }
  }
}
@media print {
  .page-footer {
    position: fixed;
    bottom: -20px;
    text-align: left;
    left: 0px;
    width: 200px;
    height: 50px;
    background: red;
    display: table-footer-group !important;
    &:after {
      counter-increment: page;
      content: counter(page) " of " counter(pages);
    }
  }
}
</style>
