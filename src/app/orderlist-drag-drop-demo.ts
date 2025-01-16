import { Component } from "@angular/core";
import { Component1Component } from "./component-1/component-1.component";
import { Component2Component } from "./component-2/component-2.component";
import { Component3Component } from "./component-3/component-3.component";
import { CardModule } from "primeng/card";
@Component({
  selector: "orderlist-drag-drop-demo",
  templateUrl: "./orderlist-drag-drop-demo.html",
  styleUrls: ["orderlist-drag-drop-demo.css"],
  standalone: true,
  imports: [
    Component1Component,
    Component2Component,
    Component3Component,
    CardModule,
  ],
})
export class OrderlistDragDropDemo {}
