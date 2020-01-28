import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListFilmsPageRoutingModule } from './list-films-routing.module';

import { ListFilmsPage } from './list-films.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListFilmsPageRoutingModule
  ],
  declarations: [ListFilmsPage]
})
export class ListFilmsPageModule {}
