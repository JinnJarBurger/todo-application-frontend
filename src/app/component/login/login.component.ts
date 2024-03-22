import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../service/authentication.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username = 'jinnjarburger';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(private router: Router,
              private authenticateService: AuthenticationService) {
  }

  handleLogin() {
    this.invalidLogin = !this.authenticateService.authenticate(this.username, this.password);

    if (!this.invalidLogin) this.router.navigate(['welcome', this.username]);
  }
}
