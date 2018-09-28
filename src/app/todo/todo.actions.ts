import { Action } from '@ngrx/store';

export const ADD_TODO          = '[TODO] Add todo';
export const TOGGLE_TODO       = '[TODO] Toggle todo';
export const EDIT_TODO         = '[TODO] Edit todo';
export const DELETE_TODO       = '[TODO] Delete todo';
export const COMPLETE_ALL_TODO = '[TODO] Complete all todo';
export const DELETE_ALL_TODO   = '[TODO] Delete all todo';

export class AddTodoAction implements Action {
    readonly type = ADD_TODO;

    constructor( public texto: string ) { }
}

export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;

    constructor( public id: number) {}
}

export class EditTodoAction implements Action {
    readonly type = EDIT_TODO;

    constructor( public id: number,
                 public text: string) {}
}

export class DeleteTodoAction implements Action {
    readonly type = DELETE_TODO;

    constructor( public id: number) {}
}

export class CompleteAllActions implements Action {
    readonly type = COMPLETE_ALL_TODO;
    constructor(public allCompleted: boolean) {}
}

export class DeleteAllAction implements Action {
    readonly type = DELETE_ALL_TODO;
    constructor() {}
}

export type Actions = AddTodoAction |
                      ToggleTodoAction |
                      EditTodoAction   |
                      DeleteTodoAction |
                      CompleteAllActions |
                      DeleteAllAction;

