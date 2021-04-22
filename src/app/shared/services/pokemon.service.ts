import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { API_ENDPOINT_PROVIDER } from 'src/app/providers/tokens';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  url: string;

  constructor(
    private http: HttpClient,
    @Inject(API_ENDPOINT_PROVIDER) private endpoint
  ) {
    this.url = `${this.endpoint}`;
  }

  getPokemon(payload) {
    let params = new HttpParams()
      .set('offset', payload.offset)
      .set('limit', payload.limit);
    if (payload.url != undefined) {
      return this.http.get(payload.url);
    } else {
      return this.http.get(`${this.url}/pokemon`, {
        params,
      });
    }
  }

  fetchPokemonData(url) {
    return this.http.get(url);
  }

  getDetail(id) {
    return this.http.get(`${this.url}/pokemon/${id}`);
  }

  getSpecies(id) {
    return this.http.get(`${this.url}/pokemon-species/${id}`);
  }
}
