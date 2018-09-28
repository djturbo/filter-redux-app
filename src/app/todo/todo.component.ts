import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import * as actions from './todo.actions';
@Component({
  selector: 'todo-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {
  allCompleted: boolean;

  constructor(private store: Store<AppState>) { }

  toggleAll() {
    this.allCompleted = !this.allCompleted;
    console.log('todo: ', !this.allCompleted);
    const action = new actions.CompleteAllActions(this.allCompleted);
    this.store.dispatch(action);
  }

  ngOnInit() {
  }

}
