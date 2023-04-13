import { Component } from '@angular/core';
import { ApiService } from '../api-service/api.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  
  username = '';
  password = '';

  constructor(private api: ApiService, private router: Router) { }

  login() {
    this.api.login(this.username, this.password).subscribe(response => {
      console.log(response); 
      this.router.navigateByUrl(`/posts`);
    }, error => {
      console.log(error);
    });
  }

}
