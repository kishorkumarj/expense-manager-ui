import update from "immutability-helper";
import * as actionTypes from '../actionTypes';

interface actionInterface {
  type: string,
  collapseMenu?: boolean,
  theme?: string
}

const initialState = {
  theme: 'light',
  collapseMenu: false
}

const appReducer = (state=initialState, action: any) => {
  switch (action.type){
    case actionTypes.COLLAPSE_MENU:
      return update(state, {
        collapseMenu: {$set: action.collapseMenu}
      })
    case actionTypes.SET_THEME:
      return update(state, {
        theme: {$set: action.theme}
      })
  }

  return state;
}

export default appReducer;