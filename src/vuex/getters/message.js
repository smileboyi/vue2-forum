import * as types from '../constants/types'


const messageGetters = {
  [types.HAS_NOT_READ_MESSAGES_COUNT](state) {
    return state.data.hasnot_read_messages.length
  },
  [types.HAS_READ_MESSAGES_COUNT](state) {
    return state.data.has_read_messages.length
  }
}

export default messageGetters;