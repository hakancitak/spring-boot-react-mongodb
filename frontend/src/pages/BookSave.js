import React, { useState } from "react";
import Input from '../components/Input';
import Button from '../components/ButtonWithProgress';
import api from '../api/apiCalls';

const BookSave = (props) => {
    const [form, setForm] = useState({
        
        bookName : null,
        bookWriter : null,
        bookPageCount : null
    });
    const onChange = (event) => {
        const { name, value } = event.target;
        setForm({...form, [name]: value});
    };
    const onClickSaveBook = (event) =>{
        event.preventDefault();
        

        const {bookName ,bookWriter,bookPageCount}= form;

        const data = {
            bookName,
            bookWriter,
            bookPageCount,
        };
        console.log("BODYY",data)
        
        api.create(data)
        .then(response => {
            setForm({
                bookName: response.data.bookName,
                bookWriter: response.data.bookWriter,
                bookPageCount: response.data.bookPageCount
            });
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    };

    /*const [errors, setErrors] = useState({});


    const pendingApiCall = useApiProgress('post', '/api/save/book');
*/

    return (
        <div className="container">
            <form>
                <h1 className="text-center">Book Save</h1>
                <Input name="bookName" label="Book Name" onChange={onChange}  />
                <Input name="bookWriter" label="Book Writer"  onChange={onChange} />
                <Input name="bookPageCount" label="Book Page Count" onChange={onChange}  />
                <hr></hr>
                <div className="text-center">
                    <Button 
                        onClick={onClickSaveBook}
                        text="Book Save"
                    />
                </div>
            </form>
           
        </div>
    )
    
}
export default BookSave;
