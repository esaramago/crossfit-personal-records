Vue.component("dialog-window", {
    props: [
        "is-dialog-open",
        "name",
        "weight"
    ],
    /* computed: {
        isDirty: function () {
            var data = "aaaa";
            var isDirty = (data != "") ? true : false;
            debugger
            return {
                'is-dirty': isDirty
            }
        }
    }, */
    template: `
        <dialog class="mdl-dialog" v-bind:open="isDialogOpen">
            <div class="mdl-dialog__container">
                <h2 class="mdl-dialog__title">Add record</h2>
                <div class="mdl-dialog__content">
                    <form>
                        <div class="mdl-textfield mdl-js-textfield" v-bind:class="{ 'is-dirty': name != '' }">
                            <input class="mdl-textfield__input" type="text" id="inputName" v-bind:value="name">
                            <label class="mdl-textfield__label" for="inputName">Name</label>
                        </div>
                        <div class="mdl-textfield mdl-textfield--sm mdl-textfield--centered mdl-js-textfield" v-bind:class="{ 'is-dirty': weight != '' }">
                            <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="inputWeight" v-bind:value="weight">
                            <label class="mdl-textfield__label" for="inputWeight">Weight</label>
                            <span class="mdl-textfield__error">Input is not a number!</span>
                        </div>
                    </form>
                </div>
                <div class="mdl-dialog__actions">
                    <button type="button" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" v-on:click="updateExercise()">Add</button>
                    <button type="button" class="mdl-button close" v-on:click="closeDialog">Cancel</button>
                </div>
            </div>
        </dialog>
    `,
    methods: {
        closeDialog() {
            app.isDialogOpen = false;
        },
        updateExercise() {
            var numberRegex = /^\d+$/;
            var isValid = true;
            if (this.name == "") {
                isValid = false;
            }
            if (!numberRegex.test(this.weight)) {
                isValid = false;
            }

            if (isValid) {
                // TODO:

                // save data
                debugger


                /*
                // criar novo exercício
                exercisesRef.push({
                    "name": this.name,
                    "weight": this.weight
                }) */


                //exercisesRef.child(0).remove()

                // update table
                // send success message
                this.closeDialog();
            }
            else {
                alert("Preencha os campos corretamente")
            }
        }
    }

})