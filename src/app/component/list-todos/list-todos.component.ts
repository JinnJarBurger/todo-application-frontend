import {Component, OnInit} from '@angular/core';
import {DatePipe, NgForOf, UpperCasePipe} from "@angular/common";
import {TodoDataService} from "../../service/todo-data.service";

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
export class ListTodosComponent implements OnInit {

  todos: Todo[] | undefined;

  constructor(private todoService: TodoDataService) {
  }

  ngOnInit(): void {
    this.todoService.retrieveAllTodos('adnan').subscribe({
      next: (response) => this.todos = response,
      error: (err) => console.log(err)
    })
  }
}

export class Todo {

  constructor(public id: number,
              public username: String,
              public description: String,
              public targetDate: Date,
              public done: boolean) {
  }
}
