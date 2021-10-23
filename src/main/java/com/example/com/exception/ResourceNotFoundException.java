package com.example.com.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

// whenever record doesn't exist in database, the rest API throws this exception & will return a NOT_FOUND status: 
@ResponseStatus(value= HttpStatus.NOT_FOUND)
// exception needed for when rest API doesn't work:
public class ResourceNotFoundException extends RuntimeException{

	private static final long serialVersionUID = 1L;
	
    public ResourceNotFoundException(String message) {
    	super(message);
    }
}
