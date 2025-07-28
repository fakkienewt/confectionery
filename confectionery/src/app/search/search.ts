import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.html',
  styleUrl: './search.scss'
})
export class Search implements OnInit {

  searchResults: any[] = [];
  searchQuery: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const savedResults = localStorage.getItem('searchResults');
      this.searchResults = savedResults ? JSON.parse(savedResults) : [];
      this.loadResults();
    });
  }

  private loadResults(): void {
    const savedResults = localStorage.getItem('searchResults');
    this.searchResults = savedResults ? JSON.parse(savedResults) : [];
  }

  onClickNewPage(id: number): void {
    this.router.navigate([`food/${id}`]);
  }

  onClick(): void {
    this.router.navigate(['/']);
  }

}
