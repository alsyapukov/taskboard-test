<template>
    <div class="task__item task__item_border task__item_position">
        <i class="task__status" v-bind:class="changeStatus"></i>
        <div class="task__element">
            <input type="checkbox" name="check" value="check1" :checked="task.taskComplete" @click.prevent="changeComplete">
            <label>Уникальная задача</label>
        </div>
        <div class="task__element">
            <span>
                {{ task.taskTitle }}
            </span>
        </div>
        <div class="task__element">
            <span>
                {{ task.taskDescription }}
            </span>
        </div>
        <div class="edit-panel">
            <div class="edit-panel__edit" v-on:click="view(index)"></div>
            <div class="edit-panel__delete" @click="delTask"></div>
        </div>
    </div>
</template>

<script>

    import TasksService from "../TaskService";

    export default {
        name: "TaskItem",
        props: ['task', 'store.js','index'],
        data() {
            return {
            }
        },
        computed: {
            changeStatus: function () {
                let taskStatus = this.task.taskStatus;
                if (taskStatus == 1) {
                    return {
                        'task__status_light': true
                    }
                } else if (taskStatus == 2) {
                    return {
                        'task__status_medium': true
                    }
                } else {
                    return {
                        'task__status_hard': true
                    }
                }
            }
        },
        methods: {
            view (index) {
                this.$root.visibleEditTask = !this.$root.visibleEditTask;
                this.$root.indexForItem = this.task.taskID;
            },
            delTask () {
                TasksService.delTask(this.task.taskID);

                let mass = JSON.parse(localStorage.getItem('local'));
                let indexSearch = mass.findIndex(item => item.taskID == [this.task.taskID]);

                localStorage.removeItem(String(indexSearch));
                mass.splice(String(indexSearch), 1);

                localStorage.setItem('local', JSON.stringify(mass));
            },
            changeComplete: function () {
                this.task.taskComplete = !this.task.taskComplete;

                let mass = JSON.parse(localStorage.getItem('local'));
                let indexSearch = mass.findIndex(item => item.taskID == [this.task.taskID]);

                mass[indexSearch].taskComplete = this.task.taskComplete;

                localStorage.setItem('local', JSON.stringify(mass));
            }
        },
        created() {
            this.$emit('eventname', this.index);
        }

    }
</script>

<style scoped>

</style>