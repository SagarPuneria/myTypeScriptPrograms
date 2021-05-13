import { LikeComponent } from "./like.component";
let component = new LikeComponent(10, true);
// component._likesCount = 2; // Ideally likesCount value should private and only be changed inside onClick() method
// component._isSelected = false;  // Ideally isSelected value should private and only be changed inside onClick() method
component.onClick();
console.log(`likesCount: ${component.likesCount}, isSelected: ${component.isSelected}`);
/*
$ tsc --target ES5 main.ts
$ node main.js
likesCount: 9, isSelected: false
*/