new Vue({

    el: '#app',

    data:{
        name: 'Shanta',
        x: 0,
        y: 0,
    },

    methods: {
        updateName(){
            this.name = 'Qulbi';
        },

        getCoord(e){
            this.x = e.clientX;
            this.y = e.clientY;
        }
    },

});