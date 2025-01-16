import { Component } from "@angular/core";
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragPlaceholder,
  CdkDropList,
  moveItemInArray,
} from "@angular/cdk/drag-drop";
import { NgForOf } from "@angular/common";

@Component({
  selector: "app-component-2",
  standalone: true,
  imports: [CdkDrag, CdkDropList, NgForOf, CdkDragPlaceholder],
  templateUrl: "./component-2.component.html",
  styleUrl: "./component-2.component.scss",
})
export class Component2Component {
  movies = [
    "Episode VI - Return of the Jedi",
    "Episode VII - The Force Awakens",
    "Episode VIII - The Last Jedi",
    "Episode IX – The Rise of Skywalker",
  ];
  bodyElement: HTMLElement = document.body;
  drop(event: CdkDragDrop<string[]>) {
    this.bodyElement
      .getElementsByClassName("content")[0]
      .classList.remove("pointer-remove");
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

  dragStart() {
    this.bodyElement
      .getElementsByClassName("content")[0]
      .classList.add("pointer-remove");
    this.bodyElement
      .getElementsByClassName("klass-1")[0]
      .classList.add("pointer-add");
    this.bodyElement
      .getElementsByClassName("klass-3")[0]
      .classList.add("pointer-add");
  }
}
