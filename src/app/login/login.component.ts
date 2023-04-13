import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  username = '';
  password = '';

  constructor(private api: ApiService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  login() {
    this.api.login(this.username, this.password).subscribe(response => {
      console.log(response); // Aquí puedes agregar código para redirigir a la página de publicaciones
    }, error => {
      console.log(error);
    });
  }

}
