new Vue({

    el: '#app',

    data:{
        name: 'Shanta'
    },

    methods: {
        updateName() {
            this.name = 'Queen';
        },
        destroy(){
            this.$destroy()
        }
    },

    // how the VueJs works,here is the work flow of vue js 

    beforeCreate() {
        console.log('Running before create');
    },
    created() {
        console.log('Running created');
    },
    beforeMount() {
        console.log('Running before mount');
    },
    mounted() {
        console.log('Running mounted');
    },

    beforeUpdate() {
        console.log('Before Update');  
    },
    updated() {
        console.log('Úpdated');
    },

    beforeDestroy() {
        console.log('Before Destroy');
    },
    destroyed() {
        console.log('Destroyed');
    },

});
