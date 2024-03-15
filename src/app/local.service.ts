import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  constructor() {}

  public GetBox(): any[] {
    const boxsString: string | null = localStorage.getItem('box');
    if (boxsString !== null) {
      return JSON.parse(boxsString);
    } else {
      return [];
    }
  }
  public SetBox(items: any) {
    let boxs: any[] = this.GetBox();
    boxs.push(items);
    localStorage.setItem('box', JSON.stringify(boxs));
  }
  public SetBoxs(items: any) {
    localStorage.setItem('box', JSON.stringify(items));
  }
  public GetDrink() {
    const drinks: any = localStorage.getItem('drink');
    return JSON.parse(drinks);
  }
  public SetDrink(items: any) {
    let drinks: any = this.GetDrink;
    drinks.push(items);
    localStorage.setItem('drink', JSON.stringify(drinks));
  }
  public CountBox() {
    let boxs: any[] = this.GetBox();
    let boxcount : number = 0; 
 
    for (let i:number = 0; i < boxs.length; i++){
      boxcount = boxcount + boxs[i].quantity; 
    }
    return boxcount; 
  }
  public CountDrink() {
    let drinks: any = this.GetDrink;
    return drinks.length;
  }
}
