import Vue from 'vue';
import Vuex from 'vuex';
import * as axios from 'axios';

Vue.use(Vuex);

const ROOT_LAST_FM = 'http://ws.audioscrobbler.com/2.0/';
// Change later the api key to .env file
const API_KEY = 'dc61d5c048da94d702624940c3a9c541';
const LIMIT = 10;

export default new Vuex.Store({
  state: {
    songs: [],
    artists: [],
    albums: [],
    artist: undefined,
  },
  mutations: {
    getSongs(state, songs) {
      state.songs = songs;
    },
    getArtists(state, artists) {
      state.artists = artists;
    },
    getAlbums(state, albums) {
      state.albums = albums;
    },
    getAlbumsOfArtist(state, albums) {
      state.albums = albums;
    },
    getArtist(state, artist) {
      state.artist = artist;
    },
  },
  actions: {
    async getTopSongsAction({ commit }) {
      const response = await axios({
        method: 'get',
        url: `${ROOT_LAST_FM}?method=chart.gettoptracks&api_key=${API_KEY}&format=json&limit=${LIMIT}`,
      });
      const songs = response.data.tracks.track;
      commit('getSongs', songs);
    },
    async getSongsSearched({ commit }, search) {
      const response = await axios({
        method: 'get',
        url: `${ROOT_LAST_FM}?method=track.search&track=${search}&api_key=${API_KEY}&format=json&limit=${LIMIT}`,
      });
      const { track: songs } = response.data.results.trackmatches;
      commit('getSongs', songs);
    },
    async getArtistsSearched({ commit }, search) {
      const response = await axios({
        method: 'get',
        url: `${ROOT_LAST_FM}?method=artist.search&artist=${search}&api_key=${API_KEY}&format=json&limit=${LIMIT}`,
      });
      const { artist: artists } = response.data.results.artistmatches;
      commit('getArtists', artists);
    },
    async getAlbumsSearched({ commit }, search) {
      const response = await axios({
        method: 'get',
        url: `${ROOT_LAST_FM}?method=album.search&album=${search}&api_key=${API_KEY}&format=json&limit=${LIMIT}`,
      });
      const { album: albums } = response.data.results.albummatches;
      commit('getAlbums', albums);
    },
    async getArtistAlbums({ commit }, artistId) {
      const response = await axios({
        method: 'get',
        url: `${ROOT_LAST_FM}?method=artist.gettopalbums&mbid=${artistId}&api_key=${API_KEY}&format=json`,
      });
      const { album } = response.data.topalbums;
      commit('getAlbumsOfArtist', album);
    },
    async getArtistAction({ commit }, artistId) {
      const response = await axios({
        method: 'get',
        url: `${ROOT_LAST_FM}?method=artist.getInfo&mbid=${artistId}&api_key=${API_KEY}&format=json`,
      });
      const { artist } = response.data;
      commit('getArtist', artist);
    },
  },
  getters: {
    getFirstSong(state) {
      return state.songs[0];
    },
  },
});
