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
  private salt = "0.39078746192112246";
  private hash = "deee403183c532c4b343d1474b09912aa82f75e1"
  constructor(private http: HttpClient) {

  }

  getData(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }
  async digestMessage(message:string) {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    const hash = await crypto.subtle.digest("SHA-1", data);
    return hash;
  }
  async checkValidPassword(password:string, email:string){
    const stringToHash = password + this.salt + email;
    const resultingHash = await this.digestMessage(stringToHash);
    const stringHash =  Array.from(new Uint8Array(resultingHash)).map( x => x.toString(16).padStart(2,'0') ).join('');

    console.log(stringHash,this.hash )
    return this.hash == stringHash;

  }
}
