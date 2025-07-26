import { Component } from '@angular/core';
import { Service } from '../main/service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  constructor(
    public service: Service,
    public router: Router,
    private route: ActivatedRoute
  ) { }

  searchResults: any[] = [];
  searchValue: string = '';

  onClickSearch(searchValue: string): void {
    if (!searchValue) return;
    const allItems = this.service.getCategories().flatMap(category => category.menu);
    const results = allItems.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));
    localStorage.setItem('results', JSON.stringify(results));
    this.router.navigate(['/search', searchValue]);
    console.log(searchValue)
  }
}