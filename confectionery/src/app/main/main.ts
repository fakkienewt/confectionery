import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from './service';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main implements OnInit {

  items: any;
  id: number;
  menu: any;
  categories: any[];

  constructor(
    public service: Service,
    public router: Router,
    private route: ActivatedRoute) {
    this.categories = this.service.getCategories();
  }
  ngOnInit(): void {
    this.loadAllMenu();
  }

  loadAllMenu() {
    const categories = this.service.getCategories();
    this.menu = categories.flatMap(category => category.menu); 
    console.log(this.menu)
  }

  onCategoryClick(categoryId: number): void {

  }
}
