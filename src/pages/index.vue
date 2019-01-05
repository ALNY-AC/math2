<template>
  <div id="index">
    <el-card title="控制台">
      <el-row :gutter="20">
        <el-col :span="24">
          <el-form inline>
            <el-form-item label="生成题目数量：">
              <el-input v-model="number"></el-input>
            </el-form-item>
            <el-form-item :label="`生成题目范围:（${range}以内的题目）`">
              <el-input v-model="range"></el-input>
            </el-form-item>
            <el-form-item label="选择题目类型：">
              <el-checkbox-group v-model="type">
                <el-checkbox label="+">加法</el-checkbox>
                <el-checkbox label="-">减法</el-checkbox>
                <el-checkbox label="*">乘法</el-checkbox>
                <el-checkbox label="/">除法</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-card>
    <el-card>
      <div class="time-box" slot="header">
        <span class="time-item">{{h | time}}</span>
        <span class="time-icon">：</span>
        <span class="time-item">{{m | time}}</span>
        <span class="time-icon">：</span>
        <span class="time-item">{{s | time}}</span>

      </div>

      <el-button @click="build">开始生成题目</el-button>
      <el-button @click="submit">提交题目</el-button>
    </el-card>
    <el-card>
      <div slot="header">
        <span class="text-success" style="margin-right:20px">
          正确：{{success}}
        </span>
        <span class="text-red">
          错误：{{error}}
        </span>
      </div>

      <el-form>
        <el-row :gutter="20">
          <el-col :xs="24" :span="6" v-for="(item,i) in subjectList" :key="item.ID">
            <el-form-item>
              <span slot="label" :class="[{'text-red':item.state===false},{'text-success':item.state===true}]">
                {{`${item.x}${item.type =='/' ?'÷':item.type}${item.y}`}}
              </span>
              <el-input v-model.number="item.value">
                <template slot="suffix">
                  <i :class="['icon fa fa-close text-red']" v-if="item.state===false"></i>
                  <i :class="['icon fa fa-check text-success']" v-if="item.state===true"></i>
                </template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

      </el-form>
    </el-card>

  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>