import i18n from "i18next";
import * as actionTypes from './languageType';
import { LanguageActionTypes } from './languageActionCreator';
export interface LanguageState {
  language: "en" | "zh";
  languageList: { name: string; code: string }[];
}
const defaultState: LanguageState = {
  language: 'zh',
  languageList: [
    { name: "中文", code: "zh" },
    { name: "English", code: "en" },
    { name: "添加新语言", code: "new" }
  ],
}

const reducer = (state = defaultState, action: LanguageActionTypes) => {
  if(action.type === actionTypes.ADD_LANGUAGE_ITEM) {
    return {
      ...state,
      languageList: [...state.languageList, action.state],
    };
  }
  if(action.type === actionTypes.CHANGE_LANGUAGE_TYPE) {
    i18n.changeLanguage(action.state); // 这样处理是不标准的，有副作用
    return { ...state, language: action.state };
  }
  return state;
};

export default reducer;