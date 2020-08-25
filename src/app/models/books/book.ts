import { Author } from '../authors/author';

export class Book {
    bookId: number = 0;
    title: string = null;
    publishDate: Date = new Date;
    authorId: number = 0;
    author:Author;
}