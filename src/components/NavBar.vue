<template>
    <nav>
      <div class="logo">
        <h1>9jaPay</h1>
      </div>
      <ul>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Log in</a></li>
      </ul>
    </nav>
</template>

<script>
export default {
  props: {
    
  },
  data(){
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
*{
  margin: 0
}
nav{
  background-color: #C05555;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}
nav h1{
  margin: 10px;
  color: #222831;
  cursor: pointer;
}

ul{
  list-style-type: none;
  display: flex;
}
ul li{
  margin: 10px 15px
}
ul li a{
  text-decoration: none;
  color: #fff;
  
}
ul a:visited{
  color: #fff;
}
@media only screen and (min-width: 700px){
  ul li a {
    font-size: 1.2em
  }
}
</style>
