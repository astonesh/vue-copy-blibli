import { DRAMA_LEFT_LIST } from '../mutation_type';
import { dramaData } from '../../api/dramaData';

const drama = {
  state: {
    list: [],
    index: 8
  },
  getter: {
  },
  actions: {
    async getList ({ commit, state }, params) {
      const res = {
        list: dramaData.data[params.index - 1],
        index: params.index
      };
      await commit(DRAMA_LEFT_LIST, res);
    }
  },
  mutations: {
    [DRAMA_LEFT_LIST] (state, res) {
      state.list = res.list;
      state.index = res.index;
    }
  }
};

export default drama;
