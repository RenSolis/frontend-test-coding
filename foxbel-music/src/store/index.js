import Vue from 'vue';
import Vuex from 'vuex';
import * as axios from 'axios';

Vue.use(Vuex);

const ROOT_LAST_FM = 'http://ws.audioscrobbler.com/2.0/';
// Change later the api key to .env file
const API_KEY = 'dc61d5c048da94d702624940c3a9c541';

export default new Vuex.Store({
  state: {
    songs: [],
  },
  mutations: {
    getTopSongs(state, songs) {
      state.songs = songs;
    },
  },
  actions: {
    async getTopSongsAction({ commit }) {
      const limit = 10;
      // Validate status of response
      const response = await axios({
        method: 'get',
        url: `${ROOT_LAST_FM}?method=chart.gettoptracks&api_key=${API_KEY}&format=json&limit=${limit}`,
      });
      const songs = response.data.tracks.track;
      console.log(songs); // BORRAR
      commit('getTopSongs', songs);
    },
  },
  getters: {
    getFirstSong(state) {
      return state.songs[0];
    },
  },
});
