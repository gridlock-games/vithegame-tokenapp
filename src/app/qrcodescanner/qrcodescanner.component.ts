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
  isRedirecting: boolean = false;

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

    const playDeviceFacingBack = (devices: any[]) => {
      // front camera or back camera check here!
      const device = devices.find(f => (/back|rear|environment/gi.test(f.label))); // Default Back Facing Camera
      this.action.playDevice(device ? device.deviceId : devices[0].deviceId);
    }

    const fn = 'start';
    this.action[fn](playDeviceFacingBack).subscribe({
      next: (r: any) => {console.log(fn, r), alert}
    });
  }

  home() {
    this.action.stop();
    this.router.navigate(['/home']);
  }

  public onEvent(e: any[]): void {
    this.storeId = e[0].value;
    if (this.storeId) {
      this.action.stop();
      this.isRedirecting = true;

      this.dataService.getUserInfo(this.storeId).subscribe({
        next: (res: any) => {
          if (this.storeId && !res.isPlayer) {
            this.dataService.setStoreIdSession(this.storeId);
            this.dataService.setStoreNameSession(res.username);
            this.router.navigate(['/payment']);
          }
        },
        error: (error) => {
          this.isError = true;}
      });
    }
    
  }

}
