<template>
  <div class="wrap" id="app">
    <div class="container container_size">
      <div class="layout">
        <div class="layout__edit-task layout_edit-task_size edit-task" id="tasks">
          <task-add></task-add>
          <task-edit v-if="this.$root.visibleEditTask"></task-edit>
        </div>
        <div class="layout__content layout_content_size">
            <task-list></task-list>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

  export default {
    name: 'app'
  }

</script>

<style lang="scss">
  @import 'css/template_styles';
</style>