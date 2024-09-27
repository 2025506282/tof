<template>
  <div class="parent">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="活动区域" prop="region">
        <CustomSelectCompVue  v-model="ruleForm.region" />
        <!-- <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select> -->
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import CustomSelectCompVue from './customSelect/CustomSelectComp.vue'
export default {
  components: {
CustomSelectCompVue    
  },
  data() {
    return {
      ruleForm: {
        region: [],
      },
      rules: {
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
      },
    }
  },
  computed: {
   
  },
  methods: {
    submitForm(formName) {
      console.log('tttt:', this.$refs)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!")
        } else {
          console.log("error submit!!")
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
}
</script>

<style scoped>
</style>
