<template>
    <div class="edit-task__item edit-task__item_size edit-task__item_border">
        <div class="edit-task__element">{{ title }}</div>
        <div class="edit-task__element">
            <input type="text" class="text-box text-box_size-m" placeholder="Название задачи" v-model="task.taskTitle">
        </div>
        <div class="edit-task__element">
            <textarea type="text" class="textarea textarea_size-m" placeholder="Название задачи" v-model="task.taskDescription"></textarea>
        </div>
        <div class="edit-task__element">
            <div class="edit-task__button-wrap edit-task__button-wrap_inline">
                <div>
                    <input type="radio" class="radio" value="1" id="taskStatus1" v-model="task.taskStatus">
                    <label for="taskStatus1" class="button button_size-sm button_theme-green button_radius">Неважно</label>
                </div>
                <div>
                    <input type="radio" class="radio" value="2" id="taskStatus2" v-model="task.taskStatus">
                    <label for="taskStatus2" class="button button_size-sm button_theme-yellow button_radius">Срочно</label>
                </div>
                <div>
                    <input type="radio" class="radio" value="3" id="taskStatus3" v-model="task.taskStatus">
                    <label for="taskStatus3" class="button button_size-sm button_theme-red button_radius">Оч. Срочно</label>
                </div>
            </div>
        </div>
        <div class="edit-task__element">
            <div class="edit-task__button-wrap">
                <button type="submit"
                        class="button button_size-along button_theme-transparent button_border button_radius"
                        @click.prevent="addTask">{{ buttonText }}</button>
            </div>
        </div>
    </div>
</template>

<script>

    import TaskService from "../TaskService";

    export default {
        name: "TaskAdd",
        data: function () {
            return {
                title: 'Добавление задачи',
                buttonText: 'Добавить запись',
                task: {
                    taskComplete: false
                }
            }
        },
        methods: {
            addTask () {
                TaskService.addTask(this.task.taskTitle, this.task.taskDescription, this.task.taskComplete, this.task.taskStatus);
                localStorage.setItem('local', JSON.stringify(TaskService.tasks));
            },
        },
    }
</script>

<style scoped>

</style>