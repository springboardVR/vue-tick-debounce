import Vue from 'vue'
import stackDebounce from 'stack-debounce'
export default (fn) => stackDebounce(fn, Vue.nextTick)
