import { Component, Input, OnInit } from '@angular/core';
import {Post} from '../models/Post.model';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;
  @Input() id: number;

  constructor(private postService: PostsService) {
  }
  ngOnInit() { }

  onLoveIts() {
    this.postService.loveItsPost(this.id);
  }
  onDontLoveIts() {
    this.postService.dontLoveItsPost(this.id);

  }
  onDeletePost() {
    this.postService.deletePost(this.id);
  }
}
