import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  results: any[] = [];

  constructor(private route: ActivatedRoute, private spotify: SpotifyService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const query = params['q'] || '';
      const type = params['type'] || 'track';
      const market = params['market'] || 'ES';
      const limit = params['limit'] || 10;
      const offset = params['offset'] || 0;

      if (query) {
        this.spotify.search(query, type, market, limit, offset).subscribe((data: any) => {
          this.results = data.tracks?.items || [];
        });
      }
    });
  }
}
