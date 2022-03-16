package com.avangers.model;
import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Column;
import com.avangers.util.JsonDate;



@Entity
@Table(name="BOOK")
public class Book implements java.io.Serializable
{
private static final long serialVersionUID=1;

@Id
@Column(name="BOOK_ID")
@GeneratedValue(generator="BOOK_SEQ")
@SequenceGenerator(name="BOOK_SEQ",sequenceName="BOOK_SEQ", allocationSize=1)
private int bookId;

@Column(name="BOOK_NAME")
private String bookName;

@Column(name="AUTHOR")
private String author;

@Column(name="LITERATURE")
private String literature;

@Column(name="DOR")
@JsonDeserialize(using=JsonDate.class)
private Date dor;

public Book() {
super();
}
public Book(String bookName, String author, String literature, Date dor) {
super();
this.bookName = bookName;
this.author = author;
this.literature = literature;
this.dor = dor;
}
public Book(int bookId, String bookName, String author, String literature, Date dor) {
super();
this.bookId = bookId;
this.bookName = bookName;
this.author = author;
this.literature = literature;
this.dor = dor;
}
public int getBookId() {
return bookId;
}
public void setBookId(int bookId) {
this.bookId = bookId;
}
public String getBookName() {
return bookName;
}
public void setBookName(String bookName) {
this.bookName = bookName;
}
public String getAuthor() {
return author;
}
public void setAuthor(String author) {
this.author = author;
}
public String getLiterature() {
return literature;
}
public void setLiterature(String literature) {
this.literature = literature;
}
public Date getDor() {
return dor;
}
public void setDor(Date dor) {
this.dor = dor;
}
@Override
public String toString() {
return String.format("Book [bookId=%s, bookName=%s, author=%s, literature=%s, dor=%s]", bookId, bookName, author, literature, dor);
}
}