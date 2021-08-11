import { AfterContentChecked, AfterViewInit, Component, OnInit, Output } from '@angular/core';
import { Produto } from '../models/produto.model';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-lista-de-produtos',
  templateUrl: './lista-de-produtos.component.html',
  styleUrls: ['./lista-de-produtos.component.css']
})
export class ListaDeProdutosComponent implements OnInit, AfterContentChecked {

  private produtos: Produto[];

  constructor(private produtosService: ProdutosService) {
  }

  ngOnInit() {
    this.produtosService.getDataFromServer();
  }

  ngAfterContentChecked(){
    this.getProducts();
  }

  getProducts(): void {
    console.log("carreguei os dados no componente");
    this.produtosService.pegarTodosProdutos().subscribe(produtos => {
      console.log(produtos);
      this.produtos = produtos
    });
  }

}