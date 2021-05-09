import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Author } from 'src/app/model/author.model';
import { AuthorService } from 'src/app/service/author.service';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.css']
})
export class CreateAuthorComponent implements OnInit {

  author: Author = new Author();
  message: string;
  id: number;

  constructor(private authorService: AuthorService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    debugger
    this.id = this.route.snapshot.params['id'];
    if(this.id != -1){
      this.prefillAuthorData(this.id)
    }
  }

  createAuthor() {
    this.authorService.createAuthor(this.author).subscribe(response => {
      this.message = 'Author added successfully!'
      console.log(response)
    })
  }

  updateAuthor() {
    this.author.authorId = this.id
    this.authorService.updateAuthor(this.author)
      .subscribe(author => {
        console.log(author)
        this.message = 'Author updated successfully'
      }, error => console.log(error));
  }

  createOrUpdateAuthor() {

    if (this.id == -1) {
      this.createAuthor()
    }
    else {
      this.updateAuthor()
    }
  }

  prefillAuthorData(id: number) {
    debugger
    this.authorService.findAuthor(id)
      .subscribe(response => {
        debugger
        console.log(response)
        this.author.bio = response.bio
        this.author.name = response.name
      }, error => console.log(error));
  }

}
