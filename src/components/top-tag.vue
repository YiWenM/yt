<template >
    <div v-if="$store.state.toolBarData.length" id="tag" >
        <el-tag
                v-for="(item,index) in $store.state.toolBarData"
                :key="index"
                closable
                :class="$store.state.activePath===item.path?'active':''"
                @click="changeRouter(item.path)"
                @close="removeRouter(item,index)"
                type="success"
        >
            {{item.name}}
        </el-tag>
    </div>
</template>

<script>
    export default {
        name: "top-tag",
        data(){
            return{
                classClick:''
            }
        },
        mounted(){
            window.console.log(this.$store.state.toolBarData)
        },
        methods:{
            //跳转路由
            changeRouter(path){
                this.$router.push({
                    path:path
                })
                this.$store.commit('activeClass',path)
            } ,
            //关闭tab
            removeRouter(item,index){
                if(this.$store.state.toolBarData.length!==1){
                    this.$router.push({
                        path:index!==0?this.$store.state.toolBarData[index-1].path:this.$store.state.toolBarData[index+1].path
                    })
                    this.$store.commit('activeClass',index!==0?this.$store.state.toolBarData[index-1].path:this.$store.state.toolBarData[index+1].path)
                    this.$store.commit('removeToolBar',item)
                }

            }
        }
    }
</script>

<style>
#tag {
    width: 100vw;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}
#tag > span{
    margin: 0 0 0 10px;
    cursor: pointer;
}
#tag .active{
    color:#fff;
    background: #1a9123;


}
</style>
