import { Author } from "./author.model";
import { Category } from "./category.model";


export class Book {

    bookId: number = 0;
    title: String = ''
    description: String = ''
    author: Author = new Author
    categories: Array<Category> = []
}

