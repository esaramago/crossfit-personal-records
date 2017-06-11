console.log('\'Allo \'Allo!');



const app = new Vue({
    el: '#app',
    data: {
        test: 'lala'
    },
    methods: {
        testFunc: function() {
            debugger;
        }
    }
});