import { Component, createPlatform, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/services/book.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit 
{
  isConfirmed: boolean=false;
  msg: string="";
  book!: Book;
  mName: string="";
  
  public myForm!: FormGroup;
  constructor(private bookService : BookService) { 
    this.book=new Book(0, "", "","", new Date(0));
    this.createForm();
  }


  ngOnInit(): void {
  }

  createForm()
  {
    this.myForm=new FormGroup({
      id: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      author: new FormControl(null, [Validators.required]),
      literature: new FormControl(null, [Validators.required]),
      dor: new FormControl(new Date(0), [Validators.required])
    });
  }

  mySubmit() : void
  {
    this.msg=`Id ${this.book.bookId} Name ${this.book.bookName} Author ${this.book.author} Literature ${this.book.literature} dor ${this.book.dor}`;
    this.bookService.addBook(this.book).subscribe((x: any)=>{console.log(x)});
  }
  toggleConfirmed()
  {
    if(this.myForm.valid)
    {
      this.isConfirmed=!this.isConfirmed;
    }
  }
  get id()
  {
    return this.myForm.get('id');
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
}
