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
  showAllCategories: boolean = false;

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
    const firstCategoryId = this.service.selectedCategoryId;
    this.onCategoryClick(firstCategoryId);
  }

  onCategoryClick(categoryId: number): void {
    this.service.saveSelectedCategoryId(categoryId);
    this.selectedCategoryId = this.service.selectedCategoryId;
    this.afterClickOnCagegory = this.categories.find(c => c.id === this.selectedCategoryId);
    this.menu = this.afterClickOnCagegory.menu;
  }

  onClickNewPage(id: number): void {
    this.router.navigate([`food/${id}`]);
  }

}
