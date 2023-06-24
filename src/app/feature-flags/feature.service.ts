import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, of } from 'rxjs';
import { catchError, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FeatureService {
  private featuresFlags: Record<string, boolean> = {};

  constructor(private http: HttpClient) {}

  init(): Observable<void> {
    const result = new ReplaySubject<void>(1);
    this.http
      .get<typeof this.featuresFlags>('assets/feature.json')
      .pipe(
        first(),
        catchError(() => of({}))
      )
      .subscribe((featureFlags) => {
        this.featuresFlags = featureFlags;
        result.next();
        result.complete();
      });
    return result;
  }
}
