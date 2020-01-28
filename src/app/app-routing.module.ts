import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'register', loadChildren: () => import('./register/home.module').then( m => m.HomePageModule)},
  { path: 'welcome', loadChildren: () => import('./welcome/home.module').then( m => m.HomePageModule)},
  {
    path: 'add-film',
    loadChildren: () => import('./add-film/add-film.module').then( m => m.AddFilmPageModule)
  },
  {
    path: 'list-films',
    loadChildren: () => import('./list-films/list-films.module').then( m => m.ListFilmsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
