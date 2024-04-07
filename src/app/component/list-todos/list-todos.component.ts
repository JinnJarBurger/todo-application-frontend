import {Component, OnInit} from '@angular/core';
import {DatePipe, NgForOf, NgIf, UpperCasePipe} from "@angular/common";
import {TodoDataService} from "../../service/todo-data.service";
import {Router} from "@angular/router";
import {Todo} from "../../model/todo.model";

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [
    NgForOf,
    DatePipe,
    UpperCasePipe,
    NgIf
  ],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];
  message: string;

  constructor(private todoService: TodoDataService, private router: Router) {
  }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('adnan').subscribe({
      next: (response) => this.todos = response,
      error: (err) => console.log(err)
    });
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo('adnan', id).subscribe(() => {
      this.message = `Successfully Deleted Todo ${id}!`;
      this.refreshTodos();
    })
  }

  updateTodo(id: number) {
    this.router.navigate(['todo', id]).catch(err => console.log(err))
  }

  createTodo() {
    this.router.navigate(['todo', 0]).catch(err => console.log(err));
  }
}
