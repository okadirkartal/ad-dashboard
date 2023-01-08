import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ad } from '../ad';

@Injectable({
  providedIn: 'root',
})
export class AdService {
  #ads$ = new BehaviorSubject<Ad[]>([]);

  ads$ = this.#ads$.asObservable();

  addAd(ad: Ad) {
    this.#ads$.next([...this.#ads$.value, ad]);
  }
}
