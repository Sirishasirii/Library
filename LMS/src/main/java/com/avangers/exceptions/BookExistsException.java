package com.avangers.exceptions;



public class BookExistsException extends RuntimeException
{
	private String message;

	public BookExistsException() {
		super();
	}

	public BookExistsException(String message) {
		super();
		this.message = message;
	}

	public String getMessage() {
		return this.message;
	}

	@Override
	public String toString() {
		return String.format("BookExistsException [message=%s]", message);
	}
}
