import { CARTOON_RIGHT_LIST } from '../mutation_type';
import { cartoonData } from '../../api/cartoonData';

const cartoon = {
  state: {
    list: [],
    index: 1
  },
  getter: {
  },
  actions: {
    async getList ({ commit, state }, params) {
      const res = {
        list: cartoonData.data[params.index - 1],
        index: params.index
      };
      console.log(cartoonData.data[params.index - 1]);
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
