import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
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

  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.name.toLocaleLowerCase().includes(filterBy)
    );
  }

  alertText = '';
  alertVisible = false;
  onRatingClicked(activeProduct: any) {
    this.alertVisible = true;
    this.alertText = `Product '${activeProduct.name}' (${activeProduct.rating} rating) clicked`;
    setTimeout(() => (this.alertVisible = false), 4000);
  }
  toggleImage() {
    this.showImage = !this.showImage;
  }
}
