<template>
  <footer>
  	{{copyright}}{{title1}}
  </footer>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      copyright: "copyright"
    }
  },
  props:{
  	title1:{
  		type:String
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer{background-color: lightslategrey;padding: 10px;height: 100px;}
</style>
