import Vue from 'vue'
import App from './App.vue'

// import Vue from 'vue/dist/vue.esm.js' //是我们自己找到的带解析器的版本,可以解析下面这种我们以前经常写的渲染
// new Vue({
//   el:'#app',
//   components:{
//     App,
//   },
//   template:'<App />'
// })

// 但，我们要的就是不带解析的vue版本，因为这样子打包起来体积更小，以后就要用下面这种渲染了

Vue.config.productionTip = false  
// 这句是关掉控制台vue的开发提示

new Vue({
  render: h => h(App),
}).$mount('#app')
