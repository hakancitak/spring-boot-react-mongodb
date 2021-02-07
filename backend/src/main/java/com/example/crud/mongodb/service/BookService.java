package com.example.crud.mongodb.service;

import com.example.crud.mongodb.model.Book;
import com.example.crud.mongodb.repository.BookRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {

    BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void save(Book book) {
        bookRepository.save(book);
    }

    public List<Book> findAll() {
        return bookRepository.findAll();
    }
    public ResponseEntity<HttpStatus> deleteBook(String id) {
        try {
            bookRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public Optional<Book> getBooksForId(String id) {
        Optional<Book> bookData = bookRepository.findById(id);

        if (bookData.isPresent()) {
            return bookData;
        } else {
            return null;
        }
    }

    public ResponseEntity<Book> updateBook(String id ,Book book){
        Optional<Book> bookData = bookRepository.findById(id);

        if (bookData.isPresent()) {
            Book books = bookData.get();
            books.setBookName(book.getBookName());
            books.setBookWriter(book.getBookWriter());
            books.setBookPageCount(book.getBookPageCount());
            return new ResponseEntity<>(bookRepository.save(books), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


}
