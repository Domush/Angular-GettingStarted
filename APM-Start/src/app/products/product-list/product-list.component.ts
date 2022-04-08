import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor() {}
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
  products: IProduct[] = [
    {
      id: 1,
      name: 'Leaf Rake',
      code: 'GDN-0011',
      releaseDate: 'March 19, 2021',
      description: 'Leaf rake with 48-inch wooden handle.',
      price: 19.95,
      rating: 3.2,
      imageUrl: 'assets/images/leaf_rake.png',
    },
    {
      id: 2,
      name: 'Garden Cart',
      code: 'GDN-0023',
      releaseDate: 'March 18, 2021',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      rating: 4.2,
      imageUrl: 'assets/images/garden_cart.png',
    },
    {
      id: 5,
      name: 'Hammer',
      code: 'TBX-0048',
      releaseDate: 'May 21, 2021',
      description: 'Curved claw steel hammer',
      price: 8.9,
      rating: 4.8,
      imageUrl: 'assets/images/hammer.png',
    },
    {
      id: 8,
      name: 'Saw',
      code: 'TBX-0022',
      releaseDate: 'May 15, 2021',
      description: '15-inch steel blade hand saw',
      price: 11.55,
      rating: 3.7,
      imageUrl: 'assets/images/saw.png',
    },
  ];

  filteredProducts: IProduct[] = [];
  ngOnInit(): void {
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
