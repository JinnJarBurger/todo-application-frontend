import {Routes} from '@angular/router';
import {WelcomeComponent} from "./component/welcome/welcome.component";
import {LoginComponent} from "./component/login/login.component";
import {LogoutComponent} from "./component/logout/logout.component";
import {ListTodosComponent} from "./component/list-todos/list-todos.component";
import {ErrorComponent} from "./component/error/error.component";
import {RouteGuardService} from "./service/route-guard.service";

export const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'welcome/:name', component: WelcomeComponent, canActivate: [RouteGuardService]},
  {path: 'todos', component: ListTodosComponent, canActivate: [RouteGuardService]},
  {path: '**', component: ErrorComponent, canActivate: [RouteGuardService]}
];
