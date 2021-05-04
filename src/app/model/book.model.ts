import { Author } from "./author.model";
import { Category } from "./category.model";


export class Book {

    bookId: number;
    title: String;
    description: String;
    author: Author;
    categories: Array<Category>;
}

