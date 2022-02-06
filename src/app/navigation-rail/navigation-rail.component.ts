import { Component, OnInit } from '@angular/core';
import { MDCList } from "@material/list";

@Component({
  selector: 'app-navigation-rail',
  templateUrl: './navigation-rail.component.html',
  styleUrls: ['./navigation-rail.component.scss']
})
export class NavigationRailComponent implements OnInit {
  list: any;

  constructor() { }

  ngOnInit(): void {
    const listSelected = document.querySelector('.mdc-list') as HTMLElement;
    console.log(listSelected);

    this.list = MDCList.attachTo(listSelected);
    this.list.wrapFocus = true;
  }

}
