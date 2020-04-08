import Vue from 'vue'

export default new Vue ({
    data: {
        tasks: [
            // {
            //     taskID: 1,
            //     taskTitle: 'Name',
            //     taskDescription: 'asdasdasdasdasd',
            //     taskComplete: true,
            //     taskStatus: 2
            // },
            // {
            //     taskID: 2,
            //     taskTitle: 'Impsum',
            //     taskDescription: 'Lorem ipsum dolor sit amet, ' +
            //         'consectetur adipisicing elit. Adipisci ' +
            //         'aliquam animi atque autem, cum deserunt, ' +
            //         'dolore est explicabo illo incidunt magni ' +
            //         'nihil optio praesentium quae quis repellat ' +
            //         'saepe temporibus totam.',
            //     taskComplete: false,
            //     taskStatus: 1
            // },
            // {
            //     taskID: 3,
            //     taskTitle: 'Lorem',
            //     taskDescription: 'Lorem ipsum dolor sit amet, ' +
            //         'consectetur adipisicing elit. Adipisci ' +
            //         'aliquam animi atque autem, cum deserunt, ' +
            //         'dolore est explicabo illo incidunt magni ' +
            //         'nihil optio praesentium quae quis repellat ' +
            //         'saepe temporibus totam.',
            //     taskComplete: false,
            //     taskStatus: 3
            // }
        ]
    },
    methods: {
        addTask(taskTitle, taskDescription, taskComplete, taskStatus) {
            let taskID;

            if (this.tasks.length == 0 || this.tasks.length == null || this.tasks.length == undefined) {
                taskID = 1;
            } else {
                taskID = (Number(this.tasks.length)) + 1;
            }

            if (taskTitle == null || taskTitle == undefined || taskTitle == "" ||
                taskDescription == null || taskDescription == undefined || taskDescription == "" ||
                taskStatus == null || taskStatus == undefined || taskStatus == NaN){
                alert('Заполните все поля')
            } else {
                this.tasks.push({
                    taskID,
                    taskTitle,
                    taskDescription,
                    taskComplete,
                    taskStatus
                });
            }

        },
        delTask(taskID) {
            this.$delete(this.tasks, taskID);
        }
    }

})