import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {
  private defaultCartItems: any[] = [
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      // eslint-disable-next-line quotes
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
    }
  ];

  private cartItems = new BehaviorSubject(this.defaultCartItems);

  latestCartItems = this.cartItems.asObservable();

  constructor() {}

  addToCart(product: any) {
    console.log(product);
    this.latestCartItems.pipe(take(1)).subscribe((existingCartItems: any[]) => {
      console.log(existingCartItems);
      const updatedCartItems = [...existingCartItems, product];
      this.cartItems.next(updatedCartItems);
    });
  }
}
