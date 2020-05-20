// ストアにcounterの値を設定
export const state = () => ({
  counter: 0
})

// counterにincrementするミューテーションを設定（カウントアップ）
export const mutations = {
  countUp: function(state) {
    state.counter++
  },
  reset: function(state) {
    state.counter = 0 
  }
}
