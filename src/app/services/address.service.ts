import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private httpClient: HttpClient) { }

  getAdress(cep: any) {
    let url = 'https://viacep.com.br/ws';
    let headers = {
      headers: {'Content-Type': 'application/json'}
    };
    return this.httpClient.get(`${url}/${cep}/json`, headers);
  };
};
