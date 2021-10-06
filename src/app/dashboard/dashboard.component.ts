import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { ProductService } from '../api/product.service';
import { MatDialog} from '@angular/material/dialog';
import { DialogProductComponent} from '../dialog-product/dialog-product.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  products: any = {};
  constructor(public productService:ProductService,public dialog:MatDialog) { }
  openDialog() {
    const dialogRef = this.dialog.open(DialogProductComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit(): void {
    this.productService.getProduct().subscribe((data)=>{
      this.products =data;
  })}

}
