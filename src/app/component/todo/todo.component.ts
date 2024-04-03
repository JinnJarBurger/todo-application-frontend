import {Component, OnInit} from '@angular/core';
import {TodoDataService} from "../../service/todo-data.service";
import {ActivatedRoute} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {Todo} from "../../model/todo.model";

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    FormsModule,
    DatePipe
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;

  constructor(private todoService: TodoDataService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todoService.retrieveTodo('adnan', this.id).subscribe(response => this.todo = response);
  }

  saveTodo() {

  }
}
