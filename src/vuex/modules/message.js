import messageActions from '../actions/message'
import messageMutations from '../mutations/message'
import messageGetters from '../getters/message'

const message = {
  state: {
    isfatching: false,
    ismarkallfatching: false,
    data: {
      has_read_messages: [],
      hasnot_read_messages: []
    },
    error: ''
  },
  mutations: messageMutations,
  getters: messageGetters,
  actions: messageActions
}

export default message;