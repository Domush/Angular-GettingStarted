import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  constructor(private productService: ProductService) {}
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
  errorMessage: string = '';
  subProducts!: Subscription;

  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  ngOnInit(): void {
    this.subProducts = this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = this.filteredProducts = products;
      },
      error: (err) => {
        this.errorMessage = err;
        this.displayToast(err, 'danger');
      },
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

  toastText = '';
  toastType = 'info';
  toastVisible = false;
  onRatingClicked(activeProduct: any) {
    this.toastVisible = true;
    this.toastText = `Product '${activeProduct.name}' (${activeProduct.starRating} rating) clicked`;
    setTimeout(() => (this.toastVisible = false), 4000);
  }

  displayToast(message: string, type: string = 'info') {
    this.toastVisible = true;
    this.toastType = type;
    this.toastText = message;
    setTimeout(() => (this.toastVisible = false), 4990);
  }
  toggleImage() {
    this.showImage = !this.showImage;
  }
}
