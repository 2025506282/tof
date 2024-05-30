<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-09-26 09:44:28
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-09-26 09:53:54
 * @FilePath: \front-end\src\pages\excel\ExcelPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="custom-upload">
        <div class="content">
            <h2>
                PDF转换成Word (.docx, .doc)<img src="@/assets/images/logo/word.svg" />
            </h2>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue"
import networkConfig from '@/config/default/net.config'
import { readExcelFile } from "@/utils"
import ExcelJS from 'exceljs'
export default defineComponent({
    setup() {
        onMounted(() => {
            const workbook = new ExcelJS.Workbook();

            const data = readExcelFile('http://localhost:8080/excel/people.xlsx')
            console.log('data:', data)
        })
        return {
            jsondata: {},
            fileList: ref([]),
            serviceUrl: networkConfig.host + "/pdf/uploadFile"
        }
    },
})
</script>
<style lang="sass" scoped>
</style>
  