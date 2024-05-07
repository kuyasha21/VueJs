new Vue({
    el: "#app",   // element
    data: {
        title: "Shanta",
        isIt: true,
        color: ['Green', 'White', 'Blue'],

        robot: {      // object
            name: "Rakib"
        },
        
        salam: ()=>{
            return 'Assalamu Alaikum';
        },
    },
}); // instance
