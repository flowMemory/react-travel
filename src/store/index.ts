import { createStore } from 'redux';
import reducer from './languageStore/reducer';
const store = createStore(reducer)

// store.getState 获取所有的状态数据，反射成类型
export type RootState = ReturnType<typeof store.getState>
export default store;