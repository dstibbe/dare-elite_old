import { ActionReducerMap, MetaReducer, ActionReducer, Action } from '@ngrx/store';

import * as fromAuth from '../authentication/store/auth.reducer';
import * as fromLanden from '../pages/landen/store/landen.reducer';

import { AuthState } from '../authentication/store/auth.state';
import { LandenState } from '../pages/landen/store/landen.state';


export interface AppState {
  auth: AuthState;
  landen: LandenState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  landen: fromLanden.landenReducer
};

export function clearState(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  // tslint:disable-next-line:only-arrow-functions
  return function(state: AppState | undefined, action: Action): AppState {
    if (action.type === '[Auth] LOGOUT completed') {
      state = undefined;
    }
    return reducer(state, action);
  };
}


export const metaReducers: MetaReducer<AppState>[] = [clearState];
