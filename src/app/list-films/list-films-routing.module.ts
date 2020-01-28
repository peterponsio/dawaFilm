import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListFilmsPage } from './list-films.page';

const routes: Routes = [
  {
    path: '',
    component: ListFilmsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListFilmsPageRoutingModule {}
