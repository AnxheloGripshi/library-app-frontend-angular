import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/model/author.model';
import { AuthorService } from 'src/app/service/author.service';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.css']
})
export class CreateAuthorComponent implements OnInit {
  
  author: Author = new Author();
  message?: string
 
  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
  }

  createAuthor() {
    this.authorService.createAuthor(this.author).subscribe(response=>{
      this.message= 'Author added successfully!'
      console.log(response)
    })
  }

}
