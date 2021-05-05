import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorListComponent } from './components/author/author-list/author-list.component';
import { CreateAuthorComponent } from './components/author/create-author/create-author.component';
import { BooksListComponent } from './components/book/books-list/books-list.component';
import { CreateBookComponent } from './components/book/create-book/create-book.component';
import { CreateCategoryComponent } from './components/category/create-category/create-category.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'book/:id', component: CreateBookComponent },
  { path: 'create-author', component: CreateAuthorComponent },
  { path: 'create-category', component: CreateCategoryComponent },
  { path: 'books-list', component: BooksListComponent },
  { path: 'authors-list', component: AuthorListComponent },
  { path: 'upload-image/:id', component: UploadImageComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
