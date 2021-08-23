import * as actionTypes from './languageType';

interface AddLanguage {name: string; code: string};

// action的输出类型
export interface CreateAddLanguageActionType {
  type: typeof actionTypes.ADD_LANGUAGE_ITEM;
  state: {
    name: string;
    code: string;
  }
}

export interface CreateChangeLanguageActionType {
  type: typeof actionTypes.CHANGE_LANGUAGE_TYPE;
  state: 'zh' | 'en';
}

export type LanguageActionTypes = CreateAddLanguageActionType | CreateChangeLanguageActionType;

// createActions
export const createAddLanguageAction = (data: AddLanguage): CreateAddLanguageActionType => {
  return {
    type: actionTypes.ADD_LANGUAGE_ITEM,
    state: data
  }
}

export const createChangeLanguageAction = (data: 'zh' | 'en'): CreateChangeLanguageActionType => {
  return {
    type: actionTypes.CHANGE_LANGUAGE_TYPE,
    state: data
  }
}