package com.avangers.exceptions;


public class BookNotFoundException extends RuntimeException
{
	private String message;

	public BookNotFoundException() {
		super();
	}

	public BookNotFoundException(String message) {
		super();
		this.message = message;
	}

	public String getMessage() {
		return this.message;
	}

	@Override
	public String toString() {
		return String.format("BookNotFoundException [message=%s]", message);
	}
	
	


}
