<template>
  <div class="hello">
<!--   header-->
    <Header></Header>
<!--    导航栏-->
    <div class="content">
      <div  class="left">
        <el-menu
                default-active="2"
                background-color="#419878"
                text-color="#fff"
                router
                style="width:200px;height: 100%"
                active-text-color="#fff">
          <div class="title">
            <i class="el-icon-menu icon"></i>
            <span>目录</span>
          </div>
          <div v-for="(item,index) in menuList" :key="index">
            <el-submenu :index="item.path||index+''"   v-if="item.children">
              <template slot="title">
                <i :class="item.icon" style="color:#fff"></i>
                <span>{{item.name}}</span>
              </template>
              <el-menu-item-group >
                <el-menu-item :index="itemChild.path" v-for="(itemChild,indexChild) in item.children" :key="indexChild">
                  <template slot="title">
                    <i :class="itemChild.icon" style="color:#fff"></i>
                    <span>{{itemChild.name}}</span>
                  </template>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item :index="item.path||index+''" v-else>
              <template slot="title">
                <i :class="item.icon" style="color:#fff"></i>
                <span>{{item.name}}</span>
              </template>
            </el-menu-item>
          </div>
        </el-menu>
      </div>

      <div class="right">
        <div style="height:30px">
          <TopTag></TopTag>
        </div>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>

  </div>
</template>

<script>
  import TopTag from '../components/top-tag'
  import Header from '../components/Header'
export default {
  name: 'Home',
  components:{
    TopTag,
    Header
  },
  data(){
    return{
      component:'Hello',
      menuList:[{
        icon:'fa fa-fw fa-bars',
        path:'',
        name:'贷前审批',
        children:[
          {
            icon:'',
            path:'index',
            name:'贷后',
          },
          {
            icon:'',
            path:'detail',
            name:'待派单',
          },
        ]
      },
        {
          icon:'fa fa-fw fa-bars',
          path:'12',
          name:'导航二',
        }]
    }
  },
  mounted(){
    this.$store.commit("commitToolBar",this.$route);
    this.$store.commit('activeClass',this.$route.path)
    window.console.log(this.$route)
  },
  methods:{
  },
  watch: {
    $route() {
      // 路由组件名称（自定义）
      const routerName = this.$route
      this.$store.commit("commitToolBar",routerName);
      this.$store.commit('activeClass',this.$route.path)
      window.console.log(this.$route)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .el-submenu .el-menu-item{
    min-width: 0!important;
    text-align: left!important;
    line-height: 30px;
    height: 30px;
  }
  .el-menu-item-group__title {
    padding: 0 0 0 20px;
  }
    .el-submenu{
    text-align: left!important;
  }
  .el-menu-item{
    text-align: left!important;
  }
  .el-submenu__icon-arrow{
    color:#fff!important;
  }
   .el-menu-item, .el-submenu__title{
     height: 40px;
     line-height: 40px;
   }
</style>
<style lang="scss">
  .content{
    display:flex;
    .left{
     height: calc(100vh - 80px);
     width:200px;
      .title{
        font-size: 14px;
        text-align: left;
        height: 40px;
        margin-left: 20px;
        line-height: 40px;
        color:#fff;
        .icon{
          vertical-align: middle;
          margin-right: 5px;
          width: 24px;
          text-align: center;
          font-size: 18px;
        }
      }
    }
    .right{
      height: calc(100vh - 80px);
      flex: 1
    }
  }
</style>
