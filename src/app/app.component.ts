import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var config = {
      apiKey: "AIzaSyAc0Jm4XFu5wV83piNdr7dmeJG_jCTY-Kk",
      authDomain: "my-blog-abeb8.firebaseapp.com",
      databaseURL: "https://my-blog-abeb8.firebaseio.com",
      projectId: "my-blog-abeb8",
      storageBucket: "my-blog-abeb8.appspot.com",
      messagingSenderId: "67996397052"
    };
    firebase.initializeApp(config);
  }


  postItems = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et maximus nibh. Etiam posuere volutpat dui, eget dapibus erat tristique tincidunt. Maecenas aliquet scelerisque lacus, a commodo velit laoreet id',
      loveIts: 0,
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et maximus nibh. Etiam posuere volutpat dui, eget dapibus erat tristique tincidunt. Maecenas aliquet scelerisque lacus, a commodo velit laoreet id',
      loveIts: 0,
    },
    {
      title: 'Mon troisième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et maximus nibh. Etiam posuere volutpat dui, eget dapibus erat tristique tincidunt. Maecenas aliquet scelerisque lacus, a commodo velit laoreet id',
      loveIts: 0,
    }
  ]
}
