import { Component } from '@angular/core';
import { productService } from '../product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl:'./product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  productList:any [];
  constructor(public pro: productService){

    this.productList= pro.products;
    console.log(this.productList);

  }

}
