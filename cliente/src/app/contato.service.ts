import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Contato, ContatoResponse } from './interfaces';

// API URL
const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  /**
   * Submete uma requisição POST para o endpoint da API que cadastra um novo contato
   * @param contato As propriedades de um contato
   * @returns As informações do novo contato cadastrado
   */
  public cadastra(contato: Contato): Observable<ContatoResponse> {
    return this.httpClient.post<ContatoResponse>(
      API,
      contato,
      this.httpOptions
    );
  }
}
