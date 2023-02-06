import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AllocationI } from 'src/app/core/models/allocation.model';
import { Orders, OrdersI, TypeEnum } from 'src/app/core/models/orders.model';
import { Portfolio } from 'src/app/core/models/portfolio.model';


@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.scss']
})
export class PortfolioDetailsComponent implements OnInit {
  @Input() portfolio: Portfolio = null;
  @Output() eventOrder = new EventEmitter<OrdersI>();
  constructor() { }

  ngOnInit() {
  }

   
  /**
   *
   *
   * @param {AllocationI} item
   * @memberof PortfolioDetailsComponent
   */
  onSell(item: AllocationI) {
    let order = new Orders();
    order.allocation = item.id;
    order.portfolio = this.portfolio.id;
    order.shares = item.shares;
    order.type = TypeEnum.TYPE_SELL;
    this.eventOrder.emit(order);
  }

}
