package com.springapp.crud_spring.exception;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(Long id) {
        super("Could Not found the user with id: " + id);
    }
}
