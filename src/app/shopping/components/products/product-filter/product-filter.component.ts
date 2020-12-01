import { Component, Input } from '@angular/core';
import { CategoryService } from 'shared/services/category.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent {
  categories$;
  size$;
  
  @Input('category') category;

  constructor(
    categoryService: CategoryService
  ) {
    this.categories$ = categoryService.getAll();
    this.size$ = categoryService.getSize();
  }

}
