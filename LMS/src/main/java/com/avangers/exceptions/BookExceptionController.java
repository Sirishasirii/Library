package com.avangers.exceptions;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;



public class BookExceptionController
{



@ControllerAdvice
public class ProductExceptionController
{
@ExceptionHandler(value=BookNotFoundException.class)
public ResponseEntity<Object> exception(BookNotFoundException e)
{
return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
}



@ExceptionHandler(value=BookExistsException.class)
public ResponseEntity<Object> exception(BookExistsException e)
{
return new ResponseEntity<>(e.getMessage(), HttpStatus.FOUND);
}
}
}
