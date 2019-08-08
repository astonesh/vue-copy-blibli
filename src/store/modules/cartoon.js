import { CARTOON_RIGHT_LIST } from '../mutation_type';
import { cartoonData } from '../../api/cartoonData';

const aa = [1];

const cartoon = {
  state: {
    list: [],
    index: 1
  },
  getter: {
  },
  actions: {
    async getList ({ commit, state }, params) {
      debugger
      const res = {
        list: aa,
        index: params.index
      };
      await commit(CARTOON_RIGHT_LIST, res);
    }
  },
  mutations: {
    [CARTOON_RIGHT_LIST] (state, res) {
      state.list = res.list;
      state.index = res.index;
    }
  }
};

export default cartoon;
