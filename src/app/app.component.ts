import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrderService } from './core/http/order/order.service';
import { PortfolioService } from './core/http/portfolio/portfolio.service';
import { Orders, OrdersI } from './core/models/orders.model';
import { Portfolio } from './core/models/portfolio.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  loading: boolean = false;
  loadingError: boolean = false;
  currentPortfolio: Portfolio = null;
  orderSubscription$: Subscription;
  ordersList: Orders[] = [];

  constructor(
    private portfolioService: PortfolioService,
    private orderService: OrderService,
    private changeDetector: ChangeDetectorRef
  ) {

  }
  ngOnInit(): void {
    this.loadingPortfolio();
  }

  loadingPortfolio() {
    this.loading = true;
    this.loadingError = false;
    this.portfolioService.setDefaultPortfolio().subscribe((res) => {
      this.currentPortfolio = res;
    }, (error) => {
      this.loadingError = true;
    }, () => {
      this.loading = false;
    })

  }

  generateOrder(order: Orders) {
    if (this.orderSubscription$) {
      this.orderSubscription$.unsubscribe();
    }
    order.id = this.ordersList.length + 1;
    this.orderSubscription$ = this.orderService.generateOrder(order).subscribe(res => {
      order.complete = false;
      this.ordersList.push(order);
    });
  }

  onComplete(order:OrdersI){
    this.orderService.completeOrder(order.id).subscribe(res=>{
      order.complete = true;
      this.onGetPortfolio();
    });
  }
  onGetPortfolio(){
    this.portfolioService.getPortfolio(this.currentPortfolio.id).subscribe(res=>{
      this.currentPortfolio = res;
      this.changeDetector.detectChanges();
    });
  }

  


}
