const app = new Vue({
  el: '#app',
  data: {
    background: 'bg-success',
    color: true,
    count: 0
  },
  methods:{
    
  },
  computed:{
    tcolor(){
      return {
        'bg-danger': this.count <= 25,
        'bg-info': this.count > 25 && this.count <= 50,
        'bg-primary': this.count > 50 && this.count <= 75,
        'bg-success': this.count > 75
      }
    }
  }
});