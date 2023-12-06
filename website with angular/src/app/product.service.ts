import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class productService {
 products: any[]=[
  {
    name:"shirt",
    price:"60 $",
    size:"L,XL,M",
    Image:"assets/shirt.jpg"
  },
  {
    name:"shirt",
    price:"60 $",
    size:"L,XL,M",
    Image:"assets/shirt.jpg"
  },
 ]
}
