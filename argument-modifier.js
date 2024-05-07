new Vue({

    el: '#app',

    data:{
        name: 'Queen'
    },

    methods: {
        updateName(newName, event){
            this.name = newName;
            console.log(event);
        },

        handleForm(ev){
            // ev.preventDefault();
            console.log('Successfully submitted');
        },
    },

});