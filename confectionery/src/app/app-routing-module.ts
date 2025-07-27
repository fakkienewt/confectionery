import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Search } from './search/search';
import { Main } from './main/main';
import { Page } from './page/page';

const routes: Routes = [

  { path: '', component: Main },

  { path: 'search', component: Search },

  { path: 'food/:id', component: Page },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
