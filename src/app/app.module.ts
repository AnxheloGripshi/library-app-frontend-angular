import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateBookComponent } from './book/create-book/create-book.component';
import { BooksListComponent } from './book/books-list/books-list.component';
import { UpdateBookComponent } from './book/update-book/update-book.component';
import { MenuComponent } from './menu/menu.component';
import { BookService } from './service/book.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateAuthorComponent } from './author/create-author/create-author.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { AuthorListComponent } from './author/author-list/author-list.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
// import { UpdateAuthorComponent } from './update-author/update-author.component';
// import { AuthorListComponent } from './author-list/author-list.component';
// import { CreateCategoryComponent } from './create-category/create-category.component';
// import { UpdateCategoryComponent } from './update-category/update-category.component';
// import { CategoryListComponent } from './category-list/category-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    CreateBookComponent,
    BooksListComponent,
    UpdateBookComponent,
    MenuComponent,
    CreateAuthorComponent,
    CreateCategoryComponent,
    AuthorListComponent,
    UploadImageComponent,
    // UpdateAuthorComponent,
    // UpdateCategoryComponent,
    // CategoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
