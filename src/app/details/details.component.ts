import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoxService } from '../box.service';
import { LocalService } from '../local.service';
import { Box } from '../../model/box';
import { ShoppingcartsService } from '../shoppingcarts.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',

})
export class DetailsComponent implements OnInit{
  private id !: number; 
  public box !: Box; 
  public aliments !: any; 
  constructor( private activated: ActivatedRoute, private boxService: BoxService, private LocalService: LocalService, private ShoppingcartsService: ShoppingcartsService) {}
  ngOnInit() {
    this.activated.params.subscribe(
      (data) => {
        this.id = data['id']; 
      }
    );
    this.recoverBox();
  }

  private recoverBox() {
    this.boxService.getBox(this.id).subscribe(
      (data: any) => {
        this.box = data[0]; 
        this.aliments = data[1]; 
        console.log( this.aliments ); 
      },
      (error: any) => {
        console.error('Error fetching api:', error);
      }
    );
  } 

  public addBoxtoCard(box :any){
    //console.log(this.box);
    this.ShoppingcartsService.addToCart(box);
    window.alert('La Box est bien dans le panier');
    /*const title : string =  "box" + this.id;
    this.LocalService.SetLocalStorage(title, this.box); */
  }



}
