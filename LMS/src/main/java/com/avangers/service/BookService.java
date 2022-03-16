package com.avangers.service;
import java.util.List;

import org.springframework.stereotype.Service;

import com.avangers.model.Book;


@Service
public interface BookService 
{
	public Book find(int id);
	public List<Book> findAll();
	public void save(Book book);
	public void delete(int id);
	public void update(Book book);
}
