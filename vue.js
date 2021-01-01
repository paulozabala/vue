

window.onload = ()=>{

    var app = new Vue({
        el : '#app',
        data: {
            message: 'Hi @Kiyatrowes and'+
            '  dear followers'
        }
    })

    var app2 = new Vue({
        el: '#app-2',
        data: {
          message: 'You loaded this page on ' + new Date().toLocaleString()
        }
      })

    var app3 =  new Vue({
        el: '#app-3',
        data: {
          message:'app_de_pauloza'
        },

        methods: {

          sacar: function(comopinta){
            console.log('app de paulo pinta___');
          }
         
        }


    })
}
