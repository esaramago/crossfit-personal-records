Vue.component("table-row", {
    props: [
        "exercise"
    ],
    template: `
        <tr>
            <td class="mdl-data-table__cell--non-numeric">{{exercise.name}}</td>
            <td>{{exercise.weight}}</td>
            <td class="mdl-data-table__cell--non-numeric">{{exercise.date}}</td>
            <td>
                <button type="button" class="mdl-button mdl-js-button mdl-button--icon" v-on:click="editExercise">
                    <i class="material-icons">create</i>
                </button>
            </td>
            <td>
                <button type="button" class="mdl-button mdl-js-button mdl-button--icon" v-on:click="deleteExercise">
                    <i class="material-icons">delete</i>
                </button>
            </td>
        </tr>
    `,
    methods: {
        editExercise() {

            // get exercise data
            var exercise = this.exercise;
            app.dialogInputs.name = exercise.name;
            app.dialogInputs.date = exercise.date;
            app.dialogInputs.reps = exercise.reps;
            app.dialogInputs.weight = exercise.weight;

            app.openDialog();

        },

        deleteExercise() {
            console.log("delete")
        }

    }
})