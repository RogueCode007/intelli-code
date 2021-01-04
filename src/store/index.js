import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    merchants: [
      {name:"Corona Limited", type: "Service merchant", img: "https://image.shutterstock.com/image-vector/coronavirus-2019ncov-corona-virus-icon-600w-1676629078.jpg"},
      {name:"Vibes Enterprise", type: "Product merchant", img: "https://dcassetcdn.com/design_img/3592763/704313/704313_19680630_3592763_e8a670e1_image.jpg"},
      {name:"Shelby Motors", type: "Product merchant", img: "https://digitalsynopsis.com/wp-content/uploads/2018/07/car-logos-shelby.jpg"},
      {name:"Bottle Marlango", type: "Service merchant", img: "https://cdn1.vectorstock.com/i/1000x1000/39/85/whiskey-bottle-logo-whiskey-house-icon-on-blue-vector-24273985.jpg"},
      {name:"Chievo Violet", type: "Service merchant", img: "https://cdn2.vectorstock.com/i/1000x1000/09/81/wine-glass-bottle-logo-design-background-vector-14570981.jpg"},
      {name:"Picture Perfect ", type: "Product merchant", img: "https://i.pinimg.com/originals/7d/3a/7d/7d3a7d1e3f739d8f029c50bcdad14fd6.png"},
      {name:"Hood Wood Carpentry", type: "Service merchant", img: ""},
      {name:"Sticks and Stones", type: "Product merchant", img: ""},
      {name:"LaQuabar interiors", type: "Service merchant", img: "https://www.logolynx.com/images/logolynx/3e/3ea966b21118e5a62a1d3e1f8c004b6c.jpeg"}
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
