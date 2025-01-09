import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AppComponent } from './app/app.component';
import { routes } from './app/app-routing.module';
import { TRANSACTION_REPOSITORY } from './app/core/tokens/transaction-repository.token';
import { TransactionRepositoryImpl } from './app/data/repository/transaction.repository.impl';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideStore({}),
    { provide: TRANSACTION_REPOSITORY, useClass: TransactionRepositoryImpl },
    provideEffects([]),
    provideStoreDevtools()
  ]
}).catch(err => console.error(err));