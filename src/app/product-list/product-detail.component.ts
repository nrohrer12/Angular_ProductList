import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

import { Iproduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit 
{
  pageTitle: string = 'Product Detail';
  errorMessage = '';
  product: Iproduct | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { } //route for this componenet being accessible, router for being able to navigate from this component

  ngOnInit() 
  {
    let param = this.route.snapshot.paramMap.get('id'); //the "+" converts string to a numeric id ---- gets route param 'id' and sets it to this.id
    if(param)
    {
      const id = +param;
      this.getProduct(id);
      this.pageTitle += `: ${id}`;
    }
    

  }

  getProduct(id: number)
  {
    this.productService.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error);
    
  }

  onBack() : void
  {
    this.router.navigate(['/products']);
  }

}
