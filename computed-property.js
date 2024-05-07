new Vue({

    el: '#app',

    data:{
        a: 0,
        b: 0,
        salary: 10,
    },

    // methods: {
    //     addA(){
    //         console.log("add A");
    //         return this.a + this.salary;
    //     },

    //     addB(){
    //         console.log("add B");
    //         return this.b + this.salary;
    //     },
    // },

    computed: {     // eta use korle sob method render hoye na, boro project e problem kore eta
        addA(){
            console.log("add A");
            return this.a + this.salary;
        },

        addB(){
            console.log("add B");
            return this.b + this.salary;
        },
    },

});