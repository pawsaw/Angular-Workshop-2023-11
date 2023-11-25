import { createReducer, on } from '@ngrx/store';
import { BookCollectionSlice } from './book-collection.slice';
import { createBookStart, loadBooksComplete, loadBooksStart } from './book-collection.actions';

export const bookCollectionInitialState: BookCollectionSlice = {
  books: [],
  status: 'ok'
};

export const bookCollectionReducer = createReducer(
  bookCollectionInitialState,
  on(createBookStart, (state, action) => {
    return {
      ...state,
      books: [...state.books, action.book]
    };
  }),
  on(loadBooksStart, state => {
    return {
      ...state,
      status: 'loading'
    };
  }),
  on(loadBooksComplete, (state, action) => {
    return {
      ...state,
      status: 'ok',
      books: action.books
    };
  })
);
