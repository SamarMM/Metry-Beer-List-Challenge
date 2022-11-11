import { Injectable } from '@angular/core';
import { Beer } from '../interfaces/beer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  constructor(private http: HttpClient) { }

  getBeerList(PageNumber:number , PageLimit: number): Observable<Beer[]> {
    let apiUrl = `https://api.punkapi.com/v2/beers?page=${PageNumber}&per_page=${PageLimit}`;
    return this.http.get<Beer[]>(apiUrl)
      .pipe(map((res: any[]) => {
        return res.map((Beer: any) => {
          return {
            "id": Beer.id,
            "name": Beer.name,
            "tagline": Beer.tagline,
            "first_brewed": Beer.first_brewed,
            "description": Beer.description,
            'image_url': Beer.image_url,
          };
        });
      }));
  }
}
