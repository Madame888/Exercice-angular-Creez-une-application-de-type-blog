import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {

  @ Input() title: string;
  @ Input() content: string;
  @Input() loveIts = 0;
  @ Input() createdAt: Date;
  constructor() { }

  ngOnInit() {
  }

  like() {
    this.loveIts = this.loveIts + 1;
  }


  dislike() {
    this.loveIts = this.loveIts - 1;
  }

  getColor() {
    if (this.loveIts < 0) {
      return 'red';
    } else if (this.loveIts > 0) {
      return 'green';
    }

  }
}
