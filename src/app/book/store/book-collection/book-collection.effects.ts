import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { BookApiService } from '../../book-api.service';
import { loadBooksComplete, loadBooksStart } from './book-collection.actions';
import { exhaustMap, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookCollectionEffects {
  load = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBooksStart),
      exhaustMap(() => this.bookData.getAll()),
      map(books => loadBooksComplete({ books }))
    )
  );

  constructor(private actions$: Actions, private bookData: BookApiService) {}
}
