import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  postElements = [];

  constructor() { }

  ngOnInit() {
  }
  onPostAdded(postData: {postName: string, postContent: string}){
    this.postElements.push({
      type: 'post',
      name: postData.postName,
      content: postData.postContent
    });
  }
}
