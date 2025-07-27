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
  menu: any;
  categories: any[];
  afterClickOnCagegory: any;
  selectedCategoryId: number;

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
  }

  onCategoryClick(categoryId: number): void {
    this.selectedCategoryId = categoryId;
    this.afterClickOnCagegory = this.categories.find(c => c.id === this.selectedCategoryId);
    this.menu = this.afterClickOnCagegory.menu;
  }

  onClickNewPage(id: number): void {
    this.router.navigate([`food/${id}`]);
  }

}
