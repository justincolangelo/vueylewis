import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import ToDo from './ToDo';
import ListItem from './ListItem';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    storedstring: '',
    toDos: new Array<ToDo>()
  },
  mutations: {
    change(state, storedstring: string) {
      state.storedstring = storedstring
    },
    addToDo(state, toDo: ListItem) {
      let item = new ToDo(toDo.title, toDo.image, false);
      state.toDos.push(item);
    }
  },
  actions: {
    change({ commit }, data: string) {
      commit('change', data)
    },
    addToDo({ commit }, data: ListItem) {
      commit('addToDo', data)
    }
  },
  getters: {
    storedstring: state => state.storedstring,
    toDos: state => state.toDos
  }
})
