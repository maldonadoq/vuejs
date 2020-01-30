Vue.component('father', {
  template:
  `
  <div class="p-5 bg-info text-white">
    <h2 align="center">Father Component: {{fatherNumber}}</h2>
    <div class="text-center">     
      <button class="btn btn-warning" @click="fatherNumber++">+</button>
    </div>
    <br>
    <child :number="fatherNumber"></child>
  </div>  
  `,
  data(){
    return {
      fatherNumber: 0
    }
  }
});