import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  selectedFile: File = null
  message: string
  id: number

  constructor(private bookService: BookService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  uploadImage(){
    debugger
    const formData = new FormData();
    formData.append("image",this.selectedFile);
    return this.bookService.uploadImage(this.id,formData).subscribe(response=>{
      console.log("Image upload successfully!")
      this.message='Image upload successfully!'
    })
  }

  onFileChanged(event: any) {
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile)
  }

}
