import { Component } from '@angular/core';
import { AuthService } from '../share/services/Auth.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../share/components/header/header.component';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent {
  constructor(private auth: AuthService) {}

  name = JSON.parse(sessionStorage.getItem("loggedInUser")!).name;
  userImg = JSON.parse(sessionStorage.getItem("loggedInUser")!).picture;
  email = JSON.parse(sessionStorage.getItem("loggedInUser")!).email;

  signOut(){
    sessionStorage.removeItem("loggedInUser");

    this.auth.signOut();

  }
}
