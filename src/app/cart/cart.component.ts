import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {ItemComponent} from './item/item.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  created: boolean;
  @ViewChild('item', {read: ViewContainerRef}) item: ViewContainerRef;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  AddComponent(data): void{
    let ItemComponents;
    let ItemComponentRef;

    console.log('created');

    ItemComponents = this.componentFactoryResolver.resolveComponentFactory(ItemComponent);
    ItemComponentRef = this.item.createComponent(ItemComponents);
    data = JSON.parse(data);
    ItemComponentRef.instance.value = {prodName: data.prodName, price: data.price, category: data.category};
    ItemComponentRef.instance.sum = data.count * data.price;
    ItemComponentRef.instance.count = data.count;
  }

  AddItemsToCart(): void{
    if (!this.created) {
      this.item.clear();
      let data;
      data = JSON.parse(localStorage.getItem('prod'));

      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < data.length; i++) {
        this.AddComponent(data[i]);
      }
      this.created = true;
    }
  }

  ngOnInit(): void {
    this.created = false;
  }
}
