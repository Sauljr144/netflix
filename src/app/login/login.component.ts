declare var google: any;
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

constructor(private router: Router) {}

ngOnInit(): void {
  google.accounts.id.initialize({
    client_id: '437476344288-o6ohgoo4kcipajj1mcj974suo3a5pqqu.apps.googleusercontent.com',
    callback: (resp: any) =>{
      console.log(resp)
      this.handleLogin(resp);
    }
  });  
  
  google.accounts.id.renderButton(document.getElementById('google-btn'), {
    theme: "filled_blue",
    size: "large",
    shape: "pill",
    with: "250"
})
   
}

private decodeToken(token: string) {

  return JSON.parse(atob(token.split('.')[1]));

}

handleLogin(response: any){
  if (response){

    //decode the token
    const payload = this.decodeToken(response.credential);

    //store in session
    sessionStorage.setItem("loggedInUser", JSON.stringify(payload));

    //navigate to home/browser
    this.router.navigate(['browse']);
  }
}



}
