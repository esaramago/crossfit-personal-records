Vue.component("dialog-window", {
    props: ["is-dialog-open"],
    template: `
        <dialog class="mdl-dialog" v-bind:open="isDialogOpen">
            <h2 class="mdl-dialog__title">Add record</h2>
            <div class="mdl-dialog__content">
                <form>
                    <div class="mdl-textfield mdl-js-textfield">
                        <input class="mdl-textfield__input" type="text" id="inputExercise">
                        <label class="mdl-textfield__label" for="inputExercise">Exercise</label>
                    </div>
                    <div class="mdl-textfield mdl-textfield--sm mdl-textfield--centered mdl-js-textfield">
                        <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="inputWeight">
                        <label class="mdl-textfield__label" for="inputWeight">Weight</label>
                        <span class="mdl-textfield__error">Input is not a number!</span>
                    </div>
                </form>
            </div>
            <div class="mdl-dialog__actions">
                <button type="button" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" disabled>Add</button>
                <button type="button" class="mdl-button close" v-on:click="closeDialog">Cancel</button>
            </div>
        </dialog>
    `,
    methods: {
        closeDialog() {
            app.isDialogOpen = false;
        }
    }

})