import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdersI } from '../../models/orders.model';

@Injectable()
export class OrderService {

    constructor(private http: HttpClient) { }

    generateOrder(order: OrdersI): Observable<any> {
        return this.http.post(`api/orders`, order);
    }
    completeOrder(id: number): Observable<any> {
        return this.http.patch(`api/orders/${id}`, { status: 'completed' });
    }

}
