const Detail = resolve=>(require(["../page/Detail"],resolve))
const Main = resolve=>(require(["../page/Home"],resolve))
const Hello = resolve=>(require(["../page/Hello"],resolve))

export default {
  routes: [
    // {
    //   path: '/',
    //   redirect: '/login'
    // },
    // {
    //   path: '/login',
    //   name: '登陆',
    //   component: Login
    // },
    {
      path:'/',
      name: 'Main',
      component: Main,
      children:[
        {
          path: '/index',
          name: '贷后',
          component: Hello,
          meta:{
            keepalive:true
          }
        },
        {
          path: '/detail',
          name: '待派单',
          component: Detail,
          meta:{
            keepalive:true
          }
        },
      ]
    }
  ]
};
