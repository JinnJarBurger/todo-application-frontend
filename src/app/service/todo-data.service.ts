import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "../model/todo.model";
import {API_URL} from "../app.constants";

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) {
  }

  retrieveAllTodos(username: string) {
    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`);
  }

  retrieveTodo(username: string, id: number) {
    return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }

  createTodo(todo: Todo, username: string) {
    return this.http.post<Todo>(`${API_URL}/users/${username}/todos`, todo);
  }

  updateTodo(todo: Todo, username: string, id: number) {
    return this.http.put<Todo>(`${API_URL}/users/${username}/todos/${id}`, todo);
  }

  deleteTodo(username: string, id: number) {
    return this.http.delete<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }
}
