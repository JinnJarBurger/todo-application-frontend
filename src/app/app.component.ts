import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {WelcomeComponent} from "./component/welcome/welcome.component";
import {MenuComponent} from "./component/menu/menu.component";
import {FooterComponent} from "./component/footer/footer.component";
import {LoginComponent} from "./component/login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WelcomeComponent, LoginComponent, FooterComponent, MenuComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';
}
