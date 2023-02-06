import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Orders } from 'src/app/core/models/orders.model';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss']
})
export class OrdersTableComponent implements OnInit {
  @Input() orders: Orders[] = [];
  @Output() eventComplete: EventEmitter<Orders> = new EventEmitter<Orders>();
  constructor() { }

  ngOnInit() {
  }

  onComplete(order: Orders) {
    let result = confirm("Confirm?");
    if (!result) {
      return;
    }
    this.eventComplete.emit(order)
  }

}
