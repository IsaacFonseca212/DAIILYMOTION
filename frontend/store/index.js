
export const state = () => ({
  user: null,
  videoId: null,
  searchValue: null
})

export const getters = {
  getUser (state) {
    return state.user
  },
  getVideoID (state) {
    return state.videoId
  },
  getSearchValue (state) {
    return state.searchValue
  }
}

export const mutations = {
  setUser (state, user) {
    state.user = user
  },
  setVideoId (state, videoId) {
    state.videoId = videoId
  },
  setSearchValue (state, searchValue) {
    state.searchValue = searchValue
  }
}

export const actions = {
  setUser ({ commit }, user) {
    commit('setUser', user)
  },
  setVideoID ({ commit }, videoId) {
    commit('setVideoID', videoId)
  },
  setSearchValue ({ commit }, searchValue) {
    commit('setSearchValue', searchValue)
  }
}
