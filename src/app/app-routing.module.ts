import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { VitrineComponent } from './vitrine/vitrine.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'vitrine', component: VitrineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
