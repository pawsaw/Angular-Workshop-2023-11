import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models';
import { Store } from '@ngrx/store';
import { bookFeatureName } from '../store/book.feature';
import { bookCollectionSliceName } from '../store/book-collection/book-collection.slice';
import { AppState } from '../../store/app.state';
import { selectBooks } from '../store/book-collection/book-collection.selectors';

@Component({
  selector: 'ws-book-list',
  styleUrls: ['./book-list.component.scss'],
  templateUrl: 'book-list.component.html'
})
export class BookListComponent {
  books$: Observable<Book[]>;

  constructor(private readonly store: Store<AppState>) {
    this.books$ = this.store.select(selectBooks);
  }
}
