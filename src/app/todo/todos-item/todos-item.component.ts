import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import * as actions from '../todo.actions';

@Component({
  selector: 'todo-todos-item',
  templateUrl: './todos-item.component.html',
  styles: []
})
export class TodosItemComponent implements OnInit {

  @Input()todo: Todo;
  @ViewChild('inputText')_inputText: ElementRef;
  get inputText() {
    return this._inputText.nativeElement;
  }
  chkField: FormControl;
  txtInput: FormControl;
  editing: boolean;

  constructor(private store: Store<AppState>) { }


  edit() {
    this.editing = true;
    setTimeout( () => {
      this.inputText.select();
    });
  }

  confirm() {
    this.editing = false;
    if (!(<FormControl>this.inputText).invalid && this.inputText.value !== this.todo.text) {
      this.store.dispatch(new actions.EditTodoAction(this.todo.id, this.txtInput.value));
    }
  }

  deleteTodo() {
    const action = new actions.DeleteTodoAction(this.todo.id);
    this.store.dispatch(action);
  }

  ngOnInit() {
    this.chkField = new FormControl(this.todo.completed );
    this.txtInput = new FormControl(this.todo.text, Validators.required);

    this.chkField.valueChanges.subscribe( () => {
      const action = new actions.ToggleTodoAction(this.todo.id);
      this.store.dispatch(action);
    });
  }

}
