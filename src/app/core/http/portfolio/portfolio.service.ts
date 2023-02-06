import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Allocation } from '../../models/allocation.model';
import { Portfolio, PortfolioI } from '../../models/portfolio.model';

@Injectable()
export class PortfolioService {

    constructor(private http: HttpClient) { }

    setDefaultPortfolio(): Observable<Portfolio> {
        let portfolio = new Portfolio();
        portfolio.id = 1;
        portfolio.allocations = [
            new Allocation(1, 3),
            new Allocation(2, 4),
        ];
        return this.updatePortfolio(portfolio).pipe(map(()=>{
            return portfolio;
        }));
    }

    updatePortfolio(item: PortfolioI): Observable<any> {
        return this.http.put(`/api/portfolios/${item.id}`, { allocations: item.allocations });
    }

    getPortfolio(id:number): Observable<Portfolio> {
        return this.http.get(`/api/portfolios/${id}`).pipe(map(res=>{
            return Object.assign(new Portfolio,res);
        }));
    }

}
