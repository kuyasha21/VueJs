Vue.component('Shanta', {
    data() {
        return {
            name: 'Rouhi',      
        }
    }, 
    template: `<p>{{name}}</p>`,
})

new Vue({

    el: '#app',

    data:{
        title: 'Shanta'
    },

    methods: {
        greeting(){
            return this.title;
        },
    },

});