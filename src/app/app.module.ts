import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookService } from './service/book.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { CreateBookComponent } from './components/book/create-book/create-book.component';
import { BooksListComponent } from './components/book/books-list/books-list.component';
import { UpdateBookComponent } from './components/book/update-book/update-book.component';
import { MenuComponent } from './components/menu/menu.component';
import { CreateAuthorComponent } from './components/author/create-author/create-author.component';
import { CreateCategoryComponent } from './components/category/create-category/create-category.component';
import { AuthorListComponent } from './components/author/author-list/author-list.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { LogoutComponent } from './components/logout/logout.component';

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
    LogoutComponent
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
