import { Todo } from './todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todo/todo.reducer';
import { reducerFilter } from './filter/filter.reducer';
import { allowFilters } from './filter/filter.actions';

export interface AppState {
    todos: Todo[];
    filter: allowFilters;
}

export const reducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filter: reducerFilter
}
