import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from '../contact/contact.component';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule,FormsModule,ContactComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  isActive: boolean = true;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 150) {
      this.isActive = true;
      // Add styles dynamically when the scroll position is greater than 150px
      this.renderer.setStyle(this.elRef.nativeElement.querySelector('.scroll-down'), 'opacity', '1');
    } else {
      this.isActive = false;
      // Remove styles dynamically when the scroll position is less than or equal to 150px
      this.renderer.setStyle(this.elRef.nativeElement.querySelector('.scroll-down'), 'opacity', '0');
    }
  }
}
