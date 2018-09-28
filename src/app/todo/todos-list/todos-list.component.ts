import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Todo } from '../model/todo.model';
import { allowFilters } from '../../filter/filter.actions';

@Component({
  selector: 'todo-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit {

  todos: Todo[] = [];
  currentFilter: allowFilters;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(
      state => {
        this.currentFilter = state.filter;
        this.todos = state.todos;
      }
    );
  }

}
