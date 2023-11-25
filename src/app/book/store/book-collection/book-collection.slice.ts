import { Book } from '../../models';

export interface BookCollectionSlice {
  books: Book[];
  status: string;
}

export const bookCollectionSliceName = 'bookCollection';
