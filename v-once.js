new Vue({

    el: '#app',

    data:{
        name: 'Shanta'
    },

    methods: {
        update(){
            setTimeout(() => {
                this.name = 'Rouhi'
            }, 2000);
        },
    },

});