import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SpotifyService {
  private baseUrl = 'https://api.spotify.com/v1/search';

  constructor(private http: HttpClient) {}

  search(query: string, type: string, market: string = 'ES', limit: number = 10, offset: number = 0) {
    const params = new HttpParams()
      .set('q', query)
      .set('type', type)
      .set('market', market)
      .set('limit', limit)
      .set('offset', offset);

    return this.http.get(this.baseUrl, { params });
  }
}
