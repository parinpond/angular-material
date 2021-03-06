import { Component, OnInit } from '@angular/core';
import { ProductService } from '../api/product.service';
@Component({
  selector: 'app-dialog-product',
  templateUrl: './dialog-product.component.html',
  styleUrls: ['./dialog-product.component.scss']
})
export class DialogProductComponent implements OnInit {
  product:any={
    name:'',
    price:''
  }
  product_name:string="";
  constructor(public productService:ProductService) { }

  ngOnInit(): void {
  }
  save(){
    this.productService.save(this.product).subscribe((data)=>{
      console.log(data);
  })
}
}
