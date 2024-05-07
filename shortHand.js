new Vue({

    el: '#app',

    data:{
        a: 0,
        link: 'http://google.com',
        salary: 50000, 
    },

    methods: {
        addA(){
            return this.a + this.salary;
        },
    },

});