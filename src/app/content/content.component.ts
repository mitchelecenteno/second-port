import { Component, OnInit } from '@angular/core';
import { DEV_PROFILE, NAVIGATIONS } from './content.config';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent implements OnInit {
  profile = DEV_PROFILE;
  navs = NAVIGATIONS;

  navLinks: NodeListOf<HTMLElement> | null = null;
  sections: NodeListOf<HTMLElement> | null = null;

  content: HTMLElement | null = null;

  ngOnInit() {
    this.content = document.getElementById('content');

    this.navLinks = document.querySelectorAll('.nav-link');
    // console.log(this.navLinks);
    this.sections = document.querySelectorAll('section[id]');

    // Add smooth scrolling to navigation links
    if (this.navLinks) {
      this.navLinks.forEach((n: any) => {
        n.addEventListener('click', (event: { preventDefault: () => void }) => {
          event.preventDefault(); // Prevent the default behavior of the link
          const targetId = n.getAttribute('href').substring(1); // Get the target section's id
          const targetSection = document.getElementById(targetId);
          // console.log(targetSection);
          if (targetSection) {
            targetSection.scrollIntoView();
          }
        });
      });
    }
  }
}
