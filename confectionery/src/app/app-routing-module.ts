import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Search } from './search/search';
import { Main } from './main/main';

const routes: Routes = [

  { path: '', component: Main },
  
  { path: 'search/:value', component: Search },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
