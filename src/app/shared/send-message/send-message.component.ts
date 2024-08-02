import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MESSAGE } from './send-message.config';

@Component({
  selector: 'app-send-message',

  templateUrl: './send-message.component.html',
  styleUrl: './send-message.component.scss',
})
export class SendMessageComponent {
  messageInfo = MESSAGE;

  constructor(private dialogRef: MatDialogRef<SendMessageComponent>) {}

  onCancel() {
    this.dialogRef.close();
  }
}
