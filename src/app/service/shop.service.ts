import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ShopService {
  listItem = [
    {
      name: "item1",
      description: "anh duy dep trai"
    },
    {
      name: "item2",
      description: "anh duy ko dep trai"
    }
  ];
  constructor() {}
}
