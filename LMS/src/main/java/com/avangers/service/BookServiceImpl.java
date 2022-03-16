package com.avangers.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.avangers.exceptions.BookNotFoundException;
import com.avangers.exceptions.BookExistsException;
import com.avangers.model.Book;
import com.avangers.repository.BookRepository;

@Service
public class BookServiceImpl implements BookService
{
	@Autowired
	private BookRepository repository;
	
	public Book find(int id)
	{
		Optional<Book> o=repository.findById(id);
		
		if(o.isPresent()) 
        {			
			return o.get();
        }
		return null;
	}
	
	public List<Book> findAll()
	{
		return repository.findAll();
	}
	
	public void save(Book book)
	{
		repository.save(book);
	}
	
	public void delete(int id)
	{
        Optional<Book> o = repository.findById(id);
        
        if(o.isPresent()) 
        {
            repository.deleteById(id);
        }
        else
        {
        	throw new BookNotFoundException("bookId: "+id);
        }

	}

	public void update(Book book)
	{
	System.out.println("In service, from browser: "+book);		
        Optional<Book> o = repository.findById(book.getBookId());
  System.out.println("In service, from db: "+o.get());      
        if(o.isPresent()) 
        {
            repository.save(book);
        }
        else
        {
        	throw new BookNotFoundException("stockId: "+book.getBookId());
        }
 	}

}
