import { Component, OnInit, Input} from '@angular/core';
import { Produto } from '../models/produto.model';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor() { }

  @Input() produto: Produto;

  ngOnInit() {
    console.log(this.produto);
  }

}
