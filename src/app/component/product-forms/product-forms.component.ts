import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/model/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-forms',
  templateUrl: './product-forms.component.html',
  styleUrls: ['./product-forms.component.css']
})
export class ProductFormsComponent implements OnInit {
  product: IProduct ={
    name:"",
    price:0
  }
  constructor(
    private productService:ProductService,
    private routes:Router,
    private activateRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = +this.activateRoute.snapshot.paramMap.get('id')!;
    if(id){
      this.productService.getProduct(id).subscribe(data =>{
        this.product = data
      })
    }
  }
  onSubmit(){
    const id = +this.activateRoute.snapshot.paramMap.get('id')!;
    if (id) {
      this.productService.updateProduct(this.product).subscribe(() => {
        setTimeout(() => {
          this.routes.navigate(['product']);
        }, 2000)
      })
    }
    this.productService.addProduct(this.product).subscribe(() => {
      setTimeout(() => {
        this.routes.navigate(['product']);
      }, 2000)
    });
  }
}
