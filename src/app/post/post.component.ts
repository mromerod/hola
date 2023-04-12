import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-service/api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: any = {};

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getPost().subscribe(
      (response: any) => { // Modificar el tipo del argumento a Object
        this.post = response['post'];
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
