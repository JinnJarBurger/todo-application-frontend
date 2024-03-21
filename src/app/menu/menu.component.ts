import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {AuthenticationService} from "../service/authentication.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
  }
}
