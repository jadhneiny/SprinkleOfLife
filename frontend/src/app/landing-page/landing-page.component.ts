import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit, OnDestroy {
  days: number = 15;
  hours: number = 10;
  minutes: number = 30;
  seconds: number = 0;
  private countdownInterval: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnDestroy(): void {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }

  startCountdown(): void {
    this.countdownInterval = setInterval(() => {
      if (this.seconds > 0) {
        this.seconds--;
      } else {
        this.seconds = 59;
        if (this.minutes > 0) {
          this.minutes--;
        } else {
          this.minutes = 59;
          if (this.hours > 0) {
            this.hours--;
          } else {
            this.hours = 23;
            if (this.days > 0) {
              this.days--;
            } else {
              // Countdown finished
              clearInterval(this.countdownInterval);
            }
          }
        }
      }
    }, 1000);
  }

  notifyMe(): void {
    this.router.navigate(['/not-found']);
  }

  followUs(): void {
    this.router.navigate(['/not-found']);
  }

  onButtonClick(event: Event): void {
    event.preventDefault();
    this.router.navigate(['/not-found']);
  }

  navigateToOurStory(event: Event): void {
    event.preventDefault();
    this.router.navigate(['/our-story']);
  }
}
