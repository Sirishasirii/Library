import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../services/book.service';



@Component({

  selector: 'app-book-list',

  templateUrl: './book-list.component.html',

  styleUrls: ['./book-list.component.css']

})

export class BookListComponent implements OnInit {
  books : Book[]=[];


  constructor(private bookService:BookService) { }



  ngOnInit(): void 
  {
    this.bookService.getBooks().subscribe((x)=>{ this.books=x });
    //this.stockService.getStock(100).subscribe((x)=>{this.stocks.push(x)});
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

    //this.stockService.getStocks().subscribe(x =>{ this.stocks=x },   
    //  (error: any) => { return console.log(error); });
  }



}
