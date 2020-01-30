Vue.component('child', {
    template:
    `
    <div class="py-5 bg-success">
      <h2 align="center">Child Component: {{number}}</h2>
    </div>  
    `,
    props:['number']
  });