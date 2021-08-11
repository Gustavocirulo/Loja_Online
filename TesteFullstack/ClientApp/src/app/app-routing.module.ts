import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ListaDeProdutosComponent } from './lista-de-produtos/lista-de-produtos.component';


const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'CadastroDeCliente', component: CounterComponent },
    { path: 'CadastroDeProdutos', component: FetchDataComponent },
    { path: 'ListaDeProdutos', component: ListaDeProdutosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }