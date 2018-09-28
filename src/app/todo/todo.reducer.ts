import * as actions from './todo.actions';
import { Todo } from './model/todo.model';

const todo1 = new Todo('Vencer a Thanos');
const todo2 = new Todo('Salvar al mundo');
todo2.completed = true;

const estadoInicial: Todo[] = [todo1, todo2];

export function todoReducer (state = estadoInicial, action: actions.Actions): Todo[] {

    switch (action.type) {
        case actions.ADD_TODO:
            const todo = new Todo(action.texto);
            state = [...state, todo];
        break;
        case actions.TOGGLE_TODO:
            state = state.map(td => {
                if (td.id === action.id) {
                    return {
                        ...td,
                        completed: !td.completed
                    };
                } else {
                    return td;
                }
            });
        break;
        case actions.EDIT_TODO:

            state = state.map(td => {
                if (td.id === action.id) {
                    return {
                        ...td,
                        text: action.text
                    };
                } else {
                    return td;
                }
            });
        break;
        case actions.DELETE_TODO:
            state = state.filter( td => td.id !== action.id );
        break;
        case actions.COMPLETE_ALL_TODO:
            state = state.map(td => {
                return {
                    ...td,
                    completed: action.allCompleted
                };
            });
        break;
        case actions.DELETE_ALL_TODO:
            state = state.filter(td => !td.completed);
        break;
    }
    return state;

}
