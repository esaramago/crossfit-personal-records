//import dialog from '../components/dialog-window';

Vue.use(VueFire);

// Initialize Firebase
var config = {
    apiKey: 'AIzaSyD4rleHAysKAfzsxYExaDhKbR_8eEXT_ho',
    authDomain: 'crossfit-personal-records.firebaseapp.com',
    databaseURL: 'https://crossfit-personal-records.firebaseio.com',
    projectId: 'crossfit-personal-records',
    storageBucket: 'crossfit-personal-records.appspot.com',
    messagingSenderId: '41040893288'
};
var firebaseApp = firebase.initializeApp(config);
var database = firebase.database();
var exercisesRef = database.ref('exercises');


const app = new Vue({
    el: '#app',
    firebase: {
        exercises: exercisesRef
    },
    data: {
        isDialogOpen: false,
        dialogInputs: {
            name: '',
            date: '',
            reps: '',
            weight: ''
        }
    },
    methods: {
        openDialog(exercise) {
            // opens dialog component
            app.isDialogOpen = true;
        }
    }
})