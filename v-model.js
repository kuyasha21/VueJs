new Vue({

    el: '#app',

    data:{
        FormData: {
            firstName: '',
            lastName: '',
        },
    },

    methods: {
        handleForm(){
            console.log(this.FormData);
        },
    },

});