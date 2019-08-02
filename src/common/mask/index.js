import Mask from './mask'

Mask.install = (Vue, options = {}) => {
  Vue.component(Mask.name, Mask)
}

export default Mask;
