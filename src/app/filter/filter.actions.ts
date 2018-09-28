import { Action } from '@ngrx/store';
export const SET_FILTER = '[Filter] Set Filter';

export type allowFilters = 'todos' | 'completados' | 'pendientes';

export class SetFilterAction implements Action {
    readonly type = SET_FILTER;
    constructor(public filter: allowFilters) {}
}

export type actions = SetFilterAction;
