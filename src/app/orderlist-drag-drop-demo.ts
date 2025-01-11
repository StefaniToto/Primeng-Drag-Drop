import { Component, OnInit } from "@angular/core";
import { ImportsModule } from "./imports";
import { Product } from "@domain/product";
import { ProductService } from "@service/productservice";
import { NgIf } from "@angular/common";
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { DropListConnectedPipe } from "./droplist-connected.pipe";
import { DragDropModule } from "primeng/dragdrop";
import { PrimeIcons } from "primeng/api";
import { Component1Component } from "./component-1/component-1.component";
import { Component2Component } from "./component-2/component-2.component";
import { Component3Component } from "./component-3/component-3.component";
@Component({
  selector: "orderlist-drag-drop-demo",
  templateUrl: "./orderlist-drag-drop-demo.html",
  styleUrls: ["cdk-drag-drop-custom-placeholder-example.css"],
  standalone: true,
  imports: [
    ImportsModule,
    NgIf,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    DragDropModule,
    Component1Component,
    Component2Component,
    Component3Component,
  ],
  providers: [ProductService, DropListConnectedPipe],
})
export class OrderlistDragDropDemo implements OnInit {
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
  products!: Product[];
  inProgressList = ["1.1", "1.2", "1.3", "1.4"];
  inProgressList1 = ["2.1", "2.2", "2.3", "2.4"];
  inProgressList3 = ["3.1", "3.2", "3.3", "3.4"];
  inProgressList4 = ["4.1", "4.2", "4.3", "4.4"];
  toDoList = ["Get to work", "Pick up groceries", "Go home", "Fall asleep"];

  done = ["Get up", "Brush teeth", "Take a shower", "Check e-mail", "Walk dog"];
  doneList = [
    "Get up",
    "Brush teeth",
    "Take a shower",
    "Check e-mail",
    "Walk dog",
  ];

  selectedCountries!: any[];
  countries = [
    { name: "Australia", code: "AU" },
    { name: "Brazil", code: "BR" },
    { name: "China", code: "CN" },
    { name: "Egypt", code: "EG" },
    { name: "France", code: "FR" },
    { name: "Germany", code: "DE" },
    { name: "India", code: "IN" },
    { name: "Japan", code: "JP" },
    { name: "Spain", code: "ES" },
    { name: "United States", code: "US" },
  ];
  list = [1, 2];

  obj = [
    {
      name: "name1",
      present: [
        { name: "one", code: "AU" },
        { name: "oone.one", code: "BR" },
        { name: "one.1.one", code: "CN" },
        { name: "one.1.one.1", code: "EG" },
      ],
      absent: [
        { name: "two", code: "AU" },
        { name: "two.two", code: "BR" },
        { name: "two.2.two", code: "CN" },
        { name: "two.2.two.2", code: "EG" },
      ],
    },

    {
      someproperty: "name1",
      someelse: "someelse",
      present: [
        { name: "three", code: "AU" },
        { name: "three.three", code: "BR" },
        { name: "three.3.three", code: "CN" },
        { name: "three.3.three.3", code: "EG" },
      ],
      absent: [
        { name: "four", code: "AU" },
        { name: "four.four", code: "BR" },
        { name: "four.4.four", code: "CN" },
        { name: "four.4.four.4", code: "EG" },
      ],
    },
  ];

  // let newarr2 = obj["array2"].someproperty = "newone"
  // obj = { ...this.obj, {
  //   array2: newarr2
  // }}
  // constructor(private productService: ProductService) { }

  Reducedarray = [
    { Id: 1, name: "abc", country: "first country", file: true, order: 1 },
    {
      Id: 2,
      City: "something",
      country: "first country",
      file: true,
      order: 1,
    },
    { Id: 3, City: "other city", country: "country", file: false, order: 1 },
    { Id: 4, name: "bbc", country: "first country", file: false, order: 1 },
    {
      Id: 5,
      City: "bbcsomething",
      country: "fbbct country",
      file: true,
      order: 2,
    },
    { Id: 6, City: "other city", country: "country", file: false, order: 2 },
    { Id: 7, City: "other city", country: "country", file: false, order: 3 },
    { Id: 8, City: "other city", country: "country", file: false, order: 3 },
  ];

