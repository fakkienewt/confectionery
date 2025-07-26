import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.html',
  styleUrl: './search.scss'
})
export class Search implements OnInit {

  constructor(
    public router: Router,
  ) { }

  searchResults: any[] = [];

  ngOnInit(): void {
    const results = localStorage.getItem('results');
    this.searchResults = results ? JSON.parse(results) : [];
  }

  onClick(): void {
    this.router.navigate(['/']);
  }
}
