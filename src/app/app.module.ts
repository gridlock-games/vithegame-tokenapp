import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SuccessComponent } from './success/success.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { authGuard } from './auth/auth.guard';
import { StoreHomeComponent } from './store-home/store-home.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [authGuard]},
  // { path: 'home', component: HomeComponent},
  { path: 'payment', component: PaymentComponent},
  { path: 'success', component: SuccessComponent},
  { path: 'maintenance', component: MaintenanceComponent},
  { path: 'store-home', component: StoreHomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PaymentComponent,
    SuccessComponent,
    MaintenanceComponent,
    StoreHomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
