const state = {
    toolBarData:[],// 保存标签button的数组
    activePath:'' // 选中标签颜色
}
//异步请求数据
const actions = {
}
//同步请求数据
const mutations = {
    commitToolBar(state,payload){
        const inToolbar = state.toolBarData.find(item => item.path === payload.path)
        !inToolbar && state.toolBarData.push({
            ...payload
        })
        },
    removeToolBar(state,payload){
        state.toolBarData.map((item,index)=>{
            if(item.path === payload.path){
                state.toolBarData.splice(index,1)
            }
        })
    },
    activeClass(state,payload){
        state.activePath = payload
    }
}
export default {
    state,
    actions,
    mutations

}
