import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from 'app/SharedClassesAndTypes/Enums';
import { IProduct } from 'app/SharedClassesAndTypes/IProduct';
import { ICategory } from 'app/SharedClassesAndTypes/ICategory';
import { ProductsService } from 'app/Services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  Storename: string;
  Discount: DiscountOffers;
  StoreLogo: string;
  ProductList: any[] = [];
  tempProductList: any[] = [];
  CategoryList: Array<ICategory>;
  ClientName: string;
  IsPurchased: boolean;
  enumobj: any = DiscountOffers;
  product: any;

  errorMessage: any;


  productId: any = 1;

  actualdiscount: number;
  constructor(private productService: ProductsService) {
    this.Storename = "Mega store";
    this.Discount = DiscountOffers.NoDiscount;

    this.actualdiscount = this.Discount * 100;

    this.StoreLogo = "assets/images/dell.png";

    this.CategoryList = [{ ID: 1, Name: "Category 1" }, { ID: 2, Name: "Category 2" }];
    this.ClientName = "Marwa Fathi";
    this.IsPurchased = false;
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(data => {
      this.tempProductList = data;
      this.ProductList = data;
    }, error => {
      this.errorMessage = error;
    });

  }


  switchIsPurchased() {
    this.IsPurchased = !this.IsPurchased;
  }
  getProductById() {
    this.product = this.productService.getProductById(this.productId);
    console.log(this.product);
  }

  showProductsWithDiscount() {
    this.ProductList = this.tempProductList.filter(x => x.Discount > 0);
  }
  showProductsWithNoDiscount() {
    this.ProductList = this.tempProductList.filter(x => x.Discount == 0);
  }
}
