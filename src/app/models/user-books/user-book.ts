import { Book } from '../books/book';
import { User } from '../users/user';
import { UserBookState } from './user-book-state';

export class UserBook {
    userBook: number = 0;
    bookId: number = 0;
    userId: number = 0;
    book: Book = null;
    user: User = null;
    currentState: UserBookState = null;
    userBookStates: UserBookState[] = [];
}