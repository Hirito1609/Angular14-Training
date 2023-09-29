import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CartDataService } from 'src/app/shared/services/cart-data.service';

@Component({
  selector: 'app-products',
  template: `
    <div class="container-fluid">
      <h1>Products</h1>
      <div class="col">
        <div class="row">
          <div
            class="col-12 col-md-6 col-lg-3 mb-3"
            *ngFor="let product of products">
            <div class="card">
              <img
                class="card-img-top"
                src="https://dummyimage.com/300x220/55595c/fff"
                alt="Card image cap" />

              <div class="card-body">
                <h4 class="card-title">
                  <a
                    routerLink="/products/{{ product.id }}"
                    title="View Product"
                    >{{ product.title }}</a
                  >
                </h4>
                <p class="card-text">Category: {{ product.category }}</p>
                <div class="row">
                  <div class="col">
                    <p class="btn btn-danger btn-block">
                      {{ product.price }}
                    </p>
                  </div>
                  <div class="col">
                    <a
                      class="btn btn-success btn-block"
                      (click)="handleAddToCart(product)"
                      >Add to cart</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ProductsComponent implements OnInit {
  products!: any[];

  constructor(
    private productsService: ProductsService,
    private cartDataService: CartDataService
  ) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((res: any) => {
      console.log(res);
      this.products = res;
    });
  }

  handleAddToCart(product: any) {
    console.log(product);
    this.cartDataService.addToCart(product);
  }
}
