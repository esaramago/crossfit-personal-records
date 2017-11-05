Vue.component("table-row", {
    props: ["exercise"],
    methods: {
        openModal() {
            this.isModalOpen = true;
        },
        closeModal() {
            this.isModalOpen = false;
        }
    },
    template: `
        <tr>
            <td class="mdl-data-table__cell--non-numeric">{{exercise.name}}</td>
            <td>{{exercise.weight}}</td>
            <td class="mdl-data-table__cell--non-numeric">{{exercise.date}}</td>
            <td>
                <button type="button" class="mdl-button mdl-js-button mdl-button--icon" v-on:click="openModal">
                    <i class="material-icons">create</i>
                </button>
            </td>
        </tr>
    `
})