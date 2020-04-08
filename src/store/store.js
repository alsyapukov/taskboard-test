import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      tasks: []
   },
   getters: {
      getTask: state => state.tasks
   },
   actions: {
      taskAdd(context, payload) {
         context.commit('taskAdd', payload);
      },
   },
   mutations: {
      taskAdd(state, payload) {
         state.tasks = payload;
      }
   }
})