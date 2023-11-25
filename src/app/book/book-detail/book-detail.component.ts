import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { exhaustMap, switchMap, tap } from 'rxjs/operators';
import { BookApiService } from '../book-api.service';
import { Book } from '../models';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { selectBookByIsbn } from '../store/book-collection/book-collection.selectors';

@Component({
  selector: 'ws-book-detail',
  styleUrls: ['./book-detail.component.scss'],
  templateUrl: 'book-detail.component.html'
})
export class BookDetailComponent {
  public book$: Observable<Book>;

  constructor(private router: Router, private route: ActivatedRoute, private store: Store<AppState>) {
    this.book$ = this.route.params.pipe(switchMap(params => this.store.select(selectBookByIsbn(params.isbn))));
  }

  remove() {
    // this.route.params
    //   .pipe(
    //     exhaustMap(params => this.bookService.delete(params.isbn)),
    //     tap(() => this.router.navigateByUrl('/'))
    //   )
    //   .subscribe();
  }
}
