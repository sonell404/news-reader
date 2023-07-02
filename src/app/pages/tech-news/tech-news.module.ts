import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TechNewsPageRoutingModule } from './tech-news-routing.module';

import { TechNewsPage } from './tech-news.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, TechNewsPageRoutingModule],
  declarations: [TechNewsPage],
})
export class TechNewsPageModule {}
