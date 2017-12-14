<template>
  <header>
  	<h1 @click="changeTitle">{{title}}{{title1}}</h1>
  </header>
</template>

<script>
export default {
  name: 'app-header',
  data () {
    return {
      title: "Vue.js demo"
    }
  },
  props:{
  	title1:{
  		type:String
  	}
  },
  methods:{
  	changeTitle: function(){
  		//this.title1="have change title";
  		
  		//若想触发后改变所有使用了title1的title1值$emit
  		//当出发changeTitle后，触发自定义的titleChanged事件(该事件在App.vue相应的模板中，titlechanged事件引用一个方法【现在App.vue中定义为updateTitle】是改变所有title1的方法),title1赋值为“子向父传值”。
  		this.$emit("titleChanged","子向父传值");
  		
  	}
  }/*,
  beforeCreate:function(){
  	alert("组件实例化前执行的函数");
  },
  created:function(){
  	alert("组件实例化完毕，但页面还未显示")
  },
  beforeMount:function(){
  	alert("组件挂载前，页面仍未显示，但虚拟dom已完成")
  },
  mounted:function(){
  alert("组件挂载后，此方法执行，页面显示")
  },
  beforeUpdate:function(){
  	alert("操作特定事件时，组件更新前，页面未显示")
  },
  updated:function(){
  alert("此方法执行，页面更新完毕")
  },
  beforeDestroy:function(){
  	alert("生命周期销毁前")
  },
  destroyed:function(){
  	alert("事件销毁");
  }*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	header{background: lightcoral;padding: 10px;}
</style>
