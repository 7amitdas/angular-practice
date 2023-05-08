import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-req',
  templateUrl: './http-req.component.html',
  styleUrls: ['./http-req.component.css'],
})
export class HttpReqComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http
      .post(
        'https://recipe-shopping-app7-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    // Send Http request
  }

  onClearPosts() {
    // Send Http request
  }
}