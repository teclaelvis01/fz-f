import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PortfolioDetailsComponent } from './components/portfolio-details/portfolio-details.component';
import { OrdersTableComponent } from './components/orders-table/orders-table.component';
import { PortfolioService } from './core/http/portfolio/portfolio.service';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [	
    AppComponent,
    PortfolioDetailsComponent,
    OrdersTableComponent
   ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
