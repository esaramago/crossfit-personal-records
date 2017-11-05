Vue.component("table-row", {
    props: ["exercise"],
    template: `
        <tr>
            <td class="mdl-data-table__cell--non-numeric">{{exercise.name}}</td>
            <td>{{exercise.weight}}</td>
            <td class="mdl-data-table__cell--non-numeric">{{exercise.date}}</td>
            <td>
                <button type="button" class="mdl-button mdl-js-button mdl-button--icon">
                    <i class="material-icons">create</i>
                </button>
            </td>
        </tr>
    `
})