import { bookCollectionSliceName, BookCollectionSlice } from '../book/store/book-collection/book-collection.slice';
import { bookFeatureName } from '../book/store/book.feature';

export interface AppState {
  [bookFeatureName]: {
    [bookCollectionSliceName]: BookCollectionSlice;
  };
}
