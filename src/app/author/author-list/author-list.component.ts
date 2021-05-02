import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/model/author.model';
import { AuthorService } from 'src/app/service/author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  authors: Author[] = []

  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    this.getAllAuthors();
  }

  getAllAuthors() {

    this.authorService.getAuthorsList()
      .subscribe(authors => {
        console.log(authors)
        this.authors = authors;
      });
  }

}
