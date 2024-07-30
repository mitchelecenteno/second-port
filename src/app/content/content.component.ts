import { Component } from '@angular/core';
import { DEV_PROFILE, NAVIGATIONS } from './content.config';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  profile = DEV_PROFILE;
  navs = NAVIGATIONS;
}
