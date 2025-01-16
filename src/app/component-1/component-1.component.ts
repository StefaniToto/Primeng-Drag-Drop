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
  selector: "app-component-1",
  standalone: true,
  imports: [CdkDrag, CdkDropList, NgForOf, CdkDragPlaceholder],
  templateUrl: "./component-1.component.html",
  styleUrl: "./component-1.component.scss",
})
export class Component1Component {
  movies = [
    "Episode I - The Phantom Menace",
    "Episode II - Attack of the Clones",
    "Episode III - Revenge of the Sith",
    "Episode IV - A New Hope",
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
}
