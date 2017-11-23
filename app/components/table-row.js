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
        </tr>
    `,
    methods: {
        editExercise() {

            // get exercise data
            var exercise = this.exercise;
            /* var name = exercise.name;
            var date = exercise.date;
            var reps = exercise.reps;
            var weight = exercise.weight; */

            app.dialogInputs.name = exercise.name;
            app.dialogInputs.weight = exercise.weight;

            //this.$emit("applied", name);

            app.openDialog();
        }
    }
})