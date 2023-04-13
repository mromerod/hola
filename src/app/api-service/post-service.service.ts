import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Post } from '../post/postclass';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('mara@poliamor.com:Temp2023$$') });
    return this.http.get<any[]>(this.apiUrl + '/posts/all', { headers }).pipe(
      map(posts => posts.map(post => {
        const p = new Post();
        p.id = post.id;
        p.text = post.text;
        p.imagePost = post.imagePost;
        return p;
      }))
    );
  }
  
  
}


