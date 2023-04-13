import { Component, OnInit } from '@angular/core';

import { PostService } from '../api-service/post-service.service';
import { Post } from '../post/postclass';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Post[] = [];


  constructor(public postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe({
      next: (response: Post[]) => {
        this.posts = response;
        console.log('los posts',this.posts);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  

}





