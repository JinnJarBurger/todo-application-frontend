import {Component} from '@angular/core';
import {DatePipe, NgForOf, UpperCasePipe} from "@angular/common";

export class Todo {

  constructor(public id: number,
              public description: string,
              public done: boolean,
              public targetDate: Date) {
  }
}

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [
    NgForOf,
    DatePipe,
    UpperCasePipe
  ],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent {

  todos = [
    new Todo(1, 'not empty 1', false, new Date()),
    new Todo(2, 'not empty 2', false, new Date()),
    new Todo(3, 'not empty 3', false, new Date()),
    new Todo(4, 'not empty 4', false, new Date())
  ]
}
