import { Component, OnInit } from '@angular/core';
import { CoreService } from '../services/core.service';

interface Post {
  body: string;
  id: number;
  title: string;
  userId:number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  posts: Post[] = [];
  constructor(private core:CoreService){}
  ngOnInit(){
    this.core.getData().subscribe(
      res => {
        this.posts = res;
      },
      error => {
        //TODO: implement error logging and handling
        console.log("there was an error fetching the posts", error);
      }
    );
  }


}
