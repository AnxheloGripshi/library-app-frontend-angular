import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorListComponent } from './components/author/author-list/author-list.component';
import { CreateAuthorComponent } from './components/author/create-author/create-author.component';
import { BooksListComponent } from './components/book/books-list/books-list.component';
import { CreateBookComponent } from './components/book/create-book/create-book.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { CreateCategoryComponent } from './components/category/create-category/create-category.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { AuthGuardService } from './service/auth.guard.service';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'book/:id', component: CreateBookComponent,canActivate: [AuthGuardService] },
  { path: 'author/:id', component: CreateAuthorComponent,canActivate: [AuthGuardService]},
  { path: 'create-category', component: CreateCategoryComponent,canActivate: [AuthGuardService] },
  { path: 'books-list', component: BooksListComponent,canActivate: [AuthGuardService] },
  { path: 'authors-list', component: AuthorListComponent,canActivate: [AuthGuardService] },
  { path: 'categories-list', component: CategoryListComponent,canActivate: [AuthGuardService] },
  { path: 'upload-image/:id', component: UploadImageComponent,canActivate: [AuthGuardService] },
  { path: 'logout', component: LogoutComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
