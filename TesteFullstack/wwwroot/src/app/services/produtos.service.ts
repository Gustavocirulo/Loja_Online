import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable, Output } from '@angular/core';
import { Observer, Observable, throwError, Subscription, of } from 'rxjs';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  
  public produtos: Produto[];

  public getDataFromServer() {
    
    const produtos = of(this.http.get<Produto[]>(this.baseUrl + 'product').subscribe(
      result => {
        this.produtos = result;
      }, 
      error => console.error(error)
    ));

    return produtos;
  };

  public pegarTodosProdutos(): Observable<Produto[]> {
    const produtos = of(this.produtos);
    console.log("peguei os dados do serviço");
    return produtos;
  }
  
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

}