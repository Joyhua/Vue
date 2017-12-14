<!--此例子为组件间如何访问数据-->

<template>
  <div class="users">
  <ul>
  	<li v-for="l in lists" @click="l.show=!l.show">
  		<h2>{{l.name}}</h2>
  		<h3 v-show="l.show">{{l.positions}}</h3>
  	</li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'app-props',
  //props:["users"]
  //props:{[users,list]}
  
  //标准写法,lists为App.vue中的v-bind:lists
  props:{
  	lists:{
  	type:Array,
  	required:true
  }}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.users{margin: 20px auto;width: 100%;}
h1, h2 {
  font-weight: normal;
}
ul {
  display: flex;flex-wrap: wrap;list-style: none;width: 100%;max-width:800px;margin: auto;/*justify-content: space-around;*/list-style-type: none;
}
li {flex-basis: 200px;height: 100px;border: 1px solid #000;margin: 20px;flex-grow: 1;}
a {
  color: #42b983;
}
</style>
