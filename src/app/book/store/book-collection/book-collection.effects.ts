import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { BookApiService } from '../../book-api.service';
import { createBookComplete, createBookStart, loadBooksComplete, loadBooksStart } from './book-collection.actions';
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

  create = createEffect(() =>
    this.actions$.pipe(
      ofType(createBookStart),
      exhaustMap(action => this.bookData.create(action.book)),
      map(book => createBookComplete({ book }))
    )
  );

  constructor(private actions$: Actions, private bookData: BookApiService) {}
}
