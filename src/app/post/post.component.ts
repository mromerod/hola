import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-service/api.service';
import { PostService } from '../api-service/post-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: any = [];

  constructor(public post: PostService) { }

  ngOnInit() {
    this.post.getPosts().subscribe(
      (response: any) => { // Modificar el tipo del argumento a Object
        this.posts = response['/posts'];
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
