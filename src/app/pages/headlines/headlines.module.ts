import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeadlinesPageRoutingModule } from './headlines-routing.module';
import { HeadlineModalComponent } from '../../components/headline-modal-component/headline-modal-component.component';

import { HeadlinesPage } from './headlines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeadlinesPageRoutingModule
  ],
  declarations: [HeadlinesPage, HeadlineModalComponent]
})
export class HeadlinesPageModule {}
