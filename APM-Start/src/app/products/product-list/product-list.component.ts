import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from '../product';
import { ProductService } from '../product.service';
import { AppComponent } from '../../app.component'

@Component({
  // selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  constructor(private productService: ProductService, private toast: AppComponent) {}
  pageTitle = 'Latest Products';
  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }
  imageWidth = 50;
  showImage = false;
  imageMargin = 2;
  subProducts!: Subscription;

  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  ngOnInit(): void {
    this.subProducts = this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = this.filteredProducts = products;
      },
      error: (err) => {
        this.toast.displayToast(err, 'danger');
      }
    });
    // .unsubscribe();
    // this.filteredProducts = this.products;
  }

  ngOnDestroy() {
    this.subProducts.unsubscribe();
  }
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.name.toLocaleLowerCase().includes(filterBy));
  }

  onRatingClicked(activeProduct: any) {
    this.toast.displayToast(`Product '${activeProduct.name}' (${activeProduct.starRating} rating) clicked`);
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }
}
