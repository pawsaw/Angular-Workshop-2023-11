import { createAction, props } from '@ngrx/store';
import { Book } from '../../models';

export const createBookStart = createAction('[Book] createBookStart', props<{ book: Book }>());

export const loadBooksStart = createAction('[Book] loadBooksStart');
export const loadBooksComplete = createAction('[Book] loadBooksComplete', props<{ books: Book[] }>());
