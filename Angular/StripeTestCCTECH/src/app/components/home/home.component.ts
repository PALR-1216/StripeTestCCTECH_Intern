import { Component, OnInit, inject } from '@angular/core';
import { Product, ProductServiceService } from '../../Services/ProductService/product-service.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  private _productService = inject(ProductServiceService);
  products: Product[] | any;


  ngOnInit() {
    this.products = this._productService.getProducts()


  }
}
