import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'instaclone';

  ngOnInit():void {
    
    var firebaseConfig = {
      apiKey: "AIzaSyDTeG07ynHlZpz9IJc__JjwvFChga6GCAY",
      authDomain: "insta-clone-e1784.firebaseapp.com",
      databaseURL: "https://insta-clone-e1784.firebaseio.com",
      projectId: "insta-clone-e1784",
      storageBucket: "insta-clone-e1784.appspot.com",
      messagingSenderId: "702496168207",
      appId: "1:702496168207:web:b9e87f4876f93d548f067a",
      measurementId: "G-PEN17CWNNM"
    };
    
    firebase.initializeApp(firebaseConfig)
  }
}
