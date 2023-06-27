import React from 'react';
import './App.css';
import {Button} from "./site/Button";

function App() {
    const Button1Foo = (subscriber:string, age:number) => {
        console.log(subscriber, age)
    }
    const Button2Foo = (subscriber:string, age:number) => {
        console.log(subscriber, age)
    }
    const Button3Foo = () => {
        console.log("Im stupid button")
    }
  return (
    <div className="App">
        <Button name={'MyYoutubeChannel - 1'} callBack={()=>Button1Foo("Im Vasya", 21)}/>
        <Button name={'MyYoutubeChannel - 2'} callBack={()=>Button2Foo("Im Ivan", 34)}/>
        <Button name={'StupidButton'} callBack={Button3Foo}/>
      {/*<Header title={"New body"}/>*/}
      {/*<Body titleBody={"New body"}/>*/}
      {/*<Footer titleFooter={"NewFooter"}/>*/}
      {/*  <NewStudents students={students}/>*/}
      {/*  <Cars cars={topCars}/>*/}
    </div>
  );
}

export default App;
