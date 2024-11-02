import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartProducts: any = []
  private localStoragekey = 'cart'
  constructor() {
    this.localCartFromtLocalStorage();
    console.log(this.cartProducts)
  }

  addToCart(product: any){
    const productFound = this.cartProducts.find( (productItem: any) => {
      return productItem._id == product._id
    } );
    console.log(productFound);

    if(! productFound) {
      product.items = 1;
      this.cartProducts.push(product);
    }
    else{
      product.items += 1
    }
    console.log(this.cartProducts)

    this.saveCartToLocalStorage();
  }

  private saveCartToLocalStorage(){
    localStorage.setItem( this.localStoragekey, JSON.stringify(this.cartProducts))
  }

  private localCartFromtLocalStorage(){
    if(localStorage.getItem(this.localStoragekey)) {
      this.cartProducts = JSON.parse(localStorage.getItem(this.localStoragekey) ! )
    }
    else{
      this.cartProducts = []
    }
  }
}
