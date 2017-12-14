<!--表现层-->
<template>
  <div id="app">
  	
  	<!--updateTitle传的参数一定是$event-->
    <app-header @titleChanged="updateTitle($event)" v-bind:title1="title1"></app-header>
    <!--<users/>-->
    <!--"lists"随便写-->
    <!--<app-props v-bind:lists="lists"></app-props>
    -->
    
    <!--路由实现方法-->
    <!--不使用a元素的原因是a元素每次执行都会重新刷新页面,有闪一闪的问题-->
  	<ul><li><router-link to="/">home</router-link></router-link></li>
  	<li><router-link to="/users">user</router-link></router-link></li></ul>
  	
  	<!--页面展示-->
  	<router-view></router-view>
  	
  	<footers v-bind:title1="title1"></footers>
  </div>
</template>

<!--行为层-->
<script>
	//import Users from './components/users'
	import Header from './components/Header'
	import Footer from './components/Foot'
	//import Prop1s from './components/props'
	
	
	
export default {
  name: 'app',
  data (){
  	return {
  		lists: [{name:"Tom",positions:"web开发",show:true},
      {name:"Joy",positions:"web开发",show:true},
      {name:"Herry",positions:"web开发",show:true},
      {name:"Davy",positions:"web开发",show:true},
      {name:"Vitory",positions:"web开发",show:true},
      {name:"Davy",positions:"web开发",show:true},
      {name:"Vitory",positions:"web开发",show:true}],
      title1:"Demo change title"
  	}
  	
  	
  },
  methods:{
  	updateTitle:function(title){
  		this.title1=title;
  	}
  },
  components:{
  	//'users':Users,
  	'app-header':Header,
  	'footers':Footer,
  	//'app-props':Prop1s
  	
  }
}
</script>

<!--样式层-->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
