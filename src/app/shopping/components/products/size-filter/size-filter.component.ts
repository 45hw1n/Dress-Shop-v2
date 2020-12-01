import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from 'shared/services/category.service';

@Component({
  selector: 'app-size-filter',
  templateUrl: './size-filter.component.html',
  styleUrls: ['./size-filter.component.css']
})
export class SizeFilterComponent implements OnInit {
   size$;
   size: string;
   @Input('category') category;
  constructor(categoryService: CategoryService) { 
    this.size$ = categoryService.getSize();
  }

  ngOnInit() {
  }

}
