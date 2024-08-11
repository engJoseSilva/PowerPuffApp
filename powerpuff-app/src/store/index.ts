import { createStore } from "vuex";
import axios from "axios";

// Define the Episode interface
interface Episode {
  id: number;
  name: string;
  summary: string;
  image: { medium: string; original: string };
  // Add other properties as needed
}

// Define the State interface
interface State {
  showDetails: Record<string, any>;
  episodes: Episode[];
}

const store = createStore<State>({
  state: {
    showDetails: {},
    episodes: [],
  },
  mutations: {
    SET_SHOW_DETAILS(state, details) {
      state.showDetails = details;
    },
    SET_EPISODES(state, episodes: Episode[]) {
      state.episodes = episodes;
    },
  },
  actions: {
    async fetchShowDetails({ commit }) {
      const { data } = await axios.get(
        "https://api.tvmaze.com/singlesearch/shows?q=powerpuff"
      );
      commit("SET_SHOW_DETAILS", data);
    },
    async fetchEpisodes({ commit }, showId: number) {
      const { data } = await axios.get(
        `https://api.tvmaze.com/shows/${showId}/episodes`
      );
      commit("SET_EPISODES", data);
    },
  },
  getters: {
    getEpisodeById: (state) => (id: number | string) => {
      const numericId = typeof id === "number" ? id : parseInt(id, 10);
      return state.episodes.find((episode) => episode.id === numericId);
    },
  },
});

// Export the store as default
export default store;
