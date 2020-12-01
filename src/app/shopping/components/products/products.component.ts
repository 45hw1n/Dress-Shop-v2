import { Component, OnInit } from '@angular/core';
import { ProductService } from 'shared/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'shared/models/product';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { ShoppingCart } from 'shared/models/shopping-cart';

import { AppUser } from 'shared/models/app-user';
import { AuthService } from 'shared/services/auth.service';
declare var $: any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products= [];
  filteredProducts: Product[] = [];
  category: string;
  size: string;
  cart$: Observable<ShoppingCart>;
  size$: Observable<ShoppingCart>;
  appUser: AppUser;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: ShoppingCartService,
    private authService: AuthService,
  ) {
    
  }

  async ngOnInit() {
    this.cart$ = await this.cartService.getCart();
    this.authService.appUser$.subscribe(user => this.appUser = user);
    this.populateProduct();

    $(function() {
      // Sidebar toggle behavior
      $('#sidebarCollapse').on('click', function() {
        $('#sidebar, #content').toggleClass('active');
      });
    });
  }

  private populateProduct(){
    this.productService
      .getAll()
      .switchMap(products => {
        this.products = products;
        return this.route.queryParamMap;
      })
      .subscribe(params => {
        this.category = params.get('category') 
        this.applyFilter()
        this.size = params.get('size')
        this.sizeFilter()
          
      })
}

  private applyFilter() {
    this.filteredProducts = (this.category) ?
    this.products.filter(p => p.category === this.category) :
    this.products;
  }
  private sizeFilter(){
    this.filteredProducts = (this.size) ?
    this.products.filter(p => p.size === this.size) :
    this.filteredProducts;
  }
}
