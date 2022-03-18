import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../model/book';
import { BookService } from '../services/book.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';



@Component({
selector: 'app-book-mod',
templateUrl: './book-mod.component.html',
styleUrls: ['./book-mod.component.css']
})
export class BookModComponent implements OnInit
{
isConfirmed: boolean=false;
msg: string="";
book!: Book;
sDate: string="";
date!: Date;
public myForm!: FormGroup;



constructor(private bookService: BookService, private route: ActivatedRoute)
{
this.book=new Book(0, '', '','', new Date());
this.createForm();
}



ngOnInit(): void
{
console.log("In ngOnInit()")
this.route.params.subscribe((parameters)=>
{
this.bookService.getBook(parseInt(parameters['bookId'])).subscribe((x)=>
{
this.book=x? x: null;
let tmpDate=this.book.dor;
this.date=this.jsonToDate(new Date(this.book.dor));
});
});
}
createForm()
{
this.myForm=new FormGroup({
name: new FormControl(null, [Validators.required]),
author: new FormControl(null, [Validators.required]),
literature: new FormControl(null, [Validators.required]),
dor: new FormControl(new Date(0), [Validators.required])
});
}



mySubmit(): void
{
this.book.dor=this.date;
this.msg=`Name ${this.book.bookName} Author ${this.book.author} Literature ${this.book.literature} Date of return ${this.book.dor}`;
this.bookService.bookmod(this.book).subscribe((x)=>{console.log(x)});

}

myReset()
{
this.toggleConfirmed()
}
toggleConfirmed()
{
if(this.myForm.valid)
{
this.isConfirmed=!this.isConfirmed;
}
}
get name()
{
return this.myForm.get('name');
}
get author()
{
return this.myForm.get('author');
}
get literature()
{
return this.myForm.get('literature');
}
get dor()
{
return this.myForm.get('dor');
}



jsonToDate(date: Date): Date
{
date.setDate(date.getDate());
return date;
}
}