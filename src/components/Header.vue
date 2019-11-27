<template>
<div >
    <div id="header">
        <div style="width: 180px;display: flex;justify-content: flex-end;padding: 10px 0">
            <img src="../assets/logo.png" alt="">
        </div>
        <div class="right">
            <div>{{username}},你好</div>
            <div>{{dateFormatter(today,'YYYY-MM-DD')}}</div>
            <div @click="changePas" class="activeButton">修改密码</div>
            <div @click="logout"  class="activeButton">退出系统</div>
        </div>
    </div>

<!--    修改密码-->
    <el-dialog
            title="修改密码"
            :visible.sync="passwordShow"
            width="364px"
            >
       <el-form  label-width="100px" :model="rePassword" :rules="passwordRule">
           <el-form-item label="原密码" prop="oldPassword" >
               <el-input v-model="rePassword.oldPassword"></el-input>
           </el-form-item>
           <el-form-item label="新密码" prop="newPassword">
               <el-input v-model="rePassword.newPassword"></el-input>
           </el-form-item>
           <el-form-item label="确认新密码" prop="reNewPassword">
               <el-input v-model="rePassword.reNewPassword"></el-input>
           </el-form-item>
       </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="passwordShow = false">取 消</el-button>
            <el-button type="primary" @click="passwordShow = false">确 定</el-button>
        </span>
    </el-dialog>
<!--    退出系统提示-->
    <el-dialog
            title="提示"
            :visible.sync="logoutShow"
            width="30%"
    >
        <div style="display: flex;justify-content: flex-start">
            <i class="el-icon-warning" style="color:#e6a23c;font-size: 20px;padding-right: 5px"></i>
            <span>是否确认退出系统</span>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button @click="logoutShow = false">取 消</el-button>
            <el-button type="primary" @click="logoutShow = false">确 定</el-button>
        </span>
    </el-dialog>
</div>
</template>

<script>
    import { dateFormatter } from '../until/index.js'
    export default {
        name: "Header",
        data(){
            return{
                username:'admin',
                today:new Date(),
                passwordShow:false,
                logoutShow:false,
                rePassword:{
                    oldPassword:'',
                    newPassword:'',
                    reNewPassword:'',
                },
                passwordRule:{
                    oldPassword:[
                        { required: true, message: '请输入旧密码', trigger: 'blur' },
                    ],
                    newPassword:[
                        { required: true, message: '请输入新密码', trigger: 'blur' },
                    ],
                    reNewPassword:[
                        { required: true, message: '请确认新密码', trigger: 'blur' },
                    ],
                }
            }
        },
        methods:{
            dateFormatter,
            //修改密码
            changePas(){
               this.passwordShow = true
            },
            //退出登录
            logout(){
               this.logoutShow = true
            },
        }
    }
</script>

<style lang="scss">
#header{
    display: flex;
    width: 97vw;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    .right{
        display: flex;
        color:#808080;
        font-size: 14px;
        div{
            margin-left: 10px;
        }
        .activeButton:hover{
            cursor: pointer;
            color:#419878
        }
    }
}
    .el-form-item--small .el-form-item__content, .el-form-item--small .el-form-item__labe{
        width: 168px;
    }
</style>
