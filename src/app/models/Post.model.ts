export class Post {

  createdAt: number;
  loveIts: number;

  constructor(public title: string,
              public content: string
              ) {
    this.createdAt = Date.now();
    this.loveIts = 0;
  }
}
