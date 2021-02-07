package com.example.crud.mongodb.repository;

import com.example.crud.mongodb.model.Book;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface BookRepository extends MongoRepository<Book,String> {
}
