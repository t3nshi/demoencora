import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface Post {
  body: string;
  id: number;
  title: string;
  userId:number;
}



@Injectable({
  providedIn: 'root'
})
export class CoreService {
  private url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) {

  }

  getData(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }
}
