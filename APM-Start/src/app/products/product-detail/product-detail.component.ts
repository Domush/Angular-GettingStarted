import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { IProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  pageTitle = 'Product Detail';
  sub: any;
  product: IProduct | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private toast: AppComponent
  ) {}

  // imageWidth = 50;
  // showImage = false;
  // imageMargin = 2;
  // errorMessage: string = '';
  // subProducts!: Subscription;

  // products: IProduct[] = [];
  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: products => {
        this.product = products.find(p => p.productId == this.route.snapshot.params.id);
      },
      error: err => {
        this.toast.displayToast(err, 'danger');
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
