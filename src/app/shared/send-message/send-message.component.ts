import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-send-message',

  templateUrl: './send-message.component.html',
  styleUrl: './send-message.component.scss',
})
export class SendMessageComponent {
  constructor(private dialogRef: MatDialogRef<SendMessageComponent>) {}

  onCancel() {
    this.dialogRef.close();
  }
}
