import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ImagenviewComponent } from './imagenview/imagenview.component';

const routes: Routes = [
  {
    path: '',
    component : HomeComponent
  },
  {
    path: 'imagenes/:categoria/:id/:index',
    component : ImagenviewComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
