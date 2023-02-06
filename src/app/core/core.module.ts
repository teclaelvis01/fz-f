import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { PortfolioService } from './http/portfolio/portfolio.service';
import { OrderService } from './http/order/order.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ],
  declarations: [],
  providers:[PortfolioService,OrderService]
})
export class CoreModule { }
