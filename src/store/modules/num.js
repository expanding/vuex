const state = {
  number: 1
}

// 事件
const mutations = {
  add (state) {
    state.number += 1
  },
  minus (state) {
    state.number -= 1
    if (state.number <= 1) {
      state.number = 1
    }
  }
}

const actions = {
  // 分发事件
}

export default {
  state,
  mutations,
  actions
}
