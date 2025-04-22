import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-story',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-story.component.html',
  styleUrls: ['./our-story.component.css']
})
export class OurStoryComponent {
  constructor(private router: Router) {}

  onButtonClick(): void {
    this.router.navigate(['/']);
  }
} 