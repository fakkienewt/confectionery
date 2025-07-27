import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../main/service';

@Component({
  selector: 'app-page',
  standalone: false,
  templateUrl: './page.html',
  styleUrl: './page.scss'
})
export class Page implements OnInit {

  menuItem: any;
  categoryId: number = 0;
  categories: any[];
  item: any;
  pId: number;

  constructor(
    private route: ActivatedRoute,
    private service: Service,
    public router: Router,
  ) {
    this.categories = this.service.getCategories();
  }

  onClick(): void {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    const allItems = this.service.getCategories().flatMap(category => category.menu);
    this.route.params.subscribe(params => {
      this.pId = +params['id'];
    });
    this.item = allItems.find(i => i.id === this.pId);
  }
}