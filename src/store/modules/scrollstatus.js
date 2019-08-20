import { SCROLL_STATUS_HEIGHT, SCROLL_STATUS_ID } from '../mutation_type';

const scrollStatus = {
  state: {
    scrolltop: 0,
    id: 0
  },
  getter: {
  },
  actions: {
    async setHeightStatus ({ commit, state }, params) {
      const res = {
        scrolltop: params.scrolltop
      };
      await commit(SCROLL_STATUS_HEIGHT, res);
    },
    async setIdStatus ({ commit, state }, params) {
      console.log(params.id);
      const res = {
        id: params.id
      };
      await commit(SCROLL_STATUS_ID, res);
    }
  },
  mutations: {
    [SCROLL_STATUS_HEIGHT] (state, res) {
      state.scrolltop = res.scrolltop;
    },
    [SCROLL_STATUS_ID] (state, res) {
      state.id = res.id;
    }
  }
};

export default scrollStatus;
