import Vue from 'vue'
import App from './App.vue'
import TaskAdd from './components/TaskAdd'
import TaskEdit from './components/TaskEdit'
import TaskItem from './components/TaskItem'
import TaskList from './components/TaskList'
import store from './store/store'

Vue.component('task-add', TaskAdd);
Vue.component('task-edit', TaskEdit);
Vue.component('task-item', TaskItem);
Vue.component('task-list', TaskList);



new Vue({
  el: '#app',
  data: {
    visibleEditTask: false,
    indexForItem: Number
  },
  render: h => h(App),
  store: store
});

