import {Component, OnInit} from '@angular/core';
import {TodoDataService} from "../../service/todo-data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {DatePipe, NgIf} from "@angular/common";
import {Todo} from "../../model/todo.model";

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    FormsModule,
    DatePipe,
    NgIf
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;

  constructor(private todoService: TodoDataService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', '', new Date(), false);

    if (this.id != 0) {
      this.todoService.retrieveTodo('adnan', this.id).subscribe(response => this.todo = response);
    }
  }

  saveOrUpdateTodo() {
    if (this.id == 0) {
      this.todoService.createTodo(this.todo, 'adnan').subscribe();
    } else {
      this.todoService.updateTodo(this.todo, 'adnan', this.id).subscribe();
    }

    this.router.navigate(['todos']).catch(err => console.log(err));
  }
}
