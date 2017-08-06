import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductBodyComponent } from './product-body/product-body.component';
import { ProductQueryComponent } from './product-query/product-query.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { OrderBodyComponent } from './order-body/order-body.component';
import { OrderQueryComponent } from './order-query/order-query.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { MemberBodyComponent } from './member-body/member-body.component';
import { MemberQueryComponent } from './member-query/member-query.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';

const routes : Routes = [
  { path: 'product', component: ProductBodyComponent},
  { path: 'order', component: OrderBodyComponent},
  { path: 'member', component: MemberBodyComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ProductBodyComponent,
    ProductQueryComponent,
    ProductListComponent,
    ProductDetailComponent,
    OrderBodyComponent,
    OrderQueryComponent,
    OrderListComponent,
    OrderDetailComponent,
    MemberBodyComponent,
    MemberQueryComponent,
    MemberListComponent,
    MemberDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash:true , enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
