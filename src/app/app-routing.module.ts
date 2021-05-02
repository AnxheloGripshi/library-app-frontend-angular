import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorListComponent } from './author/author-list/author-list.component';
import { CreateAuthorComponent } from './author/create-author/create-author.component';
import { BooksListComponent } from './book/books-list/books-list.component';
import { CreateBookComponent } from './book/create-book/create-book.component';
import { UpdateBookComponent } from './book/update-book/update-book.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: CreateBookComponent },
  { path: 'login', component: LoginComponent },
  { path: 'welcome/:name', component: WelcomeComponent },
  { path: 'book/:id', component: CreateBookComponent },
  { path: 'create-author', component: CreateAuthorComponent },
  { path: 'create-category', component: CreateCategoryComponent },
  { path: 'books-list', component: BooksListComponent },
  { path: 'authors-list', component: AuthorListComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }