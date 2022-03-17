import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeUiComponent } from './home-ui/home-ui.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookModComponent } from './book-mod/book-mod.component';



const routes: Routes = [
  {
    path: '', pathMatch:"full", redirectTo:"books/home",
  },
  { 
    path: 'books/home',
    component: HomeUiComponent
  },
  { 
    path: 'books/insert',
    component: AddBookComponent
  },
  {
    path: "books/list",
    component: BookListComponent
  },
  {
    path: "books/delete/:id", component: BookListComponent
  },
  {
    path: "books/update/:bookId", component: BookModComponent
  }
  
];



@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})

export class AppRoutingModule { }