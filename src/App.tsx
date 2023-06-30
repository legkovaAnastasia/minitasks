import React, {useState} from 'react';
import './App.css';
import Button from "./Components/Button";
import {NewCompoment} from "./NewCompoment";
import {FullInput} from "./Components/FullInput";
import Input from "./Components/Input";

function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])

    let [title, setTitle] = useState('')

    const addMessage = (title:string) => {
        let newMessage = {message: title}
        setMessage([ newMessage, ...message] )
    }

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }
    return (
    <div className="App">
        <Input title={title} setTitle={setTitle}/>
        <Button name={'+'} callback={callBackButtonHandler}/>
        {message.map((el, index) => {
            return(
                <div key={index}>{el.message}</div>
            )
        })}
    </div>
  );
}

export default App;
