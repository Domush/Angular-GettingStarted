import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacePipe } from './shared/convert-to-space.pipe';
import { StarRatingComponent } from './shared/star-rating/star-rating.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacePipe,
    StarRatingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
