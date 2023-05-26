export const state = () => ({
  user: null,
  videoId: null
})

export const getters = {
  getUser (state) {
    return state.user
  },
  getVideoID (state) {
    return state.videoId
  }
}

export const mutations = {
  setUser (state, user) {
    state.user = user
  },
  setVideoId (state, videoId) {
    state.videoId = videoId
  }
}

export const actions = {
  setUser ({ commit }, user) {
    commit('setUser', user)
  },
  setVideoID ({ commit }, videoId) {
    commit('setVideoID', videoId)
  }
}
