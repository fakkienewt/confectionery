import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title',
  standalone: false,
  templateUrl: './title.html',
  styleUrl: './title.scss'
})
export class Title {

  constructor(
    public router: Router,
  ) { }

  onClick(): void {
    this.router.navigate(['/']);
  }
}