  // data = [{
  //     id: 1, present: [{ Id: 1, name: "abc", country: "first country", file: true, order: 1 },
  //     { Id: 2, City: "something", country: "first country", file: true, order: 1 },
  //     ], absent: [{ Id: 3, City: "other city", country: "country", file: false, order: 1 }, { Id: 4, name: "bbc", country: "first country", file: false, order: 1 },]
  // }, {
  //     id: 2, present: [{ Id: 5, name: "abc", country: "first country", file: true, order: 2 },
  //     ], absent: [{ Id: 6, City: "other city", country: "country", file: false, order: 2 }]
  // },
  // {
  //     id: 3, present: [
  //         { Id: 6, City: "something", country: "first country", file: true, order: 3 },
  //     ], absent: [{ Id: 7, City: "other city", country: "country", file: false, order: 3 }]
  // }
  // }]
  ngOnInit() {
    const orderMap = new Map();
    for (const item of this.Reducedarray) {
      if (!orderMap.has(item.order)) {
        orderMap.set(item.order, { id: item.order, present: [], absent: [] });
      }
      const orderItem = orderMap.get(item.order);
      if (item.file) {
        orderItem.present.push(item);
      } else {
        orderItem.absent.push(item);
      }
    }
    const finalItems = [];
    for (const item of orderMap.values()) {
      finalItems.push(item);
    }
    console.log(finalItems);

    // let reduce1 = this.Reducedarray.reduce((result, currentValue) => {

    //     if (currentValue.file === true) {

    //         console.log("file ===true", result)
    //         result[currentValue["order"]] = {
    //             ...result[currentValue["order"]] || [],
    //              present:  currentValue
    //     }

    //     }
    //     else {
    //         result[currentValue["order"]] = {
    //             ...result[currentValue["order"]] || [],
    //              absent: currentValue
    //     }

    //     }
    //     return result
    // },{})

    // console.log( "reduceeeeeeeeeeee",reduce1)

    const data = [
      [
        { trait_type: "Type:", value: "Epic" },
        { trait_type: "Clan:", value: "Vampire" },
      ],
      [{ trait_type: "Rare Accessory:", value: "Rainbow Glass" }],
      [{ trait_type: "Rarity:", value: "Common" }],
      [{ trait_type: "Type:", value: "Common" }],
      [{ trait_type: "Type:", value: "Rare" }],
      [
        { trait_type: "Type:", value: "Epic" },
        { trait_type: "Rarity:", value: "Common" },
      ],
    ];

    const summary = data
      //flatten the array
      .flat()
      //summarize
      .reduce(
        (acc, cur) => ({
          ...acc,
          ...{
            [cur.trait_type]: {
              ...acc[cur.trait_type],
              ...{
                [cur.value]:
                  ((acc[cur.trait_type] && acc[cur.trait_type][cur.value]) ||
                    0) + 1,
              },
            },
          },
        }),
        {},
      );

    // console.log(summary, "summary");
    //I would leave it ^ this way
    //But to get to you desired result here we go V

    const desired = Object.entries(summary).map((e) => Object.fromEntries([e]));

    // console.log(desired);

    // this.productService
    //   .getProductsSmall()
    //   .then((cars) => (this.products = cars));
  }

  drop(event: CdkDragDrop<string[]>) {
    // console.log(event)
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  onEntered(enter) {
    console.log("ee", enter);
  }

  conncet(item) {
    const arr = [];
    for (let i in this.obj) {
      arr.push("present-" + i);
      arr.push("absent-" + i);
    }
    console.log(arr, item);
    return arr;
  }
}
