import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  count: number;
  prodName: string;
  price: string;
  id: string;
  out: boolean;
  // tslint:disable-next-line:variable-name
  star_id: Array<string>;

  GenerateId(): void{
    this.id = this.Makeid(5);
    let heart;
    heart = document.getElementById('heart');
    heart.id = this.id;
  }

  MouseOutStar(k): void{

  }

  MouseOverStar(k): void{
    let star;
    for ( let i = 0; i < 5; i++ ){
      star = document.getElementById(this.star_id[i]);
      if ( i <= k ){
        console.log(this.star_id[i]);
        star.src = 'https://i.imgur.com/kmJc0lq.png';
      }
      else {
        star.src = 'https://i.imgur.com/oyaqMWy.png';
      }
    }
  }

  GenerateStarId(): void{
    let star;
    let elemId: string;
    this.star_id = [' ', ' ', ' ', ' ', ' '];
    for (let i = 0; i < 5; i++ ) {
      this.star_id[i] = this.Makeid(6);
      elemId = 'star' + (i + 1);
      star = document.getElementById(elemId);
      star.id = this.star_id[i];
    }
  }

  Makeid(length): string{
    let result           = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  MouseOver(): void{
    let heart;
    heart = document.getElementById(this.id);
    // tslint:disable-next-line:triple-equals
    if (heart.src == 'https://i.imgur.com/m5MC8eO.png') {
      heart.src = 'https://i.imgur.com/jwPvqkI.png';
    } else {
      heart.src = 'https://i.imgur.com/m5MC8eO.png';
    }
}

  MouseOut(): void{
  if (this.out) {
    let heart;
    heart = document.getElementById(this.id);
    // tslint:disable-next-line:triple-equals
    if (heart.src == 'https://i.imgur.com/jwPvqkI.png') {
      heart.src = 'https://i.imgur.com/m5MC8eO.png';
    }
    else {
      heart.src = 'https://i.imgur.com/jwPvqkI.png';
    }
  }
  else { this.out = true; }
  }

  MouseClick(): void{
    this.out = false;
  }

  ngOnInit(): void {
    this.GenerateId();
    this.GenerateStarId();
    this.out = true;
    this.price = '45.50';
    this.prodName = 'Назва товару';
    this.count = 1;
  }

}
