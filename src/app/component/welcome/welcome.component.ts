import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {WelcomeDataService} from "../../service/welcome-data.service";

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {

  name: string;

  constructor(private route: ActivatedRoute, private service: WelcomeDataService) {
  }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    // this.service.executeHelloWorldWithPathVariable(this.name).subscribe({
    //   next: (response) => this.name = response.helloWorld,
    //   error: (e) => this.name = e.error.message
    // });
  }

  handleSuccessfulResponse() {
  }
}
