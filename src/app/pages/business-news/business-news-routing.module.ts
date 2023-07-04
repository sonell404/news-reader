import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessNewsPage } from './business-news.page';

const routes: Routes = [
  {
    path: '',
    component: BusinessNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessNewsPageRoutingModule {}
