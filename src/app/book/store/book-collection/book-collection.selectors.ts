import { createSelector } from '@ngrx/store';
import { BookFeature, selectBookFeature } from '../book.feature';
import { Book } from '../../models';

export const selectBookCollection = createSelector(selectBookFeature, feature => feature.bookCollection);
export const selectBooks = createSelector(selectBookCollection, slice => slice.books);
export const selectBookByIsbn = (isbn: Book['isbn']) =>
  createSelector(selectBookCollection, slice => slice.books.find(book => book.isbn === isbn)!);
