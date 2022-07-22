import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from 'app/SharedClassesAndTypes/IProduct';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  errorMessage: string="";

  constructor(private httpClient: HttpClient) { }

  url: string = "/assets/Data/Products.json"

  productList: any[]=[];

  getAllProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.url).pipe(catchError((err) => {
      return throwError(() => err.message || "Internal server error")
    }))

  }

  getProductById(productId: number) {
    this.getAllProducts().subscribe(data => {
      this.productList = data;
    }, error => {
      this.errorMessage = error;
    });
    
    return this.productList.find(product=>product.ID==productId);
  }
}
