import { Action } from '@ngrx/store';

export interface StoreActionModel extends Action {
  type: string;
  payload?: any;
}