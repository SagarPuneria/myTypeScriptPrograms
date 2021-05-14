"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_component_1 = require("./like.component");
var component = new like_component_1.LikeComponent(10, true);
// component._likesCount = 2; // Ideally likesCount value should private and only be changed inside onClick() method
// component._isSelected = false;  // Ideally isSelected value should private and only be changed inside onClick() method
component.onClick();
console.log("likesCount: " + component.likesCount + ", isSelected: " + component.isSelected);