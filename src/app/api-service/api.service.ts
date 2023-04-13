import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:8080/posts/all';

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post(`${this.baseUrl}/login`, { username, password });
  }

  getPost() {
    return this.http.get(`${this.baseUrl}/post`);
  }


}
