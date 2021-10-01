import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from './ProductModel';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl="https://jsonplaceholder.typicode.com/photos?albumId=1";
  constructor(private http:HttpClient) { }
  httpOptions={
    headers: new HttpHeaders({
      'content-type':'application/json'
    })
  }
  getProduct():Observable<ProductModel>{
     return this.http.get<ProductModel>(this.apiUrl);
  }
}
