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

  username = 'jinnjar';
  password = 'Adnanrocks247';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(private router: Router,
              private authenticateService: AuthenticationService) {
  }

  handleLogin() {
    this.authenticateService.executeBasicAuthentication(this.username, this.password).subscribe(
      {
        next: () => {
          this.invalidLogin = false;
          this.router.navigate(['welcome', this.username]).catch((err) => console.log(err));
        },
        error: (err) => {
          this.invalidLogin = true;
          console.log(err);
        }
      }
    )
  }
}
