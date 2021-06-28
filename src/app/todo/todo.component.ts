import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  // title: string = 'Todo';
  @Input() title: string;
  @Input() subTitle: string;

  isClicked: boolean = false;

  name: string;
  items: ITodo[] = [];

  @Output() fireClick = new EventEmitter<string>();

  constructor() {
    console.log('constructor, Hello TodoComponent ...');
  }

  ngOnInit() {
    console.log('ngOnInit, Hello TodoComponent ...');
  }

  onClick() {
    // this.title = 'Todo Demo';
    this.fireClick.emit('Hellow from child to parent');
    alert('Hellow from parent to child msg: ' + this.title);
    this.isClicked = true;
  }

  addItem() {
    this.items.push({ name: this.name, completed: false });
    this.name = '';
  }

  onDelete(index: number) {
    if (confirm('Are you sure')) {
      this.items.splice(index, 1);
    }
  }

  onComplete(index: number) {
    this.items[index].completed = true;
  }
}
