import { Component, OnInit } from '@angular/core';
import * as actions from '../../filter/filter.actions';
import * as todoActions from '../todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Todo } from '../model/todo.model';


@Component({
  selector: 'todo-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  allowedFilters: actions.allowFilters[] = ['todos', 'completados', 'pendientes'];
  activeFilter: actions.allowFilters = 'todos';
  remainTasks: number;

  constructor(private store: Store<AppState>) { }

  changeFilter(filter: actions.allowFilters) {
    const action = new actions.SetFilterAction(filter);
    this.store.dispatch(action);
  }

  getRemainsTasks(tasks: Todo[]) {
    const pending = tasks.filter( task => !task.completed);
    this.remainTasks = pending.length;
  }

  deleteAllCompleted(): void {
    const action = new todoActions.DeleteAllAction();
    this.store.dispatch(action);
  }

  ngOnInit() {
    this.store.subscribe(state => {
      this.activeFilter = state.filter;
      this.getRemainsTasks(state.todos);
    });
  }

}
