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
import { NgxScannerQrcodeModule, LOAD_WASM } from 'ngx-scanner-qrcode';
import { QRCodeModule } from 'angularx-qrcode';
import { QrcodescannerComponent } from './qrcodescanner/qrcodescanner.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [authGuard]},
  // { path: 'home', component: HomeComponent},
  { path: 'qrcodescanner', component: QrcodescannerComponent},
  { path: 'payment', component: PaymentComponent},
  { path: 'success', component: SuccessComponent},
  { path: 'maintenance', component: MaintenanceComponent},
  { path: 'store-home', component: StoreHomeComponent}
];

// LOAD_WASM().subscribe((res: any) => console.log('LOAD_WASM', res));

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PaymentComponent,
    SuccessComponent,
    MaintenanceComponent,
    StoreHomeComponent,
    QrcodescannerComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxScannerQrcodeModule,
    QRCodeModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
