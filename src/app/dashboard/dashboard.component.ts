import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { ProductService } from '../api/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  products: any = {};
  constructor(public productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getProduct().subscribe((data:{})=>{
      console.log(data);
      this.products =data;
  })}

}
