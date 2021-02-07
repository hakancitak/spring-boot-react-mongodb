import React , { useState , useEffect} from 'react'
import api from '../api/apiCalls'
import ButtonWithProgress from '../components/ButtonWithProgress';
import { Link } from "react-router-dom";

export const BookList = (props) => {
    const [books, setBooks] = useState([{}]);
    useEffect(() => {
        retrieveGetBooks();
      }, []);
    
    const retrieveGetBooks = () => {
        api.getBooks()
        .then(response => {
            setBooks(response.data);
            console.log(response.data);
            console.log("BOOKS",books);
        })
        .catch(e => {
        console.log(e);
        });
    };

    const refreshList = () => {
        retrieveGetBooks();
    };

    const deleteBook = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        api.deleteBooks(event.target.value)
        .then(response => {
            refreshList();
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    };





    return (
        <div className="container">
            <h3>Book List</h3>
            <hr></hr>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Kitap Adı</th>
                    <th scope="col">Kitap Yazarı</th>
                    <th scope="col">Sayfa Sayısı</th>
                    <th scope="col">#</th>
                    <th scope="col">#</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books && books.map((books,index) =>
                            <tr>
                            <th>{index+1}</th>
                            <td>{books.bookName}</td>
                            <td>{books.bookWriter}</td>
                            <td>{books.bookPageCount}</td>
                            <td> <Link to={"/bookupdate/"+books.id}>
                                <ButtonWithProgress
                                    className="btn btn-primary"
                                    text="Edit"
                                    buttonIcon="fa fa-edit mr-2"
                                    type="button"

                                /></Link></td>
                            <td><ButtonWithProgress
                                    className="btn btn-danger"
                                    text="Sil"
                                    value={books.id}
                                    buttonIcon="fa fa-trash mr-2"
                                    onClick={deleteBook}

                                /></td>    
                            </tr>
                        )
                    }
                    
                </tbody>
            </table>


        </div>
    )
}
