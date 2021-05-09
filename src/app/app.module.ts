import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookService } from './service/book.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { CreateBookComponent } from './components/book/create-update-book/create-update-book.component';
import { BooksListComponent } from './components/book/books-list/books-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { CreateAuthorComponent } from './components/author/create-update-author/create-update-author.component';
import { CreateCategoryComponent } from './components/category/create-category/create-category.component';
import { AuthorListComponent } from './components/author/author-list/author-list.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGuardService } from './service/auth.guard.service';
import { CategoryListComponent } from './components/category/category-list/category-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    CreateBookComponent,
    BooksListComponent,
    MenuComponent,
    CreateAuthorComponent,
    CreateCategoryComponent,
    AuthorListComponent,
    UploadImageComponent,
    CategoryListComponent,
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
  providers: [
    BookService,
    AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
