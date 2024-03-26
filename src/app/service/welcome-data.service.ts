import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

export class HelloWorld {

  constructor(public helloWorld: string) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) {
  }

  executeHelloWorld() {
    return this.http.get<HelloWorld>('http://localhost:8080/');
  }
}
