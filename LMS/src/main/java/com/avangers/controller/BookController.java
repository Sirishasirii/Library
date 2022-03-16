package com.avangers.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.avangers.model.Book;
import com.avangers.service.BookService;

@RestController
@CrossOrigin(origins="http://localhost:4200")  
  
@RequestMapping("/books")
public class BookController 
{
	@Autowired
	private BookService service;
	
	@PostMapping("/insert")
	public HttpStatus insert(@RequestBody Book book)
	{
		try
		{
			service.save(book);
			return HttpStatus.CREATED;
		}
		catch(Exception e)
		{
			return HttpStatus.FOUND;
		}
	}

	@PutMapping("/update")
	public HttpStatus update(@RequestBody Book book)
	{
System.out.println(book);		
		try
		{
			service.update(book);
			return HttpStatus.OK;
		}
		catch(Exception e)
		{
			return HttpStatus.NOT_FOUND;
		}
	}

	@GetMapping("/findAll")
	public List<Book> findAll()
	{
		return service.findAll();
	}

	@GetMapping("/find/{id}")
	public Object find(@PathVariable int id)
	{
		try
		{
			Book book=service.find(id);
			return book;
		}
		catch(Exception e)
		{
			return HttpStatus.NOT_FOUND;
		}
	}
	
	@DeleteMapping("/delete/{id}")
	public HttpStatus delete(@PathVariable int id)
	{
		try
		{
			service.delete(id);
			return HttpStatus.OK;
		}
		catch(Exception e)
		{
			return HttpStatus.NOT_FOUND;
		}
	}

}
