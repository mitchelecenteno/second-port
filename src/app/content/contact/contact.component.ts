import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SendMessageComponent } from '../../shared/send-message/send-message.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  constructor(public dialog: MatDialog) {}

  sendMessage() {
    this.dialog.open(SendMessageComponent, {
      disableClose: true,
    });
  }
}
