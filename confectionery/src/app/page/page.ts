import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../main/service';
import { CartService } from '../cart/cart-service';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-page',
  standalone: false,
  templateUrl: './page.html',
  styleUrl: './page.scss'
})
export class Page implements OnInit {

  @ViewChild(ToastContainerDirective, { static: true })
  toastContainer: ToastContainerDirective;


  menuItem: any;
  categoryId: number = 0;
  categories: any[];
  item: any;
  pId: number;

  constructor(
    private route: ActivatedRoute,
    private service: Service,
    public router: Router,
    public cartservice: CartService,
    private toastr: ToastrService) {
    this.categories = this.service.getCategories();
  }

  ngOnInit(): void {
    const allItems = this.service.getCategories().flatMap(category => category.menu);
    this.route.params.subscribe(params => {
      this.pId = +params['id'];
    });
    this.item = allItems.find(i => i.id === this.pId);
  }

  onClickCart(itemId: number): void {
    this.cartservice.addToCart(itemId);
    this.toastr.success('The product has been added to the cart!');
  }
}