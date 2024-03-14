import { Component, OnInit, inject } from '@angular/core';
import { ProductServiceService } from '../../Services/ProductService/product-service.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-view-product',
  standalone: true,
  imports: [],
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.css'
})
export class ViewProductComponent implements OnInit {
  private _productService = inject(ProductServiceService);
  private _route = inject(ActivatedRoute);
  private _http = inject(HttpClient);

  product: any
  id:any
  apiUrl = "http://localhost:5043/Payments/create-checkout-session"

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get("productID");

    this.product = this._productService.getProductWithID(this.id);
    console.log(this.product);
    return this.product
  }

  buyNow() {
    const payload = {
      productID: this.id,
      productName:this.product.title,
      productPrice:this.product.price,
      image:this.product.image
    }


    const headers = new HttpHeaders({
      'ApiKey': '3&N3mtsABBY8a669OiIS6NL67X8UI&',
      'Token': '9dcdfb7c-1c79-4a3d-85bf-6ee5610aa5d9-202403130832'
    });

    const options = {headers:headers};
    console.log(payload)
    console.log(this._http.post<any>(this.apiUrl, payload, options));
    return this._http.post<any>(this.apiUrl, payload, options).subscribe(response => {
      window.location.href = response.url

      // Handle response here if needed
    }, (err) => {
      console.log(err)

    });
    
  }
  
}
