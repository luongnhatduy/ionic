import { Router } from '@angular/router';
import { ShopService } from './../tab1/service/shop.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  listItem: object[] = [];
  constructor(private shopService: ShopService, private router: Router) {}
  ngOnInit(): void {
    this.shopService.getData(this._getData.bind(this));
  }
  _getData(data) {
    data.forEach(element => {
      if(element.status) this.listItem.push(element)
    });
  }
}
