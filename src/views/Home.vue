<template>
  <div class="home">
    <NavBar></NavBar>
    <div class="container">
      <div class="main" :style="{'background-image':'url(https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80)'}">
        <div class="main-text">
          <p>Best offer</p>
          <h3>SALE</h3>
          <a href="#">Shop Now</a>
        </div>
      </div>
      <div class="wrapper">
        <div class="search-box">
          <input type="text" name="input" v-model="search" placeholder="Search for Merchant">
        </div>
        <div class="box">
          <!-- cycle through merchants -->
          <div v-for="merchant in filteredMerchants" :key="merchant.id" class="merch">
            <!-- validate merchant image -->
            <img :src="showImage(merchant.img)" alt="">
            <p class="type">{{merchant.type}}</p>
            <p class="name">{{merchant.name | uppercase}}</p>
          </div>
        </div>
      </div>
      
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
//fetch merchant data from the store
import {mapState} from 'vuex'

export default {
  name: 'Home',
  components: {
    NavBar
  },
  data(){
    return{
      search: ""
    }
  },
  methods:{
    //method to check if img url is valid or not, if not it uses a default url
    showImage(imgurl){
      if(imgurl == ""){
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOQAAADdCAMAAACc/C7aAAAAaVBMVEXDw8MAAADGxsaXl5fJycnMzMxSUlKRkZF1dXV5eXnCwsIFBQWlpaV+fn66urqurq5dXV1sbGxMTEyKiopXV1czMzOcnJwaGhqoqKiEhIQlJSUrKysODg5mZmZHR0ezs7M7OzsVFRU5OTmFwHepAAAC+klEQVR4nO3bi1KjMBSAYXIarIbea2uttVXf/yE36Q0qobrITHP0/2Z2Zt2xDP+GQEDMMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQ56dCtY+JcZge9zgzsrXvipGc61EtzLO29KbpKLMx9mkPpI83H410XFiblyGFufy7Ph0lHPnSya/aByFuqRv7sSqchUvwV83k4EHFtt6QhcrwOl4GXZdv9VBApq3CdK/w1c9nykNUQ+XK6pG/abin5SFmWy5Z+u6FMP7K6unttt6cKIqflSE4a9tQd/zRtKflI6ZeRw6Y9deFS2ryl5COzUXkzMWoIcZm45bixUkGkfd6PormyyBMZPxkzaVouKIjM7PAwjtPm/XRP4Rse8/hgaoh0djzdbl9XeePJxc7CUBdmHi/REOkPx3Bb2DTlnOwP6L34vNQReZ3szqffRXRa/oJIcetzpJnksS2pj3T5pPrIqmfr6wL9kbZvynWf/8uuPi21Rzrxa4WijCzMW/0j6iKdV/lSZPH5Ges0V3+4flqi+uV77Ql07QmCtkg7GlcumM4uI0/ZC+UjGe67FpVl+qhWGGw/f0pRpIS99aeWjTtV2rdopBleTktNkZkMwvmzMHf20BCaY42FWV3MXFWR2eZY8ezvpY/N8aF8UhuZz84jtV+Iu/d4YfiGu+oHFUX6e43i1LDODs1FfCT9P8+lXN7piZRxNWOS23nTOB7syvsRPZHZ+qKhv2uckMfBLqelmsjLew1/anlpOlbLwT5vSUeks/2rQVG9U5eSyLC0+f+3JE53XToiRT6+OjhjPjRFunz6dVHM9DAtVURG7zW+ZbAfSw2R0mpCHvi1vFMRabctC/1/zdaKisjTTwnaRIYfhCmIdHbQunF/Rl5J8pEizfca37Pxkzr5yNnXHdfNJPGRHNrRvP9D81HqkbnNO5D2W5K//X1XFyK7kuyby3/iHXTp8rcJVmk2/onfCwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALi1f4DsKck70eEzAAAAAElFTkSuQmCC"
      }else{
        return imgurl
      }
    }
  },
  filters:{
    uppercase(value){
      return value.toUpperCase();
    }
  },
  computed:{
     ...mapState({
      merchants: "merchants"
    }),

    //custom search filter
    filteredMerchants: function(){
      return this.merchants.filter((merchant)=>{
        return merchant.name.toLowerCase().match(this.search)
      })
    },
   
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,400&display=swap');
*{
  margin : 0
}
body{
  font-family: 'Open Sans', sans-serif;
}
div.main{
  width: 100%;
  height: 750px;
  background-size: cover;
  background-repeat: no-repeat;
}
div.main-text{
  border: 3px solid #C05555;
  width: 40%;
  position: relative;
  top: 100px;
  left: 30px;
  padding: 50px 50px 70px 50px;
  text-align: center;

}
.main-text p{
  font-size: 1.8em;  
}
h3{
  font-size: 3em;
  margin-bottom: 20px;
  color: #C05555;
}
.main-text a{
  border: 5px solid #fff;
  text-decoration: none;
  color: black;
  padding: 5px 10px;
  transition-duration: 0.5s;
}
.main-text a:hover{
  background-color: #C05555;
  color: white;
  border-color: #C05555
}
.wrapper{
  margin-top: 20px;
  padding: 10px
}
input{
  border: none;
  outline: none;
  width: 98%;
  margin: 0 auto

}
.search-box{
  border: 1px solid #C05555;
  border-radius: 10px;
  padding: 5px;
   
}
div.box{
  width: 100%;
  margin-top: 30px;
  
}
div.merch{
  border: 1px solid #d1d0d0;
  margin-bottom: 20px;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
div.merch img{
  width: 99.9%;
  height: 200px; 
}

p.type {
  position: absolute;
  border: 1px solid;
  top: 5px;
  right: 0;
  padding: 5px;
  background-color: white;
  color: #FFC85C;
  font-size: 0.8em
}
p.name{
  padding: 10px 0;
  color: rgb(28, 23, 23);
  width: 100%;
  font-weight: 700
}

@media only screen and (min-width: 700px){
  div.wrapper{ 
    padding: 0
  }
  div.box{
    background-color: #E8EFEB
  }
  div.merch{
    display: inline-block;
    width: 40%;
    margin: 4.3%
  }
  .main-text p{
    font-size: 2.5em;
  }
  .main-text a{
    font-size: 2em;
  }
  h3{
    font-size: 3.5em
  }
  .search-box{
    width: 50%;
    margin: 0 auto;
  }
}

@media only screen and (min-width: 1000px){
  div.main-text{
    padding: 70px 70px 90px 70px;
  }
  div.merch{
    width: 30%;
    margin: 1.4%
  }
}

</style>