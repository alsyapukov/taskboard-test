<template>
    <div class="edit-task__item edit-task__item_size edit-task__item_border">
        <div class="edit-task__element">{{ title }}</div>
        <div class="edit-task__element">
            <input type="text" class="text-box text-box_size-m" placeholder="Название задачи" v-bind:value="tasks[indexItem].taskTitle" v-on:input="taskEdit.taskTitle = $event.target.value">
        </div>
        <div class="edit-task__element">
            <textarea type="text" class="textarea textarea_size-m" placeholder="Название задачи" v-bind:value="tasks[indexItem].taskDescription" v-on:input="taskEdit.taskDescription = $event.target.value"></textarea>
        </div>
        <div class="edit-task__element">
            <div class="edit-task__button-wrap edit-task__button-wrap_inline">
                <div>
                    <input type="radio"
                           class="radio"
                           name="editTaskRadio"
                           id="taskStatusEdit1"
                           value="1"
                           v-bind:value="tasks[indexItem].taskStatus"
                           v-on:change="checkStatus">
                    <label for="taskStatusEdit1" class="button button_size-sm button_theme-green button_radius">Неважно</label>
                </div>
                <div>
                    <input type="radio"
                           class="radio"
                           name="editTaskRadio"
                           id="taskStatusEdit2"
                           value="2" v-bind:value="tasks[indexItem].taskStatus"
                           v-on:change="checkStatus">
                    <label for="taskStatusEdit2" class="button button_size-sm button_theme-yellow button_radius">Срочно</label>
                </div>
                <div>
                    <input type="radio"
                           class="radio"
                           name="editTaskRadio"
                           id="taskStatusEdit3"
                           value="3"
                           v-bind:value="tasks[indexItem].taskStatus"
                           v-on:change="checkStatus">
                    <label for="taskStatusEdit3" class="button button_size-sm button_theme-red button_radius">Оч. Срочно</label>
                </div>
            </div>
        </div>
        <div class="edit-task__element">
            <div class="edit-task__button-wrap">
                <button class="button button_size-along button_theme-transparent button_border button_radius"
                        v-on:click="taskEditButton">
                    {{ buttonText }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>

    import TaskItem from "./TaskItem";
    import TaskService from "../TaskService";

    export default {
        name: "TaskEdit",
        data: function () {
            return {
                title: 'Изменение задачи',
                buttonText: 'Изменить запись',
                indexItem: this.$root.indexForItem,
                taskEdit: {
                    taskTitle: '',
                    taskDescription: '',
                    taskStatus: ''
                },
                local: []
            }
        },
        computed: {
            tasks() {
                this.local = JSON.parse(localStorage.getItem('local'));

                let mass = JSON.parse(localStorage.getItem('local'));
                let indexSearch = mass.findIndex(item => item.taskID == [this.indexItem]);

                this.indexItem = indexSearch;

                return this.local
            }
        },
        components: {
            TaskItem
        },
        methods: {
            taskEditButton() {

                if (this.taskEdit.taskTitle != '') {
                    this.tasks[this.indexItem].taskTitle = this.taskEdit.taskTitle;
                }
                if (this.taskEdit.taskDescription != '') {
                    this.tasks[this.indexItem].taskDescription = this.taskEdit.taskDescription;
                }
                if (this.taskEdit.taskStatus != '') {
                    this.tasks[this.indexItem].taskStatus = this.taskEdit.taskStatus;
                }

                localStorage.setItem('local', JSON.stringify(this.local));

                this.$root.visibleEditTask = !this.$root.visibleEditTask;
                window.location.reload();
            },
            checkStatus() {
                let checkEdit1 = document.getElementById('taskStatusEdit1');
                let checkEdit2 = document.getElementById('taskStatusEdit2');
                let checkEdit3 = document.getElementById('taskStatusEdit3');

                if (checkEdit1.checked) {
                    this.taskEdit.taskStatus = 1;
                }
                if (checkEdit2.checked) {
                    this.taskEdit.taskStatus = 2;
                }
                if (checkEdit3.checked) {
                    this.taskEdit.taskStatus = 3;
                }


            }
        }
    }
</script>

<style scoped>

</style>