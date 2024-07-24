import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Mitchele Centeno';

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const flashlight = document.querySelector('.flashlight') as HTMLElement;
    if (flashlight) {
      flashlight.style.transform = `translate(${
        event.clientX - flashlight.offsetWidth / 2
      }px, ${event.clientY - flashlight.offsetHeight / 2}px)`;
    }
  }
}
