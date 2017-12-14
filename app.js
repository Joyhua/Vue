/*组件：在任何一个实例化的vue中都能通用,每个组件和实例化vue的变量都是私有的*/
Vue.component("greeting",{
	/*template里面有且仅有一个根标签*/
	template:"<p>{{name}}:大家好，这是我的女朋友<button @click='changeName'>change Name</button></p>",
	data:function(){
		return {
			name:"鹿晗"
		}
	},
	methods:{
		changeName:function(){
			this.name="Luhan";
		}
	}
});



//首先实例化vue对象

/*
 el:element 代表需要获取的元素，一定是html中的容器元素
 data:用于数据的存储
 methods:存储方法，this.name：获取当前vue-app容器内的data里的name数据
 elementTag:插入元素
 * */
var one=new Vue({
	el:"#vue-app",
	data:{
		name:"乔尹",
		website:"http://www.bing.com",
		elementTag:"<a href=''>标签</a>",
		age:18,
		x:0,
		y:0,
		a:0,
		b:0,
		changeColor:true
	},
	methods:{
		greet:function(time){
			return this.name+ ' good '+time;
		},
		addAge:function(a){
			this.age+=a;
		},
		update:function(event){
			this.x=event.offsetX;
			this.y=event.offsetY;
		},
		stopMoving:function(event){
			event.stopPropagation();
		},
		logName:function(){
			
		},
		logAge:function(){
			
		},
		dubble:function(){
			this.name=this.$refs.name.value;
		},
		addA:function(){
			console.log("A");
			return this.a+this.age;
		},
		addB:function(){
			console.log("B");
			return this.b+this.age;
			
		}
	},
	/*methods每执行一个全部都会执行，而computed不会,在操作的幅度比较大的时候用computed*/
	computed:{
		add1A:function(){
			console.log("A1");
			return this.a+this.age;
		},
		add1B:function(){
			console.log("B1");
			return this.b+this.age;
			
		}
	}
});
var two=new Vue({
	el:"#vue-app-two",
	data:{
		name:"app two"
	},
	methods:{
		changeName:function(){
			this.name="名字改变了";
			one.name="vue-app one 的名字"
		}
	}
});


