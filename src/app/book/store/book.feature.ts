import { BookCollectionSlice, bookCollectionSliceName } from './book-collection/book-collection.slice';
import { createFeatureSelector } from '@ngrx/store';

export interface BookFeature {
  [bookCollectionSliceName]: BookCollectionSlice;
}

export const bookFeatureName = 'book';

export const selectBookFeature = createFeatureSelector<BookFeature>(bookFeatureName);
