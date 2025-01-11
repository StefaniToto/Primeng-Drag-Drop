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
    "Episode I - The Phantom Menace",
    "Episode II - Attack of the Clones",
    "Episode III - Revenge of the Sith",
    "Episode IV - A New Hope",
    "Episode V - The Empire Strikes Back",
    "Episode VI - Return of the Jedi",
    "Episode VII - The Force Awakens",
    "Episode VIII - The Last Jedi",
    "Episode IX – The Rise of Skywalker",
  ];
  bodyElement: HTMLElement = document.body;
  drop(event: CdkDragDrop<string[]>) {
    console.log("ended");

    this.bodyElement
      .getElementsByClassName("klass-3")[0]
      .classList.remove("inheritCursors");
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

  dragStart($event: any) {
    console.log("started", this.bodyElement.classList);

    this.bodyElement
      .getElementsByClassName("klass-3")[0]
      .classList.add("inheritCursors");
  }
}
