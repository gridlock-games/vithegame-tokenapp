import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxScannerQrcodeComponent } from 'ngx-scanner-qrcode';
import { DataService } from '../service/data.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-qrcodescanner',
  templateUrl: './qrcodescanner.component.html',
  styleUrls: ['./qrcodescanner.component.css']
})
export class QrcodescannerComponent implements OnInit {

  storeId: string = '';
  isError: boolean = false;

  @ViewChild('action') action!: NgxScannerQrcodeComponent;

  constructor(
    private router: Router,
    private dataService: DataService,
    private authService: AuthService) {
      if (!this.authService.isLoggedIn) {
        this.router.navigate(['/login']);
      }
    }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.action.start();
    this.action.isBeep = false;
  }

  home() {
    this.action.stop();
    this.router.navigate(['/home']);
  }

  public onEvent(e: any[]): void {
    this.storeId = e[0].value;
    
    this.dataService.getUserInfo(this.storeId).subscribe(
      (res: any) => {
        if (this.storeId && !res.isPlayer) {
          this.dataService.setStoreIdSession(this.storeId);
          this.dataService.setStoreNameSession(res.username);
          this.isError = false;
          this.action.stop();
          this.router.navigate(['/payment']);
        }
      },
      err => {this.isError = true;}
    );

    
  }

}
