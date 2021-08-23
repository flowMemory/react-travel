import { createStore } from 'redux';
import reducer from './languageStore/reducer';
const store = createStore(reducer)
export default store;