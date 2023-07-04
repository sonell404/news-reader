import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusinessNewsPageRoutingModule } from './business-news-routing.module';

import { BusinessNewsPage } from './business-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusinessNewsPageRoutingModule
  ],
  declarations: [BusinessNewsPage]
})
export class BusinessNewsPageModule {}
