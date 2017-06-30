const dialog = new Vue({
    el: '#app',
    data: {
        isModalOpen: false
    },
    methods: {
        openModal: function () {
            this.isModalOpen = true;
        },
        closeModal: function () {
            this.isModalOpen = false;
        }
    }
});


