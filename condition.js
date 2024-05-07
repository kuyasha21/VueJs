new Vue({

    el: '#app',

    data:{
        user: 'Shanta',
        userAge: 17, 
        allowedAge: 18,
    },
    
    methods: {
        changeUser(){
            return this.user=="Shanta" ? true : false; 
        },
    },

});