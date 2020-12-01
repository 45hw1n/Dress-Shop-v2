import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'shared/models/product';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { OnChanges } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnChanges{
  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart: ShoppingCart;

  constructor(
    private cartService: ShoppingCartService
  ) { }

  addToCart(){
    this.cartService.addToCart(this.product);
  }

  ngOnChanges(){
    if(this.shoppingCart) {
      if(this.shoppingCart.getQuantity(this.product) === 0){
        this.cartService.removeItem(this.product);
      }
    }
  }

}

