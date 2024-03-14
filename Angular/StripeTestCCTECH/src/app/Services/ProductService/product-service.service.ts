import { Injectable } from '@angular/core';

// Define the Product interface
export interface Product {
  shirtID: number;
  title: string;
  price: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  // Array to store products
  private products: Product[] = [
    {shirtID: 1, title: "Tshirt1", price: 20, image: 'https://www.pacsun.com/on/demandware.static/-/Sites-pacsun_storefront_catalog/default/dw48977a4e/product_images/0120522800494NEW_01_010.jpg'},
    {shirtID: 2, title: "Tshirt2", price: 30, image: 'https://www.pacsun.com/dw/image/v2/AAJE_PRD/on/demandware.static/-/Sites-pacsun_storefront_catalog/default/dwdee7187c/product_images/0120522800495NEW_01_001.jpg?sw=600'},
    {shirtID: 3, title: "Tshirt3", price: 25, image: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F02%2Fsupervsn-studios-pacsun-studio-spring-collection-release-2.jpg?cbr=1&q=90'},
    {shirtID: 4, title: "Tshirt4", price: 15, image: 'https://www.pacsun.com/dw/image/v2/AAJE_PRD/on/demandware.static/-/Sites-pacsun_storefront_catalog/default/dw9c74d0c6/product_images/0097603260108NEW_01_001.jpg?sw=600'}
  ];

  constructor() { }

  // Method to retrieve products
  getProducts(): Product[] {
    return this.products;
  }
  

  /**
   * Retrieves a product from the `products` array based on its `shirtID`.
   * @param shirtID - The ID of the product to retrieve.
   * @returns The product object with the matching `shirtID` if found, otherwise `undefined`.
   */
  getProductWithID(id: number) {

    // Search for a product with a matching `shirtID`
    const product = this.products.find(product => product.shirtID == id);

  
    return product;
  }



}
