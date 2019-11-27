<template>
    <div>
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="借贷需求" name="1">
                <div style="width: 100vw;height: 100vh;background: red">
                    <div style="background: #f3d19e;width: 3000px;">11111</div>
<!--                    <BaseInfo :editCfg="editCfg" :editData="editData" :editRules="editRules"></BaseInfo>-->
                    <!--                <SearchFile :config="searchConfig" @search="search"></SearchFile>-->
                </div>

            </el-tab-pane>
            <el-tab-pane label="客户信息" name="2">客户信息</el-tab-pane>
            <el-tab-pane label="抵押物信息" name="3">抵押物信息</el-tab-pane>
            <el-tab-pane label="联系人" name="4">联系人</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
    // import BaseInfo from '../components/BaseInfo'
    // import SearchFile from '../components/SearchFile'
    export default {
        name: 'Hello',
        components:{
            // BaseInfo,
            // SearchFile
        },
        data(){
            return{
                activeName:'1',
                searchConfig:[
                    {
                        type:'input',
                        key:'name',
                        label:'名字'
                    },
                    {
                        type:'select',
                        key:'sex',
                        label:'性别',
                        options:[
                            {
                              key:1,
                              value:'男'
                            },
                            {
                                key:0,
                                value:'女'
                            }
                        ]
                    }
                ],
                editCfg:[
                    {
                        type:'input',
                        label:'详细借款用途：',
                        prop:'detailInfo',
                        clearable:true,
                    },
                    {
                        type:'input',
                        label:'申请借款额度(元)：',
                        prop:'money',
                        clearable:true,
                    },
                    {
                        type:'input',
                        label:' 期望月还款额（元：',
                        prop:'qiwang',
                        clearable:true,
                    },
                    {
                        type:'select',
                        label:'产品：',
                        prop:'product',
                        clearable:true,
                        options:[
                            {
                              label:'商品1',
                              value:'1'
                            }
                        ]
                    },
                ],
                editData:{
                    detailInfo:'',
                    money:'',
                    qiwang:'',
                    product:''
                },
                editRules:{
                    detailInfo:{

                    },
                    money:{

                    },
                    qiwang:{

                    },
                    product:{

                    }
                }
            }
        },
        methods:{
            //更换tab
            handleClick(val){
               window.console.log(val)
            },
            search(val){
                window.console.log(val)
            }
        }
    }
</script>
