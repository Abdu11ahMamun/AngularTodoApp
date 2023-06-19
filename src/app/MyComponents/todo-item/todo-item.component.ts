import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = {} as Todo; // Initialize with a default value
  @Input() i: number=0; // Added the 'i' property to the component
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("OnClick has been called");
  }
  onCheckboxClick(todo: Todo){
    this.todoCheckbox.emit(todo);

  }
}


