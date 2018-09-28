import * as fromFilter from './filter.actions';

const initState: fromFilter.allowFilters = 'todos';

export function reducerFilter( state = initState, action: fromFilter.actions ): fromFilter.allowFilters {
    switch (action.type) {
        case fromFilter.SET_FILTER:
            state = action.filter;
        break;
    }

    return state;
}
