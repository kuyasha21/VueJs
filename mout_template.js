const temp = `<p>My name is {{name}}</p>`;

const app1 = new Vue({

    // el: '#app',
    data:{
        name: 'Shanta'
    },

    template : temp,
});

setTimeout(() => {
    app1.$mount(app);
}, 2000);
