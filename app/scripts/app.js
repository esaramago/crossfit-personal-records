//import dialog from '../components/dialog-window';

const app = new Vue({
    el: '#app',
    data: {
        isDialogOpen: false,
        exercises: [
            {
                name: "Push Jerk",
                weight: 50,
                reps: 1,
                date: "22/05/2017"
            },
            {
                name: "Clean and Jerk",
                weight: 55,
                reps: 2,
                date: "13/07/2017"
            },
            {
                name: "Clusters",
                weight: 60,
                reps: 1,
                date: "06/07/2017"
            },
            {
                name: "Deadlift",
                weight: 135,
                reps: 1,
                date: "09/06/2017"
            },
            {
                name: "Front Squat",
                weight: 85.5,
                reps: 1,
                date: "13/02/2017"
            }
        ]
    }
})