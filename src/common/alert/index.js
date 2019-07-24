import Alert from './alert.vue'

Alert.install = (Vue, options = {}) => {
  Vue.component(Alert.name, Alert)
}

export default Alert;
