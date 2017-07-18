import Vue from 'vue'
import App from './App.vue'

//import d3 from 'd3';
import c3 from 'c3';
console.log('c3',c3);

new Vue({
  el: '#app',
  render: h => h(App)
});

var chart = c3.generate({
    bindto: '#chart',
    data: {
        columns: [
            ['data1', 30, 200, -100, 400, 150, -250],
        ],
        type: 'bar',
        
    },
     grid: {
        y: {
            show : true
        }
    }
});
