import { Component } from '@angular/core';
import { AuthService } from '../share/services/Auth.service';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [],
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
