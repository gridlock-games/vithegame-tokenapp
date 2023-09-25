import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxScannerQrcodeComponent } from 'ngx-scanner-qrcode';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-qrcodescanner',
  templateUrl: './qrcodescanner.component.html',
  styleUrls: ['./qrcodescanner.component.css']
})
export class QrcodescannerComponent implements OnInit {

  storeId: string = '';

  @ViewChild('action') action!: NgxScannerQrcodeComponent;

  constructor(private router: Router,
    private dataService: DataService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.action.start();
    this.action.isBeep = false;
  }

  public onEvent(e: any[]): void {
    this.storeId = e[0].value;

    if (this.storeId) {
      this.dataService.setStoreIdSession(this.storeId);
      this.action.stop();
      this.router.navigate(['/payment']);
    }
  }

}
