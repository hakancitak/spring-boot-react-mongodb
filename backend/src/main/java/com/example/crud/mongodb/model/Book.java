package com.example.crud.mongodb.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "books")

public class Book {
    @Id
    private String id;

    private String bookName;
    private String bookWriter;
    private String bookPageCount;

    public Book(String bookName,String bookWriter,String bookPageCount){
        this.bookName = bookName;
        this.bookWriter = bookWriter;
        this.bookPageCount = bookPageCount;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public String getBookWriter() {
        return bookWriter;
    }

    public void setBookWriter(String bookWriter) {
        this.bookWriter = bookWriter;
    }

    public String getBookPageCount() {
        return bookPageCount;
    }

    public void setBookPageCount(String bookPageCount) {
        this.bookPageCount = bookPageCount;
    }

    @Override
    public String toString() {
        return "Book{" +
                "id='" + id + '\'' +
                ", bookName='" + bookName + '\'' +
                ", bookWriter='" + bookWriter + '\'' +
                ", bookPageCount='" + bookPageCount + '\'' +
                '}';
    }
}
