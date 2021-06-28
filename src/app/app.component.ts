import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myTypeScriptPrograms';
  constructor() {
    console.log('constructor, Hello AppComponent ...');
  }

  ngOnInit() {
    console.log('ngOnInit, Hello AppComponent ...');
  }

  handleClick(event: any) {
    alert(event);
  }
}
