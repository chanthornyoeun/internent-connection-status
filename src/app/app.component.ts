import { Component, HostListener } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'connection-status';
  connentionMessage: string = '';

  constructor(private messageService: MessageService) {
    this.connentionMessage = navigator.onLine ? 'You are connected to the internet.' : 'You are not connected to the internet.';
  }

  @HostListener('window:online')
  private online() {
    this.connentionMessage = 'You are connected to the internet.';
    this.messageService.success(this.connentionMessage);
  }

  @HostListener('window:offline')
  private offline() {
    this.connentionMessage = 'You are not connected to the internet.';
    this.messageService.warning(this.connentionMessage);
  }

}
