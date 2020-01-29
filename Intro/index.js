const app = new Vue({
  el: '#app',
  data: {
    title: 'Hello from Vuejs',
    fruits: [
      {name: 'Apple', count: 10},
      {name: 'Orange', count: 0},
      {name: 'Banana', count: 23}
    ],
    newFruit: ''
  },
  methods:{
    addFruit () {
      this.fruits.push({
        name: this.newFruit, count: 0
      })
    }
  },
  computed:{
    plusFruit () {
      total = 0;
      for(fruit of this.fruits){
        total += fruit.count;
      }
      return total
    }
  }
});