import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private toastr: ToastrService) { }

  success(message: string, title?: string) {
    this.toastr.success(title, message, this.config());
  }

  warning(message: string, title?: string) {
    this.toastr.warning(title, message, this.config());
  }

  private config() {
    return {
      positionClass: this.isMobileDevice() ? 'toast-bottom-left' : 'toast-top-right',
    };
  }

  private isMobileDevice(): boolean {
    console.log(navigator.userAgent);
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  }

}
