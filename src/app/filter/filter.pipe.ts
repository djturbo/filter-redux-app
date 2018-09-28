import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';
import { allowFilters } from './filter.actions';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: allowFilters): Todo[] {
    let todosFiltered: Todo[];
    switch (filter) {
      case 'todos':
        todosFiltered = todos;
      break;
      case 'completados':
        todosFiltered = todos.filter( task => task.completed );
      break;
      case 'pendientes':
        todosFiltered = todos.filter( task => !task.completed );
      break;
    }

    return todosFiltered;
  }

}
