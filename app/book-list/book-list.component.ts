import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';



@Component({

  selector: 'app-book-list',

  templateUrl: './book-list.component.html',

  styleUrls: ['./book-list.component.css']

})

export class BookListComponent implements OnInit {
  books : Book[]=[];


  constructor(private bookService:BookService, private route: ActivatedRoute) { 

  }



  ngOnInit(): void 
  {
    this.bookService.getBooks().subscribe((x)=>{ this.books=x });
    //this.bookService.getBook(100).subscribe((x)=>{this.books.push(x)});
  }

  
  
  delBook(event: any, index: any) 
  {  
    let id=this.books[index].bookId;
    
    this.bookService.delBook(id)  
      .subscribe((data: any) => 
      {  
        console.log(data);  
        this.ngOnInit();
      });

    //this.bookService.getBooks().subscribe(x =>{ this.books=x },   
    //  (error: any) => { return console.log(error); });
  }



}
