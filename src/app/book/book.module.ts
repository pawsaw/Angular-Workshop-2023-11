import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookNewComponent } from './book-new/book-new.component';
import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { BookCardComponent } from './book-card/book-card.component';
import { StoreModule } from '@ngrx/store';
import { bookFeatureName } from './store/book.feature';
import { bookCollectionReducer } from './store/book-collection/book-collection.reducer';
import { bookCollectionSliceName } from './store/book-collection/book-collection.slice';
import { EffectsModule } from '@ngrx/effects';
import { BookCollectionEffects } from './store/book-collection/book-collection.effects';

@NgModule({
  imports: [
    BookRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    StoreModule.forFeature(bookFeatureName, {
      [bookCollectionSliceName]: bookCollectionReducer
    }),
    EffectsModule.forFeature([BookCollectionEffects])
  ],
  declarations: [
    BookComponent,
    BookListComponent,
    BookDetailComponent,
    BookEditComponent,
    BookNewComponent,
    BookCardComponent
  ]
})
export class BookModule {}
