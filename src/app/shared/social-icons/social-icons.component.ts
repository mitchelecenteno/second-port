import { Component } from '@angular/core';
import { SOCIAL_MEDIA } from './social-icons.config';

@Component({
  selector: 'app-social-icons',

  templateUrl: './social-icons.component.html',
  styleUrl: './social-icons.component.scss',
})
export class SocialIconsComponent {
  socialMedia = SOCIAL_MEDIA;
}
