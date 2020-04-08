<template>
    <div class="content content_size">
        <div class="switch-task">
            <div class="switch-task__line">
                <input type="radio" class="radio" id="currentTasks1" v-bind:value="true" v-model="change">
                <label for="currentTasks1" class="switch-task__item switch-task__item_size switch-task__item_visual">Текущие задачи</label>
            </div>
            <div class="switch-task__line">
                <input type="radio" class="radio" id="currentTasks2" v-bind:value="false" v-model="change">
                <label for="currentTasks2" class="switch-task__item switch-task__item_size switch-task__item_visual">Выполненые задачи</label>
            </div>
        </div>
        <div class="task task_border task_position task_size" v-if="change">
            <task-item v-for="(task, index) in tasksSorted" :key="task.taskID" :index="index" :task="task" v-if="!task.taskComplete"></task-item>
        </div>
        <div class="task task_border task_position task_size" v-else="change">
            <task-item v-for="(task, index) in tasksSorted" :key="task.taskID" :index="index" :task="task" v-if="task.taskComplete"></task-item>
        </div>
    </div>
</template>

<script>
    import TasksService from '../TaskService'

    export default {
        name: "TaskList",
        data() {
            return {
                change: true,
                local: [
                    {
                        taskID: '',
                        taskTitle: '',
                        taskDescription: '',
                        taskComplete: '',
                        taskStatus: ''
                    }
                ],
            }
        },
        computed: {
            tasks() {
                this.local = this.$store.getters.getTask;

                let localObj = [];

                for (let i = 0; i <= this.$store.getters.getTask.length; i++) {
                    localObj = localStorage.getItem('local');
                }

                if (localObj == 0 || localObj == null || localObj == undefined) {
                    this.local = this.$store.getters.getTask;
                } else {
                    this.local = JSON.parse(localStorage.getItem('local'));
                }

                return this.local
            },
            tasksSorted: function() {

                function computed(a, b) {

                    if (a.taskStatus < b.taskStatus) {
                        return 1;
                    }

                    if (a.taskStatus > b.taskStatus) {
                        return -1;
                    }

                    return 0;
                }
                return this.tasks.sort(computed);
            }
        },
        created() {
            this.$store.commit('taskAdd', TasksService.tasks)
        }
    }
</script>

<style scoped>

</style>