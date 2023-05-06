import { Component, Output, EventEmitter } from '@angular/core';
import { Book } from '../../shared/book';

@Component({
  selector: 'bm-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {

  @Output() submitBook = new EventEmitter<Book>();

  book: Book = {
    isbn: '',
    title: '',
    authors: [''],
  }

  submitForm(){
    this.submitBook.emit(this.book);
  }
}
