import { AutorizacaoComponent } from './views/autorizacao/autorizacao.component';
import { ContatoComponent } from './views/contato/contato.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component'

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'contato',
  component: ContatoComponent
}, { 
  path: 'autorização',
  component: AutorizacaoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
