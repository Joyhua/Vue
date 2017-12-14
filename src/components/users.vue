<template>
  <div class="users">
  <ul>
  	<li v-for="users in users" @click="users.show=!users.show">
  		<h2>{{users.name}}</h2>
  		<h3 v-show="users.show">{{users.positions}}</h3>
  	</li>
  </ul>
   <button @click="deleteUsers">删除</button>
  </div>
</template>

<script>
export default {
  name: 'users',
  data () {
    return {
      users: [{name:"Tom",positions:"web开发",show:true},
      {name:"Joy",positions:"web开发",show:true},
      {name:"Herry",positions:"web开发",show:true},
      {name:"Davy",positions:"web开发",show:true},
      {name:"Vitory",positions:"web开发",show:true},
      {name:"Davy",positions:"web开发",show:true},
      {name:"Vitory",positions:"web开发",show:true}]
    }
  },
  methods:{
  	deleteUsers:function(){
  		this.users.pop();
  	}
  },
  created(){
  	this.$http.get('http://ip.taobao.com/service/getIpInfo.php?ip=63.223.108.42')
  	.then((data)=>{
  		console.log(data)
  	})
  }
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
