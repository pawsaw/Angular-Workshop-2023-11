import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { loadBooksStart } from './store/book-collection/book-collection.actions';

@Component({
  selector: 'ws-book',
  templateUrl: './book.component.html'
})
export class BookComponent implements OnInit {
  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadBooksStart());
  }
}
