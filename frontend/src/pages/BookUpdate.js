import React ,{useState,useEffect,Component} from 'react';
import apiCalls from '../api/apiCalls';
import Input from '../components/Input';
import Button from '../components/ButtonWithProgress';

export const BookUpdate = (props) => {
    console.log("props.match.params.id",props.match.params.id);

    const [message,setMessage] =useState();
    const [book,setBook]=useState({});
    console.log("BOOOKONE");
    console.log(book);
   
    
    useEffect(() => {
        
        getOneBooksforId(props.match.params.id);
        console.log("BOOOKTWOO");
        console.log(book);
      }, []);

    const onChange = (event) => {
        const { name, value } = event.target;
        setBook({...book, [name]: value});
    };

    const  getOneBooksforId = async (id) => {
        apiCalls.getBooksId(id)
        .then(response => {
            setBook(response.data);
            console.log("Response")
            console.log(response.data);
        }).catch(e => { 
            console.log(e);
        });
    };
   
    
    const bookUpdate = (event) => {
        event.preventDefault();
        const {bookName ,bookWriter,bookPageCount}= book;

        const data = {
            bookName,
            bookWriter,
            bookPageCount,
        };
          
        console.log("DATAAAS")
        console.log(data);
    
        apiCalls.updateBook(book.id, book)
            .then(response => {
                console.log(response.data);
                setMessage("Book Güncelleme Başarılı");
            })
            .catch(e => {
                console.log(e);
            });
    }
    
    return (
        
        <div className="container">
            <h3>Book Update</h3>
            <hr></hr>
            <form>
                <h1 className="text-center">Book Save</h1>
                <Input name="bookName" label="Book Name"  onChange={onChange} defaultValue={book.bookName} />
                <Input name="bookWriter" label="Book Writer" onChange={onChange} defaultValue={book.bookWriter} />
                <Input name="bookPageCount" label="Book Page Count" onChange={onChange} defaultValue={book.bookPageCount}  />
                <hr></hr>
                <div className="text-center">
                 
                </div>
            </form>
            <Button 
                        onClick={bookUpdate}
                        text="Book Save"
                        type="submit"
                    />
                <hr></hr>
                {message != null ? 
                    <div class="alert alert-success" role="alert">
                    {message}
                    </div> : <div></div>
                }
            
              
        </div>
    )
}
