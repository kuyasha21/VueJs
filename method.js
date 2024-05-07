new Vue ({

    el: '#app',

    data:{
        title: 'Shanta'
    },

    methods: {
        greeting(){
            // return 'Assalamu Alaikum';
            return this.title;
        },
    },

});