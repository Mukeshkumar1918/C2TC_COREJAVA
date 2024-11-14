//Program to define User defined exception class
package com.tns.ifet.day7.exception.checkedexception;

public class InvalidMarksException extends Exception{

	public InvalidMarksException() {
		super();
	}

	public InvalidMarksException(String message) {
		super(message);
	}

	
}