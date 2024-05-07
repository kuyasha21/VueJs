new Vue({
   el: '#app',

   data: {
    name: 'Shanta',
    ID: 203153882,
    flower: ['Rose', 'Lili', 'Daffodil', 'Tulip', 'Catking'],
    // car: () => {
    //     return 'I miss u Asme'
    // }
    user: {
    //  key : value 
        id: 203,
        name: "Asme",
        section: 'A',
    },
   },

   methods: {
    car(){
        return 'Volvo';
    }
   },
});
