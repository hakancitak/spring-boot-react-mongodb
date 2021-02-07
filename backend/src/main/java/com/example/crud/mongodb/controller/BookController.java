package com.example.crud.mongodb.controller;

import com.example.crud.mongodb.model.Book;

import com.example.crud.mongodb.service.BookService;
import com.example.crud.mongodb.shared.GenericResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin
@RequestMapping("/api")
public class BookController {


    GenericResponse genericResponse;
    @Autowired
    BookService bookService;


    @PostMapping("/book")
    public GenericResponse createBooks(@Valid @RequestBody  Book books){
            bookService.save(books);
            GenericResponse genericResponse=new GenericResponse("book created");

            return  genericResponse;
    }

    @GetMapping("/booklists")
    public List<Book> getBooks(){
        bookService.findAll();

        return  bookService.findAll();
    }

    @GetMapping("/getBook/{id}")
    public Optional<Book> getBooks(@PathVariable("id") String id){
        return bookService.getBooksForId(id);
    }

    @DeleteMapping("/booksdelete/{id}")
    public ResponseEntity<HttpStatus> deleteBook(@PathVariable("id") String id){
        return bookService.deleteBook(id);
    }

    @PutMapping("/updateBook/{id}")
    public ResponseEntity<Book> updateTutorial(@PathVariable("id") String id, @RequestBody Book book) {
        return bookService.updateBook(id,book);
    }

    /* public String createBooks(@Valid @RequestBody  Book books){
        return "BookName"+books.getBookName()+" Books Writer "+ books.getBookWriter()+ " Book Page Count"+books.getBookPageCount();

    }*/
}
