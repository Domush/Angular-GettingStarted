import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacePipe } from './shared/convert-to-space.pipe';
import { StarRatingComponent } from './shared/star-rating/star-rating.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailGuard } from './products/product-detail/product-detail.guard';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    WelcomeComponent,
    ConvertToSpacePipe,
    StarRatingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      {
        path: 'product/:id',
        canActivate: [ ProductDetailGuard ],
        component: ProductDetailComponent
      },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
