const app1 = new Vue({

    el: '#app',

    data:{
        value: 'First'
    },

    methods: {
        ChangeValue(){
            app2.value = 'changed';
        },
    },

});

const app2 = new Vue({

    el: '#app1',

    data:{
        value: 'Second'
    },

    methods: {
        greeting(){
            return this.title;
        },
    },

});

