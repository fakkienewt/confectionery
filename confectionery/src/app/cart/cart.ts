import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../main/service';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart {
  constructor(
    private route: ActivatedRoute,
    private service: Service,
    public router: Router,
  ) { }

  onClick(): void {
    this.router.navigate(['/']);
  }
}
